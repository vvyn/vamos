import { useState } from 'react';

export function Flashcards() {
    const cards = [
        { question: "What is the supreme law of the land?", answer: "The Constitution" },
        { question: "What does the Constitution do?", answer: "▪ sets up the government\n▪ defines the government\n▪ protects basic rights of Americans" },
        { question: "The idea of self-government is in the first three words of the Constitution. What are these words?", answer: "We the People" }
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setIsFlipped(false); // Reset flip state when moving to the next card
    };

    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setIsFlipped(false); // Reset flip state when moving to the previous card
    };

    const handleCardClick = () => {
        setIsFlipped(!isFlipped); // Toggle flip state
    };

    const handleStar = () => {
        const count = 0; // Toggle flip state
    };

    return(
        <div className="bg-[#FAFCFC] w-full h-[90vh] rounded-[34px] overflow-hidden shadow-lg flex flex-col justify-between p-6 mt-12 mx-8">
        {/* Flashcards Header */}
        <div className="bg-[#FAFCFC] opacity-90 p-3 flex items-center justify-between">
            <div className='px-4'>
                <div className="bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] w-8 h-8 rounded-full"></div>
            </div>  
            <span className="text-black text-center flex-1 font-semibold text-5xl">Flashcards</span>
            <div className='px-4'>
                <div className="bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] w-8 h-8 rounded-full"></div>
            </div>
        </div>

        {/* Flashcard Box */}
        <div className="bg-[#AEB2B5] flex-1 flex items-center justify-center rounded-lg p-6">
            <div className="flex flex-col items-center">
                {/* Card Display */}
                <div 
                    className="bg-[#EDF0F1] p-6 rounded-2xl shadow-lg cursor-pointer text-center w-[35vw] h-[55vh] flex items-center justify-center" 
                    onClick={handleCardClick}
                >
                    <div className="overflow-y-auto text-4xl flex items-center justify-center text-center h-full w-full px-4"
                    style={{ fontFamily: '"Open Sans Condensed", sans-serif' }}
                    >
                            {isFlipped ? (
                                <span>{cards[currentCardIndex].answer}</span>
                            ) : (
                                <span>{cards[currentCardIndex].question}</span>
                            )}
                        </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between w-full mt-4">
                    <button 
                        className="bg-gray-700 text-white px-1 py-1 rounded-full flex items-center justify-center outline-none" 
                        onClick={handlePrev}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M15 7a1 1 0 0 0-1.707-.707l-5 5a1 1 0 0 0 0 1.414l5 5A1 1 0 0 0 15 17z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button 
                        className="bg-gray-700 text-white px-1 py-1 rounded-full flex items-center justify-center outline-none" 
                        onClick={handleStar}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .587l3.668 7.568 8.332 1.215-6 5.848 1.416 8.263L12 18.896l-7.416 3.88L6 15.168l-6-5.848 8.332-1.215z"/>
                        </svg>
                    </button>
                    <button 
                        className="bg-gray-700 text-white px-1 py-1 rounded-full flex items-center justify-center outline-none" 
                        onClick={handleNext}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M9 17a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 9 7z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
     );
}