document.getElementById('older-posts').onclick = () => {
  location.search = '?page=' + (parseInt(new URLSearchParams(location.search).get('page')) + 1);
};
