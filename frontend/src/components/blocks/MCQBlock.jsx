import React, { useState } from 'react';

const MCQBlock = ({ question, options, answer }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index) => {
    if (showResult) return; // Don't allow changing answer after submission
    setSelected(index);
    setShowResult(true);
  };

  return (
    <div className="lesson-block lesson-mcq-block">
      <h3>{question}</h3>
      <div className="mcq-options">
        {options.map((option, index) => {
          const isCorrect = index === answer;
          const isSelected = selected === index;
          
          let buttonClass = "mcq-option";
          if (showResult) {
            if (isCorrect) {
              buttonClass += " correct";
            } else if (isSelected && !isCorrect) {
              buttonClass += " incorrect";
            }
          }

          return (
            <button key={index} onClick={() => handleSelect(index)} className={buttonClass} disabled={showResult}>
              {option}
            </button>
          );
        })}
      </div>
      {showResult && selected !== null && (
        <div className={`mcq-feedback ${selected === answer ? 'correct' : 'incorrect'}`}>
          {selected === answer ? 'Correct! Well done.' : 'Not quite. The correct answer is highlighted in green.'}
        </div>
      )}
    </div>
  );
};

export default MCQBlock;