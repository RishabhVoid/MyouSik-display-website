import { styled } from "styled-components";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  height: string;
}

const SectionWrapper = ({ children, height }: Props) => (
  <SectionWrapperStyle $height={height}>{children}</SectionWrapperStyle>
);

const SectionWrapperStyle = styled.div<{ $height: string }>`
  height: ${(props) => props.$height};
  width: 100vw;
  position: relative;
  scroll-snap-align: start;
`;

export default SectionWrapper;
