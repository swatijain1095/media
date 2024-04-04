import "./style.scss";
import classNames from "classnames";

function Button({ children, btnType = "primary", ...rest }) {
  const btnClass = classNames("button", `button--${btnType}`);
  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
