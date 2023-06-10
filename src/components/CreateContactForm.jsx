import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

const CreateContactForm = ({onCreate}) =>{
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onCreate(name,number);
  }
    return(
    <Stack
          direction="column"
          gap="8px"
          alignItems="start"
          component="form"
          onSubmit={handleSubmit}
        >

          <TextField
            label="Name"
            error={false}
            helperText="testerror"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            
          />

          <Button color="success" variant="contained" type="submit">
            Add contact
          </Button>
        </Stack>
    )      
}
export default CreateContactForm