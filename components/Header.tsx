import { useRouter } from "next/router"
import { BiArrowBack } from "react-icons/bi";
import {useCallback} from 'react'


interface HeaderProps{
    label: string,
    showBackArrow?: boolean
}

const Header: React.FC <HeaderProps>=({
    label,
    showBackArrow
})=>{
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router])
   return(
    <div className="border-b-[1px] border-neutral-800 p-5">
        <div className="flex flex-row items-center gap-3">
            {showBackArrow&&
            (<BiArrowBack color='white' size={20}
            onClick={()=>{handleBack}}
            className="cursor-pointer
            hover:opacity-70
            transition"/>)}
            <h1
            className="
            text-white
            text-xl
            font-semibold">{label}</h1>
        </div>
    </div>
   )
}
export default Header