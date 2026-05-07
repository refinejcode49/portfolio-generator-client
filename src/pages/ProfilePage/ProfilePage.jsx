import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ModalComponent from "../../components/Modal";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  return (
    <>
      {showModal && <ModalComponent toggleModal={toggleModal} />}
      <h2>{currentUser.username}'s profile</h2>
      <div>
        <h3>Portfolios created: </h3>

        <button onClick={toggleModal}>Create a portfolio</button>
      </div>
    </>
  );
};

export default ProfilePage;
