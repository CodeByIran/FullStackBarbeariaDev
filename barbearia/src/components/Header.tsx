// components/Header.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-[#141518] px-5 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        {/* Placeholder do logo.svg (substituir depois pelo arquivo real) */}
        <Image
          src="/imagens/logo.svg"
          alt="Logo"
          width={100}
          height={32}
          priority
        />
      </div>

      {/* Botão do menu */}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-white hover:bg-white/10"
      >
        {/* Ícone menu.svg inline */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.3335 10H16.6668"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.3335 5H16.6668"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.3335 15H16.6668"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </header>
  );
}
