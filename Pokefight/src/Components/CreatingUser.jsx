import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RandomPoke from "./RandomPoke";

export default function EnterYourNameModule() {
  const [user, setUser] = useState();
  const [modalState, setModal] = useState(true);
  const [input, setInput] = useState();
  //   const [randomPoke, setRandomPoke] = useState();
  //   let input = "";

  const handleModal = () => {
    setModal(!modalState);
  };

  const registerUser = async (name) => {
    try {
      const res = await axios.post("http://localhost:8080/leaderboard/users", {
        username: name,
      });

      setUser(res.data);

      console.log(user);
      handleModal();
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  console.log(input);

  useEffect(() => {
    console.log("are you here?", user);
  }, [user]);

  return (
    <>
      {modalState ? (
        <Modal show={modalState} onHide={() => handleModal()}>
          <Modal.Header closeButton>Please enter your name</Modal.Header>
          <Modal.Body>
            <input
              type="text"
              onChange={(e) => {
                setTimeout(() => {
                  //   input = e.target.value;
                  setInput(e.target.value);
                }, 800);
                clearTimeout();
              }}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => registerUser(input)}>Save</Button>
            <Button onClick={() => handleModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      {user ? (
        <h1>Welcome to Pokefight, {user.username}</h1>
      ) : (
        <h1>Welcome to Pokefight, Stinky Guest</h1>
      )}
      <Button>
        <RandomPoke />
      </Button>
      <Button>
        <NavLink to="/pokemon">Pick your fighter</NavLink>
      </Button>
    </>
  );
}
