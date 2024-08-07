import React from 'react';

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    if (!question) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <h2>{question.question}</h2>
            <form onSubmit={onSubmit}>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                        />
                        {option}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Question;


