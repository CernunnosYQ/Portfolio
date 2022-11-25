import { FaSun } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="px-12 py-6 mb-4 flex justify-between">
      <h1 className="text-xl text-neutral-200">CernunnosYQ</h1>
      <div className="flex align-baseline">
        <button className="bg-primary rounded-lg p-2 mr-2">
          <FaSun className="text-neutral-200 text-lg" />
        </button>
        <button className="bg-accent rounded-lg py-1 px-3 text-neutral-800">
          Contact me
        </button>
      </div>
    </nav>
  );
}
