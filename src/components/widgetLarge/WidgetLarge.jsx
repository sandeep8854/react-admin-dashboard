import "./widgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date </th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/1458332/pexels-photo-1458332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Aashika Nautel</span>
          </td>
          <td className="widgetLargeDate">31 Oct 2023</td>
          <td className="widgetLargeAmount">₹ 8456</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/1028927/pexels-photo-1028927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Kriti Kharbanda</span>
          </td>
          <td className="widgetLargeDate">01 Oct 2023</td>
          <td className="widgetLargeAmount">₹ 7856</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.pexels.com/photos/4045548/pexels-photo-4045548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Nargish Seth</span>
          </td>
          <td className="widgetLargeDate">14 Nov 2023</td>
          <td className="widgetLargeAmount">₹ 6456</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://avatars.githubusercontent.com/u/60762201?v=4"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Sandeep Prajapati</span>
          </td>
          <td className="widgetLargeDate">01 Oct 2023</td>
          <td className="widgetLargeAmount">₹ 10456</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default WidgetLarge;
