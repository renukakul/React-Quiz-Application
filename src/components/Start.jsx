import React from 'react';


export default function Start({ onStart }) {
  return (
    <div className="start-container">
      <h1 className="start-heading">Welcome to the Quiz!</h1>
      <h2 className="start-subheading">Are you ready to test your knowledge?</h2>
      <p className="start-info">
        <strong>No. of Questions:</strong> 5
      </p>
      <p className="start-info">
        <strong>Skill Level:</strong> Beginner
      </p>
      <p className="start-info">
        <strong>Time:</strong> Approximately 10 minutes
      </p>

      <button className="button start-button" onClick={onStart}>
        Start Quiz
      </button>
      <h1 className="start-heading" >All the Best!</h1>
    </div>
  );
}
