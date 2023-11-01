import { Language, Settings } from "@mui/icons-material";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            src="https://github.com/sandeep8854/e-commerce/blob/main/public/image/sandeepE.jpg?raw=true"
            alt=""
            className="logo"
          ></img>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/725463/pexels-photo-725463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar not found"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
