import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updatePlan } from "./formSlice";
import { breakpoints } from "../styles/GlobalStyles";

const PlanWrapper = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  border: 2px solid var(--light-gray);
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 10px;
  user-select: none;

  h3 {
    font-weight: 700;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0;
    height: max-content;

    > :first-child {
      margin-bottom: 1rem;
    }
  }
`;

const Cost = styled.p`
  color: var(--cool-gray);
`;

function Plan({ plan: { name, costs } }) {
  const dispatch = useDispatch();
  const { isYearly, plan } = useSelector((state) => state.form);
  const cost = isYearly ? `${costs.yearly}/yr` : `${costs.monthly}/mo`;

  return (
    <>
      <input
        type="radio"
        name="plan"
        id={name}
        onChange={() => dispatch(updatePlan(name))}
        checked={plan === name}
      />
      <PlanWrapper htmlFor={name}>
        <span>
          <img src={`/images/icon-${name.toLowerCase()}.svg`} alt={name} />
        </span>
        <span>
          <h3>{name}</h3>
          <Cost>{cost}</Cost>
          {isYearly && <p>2 Months free</p>}
        </span>
      </PlanWrapper>
    </>
  );
}

export default Plan;
