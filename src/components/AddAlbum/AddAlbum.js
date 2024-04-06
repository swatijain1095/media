import { useState } from "react";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import { GoX } from "react-icons/go";
import { faker } from "@faker-js/faker";
import { Input } from "../Input";
import "./style.scss";
import { useFormFields } from "../../hooks/useFormFields";

function AddAlbum({ fetchAlbums, id }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    formFields: { title, description },
    handleFieldChange,
    checkFieldError,
    resetFields,
  } = useFormFields(["title", "description"]);

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
    await fetch(`http://localhost:3001/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: faker.string.uuid(),
        title: title.value,
        description: description.value,
        userId: id,
        images: [],
      }),
    });
    fetchAlbums();
  };

  const handleReset = () => {
    setIsExpanded(false);
    resetFields();
  };

  const AlbumHeaderComponent = (
    <>
      <Button disabled={!isExpanded} onClick={handleReset} btnType="icon">
        <GoX size={"2rem"} />
      </Button>
      <Button onClick={handleClick}>
        {isExpanded ? `Submit` : `Add Album`}
      </Button>
    </>
  );

  return (
    <div>
      <Accordion
        isExpanded={isExpanded}
        customHeaderComponent={AlbumHeaderComponent}
        className="add-album"
      >
        <Input
          id="title"
          error={
            title.isError && {
              isError: true,
              errorMsg: "Please add Title!",
            }
          }
          value={title.value}
          onChange={handleFieldChange}
          placeholder="Title"
        ></Input>
        <Input
          id="description"
          error={
            description.isError && {
              isError: true,
              errorMsg: "Please add Description!",
            }
          }
          value={description.value}
          onChange={handleFieldChange}
          placeholder="Description"
        ></Input>
      </Accordion>
    </div>
  );
}

export default AddAlbum;
