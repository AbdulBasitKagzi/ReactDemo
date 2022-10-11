import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { goodsAction } from "../store/goodsReducer";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { updateGoods } from "../store/goodsReducer";

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

export default function UpdateProductModal(props) {
  const handleClose = () => props.setOpen(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // for transition purpose
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const dispatch = useDispatch();
  const { update, updateMessage, open } = useSelector((state) => state.goods);

  //   to close the alert
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(goodsAction.clearMessage());
    setState({ ...state, open: false });
  };

  //   for validation
  const [typeError, setTypeError] = React.useState(true);

  const handleSubmit = () => {
    if (props.type === "") {
      setTypeError(false);
      return;
    }
    dispatch(updateGoods({ id: props.id, type: props.type }));
  };

  return (
    <div>
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
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ ml: "35%" }}
            >
              Update Product
            </Typography>
            {update && (
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
                  {updateMessage}
                </Alert>
              </Snackbar>
            )}
            {update === false && (
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
                  {updateMessage}
                </Alert>
              </Snackbar>
            )}
            <Box>
              <TextField
                sx={{ ml: 12, mt: 2 }}
                id="type"
                name="type"
                label="Enter goods Type"
                value={props.type}
                onChange={(e) => {
                  props.setType(e.target.value);
                  console.log(props.type);
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
