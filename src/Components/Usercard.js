import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [setButton, setButtonState] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleButtonClick = (userId) => {
    setButtonState((prevState) => ({
      ...prevState,
      [userId]: true,
    }));
  };

  return (
    <>
      <div style={styles.header}>
        <div style={styles.leftButton}>
          <img
            style={{
              width: "30px",
              height: "30px",
              alignSelf: "center",
            }}
            src="https://cdn-icons-png.flaticon.com/512/56/56763.png"
            alt="User icon"
          />{" "}
        </div>
        <div style={styles.rightIcon}>
          <img
            style={{
              width: "30px",
              height: "30px",
              alignSelf: "center",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXKGdKZxjWDJatds7-fvxpBzQe0fc8ON3Pw&usqp=CAU"
            alt="User icon"
          />{" "}
        </div>
        <br />
      </div>
      <div style={{ marginTop: "10px" , backgroundColor:"whitesmoke" }}>
        <div style={styles.header1}>
          <h3>User Mangement</h3>
          <div style={styles.rightIcon}>
            <Button
              style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                border: "none",
                borderRadius: "25px",
              }}
            >
              <FontAwesomeIcon style={{color:"skyblue"}} icon={faCirclePlus} /> Add New User
            </Button>
          </div>
        </div>
        <p style={{ marginLeft: "8px", marginBottom: "30px" }}>
          ALL users Details
        </p>
        <input
          style={styles.input}
          type="text"
          placeholder="Search by name..."
        />
        {users.length > 0 &&
          users
            .reduce((rows, user, index) => {
              if (index % 4 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(user);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <Row style={{ marginTop: "10px" }} key={rowIndex}>
                {row.map((user, colIndex) => (
                  <Col key={colIndex} sm={3}>
                    <Card style={styles.cardWrapper}>
                      <Card.Body>
                        <Card.Title style={styles.cardTitle}>
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              alignSelf: "center",
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXKGdKZxjWDJatds7-fvxpBzQe0fc8ON3Pw&usqp=CAU"
                            alt="User icon"
                          />{" "}
                          <br />
                          {user.name}
                          <br />
                          {user.address.city}
                        </Card.Title>
                        <Card.Text>
                          <strong>
                            <FontAwesomeIcon icon={faUser} /> Username:
                          </strong>{" "}
                          {user.username}
                          <br />
                          <strong>
                            <FontAwesomeIcon icon={faEnvelope} /> Email:
                          </strong>{" "}
                          {user.email}
                          <br />
                          <strong>
                            <FontAwesomeIcon icon={faPhone} /> Phone:
                          </strong>{" "}
                          {user.phone}
                          <br />
                        </Card.Text>
                        <Link to={`/user/${user.id}`}>
                          <Button
                            className="w-100"
                            onClick={() => handleButtonClick(user.id)}
                          >
                            Details
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ))}
      </div>
    </>
  );
};

const styles = {
  cardWrapper: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "none",
    marginBottom: "20px",
  },

  cardTitle: {
    textAlign: "center",
  },
  leftButton: {
    flex: 1,

    textAlign: "left",
  },
  rightIcon: {
    flex: 1,
    textAlign: "right",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  header1: {
    display: "flex",
    padding: "10px",
  },
  input: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "none",
    borderRadius: "25px",
    marginBottom: "30px",
    width: "250px",
  },
};

export default UserCard;
