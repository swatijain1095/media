import { UserList } from "./components/UserList";
import "./style.scss";
import { Sorting } from "./components/Sorting";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>List of Users</h1>
        <Sorting />
      </div>
      <UserList />
    </div>
  );
}

export default App;
