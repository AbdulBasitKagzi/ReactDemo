import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrder, order } from "../store/orderReducer";
import Navbar from "../component/Navbar";

// mui imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicFooter from "../component/BasicFooter";
import { DataGrid } from "@mui/x-data-grid";

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

// pagination table
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "FirstName", headerName: "First name", width: 80 },
  { field: "LastName", headerName: "Last name", width: 80 },
  {
    field: "goods",
    headerName: "Goods",
    width: 160,
  },
  {
    field: "vehicle",
    headerName: "Vehicle",
    width: 160,
  },
  {
    field: "Weight",
    headerName: "Weight",
    width: 160,
  },
  {
    field: "p",
    headerName: "PickUp",
    width: 160,
  },
  {
    field: "d",
    headerName: "Destination",
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Order() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getOrder());

    // eslint-disable-next-line
  }, []);

  const { orderData } = useSelector((state) => state.order);

  const row = orderData.map(
    (
      { FirstName, LastName, vehicle, goodsType, Weight, pickUp, destination },
      index
    ) => {
      return {
        id: index + 1,
        FirstName: FirstName,
        LastName: LastName,
        vehicle: vehicle,
        goods: goodsType,
        Weight: Weight,
        p: pickUp,
        d: destination,
      };
    }
  );

  return (
    <div>
      <Navbar />
      {/* table */}
      <Paper
        sx={{
          width: { lg: "95%", xs: "80%" },
          overflow: "hidden",
          p: 2,
          ml: { lg: 2, md: 10, xs: 2 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ p: 2 }}>
          Orders
        </Typography>
        <div style={{ height: 400, width: { lg: "90%", xs: "95%" } }}>
          <DataGrid
            sx={{ ml: { lg: "1%", xs: "2%" }, mb: 2 }}
            rows={row}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Paper>

      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Typography variant="h4" align="center" sx={{ p: 2 }}>
            Orders
          </Typography> */}
      {orderData.length === 0 && <Typography>No data found</Typography>}
      {/* <Table
            stickyHeader
            sx={{ width: "80%", border: 1, mb: 2 }}
            align="center"
            aria-label="sticky table"
          >
            {orderData.length !== 0 && (
              <TableHead sx={{ border: 1 }}>
                <StyledTableRow sx={{ border: 1 }}>
                  <StyledTableCell align="center">No.</StyledTableCell>

                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Goods
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Vehicle
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Weight
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    PickUp
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    Destination
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    payment
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
            )} */}
      {/* <TableBody sx={{ border: 1 }}>
              {orderData?.map((data, index) => (
                <StyledTableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 1 },
                    border: 1,
                  }}
                >
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ border: 1 }}
                    align="center"
                  >
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.FirstName} {data.LastName}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.goodsType}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.vehicle}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.Weight}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.pickUp}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.destination}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: 1, size: "small" }}
                  >
                    {data.paymentStatus}
                  </StyledTableCell>

                  {/* <StyledTableCell align="center" sx={{ border: 1 }}>
                    <Button>Delete</Button>
                  </StyledTableCell> */}
      {/* </StyledTableRow>
              ))}
            </TableBody> */}
      {/* </Table>
        </TableContainer> */}
      {/* </Paper> */}

      <BasicFooter />
    </div>
  );
}

export default Order;
