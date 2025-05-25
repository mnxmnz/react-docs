import { useRef } from 'react';

interface DebouncedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
  const timeoutID = useRef<number | null>(null);

  const handleClick = () => {
    if (timeoutID.current !== null) {
      clearTimeout(timeoutID.current);
    }

    timeoutID.current = setTimeout(() => {
      onClick();
    }, 1000);
  };

  return <button onClick={handleClick}>{children}</button>;
}

export default function DashBoard() {
  return (
    <div>
      <DebouncedButton onClick={() => alert('Spaceship launched!')}>Launch the spaceship</DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
    </div>
  );
}
