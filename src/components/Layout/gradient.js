import styled from "styled-components";

const Gradient = styled.div`
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background: var(--gradient-primary);
  background-size: 400% 400%;
  animation: gradient 0.3s ease infinite;

  width: 100%;
  min-height: 4px;

  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Gradient;
