import TheMain from "./TheMain";
import { styled } from "styled-components";
import MapImg from "../img/Map-img.svg";

const MainText = styled.span`
  font-family: SF Pro Display;
  font-size: 40px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

const SecondText = styled.span`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.165em;
`;

const ThirdText = styled.span`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.165em;
  color: #ffffff;
`;

const StyledDiv = styled.span`
  position: absolute;
  background: #0000007a;
  right: 0px;
  top: 0px;
`;

export default function ContactsPage({ title, text }) {
  return (
    <>
      <TheMain title={title} text={text} />
      <div className="max-w-7xl mx-auto py-28 flex flex-col space-y-16">
        <MainText>Контакты</MainText>
        <SecondText>
          В нашем магазине Вы сможете выбрать и приобрести лодки и лодочные
          моторы от ведущих российских производителей. Специалисты посоветуют и
          подберут подходящие решения, если товаров нет в наличии. Можно
          оформить заказ и оформить доставку до адреса
        </SecondText>
        <div className="max-w-7xl relative">
          <div className="mt-14">
            <img src={MapImg} alt="" />
          </div>
          <StyledDiv className="rounded-md max-w-xl p-8 space-y-8">
            <div className="flex flex-row items-between">
              <ThirdText className="text-left w-1/2">
                Адрес пункта выдачи в Краснодаре:
              </ThirdText>
              <ThirdText className="text-right w-1/2">
                Краснодар, ул. Красная, 124
              </ThirdText>
            </div>
            <div className="flex flex-row items-between">
              <ThirdText className="text-left w-1/2">Телефон</ThirdText>
              <ThirdText className="text-right w-1/2">
                8 (800) 555-26-28 — звонок бесплатный по всей России
              </ThirdText>
            </div>
            <div className="flex flex-row items-between">
              <ThirdText className="text-left w-1/2">Эл-почта </ThirdText>
              <ThirdText className="text-right w-1/2">info@mtbt.ru </ThirdText>
            </div>
            <div className="flex flex-row items-between">
              <ThirdText className="text-left w-1/2">График работы </ThirdText>
              <ThirdText className="text-right w-1/2">
                Вс 10:00-17:00 Сб 10:00-19:00 Пн-Пт 09:00-20:00{" "}
              </ThirdText>
            </div>
          </StyledDiv>
        </div>
      </div>
    </>
  );
}
