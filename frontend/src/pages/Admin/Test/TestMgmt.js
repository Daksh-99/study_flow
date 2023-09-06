import React, { useState } from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import { Button, Stack } from "@mui/material";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
// import './Product.scss';
import { TestTable } from "../../../components/AdminTest/TestTable";
export const TestMgmt = () => {

  return (
    <div
      style={{
        display: "flex",
        margin: 0,
        padding: 0,
        background: "#F1F2F5",
        fontFamily: "Lato",
      }}
    >
      <AdminSidebar />
      <div className="main-dash">
        <AdminNavbar />
        <div className="main-user-dash">
            <Stack sx={{ width: '90%'}}>
                <div className="all-user-strip">
                    All Test Series
                </div>
                <div>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    justifyContent="end"
                    >
                        <Button
                            variant="contained"
                            sx={{
                                background: "#025D97"
                            }}
                        >
                            Create a Test
                        </Button>
                    </Stack>
                </div>
                <div className="userGrid">
                    <TestTable />
                </div>
            </Stack>
        </div>
      </div>
    </div>
  );
};
