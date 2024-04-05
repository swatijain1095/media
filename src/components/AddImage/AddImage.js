import { Input } from "../Input";

function AddFile({ id, images, updateAlbum }) {
  const handleFileUpload = async (event) => {
    console.log(event.target.files[0]);

    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    await fetch(`http://localhost:3001/albums/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        images: [...images, data.imageUrl],
      }),
    });
    updateAlbum();
  };
  return <Input type="file" onChange={handleFileUpload} />;
}

export default AddFile;
