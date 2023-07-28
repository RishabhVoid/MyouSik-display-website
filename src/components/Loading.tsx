import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import { LOADING_DURATION } from "../data/config";
import { motion } from "framer-motion";

type props = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Loading = ({ isLoading, setIsLoading }: props) => {
  const [loadCount, setLoadCount] = useState(LOADING_DURATION);

  // const variant = {
  //   move: {
  //     x: [0, 0, -50, -50, 0],
  //     y: [0, -50, -50, 0, 0],
  //     transition: {
  //       repeat: Infinity,
  //       duration: 3,
  //     },
  //   },
  // };

  useEffect(() => {
    const loadingTimeInterval = setInterval(() => {
      setLoadCount((loadCount) => {
        if (loadCount - 1 < 0) {
          clearInterval(loadingTimeInterval);
          setIsLoading(false);
          return loadCount;
        }
        return loadCount - 1;
      });
    }, 1000);

    return () => {
      if (!loadingTimeInterval) return;
      clearInterval(loadingTimeInterval);
    };
  }, []);

  return (
    <Wrapper $visible={isLoading}>
      <LoaderWrapper>
        <TitleWrapper>
          {"MYOUSIK".split("").map((value, index) => (
            <motion.h1
              key={index}
              // Removed animations
              // variants={variant}
              // animate={{
              //   x: [0, 0, -50, -50, 0],
              //   y: [0, -50, -50, 0, 0],
              //   transition: {
              //     repeat: Infinity,
              //     duration: 3,
              //     delay: index,
              //   },
              // }}
            >
              {value}
            </motion.h1>
          ))}
        </TitleWrapper>
        <ProgressBarWrapper>
          <span
            style={{
              width: `${
                ((LOADING_DURATION - loadCount) / LOADING_DURATION) * 100 + 10
              }%`,
            }}
          />
        </ProgressBarWrapper>
      </LoaderWrapper>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div<{ $visible: boolean }>`
  background: var(--colors-bg-pr);
  scale: 1;
  transition: 0.3s;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;

  ${(props) =>
    !props.$visible &&
    css`
      scale: 0;
    `}
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: var(--colors-font-pr);
    position: relative;
  }
`;

const ProgressBarWrapper = styled.div`
  margin-top: 10px;
  background: var(--colors-bg-sec);
  height: 20px;
  border-radius: 20px;
  overflow: hidden;

  span {
    border-radius: 20px;
    display: block;
    height: 100%;
    width: 0%;
    transition: 0.3s;
    background: var(--colors-accent-pr);
  }
`;
