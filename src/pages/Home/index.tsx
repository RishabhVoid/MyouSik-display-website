import { styled } from "styled-components";
import Hero from "./Hero.tsx";
import Features from "./Features.tsx";
import useHorizontleMix from "../../hooks/useHorizontleScrollMix.ts";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fadeInText from "../../motions/fadeInText.ts";
import Versions from "./Versions.tsx";
import Footer from "./Footer.tsx";

type props = {
  isLoading: boolean;
};

const Home = ({ isLoading }: props) => {
  const quoteWrapperRef = useRef<HTMLDivElement | null>(null);
  const isQuoteInView = useInView(quoteWrapperRef);
  const secondQuoteWrapperRef = useRef<HTMLDivElement | null>(null);
  const isSecondQuoteInView = useInView(secondQuoteWrapperRef);
  const mainRef = useHorizontleMix();
  const versionsRef = useRef<HTMLDivElement | null>(null);

  return (
    <Wrapper ref={mainRef}>
      <Hero isLoading={isLoading} versionsRef={versionsRef} mainRef={mainRef} />
      <QuoteWrapper
        ref={quoteWrapperRef}
        variants={fadeInText}
        animate={isQuoteInView ? "eventual" : "initial"}
      >
        <span />
        <h1>S</h1>
        <h2>implicity</h2>
        &nbsp;<h1>W</h1>
        <h2>ith</h2>
        &nbsp;<h1>S</h1>
        <h2>peed</h2>
      </QuoteWrapper>
      <Features />
      <QuoteWrapper
        ref={secondQuoteWrapperRef}
        variants={fadeInText}
        animate={isSecondQuoteInView ? "eventual" : "initial"}
      >
        <span />
        <h1>V</h1>
        <h2>ersions</h2>
      </QuoteWrapper>
      <Versions versionsRef={versionsRef} />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: var(--colors-bg-sec);
    width: 10px;

    @media (max-width: 550px) {
      width: 0;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--colors-accent-pr);
    border-radius: 100px;
  }
`;

const QuoteWrapper = styled(motion.div)`
  width: fit-content;
  margin: 2rem 0;
  margin-inline: auto;
  display: flex;
  position: relative;
  align-items: center;
  color: var(--colors-font-pr);

  h1 {
    color: var(--colors-bg-pr);
    font-size: 3.2em;
    text-shadow: 0px 0px 3px var(--colors-font-pr);
  }

  h2 {
    font-size: 1.6rem;
    margin-right: 0.5rem;
    color: var(--colors-accent-sec);
  }

  span {
    position: absolute;
    top: 0px;
    border-radius: 100px;
    left: 25px;
    width: 70px;
    height: 70px;
    background-color: var(--colors-accent-sec);
    mix-blend-mode: difference;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
      margin-right: 0.2rem;
    }
    span {
      width: 30px;
      height: 30px;
    }
  }
`;
