import { useContext, useState } from "react";
import AppContext from "../app-context";
import "../App.css";
import TableRow from "./table-row";
import Filter from "./filter";

const Table = () => {
  const { users, filter, loggedAdmin, setUsers } = useContext(AppContext);
  const [isSort, isSortSet] = useState(false);

  if (!users) {
    return <div>EMPTY</div>;
  }

  const onCountryChange = (item, country) => {
    const update = users.map((user) => {
      if (
        item.lastname === user.lastname &&
        item.firstname === user.firstname
      ) {
        return { ...user, country };
      }
      return user;
    });
    setUsers(update);
  };

  const canEdit = loggedAdmin === "crudadmin";

  const values = isSort
    ? [...users].sort((prev, next) =>
        next.lastname.localeCompare(prev.lastname)
      )
    : [...users].sort((prev, next) =>
        prev.lastname.localeCompare(next.lastname)
      );

  return (
    <>
      <Filter />
      <table className="userTable">
        <thead>
          <tr>
            <th>
              Last Name{" "}
              <span className="sortButton" onClick={() => isSortSet(!isSort)}>
                {isSort ? <>&uarr;</> : <>&darr;</>}
              </span>
            </th>
            <th>Country</th>            
          </tr>
        </thead>
        <tbody>
          {values
            .filter((item) =>
              item.lastname
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
            )
            .map((user) => (
              <TableRow
                key={`${user.lastname}_${user.firstname}`}
                user={user}
                onCountryChange={onCountryChange}
                canEdit={canEdit}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
