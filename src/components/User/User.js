import { useState } from "react";
import { Accordion } from "../Accordion";
import { AlbumList } from "../AlbumList";
import { Button } from "../Button";
import "./style.scss";

function User({ user, onDelete }) {
  const { name, id } = user;

  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  async function fetchAlbums() {
    setIsLoading(true);
    const response = await fetch(`http://localhost:3001/users/${id}/albums`);
    const albums = await response.json();
    setAlbums(albums);
    setIsLoading(false);
  }

  const updateAlbum = (albums) => {
    setAlbums(albums);
  };

  return (
    <Accordion
      title={name}
      id={id}
      onExpand={(val) => {
        val && fetchAlbums();
      }}
      onDelete={onDelete}
      className="user"
    >
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <p>{`Album by ${name}`}</p>
          <Button>Add Album</Button>
          <AlbumList albums={albums} updateAlbum={updateAlbum} />
        </>
      )}
    </Accordion>
  );
}

export default User;
