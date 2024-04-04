import { UserList } from "./components/UserList";
import "./style.scss";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="app">
      {/* <TestComponent /> */}
      <h1>List of Users</h1>
      <UserList />
      {/* <Accordion title="Swati" description="Test description">
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
      </Accordion> */}
    </div>
  );
}

export default App;
