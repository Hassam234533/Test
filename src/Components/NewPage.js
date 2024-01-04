import React, { useState, useEffect } from "react";


const NewPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <table className="new-page-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Geo</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </td>
              <td>
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </td>
              <td>{user.website}</td>
              <td>
                {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
  );
};

export default NewPage;
