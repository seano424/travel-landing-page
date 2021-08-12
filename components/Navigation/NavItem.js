import Link from 'next/link'

export default function NavItem({ mobile, href, isActive, children }) {
  return (
    <Link href={href}>
      <a
        className={`block px-4 py-2 w-max rounded-md transition-all duration-300 ${
          isActive ? 'bg-gray-100 text-gray-700' : ''
        } ${mobile ? 'hover:text-green-300 font-bold' : ''}`}
      >
        {children}
      </a>
    </Link>
  )
}
