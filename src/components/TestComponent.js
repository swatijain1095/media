import { useState } from "react";
import { Button } from "./Button";

function TestComponent() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("Image URL:", data.imageUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleFileUpload}>Upload</Button>

      <img
        src="http://localhost:5000/uploads/1712227948928.jpg"
        alt="testImage"
      />
    </div>
  );
}

export default TestComponent;
