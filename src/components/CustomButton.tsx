import { motion } from "framer-motion";
import { css, styled } from "styled-components";
import bopClickVariant from "../motions/bopClickVariant";

type props = {
  title?: string;
  callback?: () => void;
  ghost?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  image?: string;
};

const CustomButton = ({
  title = "Default",
  callback = () => {},
  ghost = false,
  disabled = false,
  type = "button",
  image = "",
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
      type={type}
    >
      <h3 className="btn_title">{title}</h3>
      {image.length !== 0 && (
        <img className="btn_image" src={image} alt={"btnImage"} />
      )}
    </Wrapper>
  );
};

export default CustomButton;

const Wrapper = styled(motion.button)<{ $ghost: boolean; $disabled: boolean }>`
  position: relative;
  padding: 15px 30px;
  border-radius: 50px;
  border: 0px;
  font-size: 0.9rem;
  background-color: var(--colors-accent-pr);
  color: var(--colors-font-pr);
  cursor: pointer;
  z-index: 60;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn_title {
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }

  .btn_image {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    position: relative;
  }

  ${(props) =>
    props.$ghost &&
    css`
      background-color: var(--colors-bg-pr);
      border: 1px solid transparent;
      color: white;
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
