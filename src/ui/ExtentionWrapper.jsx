import styled from "styled-components";

const ExtentionWrapper = styled.li`
  label {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--light-gray);
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    user-select: none;

    span {
      margin-right: auto;
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }

      p {
        font-size: 0.7rem;
        color: var(--cool-gray);
      }
    }

    > p {
      font-size: 0.7rem;
      color: var(--purplish-blue);
      font-weight: 500;
    }
  }


  label::before {
    content: "";
    height: 1.2rem;
    width: 1.2rem;
    background-color: var(--white);
    border-radius: 5px;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--cool-gray);
  }

  input {
    display: none;
  }

  input:checked + label::before {
    content: "✔";
    background-color: var(--purplish-blue);
    border: 2px solid var(--purplish-blue);
  }

  input:checked + label {
    background-color: var(--magnolia);
    border: 2px solid var(--purplish-blue);
  }
`;

export default ExtentionWrapper;
