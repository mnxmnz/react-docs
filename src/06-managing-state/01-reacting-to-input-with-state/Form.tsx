export default function Form({ status = 'empty' }) {
  if (status === 'success') {
    return <h2>That's right!</h2>;
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form>
        <textarea />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
