import React from "react";
import "./Cards.css";

const Cards = ({ image, headings, para, background, showcard }) => {
  return (
    <>
      {showcard ? (
        <div className="emptyDiv"></div>
      ) : (
        <>
          <div className="wrapper">
            <div
              className="cardContainer"
              style={
                background === "white"
                  ? { backgroundColor: "#fffcfc" }
                  : { backgroundColor: "aliceblue" }
              }
            >
              <>
                <img src={image} alt="logo" className="rainbowLogo" />
                <h3 className="card_heading">{headings}</h3>
                <p className="card_para">{para}</p>
              </>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
