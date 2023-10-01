/**
 * @description Debounce function - to limit the rate at which a function can fire
 * @param {Function} func
 * @param {number} timeout
 * @return {Function}
 */
export default function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(debounce, args), timeout);
  };
};
