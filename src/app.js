import { useEffect, useState } from "react";
import "./App.css";

import AppContext from "./app-context";
import Login from "./components/login";
import Table from "./components/table";

function App() {
  const [filter, filterSet] = useState("");
  const [users, setUsers] = useState(null);
  const [loggedAdmin, setLoggedAdmin] = useState(null);

  useEffect(() => {
    if (loggedAdmin) {
      fetch("mock.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => setUsers(data.users));
    }

    return () => {
      filterSet("");
      setUsers(null);
    };
  }, [loggedAdmin]);

  return (
    <AppContext.Provider
      value={{
        filter,
        users,
        filterSet,
        setUsers,
        loggedAdmin,
        setLoggedAdmin,
      }}
    >
      <div className="pageContainter">
        {!loggedAdmin && <Login />}
        {loggedAdmin && <Table />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
