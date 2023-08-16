import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { getSessionToken } from "@descope/react-sdk";
const columns = [
  { field: "id", headerName: "Transaction ID", width: 200 },
  { field: "from", headerName: "From", width: 130 },
  { field: "to", headerName: "To", width: 130 },
  {
    field: "ampunt",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "Status",
    description: "Status of the UPI Transaction",
    sortable: true,
    width: 160,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    description: "Remarks of the UPI Transaction",
    sortable: false,
    width: 160,
  },
];
const sessionToken = getSessionToken();
var rows = [];
fetch("https://nn55qv-3003.csb.app/getTransactions", {
  method: "GET",
  headers: { Authorization: "Bearer " + sessionToken },
})
  .then((res) => {
    rows = res.data;
  })
  .catch((err) => {
    console.log(err);
  });

function Table2() {
  return (
    <div
      style={{
        height: "50%",
        width: "100%",
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%", textAlign: "center" }}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        <br />
        <hr />
        UPI Transactions
        <hr />
        <br />
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
export default Table2;
