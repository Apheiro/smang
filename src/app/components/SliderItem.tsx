import { cn } from "@/utils/cn"
import { Badge } from "./Badge"
import Markdown from 'react-markdown'
import { ScrollArea } from "./ScrollArea"
import Image from 'next/image'

interface Props {
    mangaInfo: any
    className?: string
}

const SliderItem = ({ mangaInfo, className }: Props) => {
    const imgURL = `https://uploads.mangadex.org/covers/${mangaInfo.id}/${mangaInfo.relationships.find((r: any) => r.type === 'cover_art')?.attributes?.fileName}`
    const authorInfo = mangaInfo.relationships.find((r: any) => r.type === 'author').attributes
    return (
        <div className={cn('h-360px flex', className)}>
            <div className="h-full aspect-ratio-1 relative">
                <Image src={imgURL} fill={true} alt={'test'} className="object-cover " priority sizes="100%" />
            </div>

            <div className="p-4 flex flex-col gap-4" >

                <p className="leading-none line-clamp-2 text-25px font-bold">
                    {mangaInfo.attributes.title.en}
                </p>

                <div className="flex gap-2 flex-wrap">
                    {mangaInfo.attributes.tags.map((tag: any) => {
                        return (
                            <Badge key={tag.id}>{tag.attributes.name.en}</Badge>
                        )
                    })}
                </div>
                <ScrollArea className="flex-1">
                    <Markdown>
                        {mangaInfo.attributes.description.en}
                    </Markdown>
                </ScrollArea>
                <div className="font-bold text-25px">
                    {authorInfo.name}
                </div>
            </div>
        </div>
    )
}

export { SliderItem }