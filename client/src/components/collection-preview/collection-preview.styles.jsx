import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  &:hover {
    text-decoration: underline;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
