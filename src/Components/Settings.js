import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = ({ setDifficulty }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
    const navigate = useNavigate();

    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDifficulty(selectedDifficulty);
        navigate("/quiz"); // Navigate to the quiz page
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Difficulty:
                        <select value={selectedDifficulty} onChange={handleDifficultyChange}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    );
};

export default Settings;
