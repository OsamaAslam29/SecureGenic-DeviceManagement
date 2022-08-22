import React from 'react'
import './DashCards.scss'
import device from '../../../Assets/Dashboard/devices.png'
import appli from '../../../Assets/Dashboard/application.png'
import user from '../../../Assets/Dashboard/users.png'
import role from '../../../Assets/Dashboard/roles.png'
import Heading from '../../../Components/0-Atoms/Heading/Heading'
import DonutChart from "react-donut-chart";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// function for line chart

const CardsData = [
  {
    name: "Devices",
    img: device,
    value: 1,
    backColor: "#ab4297"
  },
  {
    name: "Application",
    img: appli,
    value: 4,
    backColor: "#5c9ad3"
  },
  {
    name: "User",
    img: user,
    value: 6,
    backColor: "#8b79b7"
  },
  {
    name: "Roles",
    img: role,
    value: 4,
    backColor: "#5ecae6"
  }

];
const data = [
  {
    name: "Aepl",
    uv: 500,

    amt: 2400
  },
  {
    name: "Bel-connect",
    uv: 600,

    amt: 2210
  },
  {
    name: "Transworld",
    uv: 2000,
    amt: 2290
  },

];

// function for donut charts

const reactDonutChartdata = [
  {

    label: "Securegenic",
    value: 100,
    color: "#3a9cd3"
  },
  {
    label: "Tranworld",
    value: 10,
    color: "#8e77b6"
  },
  {
    label: "Bel-connect",
    value: 10,
    color: "#a363a9"
  },
  {
    label: "Aepl",
    value: 10,
    color: "#b24e9d"
  }
];
const reactDonutChartBackgroundColor = [
  "#3a9cd3",
  "#8e77b6",
  "#a363a9",
  "#b24e9d"
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

const DashCards = () => {
  return (
    <div className='wrape_dashboard'>
      <div className="dashboard">
        <Heading heading="Dashboard" para="View Status of devices and Application" />
        <div className="dash_cards_box">
          {
            CardsData.map((card) => {
              return (
                <>
                  <div className="card" style={{ backgroundColor: `${card.backColor}` }}>
                    <div className="img_box"><img src={card.img} alt="" /></div>
                    <div className="title">{card.name}</div>
                    <div className="count">{card.value}</div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="line_graph">
        <div className="title">
          Installed Application
        </div>
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="uv" stroke="Purple" />
        </LineChart>
      </div>

      <div className="donut_main">



        <div className="donut_chart">

          <div className="donut_title">
            Application Version Count
          </div>

          <DonutChart
            width={500}
            onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
            strokeColor={reactDonutChartStrokeColor}
            data={reactDonutChartdata}
            colors={reactDonutChartBackgroundColor}
            innerRadius={reactDonutChartInnerRadius}
            selectedOffset={reactDonutChartSelectedOffset}
            onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
            style={{ fontSize: '30px' }}
          />
        </div>

        <div className="battery">
          Device Battery Status

          <div className="charging">
            Charging 25%
            <span>0</span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DashCards
