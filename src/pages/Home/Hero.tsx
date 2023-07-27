import { styled } from "styled-components";
import CustomButton from "../../components/CustomButton";
import { Suspense, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { MOBILE_MODEL_LINK, PC_MODEL_LINK } from "../../data/config";

const Hero = () => {
  const [isShortForModel, setIsShortForModel] = useState(false);

  const handleWindowResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      setIsShortForModel(false);
      return;
    }
    setIsShortForModel(true);
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      setIsShortForModel(false);
    } else {
      setIsShortForModel(true);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Wrapper>
      <Header>
        <h1>MYOUSIK</h1>
      </Header>
      <CentreWrapper>
        <InfoWrapper>
          <h2>Easy, but advanced audio manager</h2>
          <p>
            Tired of complicated audio players that lack essential features or
            are cumbersome to use? Look no further! MyouSik is the solution
            you've been waiting for - a sleek and user-friendly open-source
            audio player tailored specifically for Windows users.
          </p>
          <CustomButton title="Download" />
        </InfoWrapper>
      </CentreWrapper>
      <ModelWrapper>
        {!isShortForModel ? (
          <Suspense fallback={<h1>Hello</h1>}>
            <Spline scene={PC_MODEL_LINK} />
          </Suspense>
        ) : (
          <Suspense fallback={<h1>Hello</h1>}>
            <Spline scene={MOBILE_MODEL_LINK} />
          </Suspense>
        )}
      </ModelWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background: var(--colors-bg-pr);
  position: relative;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
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

const InfoWrapper = styled.div`
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
