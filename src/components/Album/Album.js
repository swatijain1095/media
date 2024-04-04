import { Accordion } from "../Accordion";

function Album({ album }) {
  const { id, title, description } = album;

  return (
    <div>
      <Accordion
        onExpand={() => {}}
        key={id}
        title={title}
        description={description}
        onDelete={() => {}}
      ></Accordion>
    </div>
  );
}

export default Album;
