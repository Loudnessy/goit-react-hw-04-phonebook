import PropTypes from "prop-types";
import { FilterStyled } from "./Filter.styled"
export const Filter = ({input}) => {
    return <FilterStyled>
    <p>Find contacts by name</p>
    <input name="name" onChange={input} placeholder="Name"></input>
    </FilterStyled>
}
Filter.propTypes = {
    input: PropTypes.func
}