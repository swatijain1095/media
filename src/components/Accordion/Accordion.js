import { useState } from "react";
import "./style.scss";
import { Button } from "../Button";
import { GoTriangleDown, GoTriangleUp, GoX } from "react-icons/go";

function Accordion({ title, description, children, onExpand }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevVal) => {
      onExpand(!prevVal);
      return !prevVal;
    });
  };

  const handleDelete = () => {};

  return (
    <section className="accordion">
      <header>
        <div className="left-header">
          <Button onClick={handleDelete}>
            <GoX size={"2rem"} />
          </Button>
          <h3>{title}</h3>
        </div>
        <Button onClick={handleClick}>
          {isExpanded ? (
            <GoTriangleUp size={"2rem"} />
          ) : (
            <GoTriangleDown size={"2rem"} />
          )}
        </Button>
      </header>
      <div
        className={`accordion__content ${
          isExpanded ? "accordion__content--expanded" : ""
        }`}
      >
        {description && <p>{description}</p>}
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}

export default Accordion;
