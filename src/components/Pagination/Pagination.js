import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { Button } from "../Button";
import "./style.scss";
import { useState } from "react";
import {
  usersConfigSelector,
  setUsersConfig,
  usersSelector,
} from "../../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredUsers } from "../../utilities/getFilteredUsers";

export const Pagination = () => {
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
  const users = useSelector(usersSelector);
  const { pageNo, order, searchTerm } = useSelector(usersConfigSelector);
  const dispatch = useDispatch();

  const handleClick = (dir) => {
    let _pageNo = pageNo;
    if (dir === "left") {
      _pageNo -= 1;
    } else {
      _pageNo += 1;
    }
    dispatch(setUsersConfig({ pageNo: _pageNo }));
    checkNextPageDisabled(_pageNo + 1);
  };

  async function checkNextPageDisabled(nextPage) {
    const nextPageUsers = getFilteredUsers({
      users,
      order,
      searchTerm,
      pageNo: nextPage,
    });
    setIsNextPageDisabled(nextPageUsers.length === 0);
  }

  return (
    <div className="pagination">
      <Button
        btnType="icon"
        disabled={pageNo === 1}
        onClick={() => handleClick("left")}
      >
        <GoTriangleLeft size={"2rem"} />
      </Button>
      <Button
        btnType="icon"
        disabled={isNextPageDisabled}
        onClick={() => handleClick("right")}
      >
        <GoTriangleRight size={"2rem"} />
      </Button>
    </div>
  );
};
