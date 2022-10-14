import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addGoods, goodsAction } from "../store/goodsReducer";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import LinearProgress from "@mui/material/LinearProgress";

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

export default function AddProductModal(props) {
  //   const [open, setOpen] = React.useState(false);

  //   to close the modal
  const handleClose = () => props.setOpen(false);

  const dispatch = useDispatch();
  const { addOpen, add, addMessage, isLoadingG } = useSelector(
    (state) => state.goods
  );

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

  const handleClose1 = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(goodsAction.clearMessage());
    setState({ ...state, open: false });
  };

  //   to get value
  const [type, setType] = React.useState("");

  //   for validation
  const [typeError, setTypeError] = React.useState(true);

  //   to handle validation and dispatch
  const handleSubmit = () => {
    if (type === "") {
      setTypeError(false);
      return;
    }
    dispatch(addGoods({ type }));

    setType("");
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.Open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.Open}>
          <Box sx={style}>
            {isLoadingG && (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ ml: "35%" }}
            >
              Add Product
            </Typography>
            {add && (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={addOpen}
                autoHideDuration={3000}
                key={vertical + horizontal}
                onClose={handleClose1}
              >
                <Alert
                  onClose={handleClose1}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  {addMessage}
                </Alert>
              </Snackbar>
            )}
            {!add && (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={addOpen}
                autoHideDuration={3000}
                key={vertical + horizontal}
                onClose={handleClose1}
              >
                <Alert
                  onClose={handleClose1}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {addMessage}
                </Alert>
              </Snackbar>
            )}

            <Box>
              <TextField
                sx={{ ml: 12, mt: 2 }}
                id="type"
                name="type"
                label="Enter goods Type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  setTypeError(true);

                  if (e.target.value === "") {
                    setTypeError(false);
                  }
                }}
              />
              {!typeError && (
                <Alert
                  variant="outlined"
                  severity="error"
                  sx={{ width: "55%", ml: 10, mt: 2, p: -5 }}
                >
                  Please enter Type of Good
                </Alert>
              )}
            </Box>
            <Button
              variant="outlined"
              sx={{ mt: 2, ml: 13, width: "49%" }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
