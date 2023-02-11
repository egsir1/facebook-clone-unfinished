import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircle from "@mui/icons-material/SupervisedUserCircle";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src={require("./img/B.jpg")} alt="icon" />
          <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search BroApp" />
          </div>
        </div>

        <div className="header__middle">
          <div className="header__option--active header__option ">
            <HomeIcon />
          </div>
          <div className="header__option">
            <FlagIcon />
          </div>
          <div className="header__option">
            <SubscriptionOutlinedIcon />
          </div>
          <div className="header__option">
            <StorefrontOutlined />
          </div>
          <div className="header__option">
            <SupervisedUserCircle />
          </div>
        </div>

        <div className="header__right">
          <div className="header__info">
            <Avatar />
            <h4>Sirojiddin</h4>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Header;
