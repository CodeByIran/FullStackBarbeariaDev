// components/SearchBar.tsx
import { Button } from "./ui/button";

export function SearchBar() {
  return (
    <div className="flex items-center gap-2 mt-6">
      {/* Input */}
      <input
        type="text"
        placeholder="Buscar"
        className="flex-1 h-9 px-3 py-2 rounded-lg border border-[#26272B] bg-[#1A1B1F] text-[#838896] text-sm font-normal font-nunito placeholder-[#838896] focus:outline-none"
      />

      {/* Botão de ícone */}
      <Button variant="default" size="icon" className="bg-[#8162FF]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4998 17.4998L13.9165 13.9165"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
