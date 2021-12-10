import React from "react";
import { Button } from "../Button-components/Button";
import { Link } from "react-router-dom";
import "./Service.css";

function Service({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  startImg,
}) {
  return (
    <div className="service darkBg">
      <div className="container">
        <div
          className="row service-row"
          style={{
            display: "flex",
            flexDirection: startImg === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="column">
            <div className="section-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className="heading">{headLine}</h1>
              <p className="service-subtitle">{description}</p>
              <Link to="/sign-up">
                <Button buttonSize="button-xxl" buttonStyle="button-outline">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="service-img-wrapper">
              <img src={img} alt={alt} className="service-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
