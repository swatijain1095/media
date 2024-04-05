import { useState } from "react";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import "./style.scss";
import { faker } from "@faker-js/faker";
import { GoX } from "react-icons/go";
import { Input } from "../Input";

function AddUser({ fetchUsers }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      if (inputValue === "") {
        setIsError(true);
      } else {
        handleSubmit();
        handleReset();
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    await fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: faker.string.uuid(),
        name: inputValue,
      }),
    });
    fetchUsers();
  };

  const handleReset = () => {
    setIsExpanded(false);
    setInputValue("");
    setIsError(false);
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
            isError && {
              isError: true,
              errorMsg: "Please enter User Name!",
            }
          }
          value={inputValue}
          onChange={handleInputChange}
          placeholder="User Input..."
        ></Input>
      </Accordion>
    </div>
  );
}

export default AddUser;
