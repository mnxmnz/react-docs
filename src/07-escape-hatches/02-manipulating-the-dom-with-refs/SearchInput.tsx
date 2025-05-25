interface SearchInputProps {
  ref: React.RefObject<HTMLInputElement | null>;
}

export default function SearchInput({ ref }: SearchInputProps) {
  return <input ref={ref} placeholder="Looking for something?" />;
}
