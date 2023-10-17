import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useRef, RefObject } from "react";
import CustomButton from "../../components/CustomButton";
import fadeInText from "../../motions/fadeInText";
import useScrollProgress from "../../hooks/useScrollProgress";

type props = {
  isLoading: boolean;
  mainRef: RefObject<HTMLDivElement | null>;
  versionsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
};

const frameSkips = 10;

const Hero = ({ isLoading, mainRef, versionsRef, contactRef }: props) => {
  const eleRef = useRef<HTMLDivElement>(null);

  const prog = useScrollProgress(eleRef, mainRef);

  const scrollVersions = () => {
    if (!versionsRef.current) return;
    versionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollContacts = () => {
    if (!contactRef.current) return;
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper ref={eleRef}>
      <img
        src="/images/hero_bg.png"
        alt="hero img"
        style={{ top: prog * frameSkips }}
      />
      <Header
        variants={fadeInText}
        animate={isLoading ? "initial" : "eventual"}
        transition={{
          delay: 0.5,
        }}
        style={{
          top: prog * frameSkips,
        }}
      >
        <h1>MYOUSIK</h1>
      </Header>
      <CentreWrapper>
        <InfoWrapper
          variants={fadeInText}
          animate={isLoading ? "initial" : "eventual"}
          transition={{
            delay: 1,
          }}
          style={{
            top: prog * frameSkips,
          }}
        >
          <motion.h2
            variants={fadeInText}
            animate={isLoading ? "initial" : "eventual"}
            transition={{
              delay: 1.2,
            }}
          >
            Sound meets surrealism
          </motion.h2>
          <motion.p
            variants={fadeInText}
            animate={isLoading ? "initial" : "eventual"}
            transition={{
              delay: 1.4,
            }}
          >
            Tired of complicated audio players that lack essential features or
            are cumbersome to use? Look no further! MyouSik is the solution
            you've been waiting for - a sleek and user-friendly open-source
            audio player tailored specifically for Windows users.
          </motion.p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <CustomButton
              image="/images/windows.png"
              title="Download"
              callback={scrollVersions}
            />
            <CustomButton
              title="Contact"
              ghost={true}
              callback={scrollContacts}
            />
          </div>
        </InfoWrapper>
      </CentreWrapper>
      <ModelWrapper>
        <img src="/images/model.png" alt="model" />
      </ModelWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #151415;
  transition: all 0.2s;

  img {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Header = styled(motion.div)`
  position: relative;
  width: 90%;
  color: var(--colors-accent-sec);
  margin-top: 3rem;
  font-size: 1.2rem;
  z-index: 30;
  transition: all 0.2s;

  @media (max-width: 1200px) {
    font-size: 1rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

const CentreWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;

const InfoWrapper = styled(motion.div)`
  position: relative;
  max-width: 30rem;
  width: 100%;
  z-index: 30;
  padding-bottom: 5rem;
  padding-left: 5rem;
  transition: all 0.2s;

  h2 {
    color: var(--colors-font-pr);
    font-size: 2.2rem;
    margin-bottom: 10px;
    line-height: 2.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--colors-font-sec);
  }

  button {
    @media (max-width: 400px) {
      width: 50%;
    }
    margin-top: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 1000px) {
    top: -10%;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 550px) {
    padding-left: 0rem;
  }
`;

const ModelWrapper = styled.div`
  z-index: 20;
  position: absolute;
  align-self: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  right: -15vw;
  pointer-events: none;

  @media (max-width: 1000px) {
    width: 100vw;
    left: 0;
    top: -20%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
