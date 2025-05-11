import { useState } from 'react';

import './Picture.style.css';

export default function Picture() {
  const [isBackgroundActive, setIsBackgroundActive] = useState(true);

  const onClickPicture = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsBackgroundActive(prev => !prev);
  };

  return (
    <div>
      <h2>Picture</h2>
      <div className={`background ${isBackgroundActive ? 'background--active' : ''}`} onClick={onClickPicture}>
        <img
          className={`picture ${!isBackgroundActive ? 'picture--active' : ''}`}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={onClickPicture}
        />
      </div>
    </div>
  );
}
