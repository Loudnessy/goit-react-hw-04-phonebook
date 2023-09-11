import { styled } from "styled-components";
export const StyledLabel = styled.label`
display: flex;
flex-direction: column;
gap: 15px;
font-weight: bold;
input {
    border: 2px solid darkgreen;
border-radius: 25px;
height: 25px;
padding: 5px;
}
button {
    border: 2px solid darkgreen;
border-radius: 25px;
height: 50px;
background-color: lightblue;
}
button:hover,
button:focus {
background-color: grey;
color: white;
}
::placeholder {
}
`