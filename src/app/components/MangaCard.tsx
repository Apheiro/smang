import { FlagLenguage } from "./FlagLenguage/FlagLenguage"
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar"
import { useTranslations } from "next-intl"
import { IconUsers } from '@tabler/icons-react';
import { intervalToDuration } from "date-fns";
import { LazyImg } from "./LazyImg";
import Image from "next/image";

interface Props {
    mangaInfo: any,
    mangaLastChapter: any
}

function lastUpdateFormatter(startDate: string): string {
    const lastUpdate = intervalToDuration({ start: new Date(startDate), end: new Date() })
    let timeLapsed: string = '';
    for (const [key, value] of Object.entries(lastUpdate)) {
        if (value > 0) {
            timeLapsed = `${value} ${key} ago`;
            break
        }
    }
    return timeLapsed;
}

const MangaCard = (
    { mangaInfo, mangaLastChapter }: Props
) => {
    const t = useTranslations('MangaCard');
    const imgURL = `https://uploads.mangadex.org/covers/${mangaInfo.id}/${mangaInfo.relationships.find((r: any) => r.type === 'cover_art')?.attributes?.fileName}`
    const scanlationGroup = mangaLastChapter.relationships.find((r: any) => r.type === 'scanlation_group') ?? { attributes: { name: '' } }
    const translatedLenguaje = mangaLastChapter.attributes.translatedLanguage.split('-')

    return (
        <div className="flex flex-col shadow-md rounded-2 h-320px w-full max-w-230px relative overflow-hidden brd dark:color-warmgray-2">
            <LazyImg src={imgURL} alt="image cover" className="w-auto h-full" />
            {/* <div className="w-auto h-full relative">
                <Image src={imgURL} fill alt='image cover' sizes="100%" className="object-cover object-center" onLoad={(e) => { console.log(e) }} />
            </div> */}

            <div className="bg-white dark:bg-dark-6 rounded-2 p-1 absolute top-1 right-1">
                <p className="text-sm whitespace-nowrap">
                    {lastUpdateFormatter('2021-04-19T21:45:59+00:00')}
                </p>
            </div>

            <div className="absolute bottom-0 bg-white dark:bg-dark-6 w-full p-2 flex flex-col gap-1">
                <p
                    className="leading-none line-clamp-3 text-sm font-extrabold"
                    children={mangaInfo.attributes.title.en}
                />
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1 items-center text-sm">
                        <FlagLenguage lenguage={translatedLenguaje[0] as lenguages} secondaryTerm={translatedLenguaje[1] as string} size={22} />
                        <p className="leading-none"> {t('chapAbreviation')} {mangaLastChapter.attributes.chapter} {mangaLastChapter.attributes.title}</p>
                    </div>
                    <div className="leading-none text-sm">
                        <div className="flex items-center gap-2" >
                            <Avatar className="h-5! w-5! bg-gray-2 dark:bg-dark-2">
                                <AvatarImage src={''} alt="@shadcn" />
                                <AvatarFallback><IconUsers size={'80%'} /></AvatarFallback>
                            </Avatar>
                            <p
                                className="truncate w-full"
                                children={scanlationGroup.attributes?.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { MangaCard }