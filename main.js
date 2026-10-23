let h1 = document.querySelector('h1');

function digitalclock() {
    let Latesttime = new Date();

    h1.innerHTML = Latesttime.toLocaleTimeString();
}

setInterval(digitalclock, 1000);