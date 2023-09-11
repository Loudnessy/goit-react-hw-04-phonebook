import { styled } from "styled-components";
export const FilteringByNameStyled = styled.ul`
padding: 0;
display: flex;
flex-direction: column;
list-style: none;
gap: 15px;
button {
    border: none;
    background-color: red;
    
    color: white;
    border-radius: 25px;
    height: 25px;
}
li {
    display: flex;
    justify-content: space-between;
}
button:hover,
button:focus {
    background-color: darkred;
}
`