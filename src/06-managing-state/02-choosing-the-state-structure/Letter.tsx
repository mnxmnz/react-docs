interface LetterProps {
  letter: {
    id: number;
    subject: string;
    isStarred: boolean;
  };
  onToggle: (id: number) => void;
  isSelected: boolean;
}

export default function Letter({ letter, onToggle, isSelected }: LetterProps) {
  return (
    <li className={isSelected ? 'selected' : ''}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
