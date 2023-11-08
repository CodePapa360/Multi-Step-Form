import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import { nextStep, prevStep } from "./formSlice";
import { useDispatch } from "react-redux";

const SummeryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopSummery = styled.div`
  background-color: var(--alabaster);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;

  > :first-child {
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 0.5rem;

    > :first-child {
      color: var(--marine-blue);
      font-weight: 800;
    }

    > :last-child {
      font-weight: 800;
    }
  }
`;

const Summery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  button {
    background-color: transparent;
    text-decoration: underline;
    border: none;
    font-weight: normal;
    color: var(--cool-gray);
    padding: 0;
  }

  > :first-child {
    color: var(--cool-gray);
  }

  > :last-child {
    color: var(--marine-blue);
    font-weight: 500;
  }
`;

const TotalSummery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  > :first-child {
    color: var(--cool-gray);
  }

  > :last-child {
    color: var(--purplish-blue);
    font-weight: 800;
  }
`;

function FinishingUp() {
  const dispatch = useDispatch();

  function handleNext(e) {
    e.preventDefault();

    dispatch(nextStep());
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevStep());
  }

  return (
    <>
      <FormBody>
        <Heading>Finishing up</Heading>
        <SubHeading>
          Double-check everithing looks OK before confirming
        </SubHeading>

        <SummeryContainer>
          <TopSummery>
            <Summery>
              <div>
                <p>Arcade(Monthly)</p>
                <button>Change</button>
              </div>

              <p>$9/mo</p>
            </Summery>

            <Summery>
              <p>Online service</p>
              <p>+$1/mo</p>
            </Summery>

            <Summery>
              <p>Larger Storage</p>
              <p>+$2/mo</p>
            </Summery>
          </TopSummery>

          <TotalSummery>
            <p>Total (per month)</p>
            <p>+$12/mo</p>
          </TotalSummery>
        </SummeryContainer>
      </FormBody>

      <FormActions>
        <Button onClick={handlePrev} positon="left">
          Go back
        </Button>

        <Button onClick={handleNext} positon="right">
          Next step
        </Button>
      </FormActions>
    </>
  );
}

export default FinishingUp;
