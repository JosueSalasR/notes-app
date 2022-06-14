import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form>
      <TextField
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Título"
        />
         <TextField
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Tomar nota..."
          rows="3"
        />
        <Button onClick={submitNote}><AddCircleOutlineOutlinedIcon /></Button>
      </form>
    </Box>
  );
}

export default CreateArea;
