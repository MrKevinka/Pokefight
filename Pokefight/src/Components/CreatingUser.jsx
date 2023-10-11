import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function EnterYourNameModule() {
  const [user, setUser] = useState();
  const [modalState, setModal] = useState(false);
  const [input, setInput] = useState();

  const handleShow = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  const registerUser = async (name) => {
    try {
      const res = await axios.post(
        "https://pokefight-lk6g.onrender.com/leaderboard/users",
        {
          username: name,
        }
      );

      setUser(res.data);

      sessionStorage.setItem("user", JSON.stringify(res.data));

      handleClose();
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  useEffect(() => {
    // Check if user data is in session storage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  console.log(user);

  return (
    <>
      {modalState ? (
        <Modal show={modalState} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title className="m-title">
              Please enter your name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
            <input
              style={{ width: "25%" }}
              type="text"
              onChange={(e) => {
                setTimeout(() => {
                  setInput(e.target.value);
                }, 800);
                clearTimeout();
              }}
            ></input>
          </Modal.Body>
          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn btn-round b-level-1 b-type-4"
              onClick={() => registerUser(input)}
            >
              Save
            </Button>
            <Button
              className="btn btn-round b-level-1 b-type-4"
              onClick={() => handleClose()}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {user ? (
          <h1>Welcome to Pokefight, {user.username}</h1>
        ) : (
          <h1>Welcome to Pokefight, Stinky Guest</h1>
        )}
        {!user ? (
          <Button
            className="btn btn-round b-level-1 b-type-4"
            onClick={handleShow}
          >
            Register with your username
          </Button>
        ) : null}
        {user ? (
          <Button className="btn btn-round b-level-1 b-type-4">
            <NavLink to={`/pokemon/${id}`}>Pick random fighter</NavLink>
          </Button>
        ) : null}
        {user ? (
          <Button className="btn btn-round b-level-1 b-type-4">
            <NavLink to="/pokemon">Pick your fighter</NavLink>
          </Button>
        ) : null}
      </div>
    </>
  );
}
