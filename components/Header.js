import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

const Header = () => {

    return (
        <header className=''>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon} />
            </div>
            <Image
            className='object-contain'
             alt='brand logo' 
             src='https://links.papareact.com/ua6' 
            width={200}
            height={100}
            
            />           
        </header>
    )
}

export default Header
