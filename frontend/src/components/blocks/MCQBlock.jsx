import React, { useState } from 'react';

const MCQBlock = ({ question, options, answer }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index) => {
    setSelected(index);
    setShowResult(true);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => {
          const isCorrect = index === answer;
          const isSelected = selected === index;
          
          let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
          if (showResult) {
            if (isCorrect) {
              buttonClass += "bg-green-100 border-green-500 text-green-800 font-semibold";
            } else if (isSelected && !isCorrect) {
              buttonClass += "bg-red-100 border-red-500 text-red-800";
            } else {
               buttonClass += "bg-gray-50 border-gray-200 text-gray-700";
            }
          } else {
             buttonClass += "bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-400 text-gray-700";
          }

          return (
            <button key={index} onClick={() => handleSelect(index)} className={buttonClass} disabled={showResult}>
              {option}
            </button>
          );
        })}
      </div>
       {showResult && selected !== null && (
        <div className={`mt-4 text-center font-bold ${selected === answer ? 'text-green-600' : 'text-red-600'}`}>
          {selected === answer ? 'Correct!' : 'Not quite, try again next time!'}
        </div>
      )}
    </div>
  );
};

export default MCQBlock;
