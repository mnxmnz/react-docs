interface ClockProps {
  time: Date;
}

export default function Clock({ time }: ClockProps) {
  const hours = time.getHours();
  const className = 0 <= hours && hours <= 6 ? 'night' : 'day';

  return (
    <section>
      <h2>Clock</h2>
      <h3 className={className}>{time.toLocaleTimeString()}</h3>
    </section>
  );
}
