import React from "react";

import { Box, Typography, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import logo from "../../asets/logo1.png";

const MainBox = styled(Box)(({ theme }) => ({
  
  marginTop: theme.spacing(10),
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
   
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const LogoDiv = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(13),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(4),
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  marginTop: "70px",
  lineHeight: "55px",
  fontWeight: 400,
  fontSize: "54px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    fontSize: "30px",
    fontWeight: "bold",
  },
}));
const Main = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor:"#fff",
        padding:"0",
        marginLeft:"20px",
        marginRight:"20px",
        marginBottom:"100px"

      }}
    >
      <MainBox>
        <LogoDiv>
          <img
            src={logo}
            alt="logo"
            style={{
              transformOrigin: "center",
              animationDuration: "2s",
              animationTimingFunction: "initial",
              animationDelay: "0s",
              animationDirection: "normal",
              animationIterationCount: "infinite",
              animationFillMode: "none",
              animationPlayState: "running",
              animationName: "cog-spin",
            }}
          />
        </LogoDiv>

        <Heading variant="body1">
          We Make <br /> New Virtual World
        </Heading>
        <Typography
          variant="body2"
          sx={{ color: "blue", fontSize: "20px", fontWeight: 700 }}
        >
          Contact
          <ArrowForwardIcon
            sx={{ ml: 1, borderBottom: "3px solid blue" }}
          />
        </Typography>
      </MainBox>
    </Box>
  );
};

export default Main;
