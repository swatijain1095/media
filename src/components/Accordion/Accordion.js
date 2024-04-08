import { useEffect, useState } from "react";
import "./style.scss";
import { Button } from "../Button";
import { GoTriangleDown, GoTriangleUp, GoX } from "react-icons/go";
import classNames from "classnames";
import { Loading } from "../Loading";

function Accordion({
  title,
  children,
  isExpanded: isExpandedProp = false,
  onExpand,
  onDelete,
  id,
  className,
  customHeaderComponent,
  isLoading,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(isExpandedProp);
  }, [isExpandedProp]);

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
    <section className={classNames("accordion", className)} id={id}>
      <header className={classNames(isExpanded && "--expanded")}>
        {customHeaderComponent ? (
          customHeaderComponent
        ) : (
          <>
            <div className="left-header">
              <Button btnType="icon" onClick={handleDelete}>
                <GoX size={"2rem"} />
              </Button>
              <h3>{title}</h3>
            </div>
            <div className="right-header">
              <Button btnType="icon" onClick={handleClick}>
                {isExpanded ? (
                  <GoTriangleUp size={"2rem"} />
                ) : (
                  <GoTriangleDown size={"2rem"} />
                )}
              </Button>
            </div>
          </>
        )}
      </header>
      {children && (
        <div
          className={`accordion__content ${
            isExpanded ? "accordion__content--expanded" : ""
          }`}
        >
          {isLoading && <Loading />}
          <div className={`${className}__content`}>{children}</div>
        </div>
      )}
    </section>
  );
}

export default Accordion;
