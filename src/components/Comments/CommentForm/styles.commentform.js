import styled, { css } from "styled-components";
import * as styles from "../../shared-styles/styles.guide";
import * as animations from "../../shared-styles/styles.animation";

export const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${styles.color.theme};
  color: white;
  box-shadow: 0px 2px 4px 0px ${styles.color.gray};
  border-radius: 5px 5px 0 0;

  header {
    img {
      height: 3rem;
      margin: 1.5rem 0 0 0;
    }

    h1 {
      margin: 1.5rem;
      font-weight: ${styles.font_weight.medium};
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0 0 0;

  button {
    background-color: ${styles.color.inv_theme};
    color: white;
    border: none;
    margin: 1.5rem 0;
    border-radius: 3px;
    padding: 0.5rem 2rem;
    font-size: ${styles.font_size.t1};

    :hover {
      box-shadow: 0px 0px 2px 2px ${styles.color.gray};
    }

    :focus {
      outline: none;
    }

    :active {
      box-shadow: 0px 0px 1px 1px ${styles.color.darkgray};
      font-weight: ${styles.font_weight.medium};
    }

    :disabled {
      cursor: not-allowed;
    }
  }
`;

const placeholderStyles = css`
  font-weight: ${props =>
    (props.err && styles.font_weight.light) || styles.font_weight.lighter};
  color: ${props => props.err && styles.color.inv_theme};
`;

export const StyledInput = styled.input`
  width: 90%;
  font-size: ${styles.font_size.t1};
  font-weight: ${styles.font_weight.light};
  padding: 0.5rem 0.25rem;
  border: 2px solid ${styles.color.extralightgray};
  outline: 0;
  margin-bottom: 1rem;
  color: ${styles.color.superdarkgray};
  border-bottom: ${props => props.err && `2px solid ${styles.color.inv_theme}`};

  ${props => props.err && animations.shake}

  ::placeholder {
    ${placeholderStyles}
  }

  :focus {
    border-bottom: 2px solid ${styles.color.inv_theme};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 90%;
  height: 5rem;
  padding: 0.5rem 0.25rem;
  border: 2px solid ${styles.color.extralightgray};
  font-size: ${styles.font_size.t1};
  font-weight: ${styles.font_weight.light};
  color: ${styles.color.superdarkgray};
  outline: 0;
  resize: none;
  border-bottom: ${props => props.err && `2px solid ${styles.color.inv_theme}`};

  ${props => props.err && animations.shake}

  ::placeholder {
    ${placeholderStyles}
  }

  :focus {
    border-bottom: 2px solid ${styles.color.inv_theme};
  }
`;
