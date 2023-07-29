import { motion } from "framer-motion";
import { css, styled } from "styled-components";
import bopClickVariant from "../motions/bopClickVariant";

type props = {
  title?: string;
  callback?: () => void;
  ghost?: boolean;
  disabled?: boolean;
};

const CustomButton = ({
  title = "Default",
  callback = () => {},
  ghost = false,
  disabled = false,
}: props) => {
  return (
    <Wrapper
      $ghost={ghost}
      $disabled={disabled}
      onClick={() => {
        if (disabled) return;
        callback();
      }}
      variants={bopClickVariant}
      whileHover={"hover"}
      whileTap={"click"}
    >
      {title}
    </Wrapper>
  );
};

export default CustomButton;

const Wrapper = styled(motion.button)<{ $ghost: boolean; $disabled: boolean }>`
  position: relative;
  padding: 10px 20px;
  border-radius: 5px;
  border: 0px;
  font-size: 0.9rem;
  background-color: var(--colors-accent-pr);
  color: var(--colors-font-pr);
  cursor: pointer;
  z-index: 60;

  ${(props) =>
    props.$ghost &&
    css`
      background-color: transparent;
      border: 1px solid var(--colors-accent-pr);
      color: var(--colors-accent-pr);
    `}

  ${(props) =>
    props.$disabled &&
    css`
      background-color: transparent;
      border: 1px solid var(--colors-font-sec);
      color: var(--colors-font-sec);
      pointer-events: none;
    `}
`;
