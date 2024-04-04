import { Accordion } from "../Accordion";

function Album({ album, onDelete }) {
  const { id, title, description, userId } = album;

  return (
    <div>
      <Accordion
        onExpand={() => {}}
        id={id}
        key={id}
        title={title}
        description={description}
        onDelete={(id) => {
          onDelete(id, userId);
        }}
      ></Accordion>
    </div>
  );
}

export default Album;
