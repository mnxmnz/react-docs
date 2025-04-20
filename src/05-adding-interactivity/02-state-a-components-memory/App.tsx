import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;

  function onClickPrev() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function onClickNext() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function onClickMore() {
    setShowMore(showMore => !showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <>
      <button onClick={onClickPrev}>Prev</button>
      <button onClick={onClickNext}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={onClickMore}>{showMore ? 'Hide' : 'Show'} details</button>
      {showMore && <p>{sculpture.description}</p>}
      <div>
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </>
  );
}
