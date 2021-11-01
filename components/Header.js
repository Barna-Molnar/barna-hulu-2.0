import Image from "next/image"

const Header = () => {
    return (
        <header className=''>
            <h1>This is the header</h1>
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
