import { WordsTable } from "../../../components/WordsTable/WordsTable.jsx";
import { Dashboard } from "../../../components/Dashboard/Dashboard";
import { IsAuth } from "../../../hoc/IsAuth.jsx";
export default function Dictionary() {
  return (
    <IsAuth>
      <div className="container">
        <Dashboard />
        <WordsTable />
      </div>
    </IsAuth>
  );
}
