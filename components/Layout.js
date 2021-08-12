import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import Burger from './Navigation/Burger'
import Navbar from './Navigation/Navbar'
import NavbarMobile from './Navigation/NavbarMobile'
import NavItem from './Navigation/NavItem'
import NavLogo from './Navigation/NavLogo'
import Register from './Navigation/Register'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  const [isOpen, setOpen] = useState(false)

  return (
    <section className="px-20">
      <div className="hidden md:block transition -rotate-6 absolute -left-20 -top-72 opacity-30 z-10">
        <Image
          src={'/images/mexico.jpg'}
          alt={'Vector Dot Map of Mexico'}
          height={700}
          width={700}
          objectFit="contain"
        />
      </div>
      <Navbar>
        <NavLogo />
        <section className="hidden md:flex">
          <NavItem href="/" isActive={pathname === '/'}>
            Home
          </NavItem>
          <NavItem href="/featured" isActive={pathname === '/featured'}>
            Featured
          </NavItem>
          <NavItem href="/popular" isActive={pathname === '/popular'}>
            Popular
          </NavItem>
          <NavItem href="/recent" isActive={pathname === '/recent'}>
            Recent
          </NavItem>
        </section>
        <Register />
        <Burger isOpen={isOpen} setOpen={setOpen} />
      </Navbar>
      <NavbarMobile isOpen={isOpen} setOpen={setOpen} />
      <main className="flex w-full flex-1 text-center pt-20">{children}</main>
      <footer className="flex items-center justify-center w-full h-24 "></footer>
    </section>
  )
}
