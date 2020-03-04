import React from "react";

const updateNumber = number => {
  return number
    .match(/.{0,4}/g)
    .slice(0, -1)
    .join(" ");
};

const updateDate = date => {
  return date
    .match(/.{0,2}/g)
    .slice(0, -1)
    .join("/");
};

const CreditCardForm = props => {
  return (
    <div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Card Number"
          value={updateNumber(props.number)}
          onChange={e => props.onChangeNumber(e.target.value)}
        />
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={e => props.onChangeName(e.target.value)}
        />
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Valid Date"
          value={updateDate(props.date)}
          onChange={e => props.onChangeDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;
