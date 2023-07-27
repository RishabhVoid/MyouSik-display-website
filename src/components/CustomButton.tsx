import { motion } from "framer-motion";
import { styled } from "styled-components";
import bopClickVariant from "../motions/bopClickVariant";

type props = {
  title?: string;
  callback?: () => void;
};

const CustomButton = ({ title = "Default", callback = () => {} }: props) => {
  return (
    <Wrapper
      onClick={callback}
      variants={bopClickVariant}
      whileHover={"hover"}
      whileTap={"click"}
    >
      {title}
    </Wrapper>
  );
};

export default CustomButton;

const Wrapper = styled(motion.button)`
  position: relative;
  padding: 10px 20px;
  border-radius: 5px;
  border: 0px;
  font-size: 0.9rem;
  background-color: var(--colors-accent-pr);
  color: var(--colors-font-pr);
  cursor: pointer;
  z-index: 60;
`;
