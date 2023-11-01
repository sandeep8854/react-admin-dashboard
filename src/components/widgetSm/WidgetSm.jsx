import "./widgetSm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Annu Jha</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlinedIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7685499/pexels-photo-7685499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Rashmika</span>
            <span className="widgetSmUserTitle">Test Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlinedIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7208720/pexels-photo-7208720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sonali</span>
            <span className="widgetSmUserTitle">Data Analyst</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlinedIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/17454214/pexels-photo-17454214/free-photo-of-smiling-woman-with-earrings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Neha Yadav</span>
            <span className="widgetSmUserTitle">HR Exective</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlinedIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/6717962/pexels-photo-6717962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sakshi Singh</span>
            <span className="widgetSmUserTitle">Customer Exective</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlinedIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};
export default WidgetSm;
