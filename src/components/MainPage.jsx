import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../slices/productsSlice";
import { setReviews } from "../slices/reviewsSlice";
import { useEffect } from "react";

import TheMain from "./TheMain";
import Card from "../UI/Card";
import CardWithTextIn from "../UI/CardWithTextIn";
import TheNewsletter from "./TheNewsletter";

import whatsapp from "../icons/whatsapp.svg";
import telegram from "../icons/telegram.svg";
import instagram from "../icons/instagram.svg";
import vk from "../icons/vk.svg";
import checkedIcon from "../icons/checked-icon.svg";
import vector from "../icons/Vector.svg";
// import vectorLeft from "../icons/Vector 2.svg";
import { styled } from "styled-components";

import img1 from "../img/img-1.png";
import img2 from "../img/img-2.png";
import img3 from "../img/img-3.png";
import img4 from "../img/img-4.png";
import img5 from "../img/img-5.png";
import img6 from "../img/img-6.png";

import lodka1 from "../img/lodka-1.svg";
import lodka2 from "../img/lodka-2.svg";
import lodka3 from "../img/lodka-3.svg";

// import helmet from "../img/helmet.svg";
// import { useState } from "react";

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

const LodkaDiv = styled.div`
  box-shadow: 0px 0px 10px 0px #00000040;
`;

const LodkaDiv2 = styled.div`
  background: #50626c;
  box-shadow: 0px 0px 10px 0px #00000040;
`;
const LodkaImg = styled.img`
  position: absolute;
  height: 169px;
`;
const LodkaTitle = styled.div`
  font-family: Gilroy;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
`;
const LodkaText = styled.div`
  font-family: montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;

const fetchProducts = async () => {
  const response = await fetch(
    "https://motorsboat-37cbf-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
  );
  const data = await response.json();
  return data;
};

const fetchReviews = async () => {
  const response = await fetch(
    "https://motorsboat-37cbf-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json"
  );
  const data = await response.json();
  return data;
};

const fetchProductsAndReviews = async () => {
  const [productsResponse, reviewsResponse] = await Promise.all([
    fetchProducts(),
    fetchReviews(),
  ]);

  return { products: productsResponse, reviews: reviewsResponse };
};

export default function MainPage({ title, text }) {
  const productsArray = Object.values(
    useSelector((state) => state.products)
  ).slice(0, 6);

  const reviewsArray = Object.values(
    useSelector((state) => state.reviews)
  ).slice(0, 3);

  return (
    <>
      <TheMain title={title} text={text} />
      <div className="  max-w-7xl mx-auto pt-16 space-y-16">
        <ul className="text-2xl flex flex-row justify-between max-w-2xl text-center">
          <li>Новые поступления</li>
          {/* <li>Популярные</li>
          <li>Акции</li> */}
        </ul>
        <div className="flex flex-row justify-between">
          <div className="max-w-5xl w-full">
            <div className="grid grid-cols-3">
              {productsArray.map((product) => (
                <Card key={product.id} text={product.text} />
              ))}
            </div>
            {/* <div className="max-w-md mx-auto flex items-center justify-between">
              <img src={vectorLeft} alt="" />
              <span>Назад</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>110</span>
              <span>Вперёд</span>
              <img src={vector} alt="" />
            </div> */}
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
          <span>Наша техника на практике</span>
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
          <span>Интересные факты</span>
          <div className="flex flex-row justify-center items-center space-x-16">
            <div
              className="max-w-xl flex flex-col items-center
            "
            >
              <LodkaImg src={lodka1} alt="" />
              <LodkaDiv className="w-full  mt-28 pt-28 text-center rounded-xl space-y-8 p-8">
                <LodkaTitle>
                  ГЛИССИРОВАНИЕ НАДУВНЫХ ЛОДОК И ВСЁ ЧТО НУЖНО ЗНАТЬ ОБ ЭТОМ
                </LodkaTitle>
                <LodkaText>
                  Глиссирование является одним из самых экономичных вариантов
                  передвижения.....
                </LodkaText>
              </LodkaDiv>
            </div>
            <div
              className="max-w-xl flex flex-col items-center
            "
            >
              <LodkaImg src={lodka2} alt="" />
              <LodkaDiv className="w-full  mt-28 pt-28 text-center rounded-xl space-y-8 p-8">
                <LodkaTitle>
                  ГЛИССИРОВАНИЕ НАДУВНЫХ ЛОДОК И ВСЁ ЧТО НУЖНО ЗНАТЬ ОБ ЭТОМ
                </LodkaTitle>
                <LodkaText>
                  Глиссирование является одним из самых экономичных вариантов
                  передвижения.....
                </LodkaText>
              </LodkaDiv>
            </div>
          </div>
          <LodkaDiv2 className="mx-8 rounded-xl flex flex-col items-center text-white">
            <img src={lodka3} className="absolute" alt="" />
            <div className="space-y-16 pb-16 mt-72">
              <LodkaTitle>
                ГЛИССИРОВАНИЕ НАДУВНЫХ ЛОДОК И ВСЁ ЧТО НУЖНО ЗНАТЬ ОБ ЭТОМ
              </LodkaTitle>
              <LodkaText>
                Глиссирование является одним из самых экономичных вариантов
                передвижения.....
              </LodkaText>
            </div>
          </LodkaDiv2>
        </div>

        <div className="text-2xl flex flex-col space-y-8">
          <span>Последние отзывы</span>
          <div className="flex space-x-16">
            {reviewsArray.map((review) => (
              <CardWithTextIn
                key={review.id}
                src={review.src}
                title={review.title}
                text={review.text}
              />
            ))}
            {/* <div className="py-6">
              <CardWithTextIn
                src={helmet}
                title={"Лодочный мотор HIDEA (Хайди) HD 9.9 FHS"}
                text={"Эксплуатирую 3 сезона"}
              />
            </div>

            <CardWithTextIn
              src={helmet}
              title={"Лодочный мотор HIDEA (Хайди) HD 9.9 FHS"}
              text={"Эксплуатирую 3 сезона"}
            />

            <div className="py-6">
              <CardWithTextIn
                src={helmet}
                title={"Лодочный мотор HIDEA (Хайди) HD 9.9 FHS"}
                text={"Эксплуатирую 3 сезона"}
              />
            </div> */}
          </div>
        </div>
        <TheNewsletter />
      </div>
    </>
  );
}
