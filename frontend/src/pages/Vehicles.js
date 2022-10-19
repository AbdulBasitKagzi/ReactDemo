import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Image } from "cloudinary-react";

import { getVehicle } from "../store/vehicleReducer";
import { deleteVehicle, vehicleAction } from "../store/vehicleReducer";
import Navbar from "../component/Navbar";
import AddModal from "../component/AddModal";
import UpdateVehicleModal from "../component/UpdateVehicleModal";

import "./Vehicles.css";

// mui imports
import Slide from "@mui/material/Slide";
import MuiAlert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import BasicFooter from "../component/BasicFooter";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// to style table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// for circular progressbar with number

function Vehicles() {
  // for snackbar
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const dispatch = useDispatch();

  // use effect to fetch vehicle and and to clear the delete message
  React.useEffect(() => {
    dispatch(getVehicle());

    // setTimeout(() => {
    //   dispatch(vehicleAction.clearMessage());
    // }, 3000);

    // eslint-disable-next-line
  }, []);

  // to close the error snackbar
  const handleClose1 = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(vehicleAction.clearMessage());
  };

  // for transition of the snackbar
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  // state to open addvehicle modal
  const [modal, setModal] = React.useState(false);

  // this state is passed as a prop to open modal
  const [Open, setOpen] = React.useState(false);

  // state to open update vehicle modal
  const [updateModal, setUpdateModal] = React.useState(false);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  // data from redux
  const { vehicleType, Delete, deleteOpen, deleteMessage, isLoading } =
    useSelector((state) => state.vehicle);

  return (
    <div>
      <Navbar />
      {modal && (
        <AddModal
          setOpen={setOpen}
          open={Open}
          typeLabel="type"
          vnumberLabel={"vNumber"}
          capacityLabel={"capacity"}
          initialpriceLabel={"initialPrice"}
        />
      )}
      {updateModal && (
        <UpdateVehicleModal
          update={updateOpen}
          setUpdateOpen={setUpdateOpen}
          value={value}
          typeLabel="type"
          vnumberLabel="vNumber"
          capacityLabel="capacity"
          initialpriceLabel="initialPrice"
        />
      )}
      {Delete && (
        <Snackbar
          TransitionComponent={TransitionLeft}
          open={deleteOpen}
          autoHideDuration={3000}
          onClose={handleClose1}
        >
          <Alert
            onClose={handleClose1}
            severity="success"
            sx={{ width: "100%" }}
          >
            {deleteMessage}
          </Alert>
        </Snackbar>
      )}
      {Delete === false && (
        <Snackbar
          TransitionComponent={TransitionLeft}
          open={deleteOpen}
          autoHideDuration={3000}
          onClose={handleClose1}
        >
          <Alert onClose={handleClose1} severity="error" sx={{ width: "100%" }}>
            {deleteMessage}
          </Alert>
        </Snackbar>
      )}
      {isLoading && (
        <Box sx={{ display: "flex", ml: "50%" }}>
          <CircularProgress />
        </Box>
      )}
      <Paper sx={{ ml: "15%", width: "70%", overflow: "hidden" }}>
        <TableContainer>
          <Typography variant="h4" align="center" sx={{ p: 2 }}>
            Vehicles
          </Typography>
          {vehicleType.length === 0 && <Typography>No data found</Typography>}
          <Table
            sx={{ width: 900, border: 1, mb: 2 }}
            align="center"
            aria-label="simple table"
          >
            {vehicleType.length !== 0 && (
              <TableHead>
                <StyledTableRow sx={{ border: 1 }}>
                  <StyledTableCell sx={{ border: 1 }}>No.</StyledTableCell>

                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Type
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    VNumber
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Capacity
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    InitialPrice
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1 }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1 }}
                  ></StyledTableCell>
                </StyledTableRow>
              </TableHead>
            )}
            <TableBody>
              {vehicleType.map((vehicle, index) => (
                <StyledTableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                >
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ border: 1 }}
                  >
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, display: "flex" }}
                  >
                    <Image
                      className="cloudinary_image"
                      cloudName="dhf3mwsj8"
                      publicId={vehicle.imageUrl}
                    />
                    {vehicle.type}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    {vehicle.vNumber}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    {vehicle.capacity}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    {vehicle.initialPrice}
                  </StyledTableCell>
                  {/* update button */}
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    <Button
                      onClick={() => {
                        setUpdateModal(true);
                        setUpdateOpen(true);
                        setValue(vehicleType[index]);
                        console.log(vehicleType[index]);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </StyledTableCell>

                  {/* delete button */}
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    <Button
                      onClick={() => {
                        const id = vehicle._id;
                        dispatch(deleteVehicle(id));
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button
        variant="contained"
        sx={{ ml: 40, mt: 2, width: "50%" }}
        onClick={() => {
          setModal(true);
          setOpen(true);
        }}
      >
        Add Vehicle
      </Button>
      <BasicFooter />
    </div>
  );
}

export default Vehicles;
