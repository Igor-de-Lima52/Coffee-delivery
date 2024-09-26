import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas: "header" "main";
  overflow-y: hidden;
`;