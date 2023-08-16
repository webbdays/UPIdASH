import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

const sample_transactions = [
  ["4567328754326575", "x1", "y1", "shopping", 100, "Success"],
  ["5633212788985423", "x1", "y4", "food", 70, "Failed"],
  ["5633212788985423", "x1", "y4", "food", 70, "Success"],
  ["5643245788553765", "x2", "y2", "auto ride", 150, "Success"],
  ["7665430231768854", "x3", "y3", "savings", 10000, "Success"],
];

function createData(id, transactionId, from, to, remarks, amount, status) {
  return { id, transactionId, from, to, remarks, amount, status };
}

const columns = [
  {
    width: 200,
    label: "Transaction ID",
    dataKey: "transactionId",
  },
  {
    width: 120,
    label: "From",
    dataKey: "from",
  },
  {
    width: 120,
    label: "To",
    dataKey: "to",
  },
  {
    width: 120,
    label: "Remarks",
    dataKey: "remarks",
  },
  {
    width: 120,
    label: "Amount",
    dataKey: "amount",
    numeric: true,
  },
  {
    width: 120,
    label: "Status",
    dataKey: "status",
  },
];

// const rows = Array.from({ length: 200 }, (_, index) => {
//   const randomSelection =
//     sample_transactions[Math.floor(Math.random() * sample_transactions.length)];
//   return createData(index, ...randomSelection);
// });
const rows = sample_transactions.map((sample_transaction, index) => {
  //console.log(index);
  return createData(index, ...sample_transaction);
});
// console.log(rows);

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

export const Table1 = () => {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};
