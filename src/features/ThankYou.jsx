import styled from "styled-components";

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
`;

function ThankYou() {
  return (
    <StyledThankYou>
      <span>
        <img src="/images/icon-thank-you.svg" alt="Thank you" />
      </span>

      <h2>Thank you!</h2>

      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </StyledThankYou>
  );
}

export default ThankYou;
