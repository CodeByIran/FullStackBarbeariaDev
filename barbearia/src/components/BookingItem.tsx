
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function BookingItem() {
  return (
    <Card className="flex justify-between items-center w-[350px] h-[111px] rounded-[10px] bg-[#1A1B1F]">
      {/* Frame esquerdo */}
      <CardContent className="flex flex-col justify-center items-start gap-3 p-3 w-[334px] h-[69px]">
        <Badge className="justify-start text-violet-500 text-xs font-bold font-['Nunito'] leading-none">
          Confirmado
        </Badge>

  <span className="text-[16px] font-bold text-white">Corte de cabelo</span>


        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6 rounded-full">
            <AvatarImage src="/ellipse-4.svg" alt="Vintage Barber" />
            <AvatarFallback>VB</AvatarFallback>
          </Avatar>

          <span className="text-[14px] font-normal text-white">
            Vintage Barber
          </span>
        </div>
       
      </CardContent>

      {/* Frame direito (data/hora) */}
      <div className="w-28 self-stretch px-9 py-3 border-l border-zinc-800 inline-flex flex-col justify-center items-center ml-62 py-7 -mt-29">
        <span className="justify-start text-white text-xs font-normal font-['Nunito'] leading-none">Fevereiro</span>
        <span className="justify-start text-white text-2xl font-normal font-['Nunito'] leading-7">06</span>
        <span className="justify-start text-white text-xs font-normal font-['Nunito'] leading-none">09:45</span>
      </div>
    </Card>
  )
}

