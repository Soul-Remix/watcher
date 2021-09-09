function debounce(fn, wait) {
  let timeout;
  return (...params) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(params);
    }, wait);
  };
}

module.exports = debounce;
