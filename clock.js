/* =========================================
   CLOCK INTRO / EFFECT SYSTEM
========================================= */

const clockLayer =
    document.getElementById("clock-layer");

const clockRomans =
    document.getElementById("clock-romans");

const clockTicks =
    document.getElementById("clock-ticks");

const clockParticles =
    document.getElementById("clock-particles");


let clockModeActive = false;
let introFinished = false;


/* =========================================
   ROMAN NUMERALS
========================================= */

const romanNumbers = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI"
];


function createRomanNumerals() {

    if (!clockRomans) return;

    const radius = 164;

    romanNumbers.forEach((roman, index) => {

        const angle =
            index * 30 - 90;

        const radians =
            angle * Math.PI / 180;

        const x =
            500 +
            Math.cos(radians) * radius;

        const y =
            500 +
            Math.sin(radians) * radius;


        const text =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text"
            );

        text.setAttribute(
            "x",
            x
        );

        text.setAttribute(
            "y",
            y
        );

        text.setAttribute(
            "class",
            "clock-roman"
        );

        text.textContent =
            roman;

        clockRomans.appendChild(
            text
        );

    });

}


/* =========================================
   CLOCK TICKS
========================================= */

function createClockTicks() {

    if (!clockTicks) return;

    for (
        let index = 0;
        index < 60;
        index++
    ) {

        const angle =
            index * 6 - 90;

        const radians =
            angle * Math.PI / 180;

        const major =
            index % 5 === 0;


        const outerRadius = 186;

        const innerRadius =
            major
                ? 174
                : 179;


        const x1 =
            500 +
            Math.cos(radians) *
            innerRadius;

        const y1 =
            500 +
            Math.sin(radians) *
            innerRadius;


        const x2 =
            500 +
            Math.cos(radians) *
            outerRadius;

        const y2 =
            500 +
            Math.sin(radians) *
            outerRadius;


        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );


        line.setAttribute(
            "x1",
            x1
        );

        line.setAttribute(
            "y1",
            y1
        );

        line.setAttribute(
            "x2",
            x2
        );

        line.setAttribute(
            "y2",
            y2
        );


        line.setAttribute(
            "class",
            major
                ? "clock-tick major"
                : "clock-tick"
        );


        clockTicks.appendChild(
            line
        );

    }

}


/* =========================================
   PARTICLES
========================================= */

function randomBetween(
    minimum,
    maximum
) {

    return (
        Math.random() *
        (maximum - minimum) +
        minimum
    );

}


function createParticles(
    amount = 32
) {

    if (!clockParticles) return;


    for (
        let index = 0;
        index < amount;
        index++
    ) {

        const particle =
            document.createElement(
                "i"
            );

        particle.className =
            "clock-orbit-particle";


        const dot =
            document.createElement(
                "span"
            );


        const start =
            randomBetween(
                0,
                360
            );

        const radius =
            randomBetween(
                160,
                430
            );

        const duration =
            randomBetween(
                12,
                38
            );

        const delay =
            randomBetween(
                -25,
                0
            );

        const size =
            randomBetween(
                1.2,
                4.4
            );

        const opacity =
            randomBetween(
                .22,
                .82
            );


        particle.style.setProperty(
            "--particle-start",
            `${start}deg`
        );

        particle.style.setProperty(
            "--particle-radius",
            `${radius}px`
        );

        particle.style.setProperty(
            "--particle-duration",
            `${duration}s`
        );

        particle.style.setProperty(
            "--particle-delay",
            `${delay}s`
        );

        particle.style.setProperty(
            "--particle-size",
            `${size}px`
        );

        particle.style.setProperty(
            "--particle-opacity",
            opacity
        );


        particle.appendChild(
            dot
        );

        clockParticles.appendChild(
            particle
        );

    }

}


/* =========================================
   INTRO
========================================= */

function finishClockIntro() {

    if (
        !clockLayer ||
        introFinished
    ) {
        return;
    }


    introFinished = true;


    clockLayer.classList.add(
        "is-leaving"
    );


    setTimeout(() => {

        clockLayer.classList.remove(
            "intro-active"
        );

        clockLayer.classList.remove(
            "is-leaving"
        );

    }, 1500);

}


/* =========================================
   CLOCK ONLY MODE
========================================= */

function setClockMode(
    enabled
) {

    clockModeActive =
        enabled;


    document.body.classList.toggle(
        "clock-mode",
        enabled
    );


    if (enabled) {

        clockLayer.classList.remove(
            "is-leaving"
        );

        clockLayer.classList.add(
            "intro-active"
        );


        Array.from(
            document.body.children
        ).forEach(element => {

            if (
                element === clockLayer ||
                element.tagName === "SCRIPT"
            ) {
                return;
            }


            element.classList.add(
                "clock-hidden-by-mode"
            );

        });


        return;

    }


    Array.from(
        document.body.children
    ).forEach(element => {

        element.classList.remove(
            "clock-hidden-by-mode"
        );

    });


    clockLayer.classList.add(
        "is-leaving"
    );


    setTimeout(() => {

        clockLayer.classList.remove(
            "intro-active"
        );

        clockLayer.classList.remove(
            "is-leaving"
        );

    }, 1450);

}


function toggleClockMode() {

    setClockMode(
        !clockModeActive
    );

}


/* =========================================
   SECRET INPUT
========================================= */

const clockArrowCode = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
];

/* =========================================
   MOBILE CLOCK SECRET
   ← → ← →
========================================= */

const mobileClockCode = [
    "left",
    "right",
    "left",
    "right"
]

let mobileClockHistory = []

let secretTouchStartX = 0
let secretTouchStartY = 0

let secretSequenceTimer = null


function resetMobileClockCode() {

    mobileClockHistory = []

    clearTimeout(
        secretSequenceTimer
    )

}


document.addEventListener(
    "touchstart",
    event => {

        /*
        Não conta gestos usados
        em elementos interativos.
        */

        if (
            event.target.closest(
                ".carousel, .overlay, a, button, input, textarea, select"
            )
        ) {
            return
        }


        const touch =
            event.touches[0]


        secretTouchStartX =
            touch.clientX

        secretTouchStartY =
            touch.clientY

    },
    {
        passive: true
    }
)


document.addEventListener(
    "touchend",
    event => {

        if (
            event.target.closest(
                ".carousel, .overlay, a, button, input, textarea, select"
            )
        ) {
            return
        }


        const touch =
            event.changedTouches[0]


        const differenceX =
            touch.clientX -
            secretTouchStartX


        const differenceY =
            touch.clientY -
            secretTouchStartY


        /*
        Só consideramos swipe horizontal.
        */

        if (
            Math.abs(differenceX) < 70 ||
            Math.abs(differenceY) >
            Math.abs(differenceX)
        ) {
            return
        }


        const direction =
            differenceX < 0
                ? "left"
                : "right"


        mobileClockHistory.push(
            direction
        )


        if (
            mobileClockHistory.length >
            mobileClockCode.length
        ) {

            mobileClockHistory.shift()

        }


        const matched =
            mobileClockCode.every(
                (direction, index) =>
                    mobileClockHistory[index]
                    === direction
            )


        if (matched) {

            resetMobileClockCode()

            toggleClockMode()

            return

        }


        /*
        Precisa completar o código
        em no máximo 3 segundos.
        */

        clearTimeout(
            secretSequenceTimer
        )


        secretSequenceTimer =
            setTimeout(
                resetMobileClockCode,
                3000
            )

    },
    {
        passive: true
    }
)


const clockWord =
    "clock";


let arrowHistory = [];
let wordHistory = "";


document.addEventListener(
    "keydown",
    event => {

        const target =
            event.target;


        const editable =
            target instanceof
                HTMLInputElement ||
            target instanceof
                HTMLTextAreaElement ||
            target instanceof
                HTMLSelectElement ||
            target?.isContentEditable;


        if (editable) return;


        /* ===============================
           ARROWS
        =============================== */

        if (
            event.key.startsWith(
                "Arrow"
            )
        ) {

            arrowHistory.push(
                event.key
            );


            if (
                arrowHistory.length >
                clockArrowCode.length
            ) {

                arrowHistory.shift();

            }


            const matched =
                clockArrowCode.every(
                    (key, index) =>
                        arrowHistory[index]
                        === key
                );


            if (matched) {

                event.preventDefault();

                arrowHistory = [];
                wordHistory = "";

                toggleClockMode();

                return;

            }

        }


        /* ===============================
           CLOCK
        =============================== */

        if (
            event.key.length === 1 &&
            /[a-z]/i.test(
                event.key
            )
        ) {

            wordHistory +=
                event.key.toLowerCase();


            if (
                wordHistory.length >
                clockWord.length
            ) {

                wordHistory =
                    wordHistory.slice(
                        -clockWord.length
                    );

            }


            if (
                wordHistory ===
                clockWord
            ) {

                wordHistory = "";
                arrowHistory = [];

                toggleClockMode();

            }

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

createRomanNumerals();

createClockTicks();

createParticles(36);


/*
A página já existe por baixo.

O relógio permanece forte por
um momento e começa o fade.
*/

requestAnimationFrame(() => {

    requestAnimationFrame(() => {

        setTimeout(
            finishClockIntro,
            650
        );

    });

});