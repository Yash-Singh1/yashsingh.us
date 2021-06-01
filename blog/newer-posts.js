if (document.getElementById('newer-posts')) {
  document.getElementById('newer-posts').onclick = () => {
    location.search = '?page=' + (parseInt(new URLSearchParams(location.search).get('page')) - 1);
  };
}
