import { useImmer } from 'use-immer';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourArtworks, updateYourList] = useImmer(initialList);

  function handleToggleMyList(id: number, nextSeen: boolean) {
    updateMyList(draft => {
      const artwork = draft.find(a => a.id === id);
      if (artwork) {
        artwork.seen = nextSeen;
      }
    });
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    updateYourList(draft => {
      const artwork = draft.find(a => a.id === artworkId);
      if (artwork) {
        artwork.seen = nextSeen;
      }
    });
  }

  return (
    <div>
      <h2>Art Bucket List</h2>
      <h3>My list of art to see:</h3>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h3>Your list of art to see:</h3>
      <ItemList artworks={yourArtworks} onToggle={handleToggleYourList} />
    </div>
  );
}

interface ItemListProps {
  artworks: { id: number; title: string; seen: boolean }[];
  onToggle: (id: number, seen: boolean) => void;
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
