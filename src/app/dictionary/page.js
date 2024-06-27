import { WordsTable } from "../../components/WordsTable/WordsTable";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Container } from "../../components/Container/Container";

export default function Dictionary() {
  return (
    <main>
      <Container>
        <Dashboard />
        <WordsTable />
      </Container>
    </main>
  );
}
