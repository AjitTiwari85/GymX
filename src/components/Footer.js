import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      {/* Logo section (currently commented out) */}
      {/* <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} /> */}
    </Stack>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="50px"
      pb="20px"
    >
      <FitnessCenterIcon
        sx={{
          fontSize: { lg: "40px", xs: "30px" }, // Responsive size for the icon
          color: "#FF2625", // Same color as the text
          mr: "10px", // Margin to the right to space from the text
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontSize: { lg: "32px", xs: "24px" }, // Responsive font size
          fontWeight: 700, // Bold text
          letterSpacing: "2px", // Extra spacing between letters
          color: "#FF2625", // Vibrant color to match the icon
          textTransform: "uppercase", // All caps for emphasis
          fontFamily: "'Roboto', sans-serif", // Clean, modern font
        }}
      >
        GYMX
      </Typography>
    </Box>

    {/* Social Media Icons */}
    <Box display="flex" justifyContent="center" alignItems="center" mb="20px">
      <IconButton
        sx={{ color: "#FF2625" }}
        aria-label="facebook"
        href="https://facebook.com"
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        sx={{ color: "#FF2625" }}
        aria-label="twitter"
        href="https://twitter.com"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        sx={{ color: "#FF2625" }}
        aria-label="instagram"
        href="https://instagram.com"
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        sx={{ color: "#FF2625" }}
        aria-label="linkedin"
        href="https://linkedin.com"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>

    <Typography variant="body2" sx={{ color: "#FF2625", mb: "20px" }}>
      © {new Date().getFullYear()} GYMX. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
