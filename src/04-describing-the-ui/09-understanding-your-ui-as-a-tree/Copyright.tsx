interface CopyrightProps {
  year: number;
}

export default function Copyright({ year }: CopyrightProps) {
  return <p className="small">©️ {year}</p>;
}
