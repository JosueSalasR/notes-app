import React from "react";
import Typography from '@mui/material/Typography';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Typography variant="h6" >Copyright ⓒ {year}</Typography>
    </footer>
  );
}

export default Footer;
