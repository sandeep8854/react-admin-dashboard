import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" /> Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <PersonIcon className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <InventoryIcon className="sidebarIcon" /> Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <CurrencyRupeeIcon className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <EqualizerIcon className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutlineOutlinedIcon className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <ForumOutlinedIcon className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeRepairServiceOutlinedIcon className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <ReportGmailerrorredOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
