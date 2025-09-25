import { Header } from "../components/Header";
import { SearchBar } from "@/components/SearchBar";
import { Categories } from "@/components/Categories";
import { Banner } from "@/components/Banner";
import { BookingItem } from "@/components/BookingItem";

import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  
  const barbershops = await db.barbershop.findMany();
  
  const barbershopsInv = await db.barbershop.findMany({
  orderBy: {
    name: "desc",
  },
  
  });

  return (
    <main className="flex flex-col min-h-screen bg-[#141518] text-white px-5 py-6">
      <Header />

      <section className="mt-6">
        <h1 className="text-[20px] font-normal">
          Olá, <span className="font-bold">Miguel!</span>
        </h1>
        <p className="text-sm text-gray-300">Sexta, 2 de fevereiro</p>
      </section>
      <SearchBar />
      <Categories />
      <Banner />

      <section className="mt-6">
        <h2 className=" justify-start text-slate-500 text-xs font-bold  leading-none mb-4"> AGENDAMENTOS</h2>

        <div className="flex flex-col gap-4">
          <BookingItem
          />
        
        </div>
      </section>
      <section className="mt-6">
      <h3 className="p-5 text-sm font-semibold text-gray-400 uppercase">
        Recomendados
      </h3>
      <div className="flex flex-row gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((item) => (
          <BarbershopItem key={item.id} barbershop={item} />
        ))}
      </div>
      {/*Populares*/}
      <h3 className="p-5 text-sm font-semibold text-gray-400 uppercase">
        Populares
      </h3>
      <div className="flex flex-row gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershopsInv.map((item) => (
          <BarbershopItem key={item.id} barbershop={item} />
        ))}
      </div>
       </section> 
    </main>
  );
}
