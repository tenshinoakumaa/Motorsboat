import styled from "styled-components";
import boatmotorsLogo from "../img/boatmotors-logo.png";
import mobilePhone from "../icons/mobile-phone.svg";
import clock from "../icons/clock.svg";
import whatsapp from "../icons/whatsapp.svg";
import telegram from "../icons/telegram.svg";
import instagram from "../icons/instagram.svg";
import vk from "../icons/vk.svg";
import vectorTop from "../icons/vectorTop.svg";

const StyledHr = styled.hr`
  border: 1px solid #000;
`;
const Footer = styled.div`
  background: #001420;
`;

export default function TheFooter() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 pb-14">
        <StyledHr className="mb-14" />

        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col items-center space-y-6 justify-center">
            <img src={boatmotorsLogo} alt="" />
            <div className="flex w-full justify-between items-center px-8">
              <img src={mobilePhone} alt="" />
              <span>8(999) 159 69-67</span>
            </div>
            <div className="flex  w-full justify-between items-center px-8">
              <img src={clock} alt="" />
              <div className="text-center">
                Пн-Вс <br /> С 10:00 - 19:00
              </div>
            </div>
          </div>

          <div className="flex flex-col items-left space-y-4">
            <span className="text-xl font-bold pl-1">О магазине</span>
            <ul className="pl-4 space-y-4">
              <li>Новости</li>
              <li>Как купить</li>
              <li>Доставка</li>
              <li>О магазине</li>
              <li>Гарантия</li>
              <li>Контакты</li>
            </ul>
            <span className="text-xl font-bold pl-1">Новости</span>
            <ul className="flex flex-row justify-between items-center space-x-5">
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
          </div>

          <div className="flex flex-col items-left space-y-4">
            <span className="text-xl font-bold pl-1">Каталог товаров</span>
            <ul className="pl-4 space-y-4">
              <li>Аксессуары к лодочным моторам</li>
              <li>Лодочные аксессуары</li>
              <li>Гребные винты</li>
              <li>Запчасти</li>
              <li>Лодки ПВХ и аксессуары</li>
              <li>Лодочные моторы</li>
              <li>Митизы(нержавеющие)</li>
              <li>Другое</li>
            </ul>
            <span className="pl-1">Прицепы, аксессуары для прицепов</span>
            <span className="pl-1">Смазки</span>
          </div>
        </div>
      </div>
      <Footer className="py-8">
        <div className="max-w-7xl text-white mx-auto flex justify-between">
          <div className="flex items-center space-x-4">
            <span>Наверх</span>
            <img src={vectorTop} alt="" />
          </div>
          <div>@Motorsboat, 2021</div>
        </div>
      </Footer>
    </>
  );
}
