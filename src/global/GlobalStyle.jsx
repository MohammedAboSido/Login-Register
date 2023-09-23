import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap');
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Figtree', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

img {
  max-width: 100%;
}

.container {
  width: 85%;
  margin: 0 auto;
}

.danger {
  color: red;
  text-shadow: 0 0 1px rgba(245, 7, 7, 0.5);
  background-color: rgba(255, 0, 0, 0.267);
  padding: 0.8rem 0.5rem;  
  border-radius: 3px;
  position: relative;
}

.danger::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: red;
}

`;
