import Accordion from "./components/Accordion";
import "./style.scss";

function App() {
  return (
    <div>
      <Accordion title="Swati" description="Test description">
        <Accordion
          title="child Accordion"
          description="Child Accordion Description"
        />
        <Accordion
          title="child Accordion2"
          description="Child Accordion Description"
        />
        <Accordion
          title="child Accordion3"
          description="Child Accordion Description"
        />
      </Accordion>
    </div>
  );
}

export default App;
