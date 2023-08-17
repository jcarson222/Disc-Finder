import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";
import { tempUser } from "../../utils/constants";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  // console.log(showLogout);
  return (
    <Logout>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <AiOutlineUser />
        {tempUser.name}
        {showLogout ? <FaCaretDown /> : <FaCaretRight />}
      </button>
      <div className={showLogout ? "dropdown btn show-dropdown" : "dropdown"}>
        <button
          type="button"
          className="dropdown-btn"
          onClick={() => console.log("logout")}
        >
          logout
        </button>
      </div>
    </Logout>
  );
};
export default LogoutContainer;

const Logout = styled.nav`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.8rem;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    font-size: 1.3rem;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;
