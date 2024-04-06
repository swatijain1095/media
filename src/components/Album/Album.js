import { Accordion } from "../Accordion";
import "./style.scss";
import AddFile from "../AddImage/AddImage";

function Album({ album, onDelete, updateAlbum }) {
  const { id, title, description, userId, images = [] } = album;

  return (
    <div>
      <Accordion
        onExpand={() => {}}
        id={id}
        key={id}
        title={title}
        onDelete={(id) => {
          onDelete(id, userId);
        }}
        className="album"
      >
        <p>{description}</p>
        <div className="album__input">
          <AddFile id={id} images={images} updateAlbum={updateAlbum} />
        </div>
        <div className="album__images">
          {images.map((image) => {
            return (
              <img
                key={image}
                src={`http://localhost:5000${image}`}
                alt="testImage"
                width="50%"
              />
            );
          })}
        </div>
      </Accordion>
    </div>
  );
}

export default Album;
