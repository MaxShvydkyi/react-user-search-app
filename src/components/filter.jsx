import { useContext, useState } from "react";
import AppContext from "../app-context";
import "../App.css";

const Filter = () => {
  const { filterSet, setLoggedAdmin } = useContext(AppContext);
  const [localFilter, setLocalFilter] = useState("");

  const searchByName = (val) => {
    if (val.length >= 2) {
      filterSet(val);
    } else {
      filterSet("");
    }
    setLocalFilter(val);
  };

  return (
    <div className="topRow">
      <input
        className="search"
        type="text"
        value={localFilter}
        placeholder="Search by last name"
        onChange={(evt) => searchByName(evt.target.value)}
      />

      <button onClick={() => setLoggedAdmin(null)}>Logout</button>
    </div>
  );
};

export default Filter;
