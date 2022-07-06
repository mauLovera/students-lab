// components 
import Score from "./Score"

const Student = ({student}) => {
  return (
    <div className="student-card">
      <div className="student-name">
        <h1>{student.name}</h1>
      </div>
      <div className="student-bio">
        <h2>Bio:</h2>
        <p>{student.bio}</p>
        <h2>Test Scores:</h2>
        {student.scores.map(score => 
          <Score key={score.date} score={score} /> 
        )}
      </div>
    </div>
  )
}

export default Student