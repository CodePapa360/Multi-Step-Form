import { useDispatch, useSelector } from "react-redux";
import { getCurrentStep, nextStep, prevStep } from "../features/formSlice";

function Footer() {
  const dispatch = useDispatch();
  const step = useSelector(getCurrentStep);

  function handleNext() {
    dispatch(nextStep());
  }

  function handlePrev() {
    dispatch(prevStep());
  }

  return (
    <div>
      {step > 1 && <button onClick={handlePrev}>Previous</button>}
      {step < 4 && <button onClick={handleNext}>Next</button>}
    </div>
  );
}

export default Footer;
