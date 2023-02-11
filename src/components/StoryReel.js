import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={require("./img/crazy.jpg")}
        profileSrc={require("./img/this.jpg")}
        title="Sirojiddin Egamberdiev"
      />
      <Story
        image={require("./img/nodir.jpg")}
        profileSrc={require("./img/nodir2.jpg")}
        title="Nodir Aminboev"
      />
      <Story
        image={require("./img/doni.jpg")}
        profileSrc={require("./img/doni2.jpg")}
        title="Doniyor Tuychiev"
      />
      <Story
        image={require("./img/java.jpg")}
        profileSrc={require("./img/java2.jpg")}
        title="Java Dev"
      />
      <Story
        image={require("./img/islam.jpg")}
        profileSrc={require("./img/islam2.jpg")}
        title="Islom Juraev"
      />
    </div>
  );
}

export default StoryReel;
