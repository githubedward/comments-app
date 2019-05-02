import styled from "styled-components";
import * as styles from "../../shared/styles.guide";

export const StyledCommentBlock = styled.li`
  padding: 0px;
  margin: 1.5rem 1.5rem;
  padding: 0 0.5rem 1rem 0.5rem;
  list-style: none;
  border-bottom: 1px solid ${styles.color.lightgray};

  h2 {
    margin: 0;
    font-weight: ${styles.font_weight.medium};
  }

  h4 {
    margin: 0;
    font-weight: ${styles.font_weight.light};
  }

  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const StyledCommentList = styled.ul`
  width: 100%;
  padding: 0px;
  margin: 1rem 0 0 0;
  border-radius: 0 0 5px 5px;

  box-shadow: 0px 2px 6px 0px ${styles.color.theme};
`;
