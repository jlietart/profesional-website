import { Punchline } from "./components/Punchline";
import { SkillList } from "./components/SkillList";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-200 p-4 text-center">Header</header>
      <main className="flex-grow bg-white p-4 text-center">
        <Punchline />
      </main>
      <footer className="bg-gray-200 p-4 text-center">Footer</footer>
    </div>
  );
}
