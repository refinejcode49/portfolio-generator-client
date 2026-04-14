import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h2>{currentUser.username}'s profile</h2>
      <div>
        <h3>Portfolios created: </h3>
        <Link>
        <button>Create a portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
