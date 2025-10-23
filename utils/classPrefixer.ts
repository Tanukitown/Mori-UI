import classNames from "classnames";

const clpx = (...args: classNames.ArgumentArray): string => {
  const classes = classNames(args);
  return classes
    .split(" ")
    .map((className) => `tui:${className}`)
    .join(" ");
};

export default clpx;
