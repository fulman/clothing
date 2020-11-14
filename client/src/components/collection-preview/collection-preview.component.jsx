import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

function CollectionPreview({ title, items }) {
  const link = `/shop/${title.toLowerCase()}`;
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={link}>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
