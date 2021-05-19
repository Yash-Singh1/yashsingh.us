document.getElementById('show-more').onclick = () => {
  document.getElementById('show-more-container').classList.add('hidden');
  for (let child of document.querySelectorAll('#skills > :not(#show-less-container):not(#show-more-container)')) {
    child.classList.remove('hidden');
    if (child.querySelector('#progress-bar') && !child.querySelector('#progress-bar').classList.contains('done-progress')) {
      fillProgress(child.querySelector('#progress-bar'));
    }
  }
  document.getElementById('show-less-container').classList.remove('hidden');
};

document.getElementById('show-less').onclick = () => {
  document.getElementById('show-less-container').classList.add('hidden');
  let elements = [];
  let sawButton = false;
  for (let child of document.getElementById('skills').children) {
    if (child.querySelector('button')) {
      sawButton = true;
    } else if (sawButton === true) {
      elements.push(child);
    }
  }
  elements.forEach((el) => el.classList.add('hidden'));
  document.getElementById('show-more-container').classList.remove('hidden');
};
