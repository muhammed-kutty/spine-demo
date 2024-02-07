import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  const ContentBox = styled(Box)(({ theme }) => ({
    width: "50%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    marginBottom:"150px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      flexDirection: "column",
    },
  }));

  const Abouttypograpy = styled(Typography)(({ theme }) => ({
    fontWeight: "800",
    fontSize: "96px",
    lineHeight: "60px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  }));

  const AboutDesc = styled(Typography)(({ theme }) => ({
    marginTop: "390px",
    fontSize: "20px",
    lineHeight: "28px",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    marginRight: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
      fontSize: "15px",
      lineHeight: "18px",
      textAlign: "center",
    },
  }));

  

  return (
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "rgba(30, 30, 30, 35)",
        marginTop: "0",
      }}
    >
      <ContentBox sx={{
        animation: "smooth-appear-top 1s",
        animationIterationCount: 1,
        animationFillMode: "both",
        animationDelay: "2s",
      }}>
        <Box sx={{ marginTop: "250px", alignItems: "center" }}>
          <Abouttypograpy>About Us</Abouttypograpy>
        </Box>
        <Box sx={{ marginTop: "80px", color: "#fff" }}>
          <Typography
            sx={{ fontWeight: "800", fontSize: "20px", lineHeight: "50px" }}
            variant="body1"
            >
            About <ArrowForwardIcon />{" "}
          </Typography>
          <Typography
            sx={{ fontWeight: "800", fontSize: "20px", lineHeight: "60px" }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{ fontWeight: "800", fontSize: "20px", lineHeight: "60px" }}
            >
            Vision
          </Typography>
        </Box>
      </ContentBox>

      <ContentBox sx={{
        animation: "smooth-appear-desc 1s",
        animationIterationCount: 1,
        animationFillMode: "both",
        animationDelay: "2s",
      }}>
        <AboutDesc variant="body2">
          Lorem ipsum dolor sit amet consectetur. Justo in vitae arcu egestas
          sed laoreet sed fames sed. Faucibus sed id mattis porta lacus
          facilisis lacinia urna nec. Orci eget egestas morbi ultrices. Arcu
          scelerisque nulla quis euismod arcu pretium ut. Lorem est vel tellus
          eu tincidunt tellus a. Dolor sed id tortor vel quis netus imperdiet.
          Nulla dignissim aliquet posuere laoreet cras lobortis velit in tortor.
          Commodo aliquam aliquam ultricies etiam vitae nec. Urna quam turpis
          lectus molestie consequat dictumst vitae. Hendrerit turpis quis mauris
          tortor mus. Ac sed quis sed phasellus amet massa. Lacus commodo elit
          feugiat enim. Sagittis amet accumsan elit purus aliquet aliquet lorem
          ut. Tellus turpis semper facilisis mattis. Augue nibh diam suspendisse
          magna massa elementum eget. Nibh tempor velit est etiam accumsan.
        </AboutDesc>
      </ContentBox>
    </Box>
  );
};
              

export default About;
