document.querySelectorAll(".branding-line").forEach(line => {
    const original = line.querySelector("span");

    if (!original) return;

    const clone = original.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");

    line.appendChild(clone);
});