import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <>
      <h1>User All Details: </h1>
      <div className="new-page-table">
        {userDetails && (
          <div>
            <td>{userDetails.name}</td>
            <td>{userDetails.username}</td>
            <td>Email: {userDetails.email}</td>
            <td>Phone Number: {userDetails.phone}</td>
            <td>
              Adress: Street: {userDetails.address.street}, Suite :{" "}
              {userDetails.address.suite}, City :{userDetails.address.city},
              ZipCode: {userDetails.address.zipcode}
            </td>
            <td>
              Geo: Lat: {userDetails.address.geo.lat}, Lng:{" "}
              {userDetails.address.geo.lng}
            </td>
            <td>Website : {userDetails.website}</td>
            <td>
              Company :Company Name: {userDetails.company.name}, CatchPhrase :{" "}
              {userDetails.company.catchPhrase}, Bs: {userDetails.company.bs}
            </td>
            <Link to="/home">
            <FontAwesomeIcon icon={faCross} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetails;
