import { Chatbot } from "./Chatbot";

export function Home() {
  return (
    <div className="grid grid-cols-2 gap-7" >
        <div>
           
        </div>
        <div className="grid grid-rows-2 gap-y-2">
            <div>

            </div>
            <div className="px-16 align-center">
                <Chatbot/>
            </div>
        </div>
    </div>
  );
}