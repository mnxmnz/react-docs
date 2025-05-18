import { useState } from 'react';

const IMAGES = [
  {
    place: 'Penang, Malaysia',
    src: 'https://i.imgur.com/FJeJR8M.jpg',
  },
  {
    place: 'Lisbon, Portugal',
    src: 'https://i.imgur.com/dB2LRbj.jpg',
  },
  {
    place: 'Bilbao, Spain',
    src: 'https://i.imgur.com/z08o2TS.jpg',
  },
  {
    place: 'Valparaíso, Chile',
    src: 'https://i.imgur.com/Y3utgTi.jpg',
  },
  {
    place: 'Schwyz, Switzerland',
    src: 'https://i.imgur.com/JBbMpWY.jpg',
  },
  {
    place: 'Prague, Czechia',
    src: 'https://i.imgur.com/QwUKKmF.jpg',
  },
  {
    place: 'Ljubljana, Slovenia',
    src: 'https://i.imgur.com/3aIiwfm.jpg',
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const hasNext = index < IMAGES.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
      return;
    }

    setIndex(0);
  }

  const image = IMAGES[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h3>
        Image {index + 1} of {IMAGES.length}
      </h3>
      <img key={image.src} src={image.src} alt={image.place} />
      <p>{image.place}</p>
    </>
  );
}
