import styled from "styled-components";

export const LeftSideWrapper = styled("div")`
  width: 50%;
  background-image: url(${({ img }) => img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const LeftSideDetails = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6rem 5rem;
  height: 100%;
`;
export const LeftSideTitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const LeftSideTitle = styled("h3")`
  color: white;
  font-size: 40px;
  font-weight: 500;
  width: 95%;
`;
export const LeftSideSubtitle = styled("span")`
  color: white;
  width: 60%;
`;
export const LeftSideDescription = styled("span")`
  color: white;
`;
