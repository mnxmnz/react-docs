interface ColorSwitchProps {
  onChangeColor: () => void;
}

export default function ColorSwitch({ onChangeColor }: ColorSwitchProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChangeColor();
  };

  return <button onClick={handleClick}>Change color</button>;
}
