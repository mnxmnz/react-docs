import { useState } from 'react';

export default function ScoreBoard() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      <Counter person={isPlayerA ? 'Taylor' : 'Sarah'} />
      <button onClick={() => setIsPlayerA(!isPlayerA)}>Next player!</button>
    </div>
  );
}

function Counter({ person }: { person: string }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
