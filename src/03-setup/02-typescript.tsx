interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h2>Welcome to my app</h2>
      <MyButton title="I'm a disabled button" disabled={true} />
    </div>
  );
}
