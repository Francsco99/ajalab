(function () {
    const countdownEl = document.getElementById("midnight-countdown");
    const linkEl = document.getElementById("launch-link");

    const targetTime = new Date(Date.now() + 30 * 1000);

    function updateCountdown() {
        const now = new Date();
        const diff = targetTime - now;

        if (diff <= 0) {
            countdownEl.textContent = "00:00";
            linkEl.classList.remove("d-none");
            clearInterval(timer);
            return;
        }

        const seconds = String(Math.ceil(diff / 1000)).padStart(2, "0");
        countdownEl.textContent = `00:${seconds}`;
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
})();
