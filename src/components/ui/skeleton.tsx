import { cn } from "@/lib/utils"
import { Image } from 'lucide-react'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-full h-full flex items-center justify-center opacity-50", className)}
      {...props}
    >
        <Image width={70} height={70} className="animate-pulse"/>
    </div>
  )
}

export { Skeleton }
