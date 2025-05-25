import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const selectedRef = useRef<HTMLLIElement>(null);
  const [index, setIndex] = useState(0);

  function handleNext() {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    selectedRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
  return (
    <>
      <nav>
        <button onClick={() => handleNext}>Next</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}>
              <img className={index === i ? 'active' : ''} src={cat.imageUrl} alt={'Cat #' + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList: { id: number; imageUrl: string }[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i,
  });
}
