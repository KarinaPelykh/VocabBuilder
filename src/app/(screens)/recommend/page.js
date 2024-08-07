import { Container } from "../../../components/Container/Container";
import { Dashboard } from "../../../components/Dashboard/Dashboard";
import { WordsTable } from "../../../components/WordsTable/WordsTable";
import { IsAuth } from "../../../hoc/IsAuth";

export default function Recommend() {
  return (
    <IsAuth>
      <main>
        <Container>
          <Dashboard />
          <WordsTable />
        </Container>
      </main>
    </IsAuth>
  );
}
