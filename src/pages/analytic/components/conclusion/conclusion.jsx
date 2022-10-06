import React from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { PieChart, Pie, Legend, Cell } from "recharts";

const data = [
  {
    name: "Conclusion no judge",
    value: 350,
    style: { strokeWidth: 12 },
  },
  {
    name: "Not Justified",
    value: 350,
  },
  {
    name: "Justified",
    value: 200,
    style: { strokeWidth: 12 },
  },
  {
    name: "Not to be judge",
    value: 100,
    style: { strokeWidth: 12 },
  },
];
const colors = ["#6771DC", "#DC67AC", "#DCD267","#67DC97"];

const ConclusionCard = () => {
  return (
    <div className="containerCard">
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Complaint by Conclusion</span>
        </Col>
        <Col span={12}>
          <Button
            icon={<DownloadOutlined />}
            href="#"
            className="buttonSqaure"
          />
        </Col>
      </Row>
      <div className="pieChart">
        <PieChart width={300} height={300}>
            <Pie
            data={data}
            // cx={250}
            // cy={200}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            </Pie>
            <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default ConclusionCard;
