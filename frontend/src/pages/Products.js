import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGoods, deleteGoods, goodsAction } from "../store/goodsReducer";

import Navbar from "../component/Navbar";

import MuiAlert from "@mui/material/Alert";
import Alert from "@mui/material";
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
import AddProductModal from "../component/AddProductModal";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

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

// for snackbar
function Products() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGoods());

    // setTimeout(() => {
    //   dispatch(goodsAction.clearMessage());
    // }, 3000);
  }, []);

  // for transition of the snackbar
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(goodsAction.clearMessage());
  };

  const { goodsType, update, error, Delete, open } = useSelector(
    (state) => state.goods
  );

  // state to open modal
  const [modal, setModal] = React.useState(false);
  const [Open, setOpen] = React.useState(false);

  return (
    <div>
      <Navbar />
      {modal && <AddProductModal Open={Open} setOpen={setOpen} />}
      {Delete && (
        <Snackbar
          TransitionComponent={TransitionLeft}
          open={open}
          autoHideDuration={3000}
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
            {goodsType.map((goods, index) => (
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
      <Button
        variant="contained"
        sx={{ ml: 40, mt: 2, width: "50%" }}
        onClick={() => {
          setModal(true);
          setOpen(true);
        }}
      >
        Add Goods
      </Button>
    </div>
  );
}

export default Products;
