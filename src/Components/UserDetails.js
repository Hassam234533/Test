import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>User Details Page</h1>
      {userDetails && (
        <div>
          <h2>{userDetails.name}</h2>
          <h4>{userDetails.username}</h4>
          <p>Email: {userDetails.email}</p>
          <p>Phone Number: {userDetails.phone}</p>
          <p>Adress:  Street: {userDetails.address.street}, Suite : {userDetails.address.suite}, City :{userDetails.address.city}, ZipCode: {userDetails.address.zipcode}</p>
          <p>Geo: Lat: {userDetails.address.geo.lat}, Lng: {userDetails.address.geo.lng}</p>
          <p>Website : {userDetails.website}</p>
          <p>Company :Company Name: {userDetails.company.name}, CatchPhrase : {userDetails.company.catchPhrase}, Bs: {userDetails.company.bs}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
