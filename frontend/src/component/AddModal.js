import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addVehicle } from "../store/vehicleReducer";
import { vehicleAction } from "../store/vehicleReducer";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Alert } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddModal(props) {
  
  // to close the model
  const handleClose = () => props.setOpen(false);

  // for snackbar
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // for transition purpose
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  // to close the snackbar
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(vehicleAction.clearMessage());
    setState({ ...state, open: false });
  };

  // for validation purpose
  const [typeerror, settypeError] = React.useState(true);
  const [numbererror, setnumberError] = React.useState(true);
  const [initialPriceerror, setinitialPriceError] = React.useState(true);
  const [capacityerror, setcapacityError] = React.useState(true);

  // for values
  const [type, setType] = React.useState("");
  const [vNumber, setvNumber] = React.useState("");
  const [initialPrice, setinitialPrice] = React.useState("");
  const [capacity, setCapacity] = React.useState("");

  const dispatch = useDispatch();
  const { add, error, open } = useSelector((state) => state.vehicle);

  // function for validation and dispatch
  const handleSumbit = () => {
    // validation
    if (
      type === "" &&
      vNumber === "" &&
      initialPrice === "" &&
      capacity === ""
    ) {
      settypeError(false);
      setnumberError(false);
      setinitialPriceError(false);
      setcapacityError(false);
      return;
    }
    if (type === "") settypeError(false);
    if (vNumber === "") setnumberError(false);
    if (initialPrice === "" || initialPrice < 10) setinitialPriceError(false);
    if (capacity === "" || capacity < 1) {
      setcapacityError(false);
      return;
    }

    if (
      type === "" ||
      vNumber === "" ||
      initialPrice === "" ||
      initialPrice < 10 ||
      capacity === "" ||
      capacity < 1
    ) {
      return;
    } else {
      // dispatch
      dispatch(
        addVehicle({
          type,
          vNumber,
          initialPrice,
          capacity,
        })
      );

      // empty the states
      setType("");
      setvNumber("");
      setCapacity("");
      setinitialPrice("");
    }
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            {add && (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                key={vertical + horizontal}
                onClose={handleClose1}
              >
                <Alert
                  onClose={handleClose1}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  {error}
                </Alert>
              </Snackbar>
            )}

            {add === false && (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                key={vertical + horizontal}
                onClose={handleClose1}
              >
                <Alert
                  onClose={handleClose1}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {error}
                </Alert>
              </Snackbar>
            )}

            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ ml: "35%" }}
            >
              Add Vehicle
            </Typography>
            <Box sx={{ display: "flex", p: 2 }}>
              <Box>
                <TextField
                  type="text"
                  id={props.typeLabel}
                  label={props.typeLabel}
                  name={props.typeLabel}
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);

                    settypeError(true);

                    if (e.target.value === "") {
                      settypeError(false);
                    }
                  }}
                />
                {!typeerror && (
                  <Alert
                    severity="error"
                    sx={{ mr: 2, fontSize: 12, height: 50 }}
                  >
                    Please Enter type of vehicle
                  </Alert>
                )}
              </Box>
              <Box>
                <TextField
                  type="text"
                  id={props.vnumberLabel}
                  label={props.vnumberLabel}
                  name={props.vnumberLabel}
                  sx={{ ml: 2 }}
                  value={vNumber}
                  onChange={(e) => {
                    setvNumber(e.target.value);

                    setnumberError(true);
                    if (e.target.value === "") {
                      setnumberError(false);
                    }
                  }}
                />
                {!numbererror && (
                  <Alert severity="error" sx={{ fontSize: 12, height: 50 }}>
                    Registered Number for Vehicle
                  </Alert>
                )}
              </Box>
            </Box>
            <Box sx={{ mt: 2, display: "flex", p: 2 }}>
              <Box>
                <TextField
                  type="number"
                  id={props.initialpriceLabel}
                  label={props.initialpriceLabel}
                  name={props.initialpriceLabel}
                  value={initialPrice}
                  onChange={(e) => {
                    setinitialPrice(e.target.value);

                    setinitialPriceError(true);
                    if (e.target.value === "") {
                      setinitialPriceError(false);
                    }
                  }}
                />
                {!initialPriceerror && (
                  <Alert
                    severity="error"
                    sx={{ mr: 2, fontSize: 12, height: 70 }}
                  >
                    Initial price must be or greater than 10
                  </Alert>
                )}
              </Box>
              <Box>
                <TextField
                  type="text"
                  id={props.capacityLabel}
                  label={props.capacityLabel}
                  name={props.capacityLabel}
                  sx={{ ml: 2 }}
                  value={capacity}
                  onChange={(e) => {
                    setCapacity(e.target.value);

                    setcapacityError(true);

                    if (e.target.value === "") {
                      setcapacityError(false);
                    }
                  }}
                />
                {!capacityerror && (
                  <Alert
                    severity="error"
                    sx={{ ml: 2, fontSize: 12, height: 70 }}
                  >
                    capacity must be greater or equal to 1
                  </Alert>
                )}
              </Box>
            </Box>

            <Button
              variant="outlined"
              sx={{ mt: 2, width: "inherit" }}
              onClick={handleSumbit}
            >
              Save
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddModal;
