// import "/node_modules/flag-icons/css/flag-icons.min.css";
import "@flags"
import lenguageToCountry from "./lenguageToCountry.json";

interface Props {
    lenguage: lenguages,
    size: number,
    secondaryTerm?: string
}

const FlagLenguage = ({ lenguage, size, secondaryTerm }: Props) => {
    return (
        <div style={{ width: `${size}px`, height: `${size - 5}px` }} className={`flex items-center justify-center relative`}>
            <span className={` fi fi-${lenguageToCountry[lenguage]} h-full!  w-full! rounded-1`}></span>
            {
                secondaryTerm &&
                <div className="bg-black color-white p-2px text-10px leading-1.8 absolute bottom-0 right-0 rounded-1">
                    {secondaryTerm}
                </div>
            }

        </div>
    )
}

export { FlagLenguage }