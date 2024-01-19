import { styled } from "styled-components";

const StyledDiv = styled.div`
  box-shadow: 0px 0px 20px 0px #00000040;
`;
const StyledTitle = styled.span`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;

const StyledText = styled.span`
  font-family: Gilroy;
  font-size: 15px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
`;
export default function CardWithTextIn({ title, text, src }) {
  return (
    <>
      <StyledDiv className="rounded-xl flex flex-col items-center space-y-8 p-12">
        <img src={src} alt="" />
        <div className="flex flex-col items-center space-y-4">
          <StyledTitle>{title}</StyledTitle>
          <StyledText>{text}</StyledText>
        </div>
      </StyledDiv>
    </>
  );
}
