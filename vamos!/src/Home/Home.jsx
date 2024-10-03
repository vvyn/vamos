import { Chatbot } from "./Chatbot";
import { Flashcards } from "./Flashcards";
import { ProgressTracker } from "./ProgressTracker";

export function Home() {
  return (
    <div className="grid grid-cols-2 h-screen gap-4">
      {/* Flashcards on the left */}
      <div className="flex justify-center items-start">
        <Flashcards />
      </div>

      {/* Chatbot on the right */}
      <div className="flex flex-col justify-center items-end mr-2 mb-6 space-y-6">
        <ProgressTracker />
        <Chatbot />
      </div>
    </div>
  );
}