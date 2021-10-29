import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

import Home from "./Home";

const SearchBar = () => {
 const [city, setCity] = useState('')
 const [data, setData] = useState({})
//  const [hourlyData, setHourlyData] = useState({})

 const fetchByCity = async (query) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_BASE_URL +
          query +
          "&appid=" +
          process.env.REACT_APP_API_KEY
      );
      if (response.ok) {
        let weatherData = await response.json();
        // console.log(weatherData);
        setData(weatherData)
      } else {
        console.log("Error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

//   const fetcHourly = async (query) => {
//     try {
//         let response = await fetch(
//           process.env.REACT_APP_HOURLY_BASE_URL +
//             query +
//             "&appid=" +
//             process.env.REACT_APP_API_KEY
//         );
//         if (response.ok) {
//           let hourlyData = await response.json();
//           // console.log(hourlyData);
//           setHourlyData(hourlyData)
//         } else {
//           console.log("Error fetching");
//         }
//       } catch (error) {
//         console.log(error);
//       }  
//   }

 const handleChange = (e) => {
     setCity(e.target.value)
 }

 const handleSubmit = (e) => {
     e.preventDefault()
     fetchByCity(city)
    //  fetcHourly(city)
     setCity('')
     
 }
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3" controlId="cityWeather">
            <Form.Control type="search" placeholder="Type city" value={city} onChange={handleChange}/>
          </Form.Group>
        </Form>

        { data &&
            <Home data={data}/>
        }
    </Container>
  );
};

export default SearchBar;
