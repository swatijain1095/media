import { useState } from "react";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import "./style.scss";
import { faker } from "@faker-js/faker";
import { GoX } from "react-icons/go";
import { Input } from "../Input";
import { useFormField } from "../../hooks/useFormField";

function AddUser({ fetchUsers }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { value, isError, handleChange, reset, checkError } = useFormField();

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      if (!checkError()) {
        handleSubmit();
        handleReset();
      }
    }
  };

  const handleSubmit = async () => {
    await fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: faker.string.uuid(),
        name: value,
      }),
    });
    fetchUsers();
  };

  const handleReset = () => {
    setIsExpanded(false);
    reset();
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
          value={value}
          onChange={handleChange}
          placeholder="User Input..."
        ></Input>
      </Accordion>
    </div>
  );
}

export default AddUser;
