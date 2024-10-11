import Image from 'next/image'

const LogoComponent = () => {
  return (
    <Image alt='logo' src={"/images/logos/gtco_logo.png"} width={40} height={40} className='object-cover flex'>
    </Image>
  )
}

export default LogoComponent