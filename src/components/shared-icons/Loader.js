import React from "react";
import styled from "styled-components";
import { PropagateLoader } from "react-spinners";
import { flexCenter } from "../shared-styles/styles.global";
import * as styles from "../shared-styles/styles.guide";

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  height: 5rem;
  box-shadow: 0px 2px 6px 2px ${styles.color.lightgray};
  margin: 1rem 0 0 0;
  padding-bottom: 1rem;
  border-radius: 0 0 5px 5px;
`;

export default ({ loading }) => (
  <Container>
    <PropagateLoader
      sizeUnit={"px"}
      size={15}
      color={"rgb(73, 162, 220)"}
      loading={loading}
    />
  </Container>
);
