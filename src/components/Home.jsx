import { Card, Col, Container, Badge, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
// import { fetchByCity } from "../../utilities";

const Home = ({ data }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>
              {`${data.name}, ${data.sys.country}`}
            </h2>
            <div>
              Temperature: {data.main.temp}, 
              Feels like: {data.main.feels_like}
            </div>
            <div>

            </div>
          </Col>
          <Col xs={12}></Col>
        </Row>
        {console.log("FROM HOME", data)}
        {/* {console.log("HOURLY", hourlyData)} */}
      </Container>
    </>
  );
};

export default Home;
