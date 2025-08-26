document.querySelector('.search')
  ?.addEventListener('submit', e => {
    e.preventDefault(); // stop reload
    const q = document.querySelector('.search__input').value;
    console.log("User typed:", q);
  });