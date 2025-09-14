// src/components/SelectionList.tsx
import { SelectionItem } from "./SelectionItem";

interface SelectionListProps {
  title: string;
  items: {
    id: string;
    name: string;
    address: string;
    imageUrl: string;
    rating: number;
  }[];
}

export function SelectionList({ title, items }: SelectionListProps) {
  return (
    <section className="mb-6">
      <h2 className="text-white font-bold text-lg mb-2">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {items.map((item) => (
          <SelectionItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            address={item.address}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
}
