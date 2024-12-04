import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AppBar, Button, Box, Toolbar, IconButton, Grid2 } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const rows = [
  {
    AmazonOrderId: "114-0102139-8411438",
    PurchaseDate: "2024-12-04T00:03:22Z",
    DefaultShipFromLocationAddress: { Name: "V M Enterprises" },
    OrderTotal: {
      Amount: "29.15",
    },
  },
  {
    AmazonOrderId: "114-0102139-8411439",
    PurchaseDate: "2024-12-05T00:03:22Z",
    DefaultShipFromLocationAddress: { Name: "B Enterprises" },
    OrderTotal: {
      Amount: "21.15",
    },
  },
];

const columns = [
  { field: "PurchaseDate", headerName: "Date", width: 150 },
  {
    field: "BuyerName",
    headerName: "Buyer Name",
    width: 180,
    valueGetter: (value, row) =>
      row?.DefaultShipFromLocationAddress?.Name || "null", // Safely access nested property
  },
  { field: "SKU", headerName: "SKU", width: 100 }, //not available
  { field: "AmazonOrderId", headerName: "Amazon Order ID", width: 200 },
  {
    field: "Amazon Price",
    headerName: "Amazon Price",
    width: 150,
    valueGetter: (value, row) => `$ ${row?.OrderTotal?.Amount}` || "null",
  },
  { field: "col22", headerName: "Quantity", width: 150 },
  { field: "col13", headerName: "Source Price", width: 150 },
  { field: "col245", headerName: "Shipping", width: 150 },
  { field: "col16", headerName: "Tax", width: 150 },
  { field: "col27", headerName: "Expedited Shipping", width: 150 },
  { field: "col18sd", headerName: "Profit", width: 150 },
  { field: "col299", headerName: "Profit %", width: 150 },
  { field: "col2995", headerName: "Notes", width: 150 },
  { field: "col55299", headerName: "Total Profit:", width: 150 },
  { field: "col2599", headerName: "VALUE", width: 150 },
  { field: "col2499", headerName: "Tracking", width: 150 },
  { field: "col2899", headerName: "Carrier", width: 150 },
  { field: "col44299", headerName: "Tracking Status", width: 150 },
  { field: "col28939", headerName: "Shipped Date", width: 150 },
  { field: "col52399", headerName: "Review Requested", width: 150 },
];
export default function App() {
  return (
    <div className="min-h-screen max-h-full ">
      <div></div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <img
                    src={require("./seller-central_logo-white.svg")}
                    alt="logo"
                    style={{ height: "auto", width: "220px" }}
                  />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
          <Grid2
            container
            spacing={2}
            sx={{ padding: "10px" }}
            alignItems="stretch"
          >
            <Grid2 item xs={2}>
              <DatePicker fullWidth />
            </Grid2>
            <Grid2 item xs={3}>
              <DatePicker fullWidth />
            </Grid2>
            <Grid2 item xs={3} sx={{ display: "flex" }}>
              <Button
                size="large"
                variant="contained"
                sx={{ height: "100%", width: "100%" }}
              >
                Submit
              </Button>
            </Grid2>
          </Grid2>
          <div
            style={{
              height: "calc(100vh - 155px)",
              width: "98.5%",
              padding: "10px",
            }}
          >
            <DataGrid
              getRowId={(row) => row.AmazonOrderId}
              rows={rows}
              columns={columns}
            />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}
