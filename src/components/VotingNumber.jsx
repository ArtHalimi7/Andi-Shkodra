import React from 'react';

const VotingNumber = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
        <div className="relative bg-red-600 text-white text-3xl md:text-4xl font-bold rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
          <span>35</span>
          <span className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 border-2 border-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VotingNumber;
