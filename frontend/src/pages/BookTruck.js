import React from "react";
import Navbar from "../component/Navbar";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import axios from "axios";

// google maps api to use maps services
// it will provide use with a varible called is loaded
// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

function BookTruck() {
  React.useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios(
          "https://outpost.mapmyindia.com/api/security/oauth/token",
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
          },
          {
            grant_type: "client_credentials",
            client_id:
              "33OkryzDZsI3GQlduBa_4EehHaoznij96uYsGt0effmeahsPDuZ8fAS54HLcZft1_61G6efczKnTCnxuLKLJ_w==",
            client_secret:
              "lrFxI-iSEg9ymoR2JUUawgwwLZH_gY2C6bosEf8JQFk5DubwIJRzXI-cIBREFWxvGl67xKoDyx-YmNuWMjtiFDTykPNfjtiQ",
          }
        );

        console.log("sdf", response);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchToken();
  }, []);
  const top100Films = [
    { title: "Surat" },
    { title: "Ahmedabad" },
    { title: "Chennai" },
    { title: "Delhi" },
    { title: "12 Angry Men" },
    { title: "Schindler's List" },
    { title: "Pulp Fiction" },
  ];

  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_LOCATION_API,
  // });

  // const center = { lat: 48.8584, lng: 2.2945 };
  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // if (!isLoaded) {
  //   return (
  //     <Box sx={{ width: "100%" }}>
  //       <LinearProgress />
  //     </Box>
  //   );
  // }

  return (
    <>
      <Navbar />

      <div>Book Truck</div>
      <div>
        <Stack spacing={2} sx={{ width: 300 }}>
          {/* <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
        /> */}
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="PickUp Location"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />

          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Destination Location"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
      </div>
      <div></div>
    </>
  );
}

export default BookTruck;
