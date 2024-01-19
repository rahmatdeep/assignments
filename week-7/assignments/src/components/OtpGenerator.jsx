import { useState, useRef } from "react";
import "./OtpGenerator.css";

export default function OtpGenerator() {
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState(0);

  function clickHandler() {
    setOtpSent(otpSent === false ? true : true);
    console.log(phone);
  }

  return (
    <div className="wrapper">
      {otpSent === false ? (
        <PhoneNumber phone={phone} setphone={setPhone} click={clickHandler} />
      ) : (
        <EnterOtp />
      )}
    </div>
  );
}

function PhoneNumber({ phone, setphone, click }) {
  function changeHandler(e) {
    setphone(e.target.value);
  }
  return (
    <div className="form">
      <label htmlFor="phone">Enter your mobile number</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        maxLength={10}
        value={phone}
        onChange={changeHandler}
      />
      <button type="button" onClick={click}>
        SEND OTP
      </button>
    </div>
  );
}

function EnterOtp() {
  const [field1, field2, field3, field4, button] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  return (
    <div className="form">
      <label htmlFor="otp1">Enter OTP</label>
      <div className="inputs">
        <input
          autoFocus
          ref={field1}
          type="text"
          name="otp1"
          id="otp1"
          maxLength={1}
          onKeyUp={() => {
            field2.current.focus();
          }}
        />
        <input
          ref={field2}
          type="text"
          name="otp2"
          id="otp2"
          maxLength={1}
          onKeyUp={() => {
            field3.current.focus();
          }}
        />
        <input
          ref={field3}
          type="text"
          name="otp3"
          id="otp3"
          maxLength={1}
          onKeyUp={() => {
            field4.current.focus();
          }}
        />
        <input
          ref={field4}
          type="text"
          name="otp4"
          id="otp4"
          maxLength={1}
          onKeyUp={() => {
            button.current.focus();
          }}
        />
      </div>
      <button ref={button} type="button">
        Check OTP
      </button>
    </div>
  );
}
