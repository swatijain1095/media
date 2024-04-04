import { useState } from "react";
import { Accordion } from "../Accordion";
import { Button } from "../Button";
import { GoX } from "react-icons/go";
import { faker } from "@faker-js/faker";

function AddAlbum({ fetchAlbums, id }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descripInput, setDescripInput] = useState("");

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      handleSubmit();
      handleReset();
    }
  };

  const handleTitleChange = (event) => {
    setTitleInput(event.target.value);
  };

  const handleDescripChange = (event) => {
    setDescripInput(event.target.value);
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
        description: descripInput,
        userId: id,
      }),
    });
    fetchAlbums();
  };

  const handleReset = () => {
    setIsExpanded(false);
    setDescripInput("");
    setTitleInput("");
  };

  const AlbumHeaderComponent = (
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
        isExpanded={isExpanded}
        customHeaderComponent={AlbumHeaderComponent}
      >
        <input
          value={titleInput}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <input
          value={descripInput}
          onChange={handleDescripChange}
          placeholder="Description"
        />
      </Accordion>
    </div>
  );
}

export default AddAlbum;
