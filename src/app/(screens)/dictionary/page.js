import { WordsTable } from "../../../components/WordsTable/WordsTable.jsx";
import { Dashboard } from "../../../components/Dashboard/Dashboard";
import { Container } from "../../../components/Container/Container";
import { IsAuth } from "../../../hoc/IsAuth.jsx";
export default function Dictionary() {
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
