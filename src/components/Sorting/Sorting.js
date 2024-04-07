import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/usersContext";

export const Sorting = () => {
  const {
    setUserConfig,
    usersConfig: { order },
  } = useContext(UserContext);

  const handleClick = (order) => {
    setUserConfig((prevVal) => {
      return {
        ...prevVal,
        order,
      };
    });
  };

  return (
    <div className="sorting">
      <Button
        btnType="icon"
        onClick={() => handleClick(order === "desc" ? "asc" : "desc")}
      >
        {order === "desc" ? (
          <GoTriangleUp size={"2rem"} />
        ) : (
          <GoTriangleDown size={"2rem"} />
        )}
      </Button>
    </div>
  );
};
