import styled from "styled-components";
import fonImage from "../img/fon-image.png";
import burger from "../icons/Burger.svg";
import searchIcon from "../icons/search-icon.svg";
import underlineIcon from "../icons/underline-icon.svg";
import peopleIcon from "../icons/people-icon.svg";
import basketIcon from "../icons/basket-icon.svg";
import xImg from "../icons/x-img.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  background: url(${fonImage});
  height: 100vh;
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

const StyledCategory = styled.div`
  background: #ffffffe5;
  height: 100vh;
  width: 50%;
  position: absolute;
  transition: all 0.2s;
  left: ${(props) => (props.isOpen ? "0" : "-50%")};
`;

export default function TheMain({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
    <>
      <StyledCategory className="p-4" isOpen={isOpen}>
        <div className="flex justify-end">
          <img
            src={xImg}
            alt=""
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
        <ul className="px-8 space-y-12 pt-12">
          <li>
            <Link to={"/home"}>
              <MainText className="text-4xl">Главное</MainText>
            </Link>
          </li>
          <li>
            <Link to={"/reviews"}>
              <MainText className="text-4xl">Отзывы</MainText>
            </Link>
          </li>
          <li>
            <Link to={"/contacts"}>
              <MainText className="text-4xl">Контакты</MainText>
            </Link>
          </li>
          <li>
            <Link to={"/delivery"}>
              <MainText className="text-4xl">Доставка & оплата</MainText>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <MainText className="text-4xl">О нас</MainText>
            </Link>
          </li>
          {/* <li>
            <Link to={"/basket"}>
              <MainText className="text-4xl">Корзина</MainText>
            </Link>
          </li> */}
        </ul>
      </StyledCategory>

      <StyledDiv>
        <div className="flex flex-row justify-between px-16 pt-8 ">
          <div>
            <img
              src={burger}
              alt=""
              className="cursor-pointer"
              onClick={handleClick}
            />
          </div>

          {/* <div className="flex flex-row justify-between items-center space-x-12">
            <img src={searchIcon} alt="" />
            <div className="flex flex-col items-center justify-between space-y-1">
              <StyledInput type="text" placeholder="Поиск" />
              <img src={underlineIcon} alt="" />
            </div>
            <img src={peopleIcon} alt="" />
            <img src={basketIcon} alt="" />
          </div> */}
        </div>
        <div className="pt-32 space-y-32 text-white">
          <div className="flex flex-col justify-center items-center space-y-16">
            <MainText className="text-9xl">{title}</MainText>
            <SecondText className="text-6xl">{text}</SecondText>
            <Link to={'/'}>
              <Button className="py-4 px-4 text-xl">Перейти в каталог</Button>
            </Link>
          </div>
          <div className="flex flex-row justify-end px-16 space-x-8 items-center pb-20">
            <span>8(999) 159 69-67</span>
            <div>
              Время работы: <br /> Пн-Вс 10-19
            </div>
          </div>
        </div>
      </StyledDiv>
    </>
  );
}
