import { Accordion } from "../Accordion";
import "./style.scss";

function Album({ album, onDelete }) {
  const { id, title, description, userId } = album;

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
      </Accordion>
    </div>
  );
}

export default Album;
