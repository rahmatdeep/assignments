import { useState } from "react";
import "./BirthdayWisher.css";

export default function BirthdayWisher() {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  function onClickHandler() {
    console.log(name);
    setVisible(visible === false ? true : false);
  }
  return (
    <div className="wrapper">
      <div className="input">
        <label htmlFor="name">Happy Birthday to?</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button onClick={onClickHandler} type="button">
          Generate Birthday Wishes
        </button>
      </div>
      <div className="wishes">
        {visible && <Wish1 name={name} />}
        {visible && <Wish2 name={name} />}
      </div>
    </div>
  );
}

function Wish1({ name }) {
  const cardStyle = {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  };

  const messageStyle = {
    marginTop: "15px",
    fontSize: "16px",
    color: "#555",
  };

  const imageStyle = {
    marginTop: "20px",
    maxWidth: "100%",
    borderRadius: "5px",
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>Happy Birthday {name}!</div>
      <div style={messageStyle}>
        Wishing you a day filled with joy and laughter. May all your dreams come
        true!
      </div>
      <img
        style={imageStyle}
        src="https://images.unsplash.com/photo-1545696563-af8f6ec2295a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Birthday Cake Image"
      />
    </div>
  );
}

function Wish2({ name }) {
  const cardStyle = {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#e8491d",
  };

  const messageStyle = {
    marginTop: "15px",
    fontSize: "16px",
    color: "#333",
  };

  const imageStyle = {
    marginTop: "20px",
    maxWidth: "100%",
    borderRadius: "5px",
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>Wishing You a Fantastic Birthday {name}!</div>
      <div style={messageStyle}>
        May this year be the best one yet. Enjoy every moment and have a blast!
      </div>
      <img
        style={imageStyle}
        src="https://img.fruugo.com/product/9/14/660612149_max.jpg"
        alt="Balloons Image"
      />
    </div>
  );
}
