export const debounce = (
  func: (...args: any[]) => void,
  timeout = 500
): (() => void) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
