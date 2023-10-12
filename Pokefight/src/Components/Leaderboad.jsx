import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://pokefight-lk6g.onrender.com/leaderboard/users`
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching Pokemon image:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log("user list", users);
  users.sort((a, b) => b.score - a.score);
  console.log("sorted list", users);

  return (
    <>
      <h1 className="top" style={{ fontSize: "3rem", color: "teal" }}>
        Leaderboard
      </h1>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div className="leader">
          {users.map((user) => {
            return (
              <div key={user._id} className="leaderboard-user-container">
                <h3 style={{ color: "black", fontSize: "2rem" }}>
                  {user.username}
                </h3>
                <h3 style={{ color: "teal" }}>Score: {user.score}</h3>
                <h3 style={{ color: "darkGreen" }}>Wins: {user.game_won}</h3>
                <h3 style={{ color: "darkRed" }}>Lost: {user.game_lost}</h3>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Leaderboard;
