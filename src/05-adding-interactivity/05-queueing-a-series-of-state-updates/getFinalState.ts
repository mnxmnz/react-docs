export default function getFinalState(baseState: number, queue: (number | ((n: number) => number))[]) {
  let finalState = baseState;

  queue.forEach(update => {
    if (typeof update === 'number') {
      return (finalState = update);
    }

    return (finalState = update(finalState));
  });

  return finalState;
}
