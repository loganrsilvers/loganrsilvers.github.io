    const gameArea = document.getElementById("gameArea");
    const livesEl = document.getElementById("lives");
    const targetsEl = document.getElementById("targets");
    const scoreEl = document.getElementById("score");
    const timeEl = document.getElementById("time");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const nextBtn = document.getElementById("nextBtn");

    let score = 0;
    let lives = 3;
    let found = 0;
    let totalTargets = 0;
    let time = 0;
    let timer = null;
    let gameOver = false;

    const items = [
      { name: "spinach", img: "img/spinach.png", target: true, x: 120, y: 140 },
      { name: "ziploc", img: "img/ziploc.png", target: true, x: 320, y: 220 },
      { name: "juice", img: "img/juice.png", target: true, x: 520, y: 160 },
      { name: "lacroix", img: "img/lacroix.png", target: false, x: 690, y: 320 },
      { name: "melon", img: "img/melon.png", target: true, x: 240, y: 380 },
      { name: "chips", img: "img/chips.png", target: true, x: 610, y: 430 }
    ];

    function renderLives() {
      livesEl.innerHTML = "";
      for (let i = 0; i < lives; i++) {
        const img = document.createElement("img");
        img.src = "img/heart.png";
        img.alt = "life";
        img.className = "icon";
        livesEl.appendChild(img);
      }
    }

    function renderTargets() {
      targetsEl.innerHTML = "";
      items.forEach((item, index) => {
        if (item.target) {
          const img = document.createElement("img");
          img.src = "img/question-mark.png";
          img.alt = "hidden target";
          img.className = "icon";
          img.id = `targetIcon-${index}`;
          targetsEl.appendChild(img);
        }
      });
    }

    function startTimer() {
      timer = setInterval(() => {
        if (gameOver) return;
        time++;
        timeEl.textContent = time;
      }, 1000);
    }

    function endGame(win) {
      gameOver = true;
      clearInterval(timer);
      popup.classList.add("show");
      popupText.textContent = win
        ? `You found all the plastic items! Score: ${score}. Time: ${time}s.`
        : `Game over! Score: ${score}. Time: ${time}s.`;
      nextBtn.textContent = win ? "Go to Next Page" : "Try Again";
    }

    function checkWin() {
      if (found === totalTargets) {
        endGame(true);
      }
    }

    function createItem(item, index) {
      const btn = document.createElement("button");
      btn.className = "item";
      btn.style.left = item.x + "px";
      btn.style.top = item.y + "px";
      btn.dataset.target = item.target ? "true" : "false";
      btn.dataset.index = index;

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      btn.appendChild(img);

      btn.addEventListener("click", () => {
        if (gameOver || btn.classList.contains("found")) return;

        if (item.target) {
          score++;
          found++;
          scoreEl.textContent = score;
          btn.classList.add("found");
          document.getElementById(`targetIcon-${index}`).src = item.img;
          checkWin();
        } else {
          lives--;
          renderLives();
          btn.classList.add("found");
          if (lives <= 0) {
            endGame(false);
          }
        }
      });

      gameArea.appendChild(btn);
    }

    function initGame() {
      gameArea.innerHTML = "";
      score = 0;
      lives = 3;
      found = 0;
      totalTargets = items.filter(i => i.target).length;
      time = 0;
      gameOver = false;
      scoreEl.textContent = score;
      timeEl.textContent = time;
      popup.classList.remove("show");

      renderLives();
      renderTargets();

      items.forEach((item, index) => createItem(item, index));
      startTimer();
    }

    nextBtn.addEventListener("click", () => {
      if (gameOver && found === totalTargets) {
        window.location.href = "next/index.html";
      } else {
        initGame();
      }
    });

    initGame();