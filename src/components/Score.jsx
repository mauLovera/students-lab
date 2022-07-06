const Score = ({score}) => {
  return (
    <div className="student-scores-container">
      <p className="student-score-date">{score.score} / {score.date}</p>
    </div>
  )
}

export default Score