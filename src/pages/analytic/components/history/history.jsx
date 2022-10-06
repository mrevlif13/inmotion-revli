import React from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from "recharts";

const data = [
  {
    name: "Nadia",
    open: 48,
    closed: 101
  },
  {
    name: "Agung Hadi Kusuma",
    open: 20,
    closed: 71
  },
  {
    name: "Shapira Bella",
    open: 50,
    closed: 190
  },
];

const HistoryCard = () => {
  return (
    <div className="containerCard">
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Complaint History</span>
        </Col>
        <Col span={12}>
          <Button
            icon={<DownloadOutlined />}
            href="#"
            className="buttonSqaure"
          />
        </Col>
      </Row>
      <div className="barChart">
        <BarChart
          width={1200}
          height={400}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          barSize={72}
        >
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="name">
            <label
              value="Pages of my website"
              offset={10}
              position="insideBottom"
            />
          </XAxis>
          <YAxis
            label={{ value: "Total Ticket", angle: -90, position: "insideLeft" }}
          />
          <Bar dataKey="open" fill='#DC67AC' stackId="a">
            <labelList dataKey="name" position="top" />
          </Bar>
          <Bar dataKey="closed" fill='#6771DC' stackId="a">
          </Bar>
          <Legend />
        </BarChart>
      </div>
    </div>
  );
};

export default HistoryCard;
