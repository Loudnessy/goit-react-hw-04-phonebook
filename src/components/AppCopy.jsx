import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { StyledDiv } from "App.styled";
export class App extends Component {
    state = {
        contacts: [],
        filter: '',
      }


onSubmitContact = evt => {
    evt.preventDefault()
    const {contacts} = this.state
    if (contacts.length > 0) {
        return contacts.find(contact => contact.name.toUpperCase() === evt.target.name.value.toUpperCase()) 
        ? alert(`${evt.target.name.value} is already in contacts`) 
        : this.setState(prevState => { 
const newObj = {id: nanoid(), name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}
evt.target.name.value = ""
        evt.target.querySelector('input[type="tel"]').value = ""
return {contacts:[...prevState.contacts, newObj]}   
    })
    }
    this.setState(prevState => { 
        const newObj = {id: nanoid(), name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}
        evt.target.name.value = ""
        evt.target.querySelector('input[type="tel"]').value = ""
        return {contacts:[...prevState.contacts, newObj]}   
            })
    
}
onChangeInput = evt => {
    this.setState(prevState => {
        return {filter: evt.target.value}
    })
}
filterByName = () => {
    const {contacts, filter} = this.state
    if (contacts.length > 0) {
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))    
    }  
}
deletingContact = evt => {
    const {contacts} = this.state
    const newObj = contacts.filter(contact => contact.id !== evt.currentTarget.id)
    this.setState(prevState => {
     return {contacts:[...newObj]}
    })
}
componentDidMount() {
if(localStorage.getItem("contacts")) {
    return this.setState(prevState => {
        const newObj = JSON.parse(localStorage.getItem("contacts"))
        return {contacts: newObj}
    })
}
}
componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts === this.state.contacts) {
        return
    }
    else {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
}



  render() {
    const {contacts, filter} = this.state
    return <StyledDiv>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.onSubmitContact}/>
        <h2>Contacts</h2>
        <Filter input={this.onChangeInput}/>
<ContactList contacts={contacts} filter={filter} filtering={this.filterByName} deleting={this.deletingContact}/>
    </StyledDiv>
  }
};
