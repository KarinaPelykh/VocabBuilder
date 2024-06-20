import Link from "next/link";

export const Nav = () => {
  const routes = [
    { route: "dictionary", text: "Dictionary", id: 1 },
    { route: "recommend", text: "Recommend", id: 2 },
    { route: "training", text: "Training", id: 3 },
  ];
  return (
    <nav>
      <ul>
        {routes.map(({ route, text, id }) => (
          <Link key={id} href={route}>
            {text}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
