import { css, styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import fadeInText from "../../motions/fadeInText";
import FeaturesData from "../../data/features";

const Features = () => {
  return (
    <Wrapper>
      <StickyWrapper className="sticky_box">
        {FeaturesData.map((feature, index) => (
          <FeatureCard
            title={feature.title}
            specialTitle={feature.specialTitle}
            points={feature.points}
            svg={feature.svg}
            svgAlt={feature.svgAlt}
            reversed={feature.reversed}
            key={index}
          />
        ))}
      </StickyWrapper>
    </Wrapper>
  );
};

export default Features;

type FeatureCardProps = {
  title: string;
  specialTitle: string;
  points: Array<string>;
  reversed?: boolean;
  svg: string;
  svgAlt: string;
};

const FeatureCard = ({
  title,
  specialTitle,
  points,
  reversed = false,
  svg,
  svgAlt,
}: FeatureCardProps) => {
  const featureRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(featureRef);

  const [animation, setAnimation] = useState("initial");

  useEffect(() => {
    if (isVisible) {
      setAnimation("eventual");
    }
  }, [isVisible]);

  return (
    <FeatureWrapper $reverse={reversed}>
      <InfoWrapper
        ref={featureRef}
        variants={fadeInText}
        animate={animation}
        transition={{ delay: 0.5 }}
      >
        <motion.h2
          variants={fadeInText}
          animate={animation}
          transition={{ delay: 1 }}
        >
          {title}
          <span>{specialTitle}</span>
        </motion.h2>
        <ul>
          {points.map((point, index) => (
            <motion.li
              key={index}
              animate={animation}
              transition={{ delay: 1.5 + 0.1 * index }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </InfoWrapper>
      <ImageWrapper
        $reverse={reversed}
        animate={animation}
        transition={{ delay: 1.2 }}
      >
        <img src={svg} alt={svgAlt} />
      </ImageWrapper>
    </FeatureWrapper>
  );
};

const Wrapper = styled.div`
  height: 300vh;
  position: relative;
`;

const StickyWrapper = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 5rem;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const FeatureWrapper = styled(motion.div)<{ $reverse: boolean }>`
  height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  width: 100vw;
  display: flex;
  padding: 1rem;

  ${(props) =>
    props.$reverse &&
    css`
      flex-direction: row-reverse;
    `}

  @media (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;

const InfoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 50%;
  }

  h2 {
    width: 60%;
    @media (max-width: 550px) {
      width: 95%;
    }
    font-weight: 300;
    color: var(--colors-font-pr);

    span {
      color: var(--colors-accent-pr);
    }
  }

  ul {
    width: 60%;
    padding-left: 5px;
    margin-top: 20px;
    @media (max-width: 550px) {
      width: 95%;
    }

    li {
      list-style: none;
      color: var(--colors-font-sec);
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1rem;
    }

    ul > li {
      font-size: 0.8rem;
    }
  }
`;

const ImageWrapper = styled(motion.div)<{ $reverse: boolean }>`
  width: 50%;
  display: flex;

  @media (max-width: 800px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    height: 50%;
    width: 100%;
  }

  img {
    height: 100%;
    margin: auto 0;
    margin-left: auto;

    @media (max-width: 800px) {
      height: 50%;
    }

    @media (max-width: 550px) {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
      margin-inline: auto;
    }

    ${(props) =>
      props.$reverse &&
      css`
        margin-left: initial;
        margin-right: auto;
      `}
  }
`;
