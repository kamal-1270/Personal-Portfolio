import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <>
      <div className="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" id="eduction">
          Education Details
        </h2>
        <hr />
        {/* Btech------------ */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Btech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Chitkara University  (HP)
            </h4>
          </VerticalTimelineElement>

          {/* 12th---------- */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">INTERMEDIATE</h3>
            <h4 className="vertical-timeline-element-subtitle">
            C.S.S.R.P SCHOOL (BSEB)
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
