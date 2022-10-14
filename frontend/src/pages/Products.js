import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoods, deleteGoods, goodsAction } from "../store/goodsReducer";

import Navbar from "../component/Navbar";

// mui imports
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
import AddProductModal from "../component/AddProductModal";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";

import UpdateProductModal from "../component/UpdateProductModal";
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
    // eslint-disable-next-line
  }, []);

  // for transition of the snackbar
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClose1 = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(goodsAction.clearMessage());
  };

  const { goodsType, Delete, deleteOpen, deleteMessage } = useSelector(
    (state) => state.goods
  );

  // state to open modal
  const [modal, setModal] = React.useState(false);
  const [Open, setOpen] = React.useState(false);

  const [updateModal, setUpdateModal] = React.useState(false);
  const [updateOpen, setUpdateOpen] = React.useState(false);

  const [type, setType] = React.useState();
  const [id, setId] = React.useState();
  return (
    <div>
      <Navbar />
      {updateModal && (
        <UpdateProductModal
          Open={updateOpen}
          setOpen={setUpdateOpen}
          type={type}
          setType={setType}
          id={id}
        />
      )}
      {modal && <AddProductModal Open={Open} setOpen={setOpen} />}

      {/* to show alert */}
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
      <Paper sx={{ ml: "25%", width: "50%", overflow: "hidden" }}>
        {goodsType == "" && <Typography>No data found</Typography>}
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
                <StyledTableCell align="center" sx={{ border: 1 }}>
                  No.
                </StyledTableCell>

                <StyledTableCell align="center" sx={{ border: 1 }}>
                  Type
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

                  {/* update button */}
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    <Button
                      onClick={() => {
                        setUpdateModal(true);
                        setUpdateOpen(true);

                        console.log(goodsType[index].type);
                        setType(goodsType[index].type);
                        setId(goodsType[index]._id);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </StyledTableCell>

                  {/* delete button */}
                  <StyledTableCell align="center" sx={{ border: 1 }}>
                    <Button
                      onClick={() => {
                        dispatch(deleteGoods(goods._id));
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
        sx={{ ml: 42, mt: 2, width: "50%" }}
        onClick={() => {
          setModal(true);
          setOpen(true);
        }}
      >
        Add Goods
      </Button>
      <BasicFooter />
    </div>
  );
}

export default Products;
