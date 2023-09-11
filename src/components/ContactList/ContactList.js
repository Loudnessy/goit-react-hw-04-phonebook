import PropTypes from "prop-types";
import { FilteringByNameStyled } from "./ContactList.styled"
export const ContactList = ({contacts, filter, filtering, deleting}) => {
    const filteringByName = filtering()
    return <FilteringByNameStyled>
             
{contacts.length > 0 ? filter.length > 0 ? filteringByName.map(contact => {
            return <li key={contact.id}>{contact.name}: {contact.number}
            <button type="button" id={contact.id} onClick={deleting}>Delete</button>
            </li>
        })
         : contacts.map(contact => {
            return <li key={contact.id}>{contact.name}: {contact.number}
             <button type="button" id={contact.id} onClick={deleting}>Delete</button>
            </li>
        }) : <li>You dont have any contacts yet</li>}
    </FilteringByNameStyled>
}
ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    filtering: PropTypes.func,
    deleting: PropTypes.func
}