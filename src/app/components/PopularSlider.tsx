import React, { useState } from "react"
import { KeenSliderHooks, KeenSliderInstance, useKeenSlider } from "keen-slider/react"
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react"
import { useMediaQuery } from '@mantine/hooks';
import { cn } from "@/utils/cn"
import "keen-slider/keen-slider.min.css"
import { useTranslations } from "next-intl"

interface Props {
    children: React.ReactNode
}

const PopularSlider = ({ children }: Props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="navigation-wrapper relative max-w-1340px bg-card brd shadow-md rounded-2 m-3 overflow-hidden">
            <div ref={sliderRef} className="keen-slider">
                {children}
            </div>
            {
                loaded && instanceRef.current && (
                    <div className="flex gap-1 items-center absolute bottom-4 right-4">
                        <IconCaretLeftFilled
                            size={35}
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                            className={currentSlide === 0 ? "opacity-25" : "cursor-pointer"}
                        />
                        <div className="flex gap-3">
                            {Array.from(Array(instanceRef.current.track.details.slides.length).keys()).map((idx) => {
                                return (
                                    <NavigationPoints key={idx} currentSlide={currentSlide} idx={idx} instanceRef={instanceRef} />
                                )
                            })}
                        </div>
                        <IconCaretRightFilled
                            size={35}
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                            className={currentSlide === instanceRef.current.track.details.slides.length - 1 ? "opacity-25" : "cursor-pointer"}
                        />
                    </div>
                )
            }
        </div>
    )
}

interface PropsPoints {
    idx: number
    currentSlide: number
    instanceRef: React.MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>
}

const NavigationPoints = ({ currentSlide, idx, instanceRef }: PropsPoints) => {
    const breakpoint = useMediaQuery('(min-width: 1024px)')
    const t = useTranslations('PopularSlider');

    return (
        <>
            {
                breakpoint ?
                    <button
                        onClick={() => {
                            instanceRef.current?.moveToIdx(idx)
                        }}
                        className={cn(' bg-black rounded-1 w-13px aspect-ratio-1/1 opacity-25 lg:block dark:bg-warmgray-2', (currentSlide === idx ? 'opacity-100' : ''))}
                    /> :
                    <p
                        className={cn('lg:hidden font-bold text-xl', (currentSlide === idx ? 'block' : 'hidden'))}
                    >
                        {`${t('numberAbreviation')} ${idx + 1}`}
                    </p>
            }
        </>
    )
}

export { PopularSlider }