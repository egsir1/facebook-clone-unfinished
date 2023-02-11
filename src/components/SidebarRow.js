import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@mui/material";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}

      {Icon && <Icon sx={{ color: "#0644b6" }} />}

      <h4 className="side-title"> {title}</h4>
    </div>
  );
}

export default SidebarRow;
