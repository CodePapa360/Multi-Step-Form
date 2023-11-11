import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import { addAddonsData, prevStep } from "./formSlice";
import { useDispatch } from "react-redux";
import FormInputs from "../ui/FormInputs";
import AddOn from "./AddOn";
import { allAddons } from "./formSlice";

const AddonsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AddOns() {
  const dispatch = useDispatch();

  function handleNext(e) {
    e.preventDefault();
    dispatch(addAddonsData());
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevStep());
  }

  return (
    <FormBody>
      <FormInputs>
        <Heading>Pick add-ons</Heading>
        <SubHeading>Add-ons help enhance your gaming experience.</SubHeading>

        <AddonsContainer>
          {allAddons.map((addon) => (
            <AddOn
              id={addon.id}
              name={addon.name}
              description={addon.description}
              costs={addon.costs}
              key={addon.id}
            />
          ))}
        </AddonsContainer>
      </FormInputs>

      <FormActions>
        <Button onClick={handlePrev} position="left">
          Go back
        </Button>

        <Button onClick={handleNext} position="right">
          Next step
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default AddOns;
