import Link from "next/link"

const NavLink = ({href, title}) => {
    return (
<Link href={href} passHref legacyBehavior>
<a 
    target="_blank" 
    rel="noopener noreferrer" 
    className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
>
    {title}
</a>
</Link>
    )
}

export default NavLink

