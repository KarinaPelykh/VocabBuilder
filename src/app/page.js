import { IsAuth } from "../hoc/IsAuth.jsx";
export default function Home() {
  return (
    <IsAuth>
      <div>
        <main>
          <p>Home</p>
        </main>
      </div>
    </IsAuth>
  );
}
