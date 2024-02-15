import Lodka from "../img/lodka-main.svg";
import { styled } from "styled-components";
import vector from "../icons/VectorWhite.svg";
import { useState } from "react";

const StyledDiv = styled.div`
  border: 1px solid #e4e5e4;
`;
const StyledInput = styled.input`
  border: 1px solid #e4e5e4;
  width: 437px;
  height: 73px;
  padding: 10px;
  font-size: 32px;
`;

const StyledBtn = styled.button`
  background: #50626c;
  width: 437px;
  height: 73px;
`;

export default function TheNewsletter() {
  function sendData() {
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
      }),
      redirect: "follow",
    };

    fetch(
      "https://motorsboat-37cbf-default-rtdb.asia-southeast1.firebasedatabase.app/newsletters.json",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        alert("Вы подписались на рассылку!");
      })
      .catch((error) => {
        alert("Неизвестная ошибка, попробуйте ещё.");
      });
  }

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  function handleNameInput(event) {
    setNameInput(event.target.value);
  }

  function handleEmailInput(event) {
    setEmailInput(event.target.value);
  }
  return (
    <>
      <div className="flex justify-around items-center max-w-7xl">
        <StyledDiv className="flex flex-col items-center p-12 space-y-12">
          <span className=" text-xl">Рассылка:</span>
          <div>
            <div className="text-left">Имя:</div>
            <StyledInput type="text" required onChange={handleNameInput} />
          </div>
          <div>
            <div className="text-left">Email:</div>
            <StyledInput type="email" required onChange={handleEmailInput} />
          </div>
          <StyledBtn
            className="text-white flex items-center justify-center space-x-4"
            onClick={sendData}
          >
            <span>Подписаться</span> <img src={vector} alt="" />{" "}
          </StyledBtn>
        </StyledDiv>
        <img src={Lodka} alt="" />
      </div>
    </>
  );
}
