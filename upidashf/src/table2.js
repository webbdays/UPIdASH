import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

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

const rows = [
  {
    id: 4567328754326575,
    from: "x1",
    to: "y1",
    ampunt: 35,
    status: "success",
    remarks: "shopping",
  },
  {
    id: 45673274867253676,
    from: "x1",
    to: "y2",
    ampunt: 35,
    status: "Failed",
    remarks: "food",
  },
  {
    id: 45673287543876176,
    from: "x1",
    to: "y2",
    ampunt: 35,
    status: "success",
    remarks: "food",
  },
  {
    id: 72336538761386438,
    from: "x2",
    to: "y3",
    ampunt: 500,
    status: "success",
    remarks: "electricity bill",
  },
  {
    id: 43647663827638763,
    from: "Snow",
    to: "Jon",
    ampunt: 10000,
    status: "success",
    remarks: "rent",
  },
  {
    id: 873563489478543673,
    from: "Snow",
    to: "Jon",
    ampunt: 70,
    status: "success",
    remarks: "food",
  },
  {
    id: 84765485612348731,
    from: "Snow",
    to: "Jon",
    ampunt: 35,
    status: "success",
    remarks: "shopping",
  },
  {
    id: 783673673563387,
    from: "Snow",
    to: "Jon",
    ampunt: 35,
    status: "success",
    remarks: "shopping",
  },
  {
    id: 87635456373489137376,
    from: "Snow",
    to: "Jon",
    ampunt: 35,
    status: "success",
    remarks: "shopping",
  },
];

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
