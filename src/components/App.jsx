import React from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { StyledDiv } from "App.styled";
import { useState } from "react";
import { useEffect } from "react";
export const App = () => {
const [contacts, setContacts] = useState([])
const [filter, setFilter] = useState('')


const onSubmitContact = evt => {
    evt.preventDefault()
    const submit = async () => {
        const formReset = () => {
            evt.target.name.value = ""
            evt.target.querySelector('input[type="tel"]').value = ""
        }
        await setContacts(prevContacts => {
            const newObj = {id: nanoid(), name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}
            return [...prevContacts, newObj]
           }) 
       await formReset()
    }
    if (contacts.length > 0) {
        return contacts.find(contact => contact.name.toUpperCase() === evt.target.name.value.toUpperCase()) 
        ? alert(`${evt.target.name.value} is already in contacts`) 
        : submit()
    }
    submit()
}
const onChangeInput = evt => {
    setFilter(evt.target.value)
}
const filterByName = () => {
    if (contacts.length > 0) {
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))    
    }  
}
const deletingContact = evt => {
    const newObj = contacts.filter(contact => contact.id !== evt.currentTarget.id)
    setContacts([...newObj])
    localStorage.setItem("contacts", JSON.stringify(newObj));
}
useEffect(() => {
    if(localStorage.getItem("contacts")) {
        return setContacts(() => {
            const newObj = JSON.parse(localStorage.getItem("contacts")) 
            return newObj  
        })
    }
}, [])
useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts))  
    }
}, [contacts])
    return <StyledDiv>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={onSubmitContact}/>
        <h2>Contacts</h2>
        <Filter input={onChangeInput}/>
<ContactList contacts={contacts} filter={filter} filtering={filterByName} deleting={deletingContact}/>
    </StyledDiv>
};
