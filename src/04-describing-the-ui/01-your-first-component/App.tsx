function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h2>Amazing scientists</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
