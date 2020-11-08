import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ section, history }) => {
  const { title, imageUrl, size, linkUrl } = section;
  return (
    <MenuItemContainer size={size} onClick={() => history.push(linkUrl)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
