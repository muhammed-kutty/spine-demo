import { Box, Typography, styled } from "@mui/material";
import React from "react";
import main from "../../asets/main.png";
const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display:"flex",
    flexWrap: "wrap",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    position: "absolute",
    fontSize: "54px",
    color: "black",
    bottom: "33vh",
    right: "24vh",
    fontWeight: "bold",
    textShadow: "8px 6px 9px black",
    boxShadow: " 4px 4px 7px black",
    textAlign: "center",
    width: "56vh",

    [theme.breakpoints.down("md")]: {
      bottom: theme.spacing(24),
      left: theme.spacing(2),
      width: "90%",
      fontSize: "25px",
      fontWeight: "700",
      color: "#8c6f6d",
      textShadow: "8px 6px 9px black",
      boxShadow: " 4px 4px 7px black",
      textAlign: "center",
    },
  }));

  const Description = styled(Typography)(({ theme }) => ({
    position: "absolute",
    fontSize: "18px",
    color: "black",

    textShadow: "8px 6px 9px black",
    boxShadow: " 4px 4px 7px black",
    textAlign: "center",
    width: "56vh",
    bottom: "18vh",
    right: "24vh",
    [theme.breakpoints.down("md")]: {
      bottom: theme.spacing(3),
      left: theme.spacing(2),
      fontSize: "17px",
      color: "#8c6f6d",
      width: "90%",
      textShadow: "8px 6px 9px black",
      boxShadow: " 4px 4px 7px black",
    },
  }));
  const Imagebox = styled(Box)(({ theme }) => ({
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "0",
      }}
    >
      <CustomBox>
        <Imagebox
          sx={{
            animation: "fadeInAnimation 5s",
            animationIterationCount: 1,
            animationFillMode: "forwards",
            flex: "1",
          }}
        >
          <Box sx={{ flex: "1" ,gap:"25px"}}>
            <Title variant="h2">It’s Our Confident</Title>
          </Box>
          <Box>
            <Description variant="body2" sx={{}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto
              facere sed eaque. Dignissimos velit possimus molestias suscipit
              eius unde! Eaque ut ratione dolorum error dolores dicta suscipit
              eligendi magni.
            </Description>
          </Box>

          <img
            src={main}
            alt="main"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Imagebox>
      </CustomBox>
    </Box>
  );
};

export default Hero;
