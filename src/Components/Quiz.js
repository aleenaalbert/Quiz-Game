import React, { Component } from 'react';
import Question from './Question';
import qBank from './QuestionBank'; 
class Quiz extends Component {
    state = {
        currentQuestion: null,
        score: 0,
        totalQuestions: 0,
        currentIndex: 0,
        quizCompleted: false,
        difficulty: 'easy', 
    };

    componentDidMount() {
        this.startQuiz();
    }

    startQuiz = () => {
        const { difficulty } = this.state;
        const questions = qBank[difficulty];
    
        if (questions && questions.length > 0) {
            this.setState({
                currentQuestion: questions[0], 
                totalQuestions: questions.length,
                currentIndex: 0,
            });
        } else {
            console.error("No questions found for the selected difficulty.");
        }
    };
    

    handleAnswer = (selectedAnswer) => {
        const { currentQuestion, score, totalQuestions, currentIndex } = this.state;

        
        if (selectedAnswer === currentQuestion.answer) {
            this.setState({ score: score + 1 });
        }

        if (currentIndex < totalQuestions - 1) {
           
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1,
                currentQuestion: qBank[this.state.difficulty][prevState.currentIndex + 1],
            }));
        } else {
            
            this.setState({ quizCompleted: true });
        }
    };

    restartQuiz = () => {
        this.setState({
            score: 0,
            currentIndex: 0,
            quizCompleted: false,
        }, this.startQuiz);
    };
    render() {
        const { currentQuestion, score, totalQuestions, quizCompleted } = this.state;
    
        if (quizCompleted) {
            return (
                <div className="score-container">
                    <h2>Results</h2>
                    <h4>Your score: {score} out of {totalQuestions}</h4>
                    <button className="btn btn-primary mt-2" onClick={this.restartQuiz}>
                        Restart Quiz
                    </button>
                </div>
            );
        }
    
        return (
            <div>
                {currentQuestion ? (
                    <Question questionData={currentQuestion} onAnswer={this.handleAnswer} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        );
    }
}    

export default Quiz;

