import React from "react";
import ContactStyles from '../Contacts/Contacts.module.css'
import ContactCard from "./ContactCard"
import Mandalorian from "../../assets/img/manda.png"
import Yoda from "../../assets/img/a-yoda.jpg"
import Chewbacca from "../../assets/img/a-chwe.jpg"
import Rey from "../../assets/img/reycontact.png"
import BB8 from "../../assets/img/bb8contact.jpg"
import C3PO from "../../assets/img/c3po.png"

const contacts = [
  {
    firstName: "Mandalorian",
    species: "Human",
    phone: "+311111111111",
    gender: "male",
    image: Mandalorian
  },
  {
    firstName: "Yoda",
    species: "Unknown",
    phone: "+322222222222",
    gender: "male",
    image: Yoda
  },
  {
    firstName: "Chewbacca",
    species: "Wookiee",
    phone: "+333333333333",
    gender: "male",
    image: Chewbacca
  },
  {
    firstName: "Rey",
    species: "Human",
    phone: "+344444444444",
    gender: "female",
    image: Rey
  },
  {
    firstName: "BB-8",
    species: "Droid",
    phone: "+355555555555",
    gender: "Unknown",
    image: BB8
  },
  {
    firstName: "C-3PO",
    species: "Droid",
    phone: "+366666666666",
    gender: "Unknown",
    image: C3PO
  }];

const Contacts = () => {
  const [query, updateQuery] = React.useState('');
  const [filtered, updateFiltered] = React.useState(contacts);

  const handleKeyUp = event => {
    const { value } = event.target;
    updateQuery(value);
    updateFiltered(
      contacts.filter(
        contact => contact.species.toLowerCase().includes(value.toLowerCase()) || contact.firstName.toLowerCase().includes(value.toLowerCase()) 
      )
    );
  }

  return (
    <div className={ContactStyles.container}>
      <div className="search">
        <input type="text" placeholder="search" name="new-todo" value={query} onChange={ handleKeyUp } />
      </div>
      <div className="listOfContacts">
        {filtered.map(contact => (
          <ContactCard
            key={contact.phone}
            firstName={contact.firstName}
            species={contact.species}
            phone={contact.phone}
            gender={contact.gender}
            image={ contact.image}/>
        ))}
      </div>
    </div>
  )
}

export default Contacts;