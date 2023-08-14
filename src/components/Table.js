import "./styling.css";

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((id, data) => {
          return (
        <tr>
           key = {id}
          <td>{data.name}</td>
          <td>{data.typeOfSatellites}</td>
          <td>{data.launchDates}</td>
          <td>
            {data.operational ? "Active" : "Inactive"}
          </td>
        </tr>
          );
          })}
        </tbody>
      </table>
  );
};

export default Table;