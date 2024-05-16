import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const { isLogged, logout } = useUserDetails();

  const navigate = useNavigate()

  const handleNavigateToAuthPage = () => {
    navigate('/auth')
  }

  const handleNavigateToPublicationsPage  = () => {
    navigate('/publications')
  }

  const handleNavigateToAddCommentsPage = () => {
    navigate('/addComments')
  }

  const handleNavigateToAddPublicationsPage = () => {
    navigate('/addPublications')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="nav-container">
      <div className="nav-buttons-container">
        <NavButton text="BLOG" onClickHandler={handleNavigateToPublicationsPage} />
        {!isLogged ? (
          <NavButton text="LOGIN" onClickHandler={handleNavigateToAuthPage} />
        ) : (
          <div>
            <NavButton text="ADD PUBLICATIONS" onClickHandler={handleNavigateToAddPublicationsPage}/>
            <NavButton text="ADD COMMENTS" onClickHandler={handleNavigateToAddCommentsPage}/>
            <NavButton text="LOGOUT" onClickHandler={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};