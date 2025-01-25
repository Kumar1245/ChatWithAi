import React from "react";
import { Col, Row } from "react-bootstrap";
// css
import styles from "./Featured.module.scss";
const FeatureCard = ({ data }) => {
  return (
    <>
      <Row className={`${styles.FeaturedCardWrpper}`}>
        {data &&
          data.length > 0 &&
          data.map((item, key) => (
            <Col key={key} lg="3" md="4" sm="6" className="my-2">
              <div
                className={`${styles.cardCstm} cardCstm rounded p-2 py-2 h-100`}
              >
                <div className="top d-flex align-items-center gap-10">
                  <div className="icnWrp flex-shrink-0 border-end pe-2 border-secondary">
                    {item.icn}
                  </div>

                  <div className="content text-center">
                    <h6 className="m-0 fw-bold py-1">{item.label}</h6>
                    <h5 className="m-0 fw-sbold py-1">{item.value}</h5>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default FeatureCard;
