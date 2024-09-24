import { Chatbot } from "./Chatbot";

export function Home() {
  return (
    <div className="grid grid-cols-2 gap-7 h-screen" >
        <div>
           
        </div>
        <div className="grid grid-rows-2 gap-y-1 h-full">
            <div>

            </div>
            <div className="px-9 pb-3 align-center">
                <Chatbot/>
            </div>
        </div>
    </div>
  );
}