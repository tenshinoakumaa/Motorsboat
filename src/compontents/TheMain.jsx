import styled from "styled-components";
import fonImage from "../img/fon-image.png";
import burger from "../icons/Burger.svg";
import searchIcon from "../icons/search-icon.svg";
import underlineIcon from "../icons/underline-icon.svg";
import peopleIcon from "../icons/people-icon.svg";
import basketIcon from "../icons/basket-icon.svg";

const StyledDiv = styled.div`
  background: url(${fonImage});
  min-height: 100vh;
  background-size: cover;
`;

const MainText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
`;

const SecondText = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const Button = styled.div`
  background: transparent;
  border: 2px solid #fff;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.7);
  }
`;

const StyledInput = styled.input`
  background: transparent;
`;

export default function TheMain({ title, text }) {
  return (
    <StyledDiv>
      <div className="flex flex-row justify-between px-16 pt-8 mb-28">
        <div>
          <img src={burger} alt="" className="cursor-pointer" />
        </div>

        <div className="flex flex-row justify-between items-center space-x-12">
          <img src={searchIcon} alt="" />
          <div className="flex flex-col items-center justify-between space-y-1">
            <StyledInput type="text" placeholder="Поиск" />
            <img src={underlineIcon} alt="" />
          </div>
          <img src={peopleIcon} alt="" />
          <img src={basketIcon} alt="" />
        </div>
      </div>
      <div className="pt-32 space-y-32 text-white">
        <div className="flex flex-col justify-center items-center space-y-16">
          <MainText className="text-9xl">{title}</MainText>
          <SecondText className="text-6xl">{text}</SecondText>
          <Button className="py-4 px-4 text-xl">Перейти в каталог</Button>
        </div>
        <div className="flex flex-row justify-end px-16 space-x-8 items-center pb-20">
          <span>8(999) 159 69-67</span>
          <div>
            Время работы: <br /> Пн-Вс 10-19
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}
