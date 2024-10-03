import { useRef, useState, useEffect } from 'react';

export function ProgressTracker({masteredCount}) {

  return (
    <div className="bg-[#FAFCFC] w-full rounded-[34px] overflow-hidden shadow-lg flex flex-col ">
      <div className="bg-[#FAFCFC] opacity-90 p-3 flex items-center justify-between">
        <div className='px-4'>
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] w-8 h-8 rounded-full"></div>
        </div>
        <span className="text-black text-center flex-1 font-semibold text-5xl">Progress Tracker</span>
        <div className='px-4'>
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] w-8 h-8 rounded-full"></div>
        </div>
      </div>
      <div className="overflow-y-auto p-4 bg-[#AEB2B5] h-44 flex items-center justify-center">
                <span className="text-black font-bold text-4xl mr-2">{masteredCount}/100</span>
                <span className="text-black font-semibold text-4xl">Cards Mastered</span>
      </div>
    </div>
  );
}
