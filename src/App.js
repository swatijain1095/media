import { useState } from "react";
import { UserList } from "./components/UserList";
import "./style.scss";
import { UserContext } from "./contexts/usersContext";
import { Sorting } from "./components/Sorting";

function App() {
  const [users, setUsers] = useState([]);
  const [usersConfig, setUserConfig] = useState({
    pageNo: 1,
    order: "asc",
    highlightId: null,
  });

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        usersConfig,
        setUserConfig,
      }}
    >
      <div className="app">
        <div className="app__header">
          <h1>List of Users</h1>
          <Sorting />
        </div>
        <UserList />
      </div>
    </UserContext.Provider>
  );
}

export default App;
