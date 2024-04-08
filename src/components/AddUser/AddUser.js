import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import "./style.scss";
import { faker } from "@faker-js/faker";
import { GoX } from "react-icons/go";
import { Input } from "../Input";
import { useFormFields } from "../../hooks/useFormFields";
import { usersConfigSelector, setUsersConfig } from "../../store/usersSlice";

function AddUser({ fetchUsers }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { formFields, handleFieldChange, checkFieldError, resetFields } =
    useFormFields(["user"]);
  const { order } = useSelector(usersConfigSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      if (!checkFieldError()) {
        handleSubmit();
        handleReset();
      }
    }
  };

  const handleSubmit = async () => {
    const id = faker.string.uuid();
    await fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name: formFields.user.value,
      }),
    });
    fetchUsersAfterAdd(id);
  };

  const fetchUsersAfterAdd = async (id) => {
    const response = await fetch(
      `http://localhost:3001/users?_sort=name&_order=${order}`
    );
    const userList = await response.json();
    const index = userList.findIndex((user) => user.id === id);
    const pageNo = Math.ceil((index + 1) / 10);
    dispatch(
      setUsersConfig({
        pageNo,
        highlightId: id,
      })
    );
  };

  const handleReset = () => {
    setIsExpanded(false);
    resetFields();
  };

  const HeaderComponent = (
    <>
      <Button disabled={!isExpanded} onClick={handleReset} btnType="icon">
        <GoX size={"2rem"} />
      </Button>
      <Button onClick={handleClick}>
        {isExpanded ? `Submit` : `Add User`}
      </Button>
    </>
  );

  return (
    <div>
      <Accordion
        className="add-user"
        isExpanded={isExpanded}
        customHeaderComponent={HeaderComponent}
      >
        <Input
          error={
            formFields.user.isError && {
              isError: true,
              errorMsg: "Please enter User Name!",
            }
          }
          id="user"
          value={formFields.user.value}
          onChange={handleFieldChange}
          placeholder="User Input..."
        ></Input>
      </Accordion>
    </div>
  );
}

export default AddUser;
