import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import userImage from "../../../assets/user.png";
import styles from "./Navbar.module.css";
import {version} from "../../../styles/version.module.css";
import Avatar from "../Avatar/Avatar";
import Popup from "../Popup/Popup";
import React from "react";
import Button from "../Button/Button";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  // defines whether show the popup
  const [isPopupActive, setIsPopupActive] = React.useState(false);
  // signOutUser function from context
  const {signOutUser} = useAuth();
  return (
    <nav className={styles.navBar}>
      {/* logo */}
      <div>
        <Link to="/" className={styles.logo}>
          zitbo <span className={version}>v 1.0</span>
        </Link>
      </div>
      <div className={styles.navItems}>
        <div className={styles.notificationContainer}>
          <IoMdNotificationsOutline size="2em" className={styles.notificationIcon} />
          {/* notification count */}
          <div className={styles.notificationCountContainer}>
            <span className={styles.notificationCount}>0</span>
          </div>
        </div>
        <div
          className={styles.avatarContainer}
          onClick={() => setIsPopupActive(prevIsPopupActive => !prevIsPopupActive)}
        >
          <Avatar image={userImage} />
          {isPopupActive && (
            <Popup position="forNavbarAvatar">
              {/* popup container */}
              <Button className="btnMedium" handleClick={signOutUser}>Sign out</Button>
            </Popup>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
