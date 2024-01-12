import styled from "styled-components";
import img from "../icons/camera-icon.png";

const StyledDiv = styled.div`
  background: #50626c;
`;

const StyledSpan = styled.span`
  //   font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
`;

export default function Card({ text }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-64 text-center space-y-8 mb-14">
        <StyledDiv className="w-64 h-64 flex items-center justify-center  rounded-xl">
          <img src={img} alt="" />
        </StyledDiv>
        <StyledSpan>{text}</StyledSpan>
      </div>
    </>
  );
}
