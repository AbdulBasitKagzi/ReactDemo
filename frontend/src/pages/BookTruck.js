import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { getVehicle } from "../store/vehicleReducer";
import { getGoods } from "../store/goodsReducer";
import { orderAction } from "../store/orderReducer";

import { motion } from "framer-motion";
import "./BookTruck.css";

// mui imports
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import BasicFooter from "../component/BasicFooter";

// google maps api to use maps services
// it will provide use with a varible called is loaded
// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

function BookTruck() {
  const topCities = [
    "Surat",
    "Ahmedabad",
    "Chennai",
    "Delhi",
    "Rajasthan",
    "Banglore",
    "Pujab",
    "Kolkata",
    "Hyderabad",
    "Mumbai",
  ];

  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  // states for validations
  const [pickUpLocation, setPickUpLocation] = React.useState(true);

  const [destinationLocation, setDestinationLocation] = React.useState(true);
  const [selectVehicle, setSelectVehicle] = React.useState(true);
  const [goodsSelectType, setGoodsSelectType] = React.useState(true);
  const [goodsWeight, setGoodsWeight] = React.useState(true);
  const [Distance, setDistance] = React.useState(true);
  const [price, setPrice] = React.useState(null);
  const [info, setInfo] = React.useState(true);

  // refs to store value
  const pickUp = React.useRef(null);
  const destination = React.useRef(null);
  const GoodsType = React.useRef(null);
  const vehicle = React.useRef(null);
  const Weight = React.useRef(null);
  const distance = React.useRef(null);

  const [Rate, setRate] = React.useState();
  const [Capacity, setCapacity] = React.useState();

  const dispatch = useDispatch();

  const { vehicleType, isLoading } = useSelector((state) => state.vehicle);
  const { goodsType, isLoadingG } = useSelector((state) => state.goods);
  const { data } = useSelector((state) => state.order);

  const navigate = useNavigate();

  React.useEffect(() => {
    // to get all vehicles
    dispatch(getVehicle());
    // to get  all goods
    dispatch(getGoods());

    pickUp.current.value = data.pickUp;
    destination.current.value = data.destination;
    vehicle.current.value = data.vehicle;
    GoodsType.current.value = data.goodsType;
    Weight.current.value = data.Weight;
    distance.current.value = data.distance;
    setRate(data.rate);
    setCapacity(data.capacity);
    setPrice(data.price);
    // eslint-disable-next-line
  }, []);

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    // to get data
    const newData = {
      pickUpLocation: data.get("pickUpLocation"),
      destinationLocation: data.get("destinationLocation"),
      selectVehicle: data.get("selectVehicle"),
      goodsSelectType: data.get("goodsSelectType"),
      goodsWeight: data.get("goodsWeight"),
      Distance: data.get("Distance"),
    };

    // for validation purpose
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
    }
    if (!newData.goodsWeight) {
      setGoodsWeight(false);
    }
    if (!newData.Distance) {
      setDistance(false);
      setInfo(false);
      return;
    } else if (newData.Distance <= 0) {
      setDistance(false);
      setInfo(false);
      return;
    }
    if (!topCities.includes(pickUp.current.value)) {
      setPickUpLocation(false);
    }
    if (!topCities.includes(destination.current.value)) {
      setDestinationLocation(false);
      return;
    } else {
      setPickUpLocation(true);
      setDestinationLocation(true);
    }

    // dispatching order
    dispatch(
      orderAction.addOrder({
        pickUp: pickUp.current.value,
        destination: destination.current.value,
        goodsType: GoodsType.current.value,
        vehicle: vehicle.current.value,
        Weight: Weight.current.value,
        distance: distance.current.value,
        price: price,
        capacity: Capacity,
        rate: Rate,
      })
    );

    //  setting order to localStorage
    localStorage.setItem(
      "abdulOrder",
      JSON.stringify({
        pickUp: pickUp.current.value,
        destination: destination.current.value,
        goodsType: GoodsType.current.value,
        vehicle: vehicle.current.value,
        Weight: Weight.current.value,
        distance: distance.current.value,
        price: price,
      })
    );
    navigate("/user/checkout");
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Box sx={{ backgroundColor: "whitesmoke", mt: -6, pt: 5 }}>
          <ThemeProvider theme={theme}>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  color: "black",
                  fontFamily: "Roboto ",
                }}
              >
                <span
                  style={{
                    color: "white",
                    backgroundColor: "#e00029",
                    padding: 5,
                  }}
                >
                  Book
                </span>{" "}
                Vehicle
              </Typography>
            </motion.div>
          </ThemeProvider>

          <div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, textAlign: "-webkit-center" }}
            >
              <Stack spacing={2} sx={{ width: { lg: 1000, xs: 350 } }}>
                {/* for pickup location */}

                <Typography
                  variant="h6"
                  sx={{ marginRight: 120, fontSize: 15 }}
                >
                  PickUpLocation
                </Typography>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={topCities}
                  defaultValue={data.pickUp}
                  renderInput={(params) => (
                    <TextField
                      ref={pickUp}
                      {...params}
                      name="pickUpLocation"
                      label="PickUp Location"
                      id="pickUpLocation"
                      defaultValue={data.pickUp}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                      onChange={(e) => {
                        pickUp.current.value = e.target.value;
                        setPickUpLocation(true);
                      }}
                      onSelect={(e) => {
                        setPickUpLocation(true);

                        pickUp.current.value = e.target.value;
                      }}
                    />
                  )}
                />

                {!pickUpLocation && (
                  <Alert severity="error">Please Enter Correct Location!</Alert>
                )}

                {/* for destination location */}

                <div>
                  <Typography
                    variant="h6"
                    sx={{ marginRight: 120, fontSize: 15 }}
                  >
                    DestinationLocation
                  </Typography>
                </div>
                <Autocomplete
                  freeSolo
                  ref={destination}
                  id="free-solo-2-demo"
                  disableClearable
                  options={topCities}
                  defaultValue={data.destination}
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
                      }}
                      onSelect={(e) => {
                        setDestinationLocation(true);
                        destination.current.value = e.target.value;
                      }}
                    />
                  )}
                />
                {!destinationLocation && (
                  <Alert severity="error">
                    Please Enter Correct Destination
                  </Alert>
                )}

                {/* to select vehicle */}
                {isLoading && (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                )}
                <div>
                  <Typography
                    variant="h6"
                    sx={{ marginRight: 120, fontSize: 15 }}
                  >
                    SelectTruckType
                  </Typography>
                </div>
                <Autocomplete
                  freeSolo
                  ref={vehicle}
                  id="free-solo-2-demo"
                  disableClearable
                  options={vehicleType.map((option, index) => {
                    return option.type;
                  })}
                  defaultValue={data.vehicle}
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
                      }}
                      onSelect={(e) => {
                        setSelectVehicle(true);
                        vehicle.current.value = e.target.value;

                        // taking rate
                        const rate = vehicleType?.map((v) => {
                          return v.type === vehicle.current.value
                            ? v.initialPrice
                            : 0;
                        });

                        const newRate = rate.filter((r) => {
                          if (r !== 0) {
                            return r;
                          }
                        });

                        setRate(newRate[0]);

                        // getting capacity
                        const capacity = vehicleType?.map((v) => {
                          return v.type === vehicle.current.value
                            ? v.capacity
                            : 0;
                        });

                        const newCapacity = capacity.filter((cap) => {
                          if (cap !== 0) {
                            return cap;
                          }
                        });

                        setCapacity(newCapacity[0]);
                      }}
                    />
                  )}
                />
                {!selectVehicle && (
                  <Alert severity="error">
                    Please select correct vehicle type!
                  </Alert>
                )}
                {/* Capacity of vehicle */}
                {Capacity && (
                  <TextField
                    name="Capacity"
                    id="Capacity"
                    label="Capacity in TON"
                    value={Capacity}
                    disabled
                  ></TextField>
                )}
                {/* Rate of vehicle */}
                {Rate && (
                  <TextField
                    name="Rate"
                    id="Rate"
                    label="Rate Per KM"
                    value={Rate}
                    disabled
                  ></TextField>
                )}

                {/* to select goods */}
                {isLoadingG && (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                )}
                <div>
                  <Typography
                    variant="h6"
                    sx={{ marginRight: 120, fontSize: 15 }}
                  >
                    SelectGoodsType
                  </Typography>
                </div>
                <Autocomplete
                  freeSolo
                  ref={GoodsType}
                  id="free-solo-2-demo"
                  disableClearable
                  options={goodsType.map((good) => {
                    return good.type;
                  })}
                  defaultValue={data.goodsType}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="goodsSelectType"
                      label="select Goods Type"
                      id="goodsSelectType"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                      onChange={(e) => {
                        GoodsType.current.value = e.target.value;
                      }}
                      onSelect={(e) => {
                        setGoodsSelectType(true);
                        GoodsType.current.value = e.target.value;
                      }}
                    />
                  )}
                />
                {!goodsSelectType && (
                  <Alert severity="error">
                    Please Select correct type of goods !
                  </Alert>
                )}
                {/* for wieght */}
                <Box sx={{ display: "-webkit-flex" }}>
                  <TextField
                    ref={Weight}
                    id="outlined-number"
                    name="goodsWeight"
                    label="Weight"
                    type="number"
                    placeholder="1000Kg=1TON"
                    value={data.Weight}
                    sx={{ width: { lg: 950, xs: 300 } }}
                    onChange={(e) => {
                      Weight.current.value = e.target.value;
                      setGoodsWeight(true);

                      // for weight validation
                      if (
                        (Weight.current.value !== 0 &&
                          Weight.current.value === +Capacity) ||
                        (Weight.current.value <= +Capacity &&
                          Weight.current.value > 0)
                      ) {
                      } else if (Weight.current.value === 0) {
                        setGoodsWeight(false);
                      } else {
                        setGoodsWeight(false);
                      }
                    }}
                  />

                  <TextField
                    id="outlined-number"
                    label="TON"
                    type="text"
                    sx={{ width: 65 }}
                    disabled
                  />
                </Box>
                {!goodsWeight && (
                  <Alert severity="error">Please Enter proper Weight !</Alert>
                )}
                <div>
                  <Typography
                    variant="h6"
                    sx={{ marginRight: 120, fontSize: 15 }}
                  >
                    EnterDistance
                  </Typography>
                </div>
                <TextField
                  ref={distance}
                  id="outlined-basic"
                  label="Distance"
                  name="Distance"
                  variant="outlined"
                  value={data.distance}
                  sx={{ width: { lg: 1000, xs: 350 } }}
                  placeholder="Enter Distance in KM"
                  type="number"
                  onChange={(e) => {
                    distance.current.value = e.target.value;

                    setDistance(true);
                    setInfo(true);

                    setPrice(distance.current.value * Rate);
                  }}
                />
                <Box>
                  {info && (
                    <Alert severity="info">
                      Claculate Distance from below distance calculator
                    </Alert>
                  )}
                  {!Distance && (
                    <Alert severity="error">
                      Please Enter Correct Distance !
                    </Alert>
                  )}
                  <Box sx={{ width: { lg: 1000 } }}>
                    <iframe
                      className="iclass"
                      src="https://distancecalculator.globefeed.com/India_Distance_Calculator.asp"
                      title="distance calculator"
                      style={{ border: 0, paddingTop: 5 }}
                    />
                  </Box>
                </Box>
              </Stack>

              <Stack
                spacing={2}
                direction="row"
                sx={{ marginLeft: { lg: 25 }, padding: 3 }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: { lg: 900, xs: 500 } }}
                >
                  Save
                </Button>
              </Stack>
            </Box>
          </div>
        </Box>
        <BasicFooter />
      </motion.div>
    </>
  );
}

export default BookTruck;
