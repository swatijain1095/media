import { useState } from "react";
import { Accordion } from "../Accordion";
import { AlbumList } from "../AlbumList";

function User({ user }) {
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
      onExpand={(val) => {
        val && fetchAlbums();
      }}
      description={`Album by ${name}`}
    >
      {isLoading ? <div>Loading</div> : <AlbumList albums={albums} />}
    </Accordion>
  );
}

export default User;
