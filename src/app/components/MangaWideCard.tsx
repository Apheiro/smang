// 'use client'
import Image from "next/image"
import { FlagLenguage } from "./FlagLenguage/FlagLenguage"

interface Props {
    mangaInfo: any,
}

const MangaWideCard = (
    { mangaInfo }: Props
) => {
    const imgURL = `https://uploads.mangadex.org/covers/${mangaInfo.id}/${mangaInfo.relationships.find((r: any) => r.type === 'cover_art')?.attributes?.fileName}`
    const translatedLenguaje = mangaInfo.attributes.originalLanguage.split('-')
    return (
        <div className="w-full max-w-320px h-120px shadow-md rounded-2 overflow-hidden p-1 relative dark:color-warmgray-2">
            <div className="absolute left-0 top-0 right-0 bottom-0">
                <div
                    style={{ backgroundImage: `url(${imgURL})` }}
                    className="w-full h-full bg-cover bg-center filter-blur-2"
                />
                <div className="absolute bg-gradient-to-r from-white dark:to-black/20 dark:from-black from-20% to-white/20  left-0 top-0 right-0 bottom-0" />
            </div>

            <div className="w-full h-full grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] gap-1 ">
                <div className="h-full w-80px object-cover row-span-2 rounded-2 z-1 relative overflow-hidden">
                    <Image src={imgURL} fill alt={'cover image'} sizes="100%" />
                </div>
                <p
                    className="leading-none line-clamp-3 text-sm font-extrabold z-1"
                    children={mangaInfo.attributes.title.en}
                />
                <div className="flex gap-1 items-center text-sm self-start shadow-md z-1">
                    <FlagLenguage lenguage={translatedLenguaje[0] as lenguages} secondaryTerm={translatedLenguaje[1] as string} size={22} />
                </div>
                <p
                    className="leading-4 text-sm row-start-2 row-end-3 col-start-2 col-end-4  line-clamp-4 z-1"
                    children={mangaInfo.attributes.description.en}
                />
            </div>
        </div >
    )
}

export { MangaWideCard }