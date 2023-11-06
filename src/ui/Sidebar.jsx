import { useSelector } from "react-redux";
import { getCurrentStep } from "../features/formSlice";

function Sidebar() {
  const step = useSelector(getCurrentStep);

  return <div>{step}</div>;
}

export default Sidebar;
