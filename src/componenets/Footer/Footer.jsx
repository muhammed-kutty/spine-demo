import { Box,Typography,styled } from '@mui/material'
import React from 'react'

import logo from '../../asets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {

  const FootterBox = styled(Box)(({theme})=>({
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    width:"50%",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    color:"black",
    marginTop:"15px",
    marginBottom:"45px",
    borderRight:"1px solid  rgba(173, 173, 173, 1)",
    
    [theme.breakpoints.down("md")]:{
      width:"100%",
      borderRight:"0px"

    }
  }))

  const FooterTyp = styled(Typography)(({theme})=>({
    fontWeight:"700",
    fontSize:"48px",
    [theme.breakpoints.down("md")]:{
      fontSize:"30px",
    }
  }))
  return (
    <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    }}>
        <Box sx={{
            width:"100%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop:"450px"
        }}>
            <img style={{width:"117px",height:"42px",}} src={logo} alt="logo" />
        </Box>
        <FootterBox>
          <Box sx={{textAlign:"center" ,alignItems:"center", justifyContent:"center"}}>

              <Typography sx={{
                fontWeight:"700",
                fontSize:"20px",
                animation: "smooth-appear-top 2s",
                animationIterationCount: 1,
                animationFillMode: "both",
                animationDelay: "2s",
                }}>
                  Contact Us
              </Typography>

              <Typography sx={{
                fontWeight:"300",
                fontSize:"20px",
                animation: "smooth-appear-top 2s",
                animationIterationCount: 1,
                animationFillMode: "both",
                animationDelay: "2s",}}>
                  SEND AN EMAIL TO THE EMAIL ADDRESS .<br/>
                  FOR PROJECTS PLEASE USE THE BUTTON BELOW.
              </Typography>
          </Box>
        </FootterBox>

        <FootterBox>
            <FooterTyp sx={{
                animation: "smooth-appear-top 2s",
                animationIterationCount: 1,
                animationFillMode: "both",
                animationDelay: "2s",}}>
                  Info@spinecodes.com
                  </FooterTyp>
        </FootterBox>
        <Box sx={{
          display:"flex",
          alignItems:"center",
          textAlign:"center",
          justifyContent:"space-between",
          gap:"25px",
          marginBottom:"50px"
        }}>
          <Box>
             <FacebookIcon sx={{border:"4px solid black", borderRadius:"60px"}}/>
          </Box>

          <Box>
            <InstagramIcon  sx={{border:"4px solid black", borderRadius:"60px"}}/>
          </Box>

          <Box>
            <TwitterIcon  sx={{border:"4px solid black", borderRadius:"60px"}}/>
          </Box>

          <Box>
            <GitHubIcon  sx={{border:"4px solid black", borderRadius:"60px"}}/>
          </Box>
        </Box>

    </Box>
  )
}

export default Footer
