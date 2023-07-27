import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const variant = {
    default: {
      top: pos.x - 85,
      left: pos.y - 13,
      transition: {
        duration: 0.1,
      },
    },
  };

  const handleCursorPositionChange = (event: MouseEvent) => {
    setPos({
      x: event.screenY,
      y: event.screenX,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursorPositionChange);

    return () => {
      window.removeEventListener("mousemove", handleCursorPositionChange);
    };
  }, []);

  return <Cursor variants={variant} animate="default" />;
};

export default CustomCursor;

const Cursor = styled(motion.div)`
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: var(--colors-accent-sec);
  border-radius: 100px;
  mix-blend-mode: difference;
  z-index: 50;
`;
