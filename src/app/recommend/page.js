import { Container } from "../../components/Container/Container";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { WordsTable } from "../../components/WordsTable/WordsTable";

export default function Recommend() {
  return (
    <main>
      <Container>
        <Dashboard />
        <WordsTable />
      </Container>
    </main>
  );
}
