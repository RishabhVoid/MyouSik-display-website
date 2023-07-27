import { styled } from "styled-components";
import Hero from "./Hero.tsx";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;
