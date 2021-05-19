document.querySelectorAll('div:not(.hidden) > div > #progress-bar').forEach(fillProgress);

function fillProgress(el) {
  let progressComplete = Number(el.style.width.slice(0, -1));
  el.style.width = '0%';
  let intervalID = setInterval(() => {
    if (Number(el.style.width.slice(0, -1)) < progressComplete) {
      el.style.width = Number(el.style.width.slice(0, -1)) + 1 + '%';
    } else if (Number(el.style.width.slice(0, -1)) === progressComplete) {
      clearInterval(intervalID);
      el.classList.add('done-progress');
    }
  }, 20);
}
