(function () {
    const countdownEl = document.getElementById("midnight-countdown");
    const linkEl = document.getElementById("launch-link");

    const targetTime = getTonightMidnight();

    function updateCountdown() {
        const now = new Date();
        const diff = targetTime - now;

        if (diff <= 0) {
            countdownEl.textContent = "00:00:00";
            linkEl.classList.remove("d-none");
            clearInterval(timer);
            return;
        }

        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

        countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
})();
