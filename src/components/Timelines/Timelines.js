import React from "react";
import "./timelines.css";

const Timelines = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <span>STAGE 1</span>
          <b>2005</b>
          <p>Founded as Floorhomes Pvt Ltd</p>
        </li>
        <li>
          <span>STAGE 2</span>
          <b>2011</b>
          <p>Completed 1 L Sqft etc</p>
        </li>
        <li>
          <span>STAGE 3</span>
          <b>2015</b>
          <p>ReBranded as Aume</p>
        </li>
        <li>
          <span>STAGE 4</span>
          <b>Build</b>
          <p>It is a long established fact that a reader will be distracted</p>
        </li>
        <li>
          <span>STAGE 5</span>
          <b>Present</b>
          <p>
            Launched Multiple Services for to make process easy for users to
            find all services at one place
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Timelines;
