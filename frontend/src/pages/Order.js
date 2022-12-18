import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrder } from "../store/orderReducer";
import Navbar from "../component/Navbar";

// mui imports
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import BasicFooter from "../component/BasicFooter";
import { DataGrid } from "@mui/x-data-grid";

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

      {orderData.length === 0 && <Typography>No data found</Typography>}

      <BasicFooter />
    </div>
  );
}

export default Order;
