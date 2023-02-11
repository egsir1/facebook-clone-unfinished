import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ChatIcon from "@mui/icons-material/Chat";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

/* import ExpandMoreOutlined from "@mui/icons-material";
 */ function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src={require("./img/this.jpg")} title="Sam" />
      <SidebarRow Icon={LocalHospitalIcon} title="Hospital around" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      {/*       <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
       */}{" "}
    </div>
  );
}

export default Sidebar;
