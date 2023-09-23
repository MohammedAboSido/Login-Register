import { styled } from "styled-components";

export const Container = styled("div")`
  max-width: 2000px;
  width: 85%;
  margin: 0 auto;
`;

export const Typography = styled("p")`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1")}rem;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  color: ${(props) => (props.color ? props.color : "#fff")};
`;
