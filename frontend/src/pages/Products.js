import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGoods, deleteGoods, goodsAction } from "../store/goodsReducer";

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

function Products() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGoods());

    setTimeout(() => {
      dispatch(goodsAction.clearMessage());
    }, 3000);
  }, []);


  const { goods, update, error } = useSelector((state) => state.goods);

  return (
    <div>
      <Navbar />
      {update && (
        <Alert severity="success"  sx={{ width: "50%", marginLeft:42 }}>
          {error}
        </Alert>
      )}
      <TableContainer>
        <Typography variant="h4" align="center" sx={{ p: 2 }}>
          Products
        </Typography>
        <Table
          sx={{ minWidth: 650, border: 1, width: 500, mb: 2 }}
          align="center"
          aria-label="simple table"
        >
          <TableHead sx={{ border: 1 }}>
            <StyledTableRow sx={{ border: 1 }}>
              <StyledTableCell align="center">No.</StyledTableCell>

              <StyledTableCell align="center" sx={{ border: 1 }}>
                Type
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody sx={{ border: 1 }}>
            {goods.map((goods, index) => (
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
                  {goods.type}
                </StyledTableCell>

                <StyledTableCell align="center" sx={{ border: 1 }}>
                  <Button
                    onClick={() => {
                      dispatch(deleteGoods(goods._id));
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

export default Products;
