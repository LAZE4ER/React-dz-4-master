import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
} from "@mui/material";
import ContactList from "./components/ContactList";
import CreateContactForm from "./components/CreateContactForm";
import FilterContacts from "./components/FilterContacts";
function initContactsState() {
  const persistedContacts = localStorage.getItem('contacts');

  if (persistedContacts) {
    return JSON.parse(persistedContacts);
  } else {
    return [];
  }
}

function App() {
  const [contacts, setContacts] = useState(initContactsState);

  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function createContact(name, number) {
    if (contacts.some((contact) => contact.name===name)) {
      const fail = 'is already in contacts'
      alert(name +  " " + fail)
      return
    }
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }
  function filterContacts() {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.includes(filter);
    });
    return filteredContacts;
  }
  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <Paper
        elevation={5}
        sx={{
          padding: "18px",
        }}
      >
        <CreateContactForm onCreate={createContact} />

        <ContactList contacts={filterContacts()} />
        <FilterContacts Filter={filter} setFilter={setFilter} />


      </Paper>
    </Container>
  );
}

export default App;
