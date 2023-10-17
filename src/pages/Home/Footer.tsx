import { styled } from "styled-components";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Wrapper>
      <ColumnStacker>
        <Column>
          <div className="item">
            <h2>MyouSik</h2>
            <h3>
              A concept website by{" "}
              <a target="_blank" href="https://github.com/rishabhVoid">
                github/rishabhVoid
              </a>
            </h3>
          </div>
        </Column>
        <Column>
          <div className="item">
            <h2>Developer portfolio</h2>
            <h3>
              <a target="_blank" href="https://rishabhvoid.vercel.app/">
                Portfolio home
              </a>
            </h3>
            <h3>
              <a target="_blank" href="https://rishabhvoid.vercel.app/">
                Portfolio projects
              </a>
            </h3>
          </div>
        </Column>
      </ColumnStacker>
      <h2 className="copyright_text">
        &copy; All Rights Reserved <span>MyouSik</span> @{year}
      </h2>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--colors-bg-sec);

  .copyright_text {
    margin-block: 1rem;
    color: white;
    font-weight: 300;
    text-align: center;

    @media (max-width: 1020px) {
      font-size: 0.9rem;
    }

    span {
      color: var(--colors-accent-pr);
    }
  }
`;

const ColumnStacker = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  .item {
    h2 {
      font-size: 1.2rem;
      font-weight: 300;
      color: var(--colors-font-pr);
    }

    h3 {
      font-size: 0.8rem;
      font-weight: 300;
      color: var(--colors-font-sec);
      margin-left: 2px;

      a {
        color: var(--colors-accent-sec);
        text-decoration: none;
      }
    }
  }
`;
