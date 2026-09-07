const PERFORMANCE_FPS_LIMIT = 24;
const PERFORMANCE_BAD_TIME = 10000;
const PERFORMANCE_WARMUP = 3000;

let performanceFrames = 0;
let performanceLastSample = performance.now();
let performanceBadSince = null;
let performanceStartedAt = performance.now();
let performanceModeEnabled = false;

function enablePerformanceMode() {
    if (performanceModeEnabled) return;

    performanceModeEnabled = true;

    document.body.classList.add("performance-mode");

    sessionStorage.setItem("performanceMode", "true");

    document.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    console.warn("Performance Mode enabled");
}

function disablePerformanceMode() {
    performanceModeEnabled = false;

    document.body.classList.remove("performance-mode");

    sessionStorage.removeItem("performanceMode");

    console.log("Performance Mode disabled");
}

function performanceMonitor(now) {
    performanceFrames++;

    const elapsed = now - performanceLastSample;

    if (elapsed >= 1000) {
        const fps = performanceFrames * 1000 / elapsed;

        performanceFrames = 0;
        performanceLastSample = now;

        if (
            document.visibilityState === "visible" &&
            now - performanceStartedAt > PERFORMANCE_WARMUP
        ) {
            if (fps < PERFORMANCE_FPS_LIMIT) {

                if (performanceBadSince === null) {
                    performanceBadSince = now;
                }

                if (
                    now - performanceBadSince >=
                    PERFORMANCE_BAD_TIME
                ) {
                    enablePerformanceMode();
                    return;
                }

            } else {
                performanceBadSince = null;
            }
        } else {
            performanceBadSince = null;
        }
    }

    requestAnimationFrame(performanceMonitor);
}

if (sessionStorage.getItem("performanceMode") === "true") {
    enablePerformanceMode();
} else {
    requestAnimationFrame(performanceMonitor);
}

window.enablePerformanceMode = enablePerformanceMode;
window.disablePerformanceMode = disablePerformanceMode;