import { TrainingRoom } from "../../../components/TrainingRoom/TrainingRoom";
import { IsAuth } from "../../../hoc/IsAuth";
export default function Training() {
  return (
    <IsAuth>
      <TrainingRoom />
    </IsAuth>
  );
}
