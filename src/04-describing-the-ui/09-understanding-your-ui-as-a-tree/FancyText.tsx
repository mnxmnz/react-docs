interface FancyTextProps {
  title?: string;
  text: string;
}

export default function FancyText({ title, text }: FancyTextProps) {
  return title ? <h1 className="fancy title">{text}</h1> : <h3 className="fancy cursive">{text}</h3>;
}
