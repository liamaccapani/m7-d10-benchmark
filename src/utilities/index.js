// Fetch By city
export const fetchByCity = async (query) => {
  try {
    let response = await fetch(
      "api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&appid=" +
        process.env.REACT_APP_API_KEY
    );
    if (response.ok) {
        let data = await response.json()
        return data
    } else {
        console.log("Error fetching")
    }
  } catch (error) {
    console.log(error);
  }
};
