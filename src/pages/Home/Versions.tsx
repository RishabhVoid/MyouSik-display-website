import { styled } from "styled-components";
import VersionsData from "../../data/versions";
import CustomButton from "../../components/CustomButton";

type props = {
  versionsRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Versions = ({ versionsRef }: props) => {
  return (
    <Wrapper ref={versionsRef}>
      {VersionsData.length === 0 && (
        <Version>
          <div>No stable versions available</div>
          <div>
            <h3>2 July 2023</h3>
            <CustomButton title="Download" ghost={true} disabled={true} />
          </div>
        </Version>
      )}
    </Wrapper>
  );
};

export default Versions;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Version = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    flex-direction: column;
  }

  div {
    color: var(--colors-font-sec);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 400px) {
      justify-content: space-between;
    }

    h3 {
      font-size: 0.9rem;
      margin-right: 1rem;
      font-weight: 300;
    }

    &:first-child {
      justify-content: flex-start;
      flex: 1;
      @media (max-width: 400px) {
        margin-bottom: 1rem;
      }
    }
  }
`;
