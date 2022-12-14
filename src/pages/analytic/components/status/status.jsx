import React, { useRef } from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
import "./styles.scss";
import { useReactToPrint } from "react-to-print";

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

const StatusCard = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Compaint-by-Status-and-Investigator',
    onAfterPrint: ()=> alert('Download success')
  });

  return (
    <div className="containerCard" ref={componentRef}>
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Compaint by Status and Investigator</span>
        </Col>
        <Col span={12}>
          <Button
            icon={<DownloadOutlined />}
            onClick={handlePrint}
            className="buttonSqaure"
          />
        </Col>
      </Row>
      <div className="barChart" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusCard;
