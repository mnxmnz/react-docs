import { useState } from 'react';

import { letters } from './data';
import Letter from './Letter';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectedCount = selectedIds.length;

  function handleToggle(toggledId: number) {
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(current => current.filter(id => id !== toggledId));
    }

    setSelectedIds(current => [...current, toggledId]);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
