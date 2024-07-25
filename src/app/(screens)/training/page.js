import { Container } from "../../../components/Container/Container";
import { TrainingRoom } from "../../../components/TrainingRoom/TrainingRoom";
import { IsAuth } from "../../../hoc/IsAuth";
export default function Training() {
  return (
    <IsAuth>
      {" "}
      <main>
        <Container>
          <TrainingRoom />
        </Container>
      </main>
    </IsAuth>
  );
}
