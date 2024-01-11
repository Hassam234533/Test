import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
  faBuilding,
  faWandMagicSparkles,
  faArrowsSpin,
  faHandshake,
  faEnvelopeCircleCheck,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

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
      <h1 style={{ marginTop: "20px" }}>User All Details: </h1>
      <Link to="/Usercard">
        <FontAwesomeIcon icon={faBackward} /> Back to User List
      </Link>

      <div className="Container">
        <div style={styles.header}>
          <div style={styles.leftButton}>
            {userDetails && (
              <div>
                <div>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      alignSelf: "center",
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXKGdKZxjWDJatds7-fvxpBzQe0fc8ON3Pw&usqp=CAU"
                    alt="User icon"
                  />
                  <br />
                  {userDetails.username}
                  <br />
                  {userDetails.address.city}
                </div>
                <br />
                <div>
                  <h5>Expricence</h5>
                  <FontAwesomeIcon icon={faWandMagicSparkles} /> 6 Years
                </div>
                <br />
                <h5>Details</h5>
                <div>
                  <FontAwesomeIcon icon={faUser} /> Name: {userDetails.name}
                </div>
                <br />
                <div>
                  <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
                  {userDetails.email}
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} /> Phone Number:{" "}
                  {userDetails.phone}
                </div>
                <br />
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Street:{" "}
                  {userDetails.address.street},<br /> Suite:{" "}
                  {userDetails.address.suite},
                  <br />
                  City: {userDetails.address.city}, <br />
                  ZipCode: {userDetails.address.zipcode}
                </div>
                <br />
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Geo: Lat:{" "}
                  {userDetails.address.geo.lat}, Lng:{" "}
                  {userDetails.address.geo.lng}
                </div>
                <br />
                <div>
                  <FontAwesomeIcon icon={faGlobe} /> Website:{" "}
                  {userDetails.website}
                </div>
                <br />
                <div>
                  <FontAwesomeIcon icon={faBuilding} /> Company: Company Name:{" "}
                  {userDetails.company.name},<br /> CatchPhrase:{" "}
                  {userDetails.company.catchPhrase},<br /> Bs:{" "}
                  {userDetails.company.bs}
                </div>
              </div>
            )}
          </div>

          <div style={styles.rightIcon}>
            <button style={styles.edit}>
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "25px" }}
                icon={faEdit}
              />
            </button>
            <h5
              style={{
                fontText: "15px",
                marginRight: "270px",
              }}
            >
              STATISTICS
            </h5>

            <FontAwesomeIcon
              style={{
                backgroundColor: "skyblue",
                fontSize: "30px",
                marginRight: "30px",
              }}
              icon={faArrowsSpin}
            />
            <FontAwesomeIcon
              style={{
                backgroundColor: "skyblue",
                fontSize: "30px",
                marginRight: "30px",
                marginLeft: "60px",
              }}
              icon={faHandshake}
            />
            <FontAwesomeIcon
              style={{
                backgroundColor: "skyblue",
                fontSize: "30px",
                marginRight: "28px",
                marginLeft: "60px",
              }}
              icon={faEnvelopeCircleCheck}
            />
            <div style={styles.row}>
              <div style={styles.col}>
                <h4 style={{ marginLeft: "140px" }}>12</h4>
                <p style={{ marginLeft: "60px" }}>Ongoing </p>
              </div>
              <div style={styles.col}>
                <h4>256</h4>
                <p>Settled </p>
              </div>
              <div style={styles.col}>
                <h4>268</h4>
                <p style={{ marginBottom: "420px" }}>Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "none",
  },

  leftButton: {
    flex: 1,
    textAlign: "left",
    marginTop: "70px",
   
    borderRight: "1px solid black", 
    paddingRight: "20px", 
  },

  rightIcon: {
    flex: 1,
    textAlign: "right",
    marginRight: "400px",
    paddingLeft: "20px", 
  },
  row: {
    display: "flex",
  },
  col: {
    flex: "1",
    padding: "20px",
  },
  edit: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "none",
    borderRadius: "25px",
    backgroundColor: "blue",
  },
};

export default UserDetails;
