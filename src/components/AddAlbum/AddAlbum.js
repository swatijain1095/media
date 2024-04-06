import { useState } from "react";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import { GoX } from "react-icons/go";
import { faker } from "@faker-js/faker";
import { Input } from "../Input";
import "./style.scss";
import { useFormField } from "../../hooks/useFormField";

function AddAlbum({ fetchAlbums, id }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    value: titleInput,
    isError: isTitleError,
    handleChange: handleTitleChange,
    reset: resetTitle,
    checkError: checkTitleError,
  } = useFormField();
  const {
    value: descriptionInput,
    isError: isDescriptionError,
    handleChange: handleDescriptionChange,
    reset: resetDescription,
    checkError: checkDescriptionError,
  } = useFormField();

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      if (!checkTitleError() || !checkDescriptionError()) {
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
        title: titleInput,
        description: descriptionInput,
        userId: id,
        images: [],
      }),
    });
    fetchAlbums();
  };

  const handleReset = () => {
    setIsExpanded(false);
    resetTitle();
    resetDescription();
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
          error={
            isTitleError && {
              isError: true,
              errorMsg: "Please add Title!",
            }
          }
          value={titleInput}
          onChange={handleTitleChange}
          placeholder="Title"
        ></Input>
        <Input
          error={
            isDescriptionError && {
              isError: true,
              errorMsg: "Please add Description!",
            }
          }
          value={descriptionInput}
          onChange={handleDescriptionChange}
          placeholder="Description"
        ></Input>
      </Accordion>
    </div>
  );
}

export default AddAlbum;
