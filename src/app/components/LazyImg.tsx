import { cn } from '@/utils/cn'
import Image from 'next/image'

interface Props {
    src: string,
    alt: string,
    className?: string,
}

const loadAnimation = (e: EventTarget & HTMLImageElement) => {
    e.className.replace('animate-pulse', 'inAnim')
}

const LazyImg = ({ src, alt, className }: Props) => {
    return (
        <div className={cn('relative', className)}>
            <Image src={src} fill alt={alt} sizes="100%" className="object-cover object-center animate-pulse" onLoad={(e) => { e.currentTarget.className.replace('animate-pulse', 'inAnim') }} />
        </div>
    )
}
export { LazyImg }