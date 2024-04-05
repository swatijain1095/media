import { useState } from "react";
import { Accordion } from "../Accordion";
import { AlbumList } from "../AlbumList";
import "./style.scss";
import { AddAlbum } from "../AddAlbum";

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

  return (
    <Accordion
      title={name}
      id={id}
      onExpand={(val) => {
        val && fetchAlbums();
      }}
      onDelete={onDelete}
      className="user"
      isLoading={isLoading}
    >
      <>
        <p>{`Album by ${name}`}</p>
        <AddAlbum fetchAlbums={fetchAlbums} id={id} />
        <AlbumList albums={albums} updateAlbum={fetchAlbums} />
      </>
    </Accordion>
  );
}

export default User;
