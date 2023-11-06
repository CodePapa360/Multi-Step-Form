import { useDispatch, useSelector } from "react-redux";
import { getCurrentStep, nextStep, prevStep } from "../features/formSlice";

function FormActions() {
  const dispatch = useDispatch();
  const step = useSelector(getCurrentStep);

  function handleNext(e) {
    e.preventDefault();
    dispatch(nextStep());
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevStep());
  }

  return (
    <div>
      {step > 1 && <button onClick={handlePrev}>Previous</button>}
      {step < 5 && <button onClick={handleNext}>Next</button>}
    </div>
  );
}

export default FormActions;
