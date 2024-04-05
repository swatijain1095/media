import classNames from "classnames";
import "./style.scss";

function Input({ error = {}, ...rest }) {
  const { isError, errorMsg } = error;
  return (
    <div>
      <input
        className={classNames(
          "input",
          rest.type === "file" && "input--file",
          isError && "input--error"
        )}
        {...rest}
      />

      {errorMsg && <label>{errorMsg}</label>}
    </div>
  );
}

export default Input;
