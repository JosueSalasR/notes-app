import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Grid container spacing={2}>
    <Grid item xs={2}>
      <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
     >
        <Card >
          <React.Fragment>

            <CardContent >
             <Typography variant="h5" component="div">
              {props.title}
              </Typography>
             <Typography variant="body2">
              {props.content}
              </Typography>
            </CardContent>

            <CardActions>
             <Button onClick={handleClick} size="small" ><DeleteOutlineOutlinedIcon/></Button>
            </CardActions>

          </React.Fragment>
       </Card>
      </Box>
    </Grid>
    </Grid>
  );
}

export default Note;
