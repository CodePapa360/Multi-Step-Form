import { useSelector } from "react-redux";
import { getCurrentStep } from "../features/formSlice";

function Sidebar() {
  const step = useSelector(getCurrentStep);

  return (
    <div>
      <div>
        <span>
          <span>1</span>
          <span>
            <p>Step 1</p>
            <p>Your info</p>
          </span>
        </span>

        <span>
          <span>2</span>
          <span>
            <p>Step 2</p>
            <p>Select plan</p>
          </span>
        </span>

        <span>
          <span>3</span>
          <span>
            <p>Step 3</p>
            <p>Add-ons</p>
          </span>
        </span>

        <span>
          <span>4</span>
          <span>
            <p>Step 4</p>
            <p>Summary</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
