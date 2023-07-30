import { styled } from "styled-components";
import CustomButton from "../../components/CustomButton";
import { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { MOBILE_MODEL_LINK } from "../../data/config";
import { motion } from "framer-motion";
import fadeInText from "../../motions/fadeInText";

type props = {
  isLoading: boolean;
  versionsRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLFormElement | null>;
  mainRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Hero = ({ isLoading, versionsRef, contactRef, mainRef }: props) => {
  const handleDownloadCall = () => {
    if (!versionsRef.current || !mainRef.current) return;
    mainRef.current.scrollTop = versionsRef.current.offsetTop;
  };

  const handleContactCall = () => {
    if (!contactRef.current || !mainRef.current) return;
    mainRef.current.scrollTop = contactRef.current.offsetTop;
  };

  return (
    <Wrapper>
      <Header
        variants={fadeInText}
        animate={isLoading ? "initial" : "eventual"}
        transition={{
          delay: 0.5,
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
        >
          <motion.h2
            variants={fadeInText}
            animate={isLoading ? "initial" : "eventual"}
            transition={{
              delay: 1.2,
            }}
          >
            Easy, but advanced audio manager
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
          <div style={{ display: "flex" }}>
            <CustomButton title="Download" callback={handleDownloadCall} />
            <CustomButton
              title="Contact"
              ghost={true}
              callback={handleContactCall}
            />
          </div>
        </InfoWrapper>
      </CentreWrapper>
      <ModelWrapper>
        {/* <Suspense>
          <Spline scene={MOBILE_MODEL_LINK} />
        </Suspense> */}
      </ModelWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled(motion.div)`
  position: relative;
  width: 90%;
  color: var(--colors-accent-sec);
  margin-top: 3rem;
  font-size: 1.2rem;
  z-index: 20;
  @media (max-width: 1200px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const CentreWrapper = styled.div`
  width: 85%;
  max-width: 75rem;
  margin-top: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
`;

const InfoWrapper = styled(motion.div)`
  position: relative;
  max-width: 27rem;
  width: 100%;
  z-index: 20;

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
    margin-top: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    max-width: 20rem;
    align-self: flex-end;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 1rem;
      line-height: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
    margin-inline: auto;
    max-width: 20rem;
    align-self: flex-end;
  }
`;

const ModelWrapper = styled.div`
  z-index: 10;
  position: absolute;
  align-self: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  right: -15vw;

  @media (max-width: 1000px) {
    right: 0;
    height: 50%;
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      height: 200%;
      background-color: rgb(0, 0, 0, 0.3);
      pointer-events: none;
    }
  }
`;
