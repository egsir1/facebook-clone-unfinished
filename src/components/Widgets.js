import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/CleverProgrammerr/"
        data-tabs="timeline"
        data-width="340"
        data-height="1800"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/CleverProgrammerr/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/CleverProgrammerr/">
            Clever Programmer
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default Widgets;
