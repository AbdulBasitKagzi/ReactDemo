import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrder } from "../store/orderReducer";
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

function Order() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getOrder());

    // eslint-disable-next-line
  }, []);

  const { orderData } = useSelector((state) => state.order);

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {orderData == "" && <Typography>No data found</Typography>}
        <TableContainer>
          <Typography variant="h4" align="center" sx={{ p: 2 }}>
            Orders
          </Typography>
          <Table
            stickyHeader
            sx={{ width: "95%", border: 1, mb: 2 }}
            align="center"
            aria-label="sticky table"
          >
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
            <TableBody sx={{ border: 1 }}>
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
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <BasicFooter />
    </div>
  );
}

export default Order;
