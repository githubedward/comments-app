import styled from "styled-components";
import * as styles from "../../shared-styles/styles.guide";
import * as animations from "../../shared-styles/styles.animation";
import { flexCenter } from "../../shared-styles/styles.global";

export const StyledCommentList = styled.ul`
  width: 100%;
  padding: 0px;
  margin: 1rem 0 0 0;
  border-radius: 0 0 5px 5px;
  cursor: pointer;

  box-shadow: 0px 2px 6px 2px ${styles.color.lightgray};
`;

export const StyledCommentBlock = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 1.5rem;
  list-style: none;
  border-bottom: 1px solid ${styles.color.lightgray};
  ${animations.fadeIn}

  div {
    h2 {
      margin: 0;
      font-weight: ${styles.font_weight.medium};
    }

    h4 {
      margin: 0;
      font-weight: ${styles.font_weight.light};
    }
  }

  button {
    ${flexCenter}
    background-color: none;
    border: none;
    outline: none;
    padding: 0px;
    margin: 0px;
    width: 2.5rem;

    svg {
      display: none;
      height: 1.5rem;
      margin: 0.5rem;
    }
  }

  :hover {
    button {
      :active {
        color: ${styles.color.darkgray};
      }
      svg {
        display: block;
        fill: ${styles.color.darkgray};

        :hover {
          height: 1.75rem;
          fill: ${styles.color.inv_theme};
        }
      }
    }
  }

  :first-child {
    margin-top: 1.5rem;
  }

  :last-child {
    border-bottom: none;
    margin-bottom: 1.5rem;
  }
`;

export const StyledConfirmDelete = styled.div`
  ${flexCenter}
  flex-direction: column;
  justify-content: baseline;
  ${animations.fadeIn}

  position: absolute;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  font-weight: ${styles.font_weight.light};
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 2px ${styles.color.lightgray};

  p {
    margin: 0 0 0.5rem 0;
    color: ${styles.color.inv_theme};
  }

  div {
    ${flexCenter}
    button {
      color: ${styles.color.darkgray};

      :hover {
        text-decoration: underline;
        font-weight: ${styles.font_weight.medium};
        color: ${styles.color.superdarkgray};
      }
    }
  }
`;
