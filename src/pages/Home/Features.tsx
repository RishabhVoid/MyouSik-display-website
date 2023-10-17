import { css, styled } from "styled-components";
import FeaturesData, { FeatureTypeDef } from "../../data/features";
import { RefObject, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import fadeInText from "../../motions/fadeInText";
import useScrollProgress from "../../hooks/useScrollProgress";
import useGetDimensions from "../../hooks/useGetDimensions";

type props = {
  mainRef: RefObject<HTMLDivElement | null>;
};

const Features = ({ mainRef }: props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const prog = useScrollProgress(wrapperRef, mainRef);

  return (
    <Wrapper ref={wrapperRef}>
      <BackgroundWrapper>
        <div className="background">
          <span
            className="blob"
            style={{
              top: `${(prog / 100) * 10}rem`,
            }}
          >
            WHAT WE OFFER
          </span>
        </div>
      </BackgroundWrapper>
      {FeaturesData.map((feature: FeatureTypeDef, index) => (
        <FeatureSection feature={feature} index={index} key={feature.title} />
      ))}
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  z-index: 50;
  background-color: var(--colors-accent-sec);
  border-radius: 50px 0px 0px 50px;

  @media (max-width: 1020px) {
    height: fit-content;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 55;

  .background {
    width: 100%;
    height: 100dvh;
    position: sticky;
    top: 0;
    border-radius: 50px 0px 0px 50px;
    display: flex;
    overflow: hidden;

    .blob {
      position: absolute;
      top: 10%;
      right: -10%;
      z-index: 56;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 5rem;
      background: var(--colors-accent-sec);
      filter: brightness(0.7);
      transition: 0.3s all linear;
      transform: rotateZ(20deg);

      font-family: var(--font-family-sec);
      font-size: 3.5rem;
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;

type FeatureSectionProps = {
  feature: FeatureTypeDef;
  index: number;
};

const showDelay = 0.1;

const FeatureSection = ({ feature, index }: FeatureSectionProps) => {
  const { width } = useGetDimensions();

  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef);

  const specialHeadingRef = useRef<HTMLHeadingElement>(null);
  const isSpecialHeadingInView = useInView(specialHeadingRef);

  return (
    <Section $index={index} $reverse={feature.reversed}>
      <div className="picture">
        <img
          src={feature.svg}
          className="pc_view_preview"
          alt={feature.svgAlt}
        />
        <div className="tag">
          <h1>{feature.tag}</h1>
          <hr />
        </div>
      </div>
      <SectionInfo>
        <div className="info_box_wrapper">
          <div className="info_box">
            <motion.h1
              className="info_heading"
              ref={headingRef}
              variants={width > 1020 ? fadeInText : {}}
              animate={!isHeadingInView ? "initial" : "eventual"}
              transition={{
                delay: showDelay,
              }}
            >
              {feature.title}
              <span> {feature.specialTitle}</span>
            </motion.h1>
            {feature.points.map((point, pointsIndex) => (
              <motion.li
                key={point.length}
                variants={width > 1020 ? fadeInText : {}}
                animate={!isHeadingInView ? "initial" : "eventual"}
                transition={{
                  delay: showDelay * (pointsIndex + 2),
                }}
              >
                {point}
              </motion.li>
            ))}
          </div>
          <img
            src={feature.svg}
            className="mobile_view_preview"
            alt={feature.svgAlt}
          />
        </div>
        <div className="info_box_wrapper">
          <div className="info_box">
            <motion.h1
              className="info_heading"
              ref={specialHeadingRef}
              variants={width > 1020 ? fadeInText : {}}
              animate={!isSpecialHeadingInView ? "initial" : "eventual"}
              transition={{
                delay: showDelay,
              }}
            >
              {feature.secondTitle}
            </motion.h1>
            {feature.secondaryPoints.map((point, secondaryPointIndex) => (
              <motion.li
                key={point.length}
                variants={width > 1020 ? fadeInText : {}}
                animate={!isSpecialHeadingInView ? "initial" : "eventual"}
                transition={{
                  delay: showDelay * (secondaryPointIndex + 2),
                }}
              >
                {point}
              </motion.li>
            ))}
          </div>
        </div>
      </SectionInfo>
    </Section>
  );
};

const Section = styled.div<{ $index: Number; $reverse: Boolean }>`
  position: relative;
  height: 200dvh;
  color: white;
  display: flex;
  z-index: 60;

  @media (max-width: 1020px) {
    padding-top: 5rem;
    height: fit-content;
  }

  ${(props) =>
    props.$reverse &&
    css`
      flex-direction: row-reverse;
    `}

  .picture {
    position: sticky;
    top: 0;
    width: 50%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 2rem;

    @media (max-width: 1020px) {
      display: none;
    }

    .tag {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      position: relative;

      @media (max-width: 1020px) {
        display: none;
      }

      h1 {
        color: var(--colors-bg-sec);
        transform: rotateZ(90deg);
      }

      hr {
        position: absolute;
        background: var(--colors-bg-sec);
        border: 0px;
        margin-inline: auto;
        height: 20%;
        bottom: 0;
        width: 5px;
        margin-inline: 2rem;
      }
    }

    ${(props) =>
      props.$reverse &&
      css`
        justify-content: end;
        padding-left: 0rem;
        padding-right: 2rem;
      `}

    .pc_view_preview {
      object-position: center;
      object-fit: contain;
      width: 60%;

      ${(props) =>
        props.$index === 2 &&
        css`
          width: 50%;
        `}

      ${(props) =>
        props.$index === 1 &&
        css`
          width: 50%;
        `}
    }
  }
`;

const SectionInfo = styled.div`
  height: 100%;
  flex: 1;
  position: relative;

  .mobile_view_preview {
    width: 100%;
    position: absolute;
    margin-block: 2rem;
  }

  .info_box_wrapper {
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 1020px) {
      flex-direction: column;
      height: fit-content;
    }

    .mobile_view_preview {
      width: 100%;
      position: relative;
      max-width: 30rem;
      @media (min-width: 1020px) {
        display: none;
      }
    }

    .info_box {
      max-width: 30rem;

      .info_heading {
        margin-bottom: 1rem;
        position: relative;
        color: var(--colors-bg-pr);
        @media (max-width: 1020px) {
          font-size: 1.5rem;
        }
        span {
          color: var(--colors-accent-pr);
        }
      }

      li {
        list-style: none;
        margin-bottom: 10px;
        position: relative;
        font-size: 1.2rem;
        color: var(--colors-bg-sec);
        @media (max-width: 1020px) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
