import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MIscelleneousServiceIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/ContactPhone";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import logo from "../../asets/logo.png";
const Header = () => {
  const [mobile, setmobile] = useState({ left: false });

  function mobileDrawer(item) {
    navigate("/");
  }

  const navigate = useNavigate();

  const toogleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "shift")
    ) {
      return;
    }
    setmobile({ ...mobile, [anchor]: open });
  };

  const listItem = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toogleDrawer(anchor, false)}
      onKeyDown={toogleDrawer(anchor, false)}
    >
      <List>
        {nav_tittles.map((item, index) => (
          <ListItem
            key={item.key}
            disablePadding
            onClick={() => mobileDrawer(item)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MIscelleneousServiceIcon />}
                {index === 3 && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const nav_tittles = [
    {
      key: 1,
      path: "/",
      display: "Home",
    },
    {
      key: 2,
      path: "/services",
      display: "Services",
    },
    {
      key: 3,
      path: "/",
      display: "Projects",
    },

    {
      key: 4,
      path: "/about",
      display: "About Us",
    },
  ];

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    
    width: "50%",
    margin: "auto",
    height: "28px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(-3.5),
    marginLeft: theme.spacing(40),
    fontFamily: "Evolventa",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
 

  const NavbarLinks = styled(Typography)(() => ({
    fontSize: "17px",
    color: "#4F5163",
    fontWeight: "bold",
    cursor: "pointer",

    "&:hover": {
      color: "#fff",
      borderBottom: " 0.15rem solid ",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
  }));
  const LogoImg = styled(Box)(({ theme }) => ({
    width: "50%",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  }));

  const CustomBox = styled(Box)(({theme})=>({
          width: "100%",
          position:"fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex:1,
          marginTop:"-90px",
       [theme.breakpoints.down("md")]:{
        marginTop:"-70px"
       }   
  }))

  return (
    <Box>
      <CustomBox>
        <Box
          sx={{
            width: "812px",
            height: "68px",
            margin: "auto",
            borderRadius: "60px",
            backgroundColor: " #B9B9B93D",
            
          }}
          >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomMenuIcon onClick={toogleDrawer("left", true)} />
            <Drawer
              anchor="left"
              open={mobile["left"]}
              onClose={toogleDrawer("left", false)}
            >
              {listItem("left")}
            </Drawer>
            <LogoImg>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "83px",
                  height: "30px",
                  marginLeft: "30px",
                  marginTop: "19px",
                }}
              />
            </LogoImg>
          </Box>

          <NavbarLinksBox>
            {nav_tittles.map((item, i) => (
              <NavbarLinks
              key={item.key}
              variant="body2"
              onClick={() => navigate(item.path)}
              >
                {item.display}
              </NavbarLinks>
            ))}
          </NavbarLinksBox>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Header;
