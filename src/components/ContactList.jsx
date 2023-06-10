import ContactItem from './ContactItem'
const ContactList = ({contacts}) => {
  return (
    <ul>
       {contacts.map((contact) => (
        
      <li  key = {contact.id}>
          <ContactItem contact={contact}/>
      </li>
       ))}

       
    </ul>
  );
};
export default ContactList;
