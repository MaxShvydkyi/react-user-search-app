import { memo } from "react";
import "../App.css";

const countryNames = {
  ru: "Russia",
  de: "Germany",
};

const TableRow = ({ user, canEdit, onCountryChange }) => {
  return (
    <tr>
      <td>{user.lastname}</td>
      <td>
        {canEdit ? (
          <select className="countrySelect" onChange={(evt) => onCountryChange(user, evt.target.value)}>
            {Object.keys(countryNames).map((name) => (
              <option key={name} value={name}>
                {countryNames[name]}
              </option>
            ))}
          </select>
        ) : (
          countryNames[user.country]
        )}
      </td>
    </tr>
  );
};

export default memo(TableRow);
