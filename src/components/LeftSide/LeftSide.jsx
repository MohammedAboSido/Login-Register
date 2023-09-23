import {
  LeftSideDescription,
  LeftSideDetails,
  LeftSideSubtitle,
  LeftSideTitle,
  LeftSideTitleWrapper,
  LeftSideWrapper,
} from "./style";

const LeftSide = ({ img }) => {
  return (
    <>
      <LeftSideWrapper img={img}>
        <LeftSideDetails>
          <LeftSideTitleWrapper>
            <LeftSideTitle>We’re here to optimised your workflow</LeftSideTitle>
            <LeftSideSubtitle>
              Your docs, projects, notes and reminders. Together.
            </LeftSideSubtitle>
          </LeftSideTitleWrapper>
          <LeftSideDescription>
            Finally, all your work in one place.
          </LeftSideDescription>
        </LeftSideDetails>
      </LeftSideWrapper>
    </>
  );
};

export default LeftSide;
