import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import "./home.css";
import { data } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
