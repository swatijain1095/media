// import { Accordion } from "./components/Accordion";
import { UserList } from "./components/UserList";
import "./style.scss";

function App() {
  return (
    <div className="app">
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
