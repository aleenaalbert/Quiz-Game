import React, { Component } from 'react';
import '../App.css';

class Score extends Component {
    getFeedbackMessage = (score, maxScore) => {
        const percentage = (score / maxScore) * 100;

        if (percentage === 100) {
            return "Perfect Score!";
        } else if (percentage >= 80) {
            return "Great Job!";
        } else if (percentage >= 50) {
            return "Good Effort!";
        } else {
            return "Better Luck Next Time!";
        }
    };

    render() {
        const { score, onRestartQuiz, maxScore } = this.props;
        const feedbackMessage = this.getFeedbackMessage(score, maxScore);

        return (
            <div className="score-container text-center">
                <h2>Results</h2>
                <h4>Your score: {score} out of {maxScore}</h4>
                <h5>{feedbackMessage}</h5>
                <button className="btn btn-primary mt-2" onClick={onRestartQuiz}>
                    Restart Quiz
                </button>
            </div>
        );
    }
}

export default Score;




