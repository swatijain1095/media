import { Album } from "../Album";

function AlbumList({ albums, updateAlbum }) {
  async function deleteAlbum(id, userId) {
    await fetch(`http://localhost:3001/albums/${id}`, {
      method: "DELETE",
    });
    const response = await fetch(
      `http://localhost:3001/users/${userId}/albums`
    );
    const albums = await response.json();
    updateAlbum(albums);
  }

  return (
    <div>
      {albums.map((album) => (
        <Album key={album.id} album={album} onDelete={deleteAlbum} />
      ))}
    </div>
  );
}

export default AlbumList;
