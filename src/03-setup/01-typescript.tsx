function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h2>Welcome to my app</h2>
      <MyButton title="I'm a button" />
    </div>
  );
}
