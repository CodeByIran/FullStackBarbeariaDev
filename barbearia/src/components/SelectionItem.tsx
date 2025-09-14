// src/components/SelectionItem.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button"; // ShadCN Button

interface SelectionItemProps {
  imageUrl: string;
  name: string;
  address: string;
  rating: number;
}

export function SelectionItem({ imageUrl, name, address, rating }: SelectionItemProps) {
  return (
    <div className="relative w-52 flex-shrink-0 bg-secondary-black border border-gray-01 rounded-xl shadow-md overflow-hidden">
      {/* Estrela de avaliação */}
      <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
        {rating.toFixed(1)} ★
      </div>

      {/* Imagem */}
      <Image
        src={imageUrl}
        alt={name}
        width={208} // 52 * 4
        height={120}
        className="object-cover w-full h-32"
      />

      {/* Conteúdo */}
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-white font-bold text-sm">{name}</h3>
        <p className="text-gray-03 text-xs">{address}</p>
        <Button className="mt-2 w-full">Reservar</Button>
      </div>
    </div>
  );
}
