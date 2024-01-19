import Lodka from "../img/lodka-main.svg";
import { styled } from "styled-components";
import vector from "../icons/VectorWhite.svg";

const StyledDiv = styled.div`
  border: 1px solid #e4e5e4;
`;
const StyledInput = styled.input`
  border: 1px solid #e4e5e4;
  width: 437px;
  height: 73px;
`;

const StyledBtn = styled.button`
  background: #50626c;
  width: 437px;
  height: 73px;
`;

export default function TheNewsletter() {
  return (
    <>
      <div className="flex justify-around items-center max-w-7xl">
        <StyledDiv className="flex flex-col items-center p-12 space-y-12">
          <span className=" text-xl">Рассылка:</span>
          <div>
            <div className="text-left">Имя:</div>
            <StyledInput type="text" />
          </div>
          <div>
            <div className="text-left">Email:</div>
            <StyledInput type="text" />
          </div>
          <StyledBtn className="text-white flex items-center justify-center space-x-4">
            <span>Подписаться</span> <img src={vector} alt="" />{" "}
          </StyledBtn>
        </StyledDiv>
        <img src={Lodka} alt="" />
      </div>
    </>
  );
}
