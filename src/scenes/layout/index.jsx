import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import axios from "axios";
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);


  useEffect(() => {
    getAllUsers();
  }, [])
  const [t, setT] = useState('');
  // const { data } = useGetUserQuery(userId);
  // console.log('Data ', data);
  const id = JSON.parse(localStorage.getItem('id'));
  // let t = {};
  const getAllUsers = () => {

    axios({
      method: 'get',
      url: `http://localhost:5001/general/user/${id}`,
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(function (response) {
        //handle success
        const dt = response?.data;
        setT(dt);
        console.log('Response ', response);
        console.log('Response int dt', dt);

      })
      .catch(function (response) {
        //handle error
        console.log('catch error', response);
      });
  }
  // const { data } = t;
  console.log('Data as t ', t);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={t}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={t}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
