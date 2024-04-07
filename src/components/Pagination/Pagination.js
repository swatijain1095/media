import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { Button } from "../Button";
import "./style.scss";
import { useState } from "react";

export const Pagination = ({ fetchUsers }) => {
  const [pageNo, setPageNo] = useState(1);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);

  const handleClick = (dir) => {
    let _pageNo = pageNo;
    if (dir === "left") {
      _pageNo -= 1;
    } else {
      _pageNo += 1;
    }
    fetchUsers(_pageNo);
    setPageNo(_pageNo);
    checkNextPageDisabled(_pageNo + 1);
  };

  async function checkNextPageDisabled(nextPage) {
    const response = await fetch(
      `http://localhost:3001/users?_page=${nextPage}`
    );
    const users = await response.json();
    setIsNextPageDisabled(users.length === 0);
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
