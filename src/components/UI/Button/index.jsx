import styled, { css } from "styled-components";

const colors = {
    primary: "#4361ee",
    secondary: "#b5179e",
};

const Button = styled.button`
padding: 0.8 rem 2 rem;
border: none;
border-radius: 10px;
cursor: pointer;
color: #fff;
background-color: ${(props) => colors[props.variant] || colors.primary};

${(props) => props.full && css`
    display: block;
    width: 100%;
    `};

`;

export default Button;