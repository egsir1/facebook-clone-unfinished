import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={require("./img/this.jpg")}
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="egsir"
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />
      <Post
        profilePic={require("./img/this.jpg")}
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="egsir"
        image="https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt"
      />
    </div>
  );
}

export default Feed;
