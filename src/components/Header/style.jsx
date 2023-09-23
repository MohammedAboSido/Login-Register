import { styled } from "styled-components";
export const HeaderWrapper = styled("ul")`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 1rem;
  background-color: #607d8b;
`;
export const HeaderLink = styled("li")`
  background-color: #333;
  border-radius: 5px;
  & > a {
    color: #fff;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
`;
