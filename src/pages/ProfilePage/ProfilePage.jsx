import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/profile/${currentUser._id}`)
      .then((res) => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser._id]);
  
  return (
    <>
      <h2>{currentUser.username}'s profile</h2>
      <div>
        <h3>Portfolios created: </h3>

        <Link to="/create">
          <button>Create a portfolio</button>
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;
