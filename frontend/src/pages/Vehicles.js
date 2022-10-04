import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getVehicle } from "../store/vehicleReducer";
import { deleteVehicle, vehicleAction } from "../store/vehicleReducer";

import Navbar from "../component/Navbar";

import MuiAlert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

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

function Vehicles() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getVehicle());

    setTimeout(() => {
      dispatch(vehicleAction.clearMessage());
    }, 3000);
  }, []);

  const { vehicleType, update, error } = useSelector((state) => state.vehicle);

  return (
    <div>
      <Navbar />
      {update && (
        <Alert severity="success" sx={{ width: "50%", marginLeft: 42 }}>
          {error}
        </Alert>
      )}
      <TableContainer>
        <Typography variant="h4" align="center" sx={{ p: 2 }}>
          Vehicles
        </Typography>
        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
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
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {vehicleType.map((vehicle, index) => (
              <StyledTableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <StyledTableCell component="th" scope="row" sx={{ border: 1 }}>
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ border: 1 }}>
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
                <StyledTableCell align="center" sx={{ border: 1 }}>
                  <Button
                    onClick={() => {
                      const id = vehicle._id;
                      dispatch(deleteVehicle(id));
                    }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Vehicles;
