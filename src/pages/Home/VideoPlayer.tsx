import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { styled } from "styled-components";

const VideoPlayer = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapperRef);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const setWindowWidthOnResize = () => {
      const width = window.innerWidth;
      let percenteWidth = 70;
      if (width < 500) {
        percenteWidth = 90;
      }
      setWindowWidth(Math.round((width * percenteWidth) / 100));
    };

    setWindowWidthOnResize();
    window.addEventListener("resize", setWindowWidthOnResize);
    return () => {
      window.removeEventListener("resize", setWindowWidthOnResize);
    };
  }, [windowWidth]);

  return (
    <Wrapper ref={wrapperRef}>
      <iframe
        width={windowWidth}
        height={Math.round((windowWidth * 9) / 16)}
        src={`https://www.youtube.com/embed/Esd7reIzaIo?loop=1&autoplay=${
          inView ? 1 : 0
        }&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

export default VideoPlayer;

const Wrapper = styled.div`
  height: fit-content;
  padding: 1rem 2rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    border-radius: 10px;
  }
`;
