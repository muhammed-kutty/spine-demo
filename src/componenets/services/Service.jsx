import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import ComputerIcon from '@mui/icons-material/Computer';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import GridViewIcon from '@mui/icons-material/GridView';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

const Service = () => {
  const Customcontainer = styled(Box)(({ theme }) => ({

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: theme.spacing(15),
    paddingBottom: "155px",
  }));
  const Custombox = styled(Box)(({ theme }) => ({
    color: "#fff",
    width: "22%",

    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  }));

  const BoxContenttitle = styled(Typography)(({ theme }) => ({
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "60px",
    gap: "10px",
  }));

  const BoxContentdesc = styled(Typography)(({ theme }) => ({
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    fontWeight: "200",
    fontSize: "12px",
    lineHeight: "17px",
  }));
  const IconBox = styled(Box)(({theme})=>({
      marginLeft: theme.spacing(0),
      marginTop: "18px",
      position: "absolute",
      [theme.breakpoints.down("md")]:{

      }
  }))

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "rgba(30, 30, 30, 1)",
        Padding: "0",
        
      }}
    >
      
      <Box
        sx={{
          mt: 10,
          mb: 10,
        }}
      >
        
            <Typography
              variant="body1"
              sx={{
                fontWeight: "400px",
                fontSize: "54px",
                color: "#fff",
                animation: "smooth-appear-top 1s",
                animationIterationCount: 1,
                animationFillMode: "both",
                animationDelay: "2s",
              }}
              >
              Valuable Services
            </Typography>
      </Box>
      <Customcontainer
        sx={{
          animation: "smooth-appear 1s",
          animationIterationCount: 1,
          animationFillMode: "both",
          animationDelay: "2s",
        }}
      >
        <Custombox>
          <IconBox>
            <MobileScreenShareIcon/>
          </IconBox>
          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <BoxContenttitle>Mobile App Development</BoxContenttitle>
            <BoxContentdesc>
              Lorem ipsum dolor sit amet consectetur. In cursus volutpat
              convallis nec leo pellentesque sit ut. Suspendisse etiam curabitur
              consequat eleifend in felis pulvinar gravida pharetra. Urna id
              commodo aliquet viverra nec nisi. Aliquet ac facilisis id ut cum
              eleifend enim.
            </BoxContentdesc>
          </Box>
        </Custombox>
        <Custombox>
          <IconBox>
            <ComputerIcon/>
          </IconBox>
          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <BoxContenttitle>Web Design</BoxContenttitle>
            <BoxContentdesc>
              Lorem ipsum dolor sit amet consectetur. In cursus volutpat
              convallis nec leo pellentesque sit ut. Suspendisse etiam curabitur
              consequat eleifend in felis pulvinar gravida pharetra. Urna id
              commodo aliquet viverra nec nisi. Aliquet ac facilisis id ut cum
              eleifend enim.
            </BoxContentdesc>
          </Box>
        </Custombox>
        <Custombox>
          <IconBox>
            <AddToQueueIcon/>
          </IconBox>
          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <BoxContenttitle>Webapp Development</BoxContenttitle>
            <BoxContentdesc>
              Lorem ipsum dolor sit amet consectetur. In cursus volutpat
              convallis nec leo pellentesque sit ut. Suspendisse etiam curabitur
              consequat eleifend in felis pulvinar gravida pharetra. Urna id
              commodo aliquet viverra nec nisi. Aliquet ac facilisis id ut cum
              eleifend enim.
            </BoxContentdesc>
          </Box>
        </Custombox>
        <Custombox>
          <IconBox>
            <GridViewIcon/>
          </IconBox>
          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <BoxContenttitle>UX/UI Designing</BoxContenttitle>
            <BoxContentdesc>
              Lorem ipsum dolor sit amet consectetur. In cursus volutpat
              convallis nec leo pellentesque sit ut. Suspendisse etiam curabitur
              consequat eleifend in felis pulvinar gravida pharetra. Urna id
              commodo aliquet viverra nec nisi. Aliquet ac facilisis id ut cum
              eleifend enim.
            </BoxContentdesc>
          </Box>
        </Custombox>
        <Custombox>
          <IconBox>
            <TroubleshootIcon/>
          </IconBox>
          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <BoxContenttitle>Graphic Designing</BoxContenttitle>
            <BoxContentdesc>
              Lorem ipsum dolor sit amet consectetur. In cursus volutpat
              convallis nec leo pellentesque sit ut. Suspendisse etiam curabitur
              consequat eleifend in felis pulvinar gravida pharetra. Urna id
              commodo aliquet viverra nec nisi. Aliquet ac facilisis id ut cum
              eleifend enim.
            </BoxContentdesc>
          </Box>
        </Custombox>
        <Custombox>
          <IconBox>
            <ScreenSearchDesktopIcon/>
          </IconBox>
          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <BoxContenttitle>User Research</BoxContenttitle>
            <BoxContentdesc>
              Lorem ipsum dolor sit amet consectetur. In cursus volutpat
              convallis nec leo pellentesque sit ut. Suspendisse etiam curabitur
              consequat eleifend in felis pulvinar gravida pharetra. Urna id
              commodo aliquet viverra nec nisi. Aliquet ac facilisis id ut cum
              eleifend enim.
            </BoxContentdesc>
          </Box>
        </Custombox>
      </Customcontainer>
    </Box>
  );
};

export default Service;
