import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { Button } from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { usersConfigSelector, setUsersConfig } from "../../store/usersSlice";

export const Sorting = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(usersConfigSelector);

  const handleClick = (order) => {
    dispatch(setUsersConfig({ order }));
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
