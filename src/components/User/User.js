import { useState, useContext, useEffect } from "react";
import { Accordion } from "../Accordion";
import { AlbumList } from "../AlbumList";
import "./style.scss";
import { AddAlbum } from "../AddAlbum";
import { UserContext } from "../../contexts/usersContext";
import classNames from "classnames";

function User({ user, onDelete }) {
  const { name, id } = user;
  const {
    usersConfig: { highlightId },
    setUserConfig,
  } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const isHighlight = highlightId === id;

  async function fetchAlbums() {
    setIsLoading(true);
    const response = await fetch(`http://localhost:3001/users/${id}/albums`);
    const albums = await response.json();
    setAlbums(albums);
    setIsLoading(false);
  }

  useEffect(() => {
    if (isHighlight) {
      document.querySelector(`section[id="${id}"]`).scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        setUserConfig((prevVal) => {
          return {
            ...prevVal,
            highlightId: null,
          };
        });
      }, 2000);
    }
  }, [isHighlight, id, setUserConfig]);

  return (
    <Accordion
      title={name}
      id={id}
      onExpand={(val) => {
        val && fetchAlbums();
      }}
      onDelete={onDelete}
      className={classNames("user", isHighlight && "user--highlight")}
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
