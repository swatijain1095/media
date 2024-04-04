import { useState } from "react";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import "./style.scss";
import { faker } from "@faker-js/faker";
import { GoX } from "react-icons/go";

function AddUser() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      handleSubmit();
      setIsExpanded(false);
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
  };

  const handleReset = () => {
    setIsExpanded(false);
    setInputValue("");
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
        <input value={inputValue} onChange={handleInputChange} />
      </Accordion>
    </div>
  );
}

export default AddUser;
