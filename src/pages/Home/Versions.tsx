import { styled } from "styled-components";
import VersionsData from "../../data/versions";
import CustomButton from "../../components/CustomButton";

type props = {
  versionsRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Versions = ({ versionsRef }: props) => {
  return (
    <Wrapper ref={versionsRef} id="#versions">
      <h1>Versions</h1>
      {VersionsData.length === 0 ? (
        <Version>
          <div>No stable versions available</div>
          <div>
            <h3>2 July 2023</h3>
            <CustomButton title="Download" ghost={true} disabled={true} />
          </div>
        </Version>
      ) : (
        VersionsData.map((data) => (
          <Version key={data.title}>
            <div>{data.title}</div>
            <div>
              <h3>{data.date}</h3>
              <CustomButton
                title="Download"
                ghost={!data.available}
                disabled={!data.available}
              />
            </div>
          </Version>
        ))
      )}
    </Wrapper>
  );
};

export default Versions;

const Wrapper = styled.div`
  padding: 1rem;
  h1 {
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const Version = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }

  div {
    color: var(--colors-font-sec);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--colors-accent-sec);
    @media (max-width: 400px) {
      justify-content: space-between;
    }

    h3 {
      font-size: 0.9rem;
      margin-right: 1rem;
      font-weight: 300;
      color: white;
    }

    &:first-child {
      justify-content: flex-start;
      flex: 1;
      background-color: transparent;
      padding: 0px;
      border-radius: 0px;

      @media (max-width: 400px) {
        background-color: var(--colors-bg-sec);
        margin-bottom: 5px;
        padding: 5px 10px;
        border-radius: 10px;
      }
    }
  }
`;
