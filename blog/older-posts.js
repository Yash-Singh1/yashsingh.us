document.getElementById('older-posts').onclick = () => {
  location.search = '?page=' + (parseInt(new URLSearchParams(location.search).get('page')) + 1);
};

if (!document.getElementById('newer-posts')) {
  document.getElementById('older-posts').classList.remove('ml-5');
}
