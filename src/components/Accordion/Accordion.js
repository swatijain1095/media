import { useState } from "react";
import "./style.scss";
import { Button } from "../Button";
import { GoTriangleDown, GoTriangleUp, GoX } from "react-icons/go";
import classNames from "classnames";

function Accordion({ title, children, onExpand, onDelete, id, className }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevVal) => {
      onExpand(!prevVal);
      return !prevVal;
    });
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <section className={classNames("accordion", className)}>
      <header className={classNames(isExpanded && "--expanded")}>
        <div className="left-header">
          <Button btnType="icon" onClick={handleDelete}>
            <GoX size={"2rem"} />
          </Button>
          <h3>{title}</h3>
        </div>
        <Button btnType="icon" onClick={handleClick}>
          {isExpanded ? (
            <GoTriangleUp size={"2rem"} />
          ) : (
            <GoTriangleDown size={"2rem"} />
          )}
        </Button>
      </header>
      {children && (
        <div
          className={`accordion__content ${
            isExpanded ? "accordion__content--expanded" : ""
          }`}
        >
          <div className={`${className}__content`}>{children}</div>
        </div>
      )}
    </section>
  );
}

export default Accordion;
