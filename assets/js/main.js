function timer() {
  function createHourSec(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }
  const relogio = document.querySelector(".relogio");
  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      startTimer();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      seconds = 0;
      relogio.classList.remove("pausado");
    }
  });
  let seconds = 0;
  let timer;

  function startTimer() {
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = createHourSec(seconds);
    }, 1000);
  }
}

timer();
