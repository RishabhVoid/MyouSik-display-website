import { styled } from "styled-components";
import { useRef } from "react";
import Hero from "./Hero.tsx";
import Contact from "./Contact.tsx";
import SectionWrapper from "../../components/SectionWrapper";
import Features from "./Features.tsx";
import Versions from "./Versions.tsx";
import Footer from "./Footer.tsx";

type props = {
  isLoading: boolean;
};

const Home = ({ isLoading }: props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const versionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper ref={mainRef}>
      <SectionWrapper height={"100dvh"}>
        <Hero
          isLoading={isLoading}
          mainRef={mainRef}
          contactRef={contactRef}
          versionsRef={versionsRef}
        />
      </SectionWrapper>
      <SectionWrapper height={"fit-content"}>
        <Features mainRef={mainRef} />
      </SectionWrapper>
      <SectionWrapper height={"fit-content"}>
        <Versions versionsRef={versionsRef} />
      </SectionWrapper>
      <SectionWrapper height={"100dvh"}>
        <Contact contactRef={contactRef} mainRef={mainRef} />
      </SectionWrapper>
      <SectionWrapper height={"fit-content"}>
        <Footer />
      </SectionWrapper>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background-color: var(--colors-bg-pr);
    width: 10px;

    @media (max-width: 550px) {
      width: 0px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--colors-accent-pr);
    border-radius: 100px;
  }
`;
