import { UserList } from "./components/UserList";
import "./style.scss";
import { Sorting } from "./components/Sorting";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>List of Users</h1>
        <Sorting />
        <Search />
      </div>
      <UserList />
    </div>
  );
}

export default App;
