import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [users, setUsers] = useState([]);

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

  return (
    <>
      {users.map((user) => {
        return (
          <div
            key={user._id}
            className="leaderboard-user-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h2>{user.username}</h2>
            <h2>{user.score}</h2>
            <h2>{user.game_lost}</h2>
            <h2>{user.game_won}</h2>
          </div>
        );
      })}
    </>
  );
}

export default Leaderboard;
