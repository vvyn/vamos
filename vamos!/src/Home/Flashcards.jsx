import { useState } from 'react';
import cards from "./cardsData.js";

export function Flashcards({setMasteredCount}) {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [prevCardIndex, setPrevCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [lastCardIndex, setLastCardIndex] = useState(0);

    const getRandomIndex = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cards.length);
        } while (randomIndex === lastCardIndex);
        setLastCardIndex(randomIndex);
        return randomIndex;
    };

    const handleNext = () => {
        const randomIndex = getRandomIndex();
        setPrevCardIndex(currentCardIndex);
        setCurrentCardIndex(randomIndex);
        setIsFlipped(false);
    };

    const handlePrev = () => {
        setCurrentCardIndex(prevCardIndex);
        setIsFlipped(false);
    };

    const handleShowAnswer  = () => {
        setIsFlipped(!isFlipped);
    };

    const handleStar = () => {
        setMasteredCount((prevCount) => prevCount + 1);
        //const count = 0; // Toggle flip state
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
                    className="bg-[#EDF0F1] p-6 rounded-2xl shadow-lg cursor-pointer text-center w-[35vw] h-[55vh] flex flex-col items-center justify-center" 
                >
                    <div className="overflow-y-auto flex items-center justify-center text-center h-full w-full px-4"
                    style={{ fontFamily: '"Open Sans Condensed", sans-serif', color: 'black' }}
                    >
                            {isFlipped ? (
                                <div className="text-3xl flex items-center justify-center">
                                    <span>{cards[currentCardIndex].answer}</span>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <span className='text-4xl'>{cards[currentCardIndex].question}</span>
                                    <div className='text-2xl mt-5 text-gray-600'>
                                        {cards[currentCardIndex].translation}
                                    </div>
                                </div>
                            )}
                    </div>
                {/* Answer Button */}
                <button 
                    className="bg-white text-black px-4 py-2 rounded-md w-[90%]" 
                    onClick={handleShowAnswer}
                >
                    {isFlipped ? "Question" : "Answer"}
                </button>
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