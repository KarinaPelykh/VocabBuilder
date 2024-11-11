import { IsAuth } from "../../../hoc/IsAuth.jsx";

import { WordsTable, Dashboard } from "@/components";

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
