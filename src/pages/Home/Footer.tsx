import { styled } from "styled-components";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Wrapper>
      <h2>
        &#169; <span>MyouSik</span> @{year}
      </h2>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--colors-font-pr);
  }

  span {
    color: var(--colors-accent-pr);
  }
`;
