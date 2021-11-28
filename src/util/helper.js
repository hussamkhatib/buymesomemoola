export const capitizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export const isArrayEmpty = (arr) => Array.isArray(arr) && !arr.length;

export const add3Dots = (text, limit) =>
  text.length > limit ? `${text.substring(0, limit)}...` : text;
