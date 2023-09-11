import PropTypes from "prop-types";
import { StyledLabel } from "./ContactForm.styled"

export const ContactForm = ({formSubmit}) => {
    return <form onSubmit={formSubmit}>
    <StyledLabel>
       Name
<input
type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
placeholder="Name"
required
/>
<input
type="tel"
name="number"
pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
placeholder="Number"
required
/>
<button type="submit">Add contact</button>
</StyledLabel>
</form>
}
ContactForm.propTypes = {
    formSubmit: PropTypes.func
}