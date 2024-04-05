import { Album } from "../Album";

function AlbumList({ albums, updateAlbum }) {
  async function deleteAlbum(id, userId) {
    await fetch(`http://localhost:3001/albums/${id}`, {
      method: "DELETE",
    });

    updateAlbum();
  }

  return (
    <div>
      {albums.map((album) => (
        <Album
          key={album.id}
          album={album}
          onDelete={deleteAlbum}
          updateAlbum={updateAlbum}
        />
      ))}
    </div>
  );
}

export default AlbumList;
