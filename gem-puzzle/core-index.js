document.body.innerHTML = '\n <audio id="sound" src="./assets/click.mp3"></audio> <gem-puzzle class="main-container">\n <div class="game-mode" id="game-mode">\n <div class="game-mode__info-mode">\n <span>Выберите размер игрового поля:</span>\n </div>\n <div class="game-mode__change-mode">\n <input type="button" value="3 x 3">\n <input type="button" value="4 x 4">\n <input type="button" value="5 x 5">\n <input type="button" value="6 x 6">\n <input type="button" value="7 x 7">\n <input type="button" value="8 x 8">\n </div>\n </div>\n <div class="info-block">\n  <p class="info-block__steps-wrapper">\n <span class="info-block__title-steps">Количество ходов:</span>\n <span class="info-block__show-steps" id="steps">0</span>\n </p>\n <p class="info-block__timer-wrapper">\n <span class="info-block__title-timer">Прошло времени:</span>\n <span class="info-block__show-timer" id="show-timer">00:00</span>\n </p>\n </div>\n <div class="control" id="control">\n <input type="button" name="start" value="Новая игра">\n <input type="button" name="pause" value="Пауза">\n <input type="button" name="save" value="Сохранить">\n <input type="button" name="score" value="Таблица рекордов">\n </div>\n <div class="saved" id="saved">\n <span class="saved__info">Сохранено.</span>\n </div>\n<div class="hover-wrap">\n <div class="hover-start" id="hover-start">\n <p class="hover-start__wrap">\n  <button class="hover-start__repair" id="repair">Воостановите сохранённую игру</button><br>\n <span>или</span><br>\n <span class="hover-start__text">выберите размер игрового поля и нажмите "Новая игра"</span>\n </p>\n </div>\n <div class="hover-pause" id="hover-pause">\n <p class="hover-pause__wrap">\n <span class="hover-pause__text">П А У З А ...</span>\n </p>\n </div>\n <div class="hover-result" id="hover-result">\n <div class="block-hover" id="block-hover"></div>\n <p class="hover-result__wrap">\n <span class="hover-result__text">1.</span>\n <span class="hover-result__text">2.</span>\n <span class="hover-result__text">3.</span>\n <span class="hover-result__text">4.</span>\n <span class="hover-result__text">5.</span>\n <span class="hover-result__text">6.</span>\n <span class="hover-result__text">7.</span>\n <span class="hover-result__text">8.</span>\n <span class="hover-result__text">9.</span>\n <span class="hover-result__text">10.</span>\n </p>\n </div>\n <div class="hover-win" id="hover-win">\n <p class="hover-win__wrap">\n <span class="hover-win__text">\n Ура! Вы решили головоломку\n <span id="mode">"3 x 3"</span>\n за <span id="min">00:22</span> и <span id="steps">10</span> ходов</span>\n </p>\n <button class="close-win" id="close-win">Закрыть</button>\n </div>\n <div class="main-game start" id="main-game">\n <input type="button" id="draggable" class="draggable" value="1" style="background-image: url(./assets/img/img15/1.png);">\n <input type="button" class="draggable" value="2" style="background-image: url(./assets/img/img15/2.png);">\n <input type="button" class="draggable" value="3" style="background-image: url(./assets/img/img15/3.png);">\n <input type="button" class="draggable" value="4" style="background-image: url(./assets/img/img15/4.png);">\n <input type="button" class="draggable" value="5" style="background-image: url(./assets/img/img15/5.png);">\n <input type="button" class="draggable" value="6" style="background-image: url(./assets/img/img15/6.png);">\n <input type="button" class="draggable" value="7" style="background-image: url(./assets/img/img15/7.png);">\n <input type="button" class="draggable" value="8" style="background-image: url(./assets/img/img15/8.png);">\n <input type="button" class="draggable" value="9" style="background-image: url(./assets/img/img15/9.png);">\n <input type="button" class="draggable" value="10" style="background-image: url(./assets/img/img15/10.png);">\n <input type="button" class="draggable" value="11" style="background-image: url(./assets/img/img15/11.png);">\n <input type="button" class="draggable" value="12" style="background-image: url(./assets/img/img15/12.png);">\n <input type="button" class="draggable" value="13" style="background-image: url(./assets/img/img15/13.png);">\n <input type="button" class="draggable" value="14" style="background-image: url(./assets/img/img15/14.png);">\n <input type="button" class="draggable" value="15" style="background-image: url(./assets/img/img15/15.png);">\n <input type="button" class="empty" value="">\n </div>\n </div>\n </gem-puzzle>\n'
const inputsArea = document.getElementById("main-game"),
    gameMode = document.getElementById("game-mode"),
    control = document.getElementById("control"),
    pause = document.getElementById("hover-pause"),
    timer = document.getElementById("show-timer"),
    steps = document.getElementById("steps"),
    win = document.getElementById("hover-win"),
    repair = document.getElementById("repair"),
    result = document.getElementById("hover-result"),
    line = result.querySelectorAll("span"),
    start = document.getElementById("hover-start"),
    mobile = /iPad|iPhone|mobile|android|webos|ios|iPod/i.test(navigator.userAgent);

const DELAY_CLICK = 150;
const TIMEOUT = 100;
let isMoved = false;
let isPause = true;
let time = null;
let fill = [15, ""];
let isScore = false;
let minute = 0;
let count, seconds = 1;

const randomField = e => "" === e.value ? 1 : Math.random() - .5,
    input = [...inputsArea.getElementsByTagName("input")].sort(randomField)
timer.innerHTML = "00:00"
inputsArea.append(...input)

const Minutes = (e, t) => (
    minute = t || minute, count = e || count,
    setInterval(() => {
        60 === count && (count = 0, minute++),
            seconds = count++,
            timer.innerHTML = `${minute<10?"0":""}${minute}:${seconds<10?"0":""}${seconds} `
    }, 1e3));

const timerStep = () => {
    time && (clearInterval(time), time = null);
    timer.innerHTML = "00:00";
    steps.innerHTML = "0";
    time = Minutes("1", "0");
}

const setAreaSize = (size, className) => {
    const inputs = [];
    fill = [size, className];
    for (let i = size; i--;) {
        inputs.push(`<input type="button" id="draggable" class="draggable" value="${i+1}" style="background-image: url('./assets/img/${"img"+size}/${i+1}.png');" onclick="new Audio('./assets/click.mp3').play()">`);
    }
    const inputsFill = inputs.sort(randomField)
    inputsFill.push('<input type="button" class="empty" value="">');
    inputsArea.innerHTML = inputsFill.join('');
    inputsArea.className = `main-game ${className}`;
    start.style.display && timerStep()
};

const moveInputs = (e) => {
    setTimeout(() => {
        isMoved = false;
    }, 150);
    if (isMoved) return;
    const draggable = e.target;
    if (!draggable.classList.contains('draggable')) return;
    draggable.ondragstart = () => false;
    if (mobile) document.body.style.overflow = 'hidden';
    e.preventDefault();

    const inputs = [...inputsArea.getElementsByTagName('input')];
    const allIdx = inputs.map((el) => el.value);
    const idx = allIdx.findIndex((el) => draggable.value === el);
    const len = allIdx.length;
    const rowLen = Math.sqrt(len);
    const draggWidth = draggable.offsetWidth;
    const draggHeight = draggable.offsetHeight;

    const handlerClick = (moveX, moveY, shiftA, shiftB, cb) => {
        const timer = performance.now();
        const resetStyles = () => {
            draggable.style.transition = 'all 0s';
            draggable.style.top = '0';
            draggable.style.left = '0';
        };
        resetStyles();
        const draggLeft = draggable.getBoundingClientRect().left;
        const draggTop = draggable.getBoundingClientRect().top;
        const shiftX = (e.clientX || e.touches[0].clientX) - draggLeft;
        const shiftY = (e.clientY || e.touches[0].clientY) - draggTop;

        const changePosition = (top, left) => {
            draggable.style.transition = '';
            draggable.style.top = `${top}px`;
            draggable.style.left = `${left}px`;
            setTimeout(resetStyles, TIMEOUT);
        };

        draggable.style.position = 'relative';
        draggable.style.zIndex = '0';

        const moveTo = (x, y) => {
            let posX = moveX ? x - draggLeft - shiftX : 0;
            let posY = moveY ? y - draggTop - shiftY : 0; // + top;

            if (moveX) {
                posX = posX <= shiftA ? shiftA : posX;
                posX = posX >= shiftB ? shiftB : posX;
            }

            if (moveY) {
                posY = posY <= shiftA ? shiftA : posY;
                posY = posY >= shiftB ? shiftB : posY;
            }

            draggable.style.left = `${posX}px`;
            draggable.style.top = `${posY}px`;
        };

        let x = mobile ? e.touches[0].clientX : e.clientX;
        let y = mobile ? e.touches[0].clientY : e.clientY;
        moveTo(x, y);

        const moveAt = (event) => {
            x = mobile ? event.touches[0].clientX : event.clientX;
            y = mobile ? event.touches[0].clientY : event.clientY;
            moveTo(x, y);
        };
        const drop = () => {
            cb(performance.now() - timer, changePosition);
            if (mobile) {
                document.removeEventListener('touchmove', moveAt);
                document.removeEventListener('touchend', drop);
                document.body.style.overflow = '';
            } else {
                document.removeEventListener('mousemove', moveAt);
                document.removeEventListener('mouseup', drop);
            }
        };

        if (mobile) {
            document.addEventListener('touchmove', moveAt);
            document.addEventListener('touchend', drop);
        } else {
            document.addEventListener('mousemove', moveAt);
            document.addEventListener('mouseup', drop);
        }
    };

    const swap = (shift) => {
        setTimeout(() => {
            [inputs[idx], inputs[idx - shift]] = [inputs[idx - shift], inputs[idx]];
            inputsArea.append(...inputs);
            isMoved = false;
            draggable.style.removeProperty("top");
            draggable.style.removeProperty("left");
            draggable.style.removeProperty("position");
            draggable.style.removeProperty("z-index");
            draggable.style.removeProperty("transition");
            const inputA = [...inputsArea.getElementsByTagName("input")],
                sortInput = inputA.map(shift => shift.value).sort((e, t) => e - t).join().slice(1),
                InputsA = inputA.map(shift => shift.value).join().slice(0, -1);
            let step = +steps.innerHTML;
            if (steps.innerHTML = `${++step}`, InputsA === sortInput) {
                isPause = true, win.style.display = "flex";
                const close_win = win.querySelector("#close-win"),
                    mode = win.querySelector("#mode"),
                    min = win.querySelector("#min"),
                    stp = win.querySelector("#steps"),
                    l = Math.sqrt(inputA.length);
                mode.innerHTML = `"${l} x ${l}"`, min.innerHTML = timer.innerHTML, stp.innerHTML = steps.innerHTML;
                const reply = `Поле ${mode.innerHTML} - за ${min.innerHTML.trim()} и ${stp.innerHTML} шагов`;
                let listResults = localStorage.getItem("listResults");
                listResults ? (listResults = JSON.parse(listResults), listResults.push(reply)) : (listResults = [], listResults.push(reply)), localStorage.setItem("listResults", JSON.stringify(listResults)), clearInterval(time), time = null, close_win.onclick = () => {
                    win.style.display = "none", start.style.display = "flex"
                }
            }
        }, TIMEOUT);
    };

    const swapLeft = () => {
        isMoved = true;
        const cb = (delay, changePosition) => {
            if (delay < DELAY_CLICK) {
                changePosition(0, -draggWidth);
                swap(1);
            } else {
                const left = Math.abs(parseInt(draggable.style.left, 10));
                if (left < draggWidth / 2) {
                    changePosition(0, 0);
                } else {
                    changePosition(0, -draggWidth);
                    swap(1);
                }
            }
        };
        handlerClick(true, false, -draggWidth, 0, cb);
    };

    const swapRight = () => {
        isMoved = true;
        const cb = (delay, changePosition) => {
            if (delay < DELAY_CLICK) {
                changePosition(0, draggWidth);
                swap(-1);
            } else {
                const left = Math.abs(parseInt(draggable.style.left, 10));
                if (left < draggWidth / 2) {
                    changePosition(0, 0);
                } else {
                    changePosition(0, draggWidth);
                    swap(-1);
                }
            }
        };
        handlerClick(true, false, 0, draggWidth, cb);
    };

    const swapDown = () => {
        isMoved = true;
        const cb = (delay, changePosition) => {
            if (delay < DELAY_CLICK) {
                changePosition(draggHeight, 0);
                swap(-rowLen);
            } else {
                const top = Math.abs(parseInt(draggable.style.top, 10));
                if (top < draggHeight / 2) {
                    changePosition(0, 0);
                } else {
                    changePosition(draggHeight, 0);
                    swap(-rowLen);
                }
            }
        };
        handlerClick(false, true, 0, draggHeight, cb);
    };

    const swapUp = () => {
        isMoved = true;
        const cb = (delay, changePosition) => {
            if (delay < DELAY_CLICK) {
                changePosition(-draggHeight, 0);
                swap(rowLen);
            } else {
                const top = Math.abs(parseInt(draggable.style.top, 10));
                if (top < draggHeight / 2) {
                    changePosition(0, 0);
                } else {
                    changePosition(-draggHeight, 0);
                    swap(rowLen);
                }
            }
        };
        handlerClick(false, true, -draggHeight, 0, cb);
    };


    if (inputs[idx - 1] && !inputs[idx - 1].value) {
        swapLeft();
        return;
    }

    if (inputs[idx - rowLen] && !inputs[idx - rowLen].value) {
        swapUp();
        return;
    }

    if (inputs[idx + rowLen] && !inputs[idx + rowLen].value) {
        swapDown();
        return;
    }

    if (inputs[idx + 1] && !inputs[idx + 1].value) {
        swapRight();
    }
};

gameMode.addEventListener("click", (e) => {
    if (pause.style.display) return;
    const mode = e.target;
    if ("INPUT" !== mode.tagName) return;
    switch (mode.value) {
        case '3x3':
            setAreaSize(8, 'three');
            break;
        case '4x4':
            setAreaSize(15, '');
            break;
        case '5x5':
            setAreaSize(24, 'five');
            break;
        case '6x6':
            setAreaSize(35, 'six');
            break;
        case '7x7':
            setAreaSize(48, 'seven');
            break;
        case '8x8':
            setAreaSize(63, 'eight');
    }
});

control.addEventListener("click", (e) => {
    const mode = e.target;
    if ("INPUT" !== mode.tagName) return;
    switch (mode.name) {
        case "start":
            pause.style.display || (start.style.display = "none", setAreaSize(...fill), timerStep(), isPause = false);
            break;
        case "pause":
            (() => {
                const timeP = timer.innerHTML;
                if (start.style.display && !pause.style.display) {
                    if (isPause) return;
                    const [min, sec] = timeP.split(":");
                    localStorage.setItem("minutes", parseInt(min, 10)), localStorage.setItem("seconds", parseInt(sec, 10)), clearInterval(time), time = null, pause.style.display = "flex"
                } else {
                    if (isPause) return;
                    pause.style.display = "";
                    const sec = +localStorage.getItem("seconds") + 1,
                        min = localStorage.getItem("minutes");
                    time = Minutes(sec, min)
                }
            })();
            break;
        case "save":
            (() => {
                if (!time) return;
                const saved = document.getElementById("saved");
                saved.style.display = "flex", setTimeout(() => { saved.style.display = "" }, 1500);
                const timeS = timer.innerHTML,
                    [min, sec] = timeS.split(":");
                localStorage.setItem("savedMin", parseInt(min, 10)), localStorage.setItem("savedSec", parseInt(sec, 10)), localStorage.setItem("savedSteps", steps.innerHTML), localStorage.setItem("save", inputsArea.innerHTML), localStorage.setItem("time", timeS), localStorage.setItem("class", inputsArea.className)
            })();
            break;
        case "score":
            (() => {
                if (isScore) return isScore = false, mode.style.zIndex = "", void(result.style.display = "");
                let listResults = localStorage.getItem("listResults");
                listResults && (listResults = JSON.parse(listResults), listResults = listResults.slice(-10), listResults.forEach((e, t) => { line[t].innerHTML = `${t+1}. ${e}` })), mode.style.zIndex = "110", result.style.display = "flex", isScore = true
            })()
    }
});

repair.addEventListener('click', () => {
    const save = localStorage.getItem("save"),
        clas = localStorage.getItem("class");
    if (save) {
        isPause = false, start.style.display = "none", inputsArea.className = clas, inputsArea.innerHTML = save.trim();
        const savedSec = +localStorage.getItem("savedSec") + 1,
            savedMin = localStorage.getItem("savedMin");
        timer.innerHTML = localStorage.getItem("time"), steps.innerHTML = localStorage.getItem("savedSteps"), time = Minutes(savedSec, savedMin)
    } else repair.innerHTML = "Нет сохранённой игры", repair.disabled = true
})

if (mobile) {
    inputsArea.addEventListener('touchstart', moveInputs);
} else {
    inputsArea.addEventListener('mousedown', moveInputs);
}