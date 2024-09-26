import { Chatbot } from "./Chatbot";
import { Flashcards } from "./Flashcards";

export function Home() {
  return (
    <div className="grid grid-cols-2 h-screen gap-7">
      {/* Flashcards on the left */}
      <div className="flex justify-center items-start">
        <Flashcards />
      </div>

      {/* Chatbot on the right */}
      <div className="flex justify-center items-end">
        <Chatbot />
      </div>
    </div>
  );
}