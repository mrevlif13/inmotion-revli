import React from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    name: "Bintang 0.0%",
    product: 90,
  },
  {
    name: "Bintang Crystal",
    product: 40,
  },
  {
    name: "Bintang Pilsener",
    product: 110,
  },
  {
    name: "Bintang Raddler",
    product: 45,
  },
  {
    name: "Green Sands",
    product: 90,
  },
  {
    name: "Heineken",
    product: 90,
  },
];

const ProductCard = () => {
  return (
    <div className="containerCard">
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Complaint by Product</span>
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
          <Bar dataKey="product" fill='#6794DC'>
            <labelList dataKey="name" position="top" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default ProductCard;
