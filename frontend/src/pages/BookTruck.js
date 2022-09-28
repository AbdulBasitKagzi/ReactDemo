import React from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getVehicle } from "../store/vehicleReducer";
import { getGoods } from "../store/goodsReducer";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

// google maps api to use maps services
// it will provide use with a varible called is loaded
// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

function BookTruck() {
  const topCities = [
    { title: "Surat" },
    { title: "Ahmedabad" },
    { title: "Chennai" },
    { title: "Delhi" },
    { title: "Rajasthan" },
    { title: "Banglore" },
    { title: "Punjab" },
    { title: "Kolkata" },
    { title: "Hyderabad" },
    { title: "Mumbai" },
  ];

  // not working code
  // React.useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const response = await axios(
  //         "https://outpost.mapmyindia.com/api/security/oauth/token",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Access-Control-Allow-Origin": "strict-origin-when-cross-origin",
  //             "Access-Control-Allow-Methods":
  //               "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //           },
  //         },
  //         {
  //           grant_type: "client_credentials",
  //           client_id:
  //             "33OkryzDZsI3GQlduBa_4EehHaoznij96uYsGt0effmeahsPDuZ8fAS54HLcZft1_61G6efczKnTCnxuLKLJ_w==",
  //           client_secret:
  //             "lrFxI-iSEg9ymoR2JUUawgwwLZH_gY2C6bosEf8JQFk5DubwIJRzXI-cIBREFWxvGl67xKoDyx-YmNuWMjtiFDTykPNfjtiQ",
  //         }
  //       );

  //       console.log("sdf", response);
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   };
  //   fetchToken();
  // }, []);

  const [pickUpLocation, setPickUpLocation] = React.useState(true);
  const [destinationLocation, setDestinationLocation] = React.useState(true);
  const [selectVehicle, setSelectVehicle] = React.useState(true);
  const [goodsSelectType, setGoodsSelectType] = React.useState(true);

  const pickUp = React.useRef(null);
  const destination = React.useRef(null);
  const goodsType = React.useRef(null);
  const vehicle = React.useRef(null);

  const dispatch = useDispatch();
  const { vehicleType } = useSelector((state) => state.vehicle);
  const { goods } = useSelector((state) => state.goods);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const newData = {
      pickUpLocation: data.get("pickUpLocation"),
      destinationLocation: data.get("destinationLocation"),
      selectVehicle: data.get("selectVehicle"),
      goodsSelectType: data.get("setGoodsSelectType"),
    };

    if (!newData.pickUpLocation) {
      setPickUpLocation(false);
    }
    if (!newData.destinationLocation) {
      setDestinationLocation(false);
    }
    if (!newData.selectVehicle) {
      setSelectVehicle(false);
    }
    if (!newData.goodsSelectType) {
      setGoodsSelectType(false);
      return;
    }
  };

  const fetchVehicles = () => {
    dispatch(getVehicle());
  };
  const fetchGoods = () => {
    dispatch(getGoods());
  };

  // code to show gmaps
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
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3, textAlign: "-webkit-center" }}
        >
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
              options={topCities.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  ref={pickUp}
                  {...params}
                  name="pickUpLocation"
                  label="PickUp Location"
                  id="pickUpLocation"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  onChange={(e) => {
                    pickUp.current.value = e.target.value;
                    console.log(pickUp.current.value);
                  }}
                  onSelect={(e) => {
                    setPickUpLocation(true);
                    pickUp.current.value = e.target.value;
                    console.log(pickUp.current.value);
                  }}
                />
              )}
            />
            {!pickUpLocation && (
              <Alert severity="error">Location can't be empty!</Alert>
            )}

            <Autocomplete
              freeSolo
              ref={destination}
              id="free-solo-2-demo"
              disableClearable
              options={topCities.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="destinationLocation"
                  label="Destination Location"
                  id="destinationLocation"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  onChange={(e) => {
                    destination.current.value = e.target.value;
                    console.log(destination.current.value);
                  }}
                  onSelect={(e) => {
                    setDestinationLocation(true);
                    destination.current.value = e.target.value;
                    console.log(destination.current.value);
                  }}
                />
              )}
            />
            {!destinationLocation && (
              <Alert severity="error">Location can't be empty!</Alert>
            )}
            <Autocomplete
              freeSolo
              ref={vehicle}
              id="free-solo-2-demo"
              disableClearable
              options={vehicleType.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="selectVehicle"
                  label="Select Vehicle"
                  id="selectVehicle"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  onChange={(e) => {
                    vehicle.current.value = e.target.value;
                    console.log(vehicle.current.value);
                  }}
                  onClick={fetchVehicles}
                  onSelect={(e) => {
                    setSelectVehicle(true);
                    vehicle.current.value = e.target.value;
                    console.log(vehicle.current.value);
                  }}
                />
              )}
            />
            {!selectVehicle && (
              <Alert severity="error">Please select vehicle type!</Alert>
            )}
            <Autocomplete
              freeSolo
              ref={goodsType}
              id="free-solo-2-demo"
              disableClearable
              options={goods.map((good) => good.type)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="selectGoodsType"
                  label="select Goods Type"
                  id="SelectGoodsType"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  onChange={(e) => {
                    goodsType.current.value = e.target.value;
                    console.log(goodsType.current.value);
                  }}
                  onClick={fetchGoods}
                  onSelect={(e) => {
                    setGoodsSelectType(true);
                    goodsType.current.value = e.target.value;
                    console.log(goodsType.current.value);
                  }}
                />
              )}
            />
            {!goodsSelectType && (
              <Alert severity="error">Please Select type of good !</Alert>
            )}
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Contained
            </Button>
          </Stack>
        </Box>
      </div>
      <div></div>
    </>
  );
}

export default BookTruck;
