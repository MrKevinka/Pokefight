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
      <h1 className="top">Leaderboard</h1>
      <div className="leader">
        {users.map((user) => {
          return (
            <div key={user._id} className="leaderboard-user-container">
              <h3>{user.username}</h3>
              <h3>Score: {user.score}</h3>
              <h3>Wins: {user.game_won}</h3>
              <h3>Lost: {user.game_lost}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Leaderboard;
