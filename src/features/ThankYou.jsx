import styled from "styled-components";
import Heading from "../ui/Heading";
import FormBody from "../ui/FormBody";

const StyledThankYou = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  span {
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--cool-gray);
  }
`;

function ThankYou() {
  return (
    <FormBody>
      <StyledThankYou>
        <span>
          <img src="/images/icon-thank-you.svg" alt="Thank you" />
        </span>

        <Heading>Thank you!</Heading>

        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </StyledThankYou>
    </FormBody>
  );
}

export default ThankYou;
