import classNames from "classnames";

const VARIANTS = {
  rounded: classNames(
    "hover:bg-icons-color",
    "border",
    "text-secondary-color",
    "bg-hover-color",
    "hover:bg-secondary-color",
    "hover:text-black",
    "text-sm",
    "rounded-full",
    "py-1",
    "px-2"
  ),
  square: classNames(
    "text-black",
    "bg-secondary-color",
    "border",
    "hover:bg-transparent",
    "hover:text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "text-black",
    "bg-secondary-color",
    "border",
    "hover:bg-transparent",
    "hover:text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded"
  ),
};

const Button = ({ children, variant, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(VARIANTS[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
