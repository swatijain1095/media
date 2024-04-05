import classNames from "classnames";
import "./style.scss";

function Input(props) {
  return (
    <input
      className={classNames("input", props.type === "file" && "input--file")}
      {...props}
    />
  );
}

export default Input;
