import React from "react";

const updateNumber = number => {
  let str = "";
  let length = 16 - number.length;
  for (let i = 0; i < length; i++) {
    str += "•";
  }
  return (number + str)
    .match(/.{0,4}/g)
    .slice(0, -1)
    .join(" ");
};

const updateDate = date => {
  let str = "";
  let length = 4 - date.length;
  for (let i = 0; i < length; i++) {
    str += "•";
  }
  return (date + str)
    .match(/.{0,2}/g)
    .slice(0, -1)
    .join("/");
};

const CreditCard = props => (
  <div className="card">
    <h1 className="company">
      {props.company.toUpperCase() || "Attijari bank".toUpperCase()}
    </h1>
    <img src=" https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png" width="100" alt="" />
    <div className="info">
      <div className="infoText">
        <h2 className="number">{updateNumber(props.number)}</h2>
        <h2 className="date">{updateDate(props.date)}</h2>
        <h2 className="name">
          {props.name.toUpperCase() || "••••••••••••".toUpperCase()}
        </h2>
      </div>
      <div className="infoLogo">
        <img
          src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"
          alt=""

        />
      </div>
    </div>
  </div>
);

export default CreditCard;
