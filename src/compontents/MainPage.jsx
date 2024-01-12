import TheMain from "./TheMain";
import Card from "../UI/Card";
import whatsapp from "../icons/whatsapp.svg";
import telegram from "../icons/telegram.svg";
import instagram from "../icons/instagram.svg";
import vk from "../icons/vk.svg";
import checkedIcon from "../icons/checked-icon.svg";
import vector from "../icons/Vector.svg";
import vectorLeft from "../icons/Vector 2.svg";
import { styled } from "styled-components";

import img1 from "../img/img-1.png";
import img2 from "../img/img-2.png";
import img3 from "../img/img-3.png";
import img4 from "../img/img-4.png";
import img5 from "../img/img-5.png";
import img6 from "../img/img-6.png";

const MainText = styled.span`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

const SecondText = styled.span`
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
`;

const ThirdText = styled.span`
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

export default function MainPage({ title, text }) {
  return (
    <>
      <TheMain title={title} text={text} />
      <div className="  max-w-7xl mx-auto pt-16 space-y-16">
        <ul className="text-2xl flex flex-row justify-between max-w-2xl text-center">
          <li>Новые поступления</li>
          <li>Популярные</li>
          <li>Акции</li>
        </ul>
        <div className="flex flex-row justify-between">
          <div className="max-w-5xl w-full">
            <div className="grid grid-cols-3">
              <Card text={"Комплект сальников Т15-15(8М0082880)"} />
              <Card text={"Комплект сальников Т15-15(8М0082880)"} />
              <Card text={"Комплект сальников Т15-15(8М0082880)"} />
              <Card text={"Комплект сальников Т15-15(8М0082880)"} />
              <Card text={"Комплект сальников Т15-15(8М0082880)"} />
              <Card text={"Комплект сальников Т15-15(8М0082880)"} />
            </div>
            <div className="max-w-md mx-auto flex items-center justify-between">
              <img src={vectorLeft} alt="" />
              <span>Назад</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>110</span>
              <span>Вперёд</span>
              <img src={vector} alt="" />
            </div>
          </div>
          <div className="flex flex-col max-w-sm text-xl space-y-4">
            <MainText>Мы в соцсетях:</MainText>
            <ul className="flex flex-row justify-between items-center w-44">
              <li>
                <img src={vk} alt="" />
              </li>
              <li>
                <img src={whatsapp} alt="" />
              </li>
              <li>
                <img src={telegram} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
            <MainText>Полезная информация:</MainText>
            <div className="flex flex-row items-center space-x-4">
              <img src={checkedIcon} alt="" />
              <SecondText>О магазине</SecondText>
            </div>
            <ThirdText>
              Узнайте больше о нашем магазине: кто мы, наши клиенты и почему они
              выбрали именно нас. Наши контакты и реквизиты.
            </ThirdText>
            <div className="flex flex-row items-center space-x-4">
              <SecondText>Подробнее</SecondText>
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
        <div className="text-2xl flex flex-col space-y-8">
          <span>Категории</span>
          <div className="grid grid-cols-3">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>

        <div className="text-2xl flex flex-col space-y-8">
          <span>Статьи</span>
          
        </div>
      </div>
    </>
  );
}
