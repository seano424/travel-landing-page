import NavItem from './NavItem'

export default function NavbarMobile({ isOpen, setOpen }) {
  return (
    <section
      className={`${
        isOpen
          ? 'opacity-100 pl-10'
          : 'opacity-100 transform translate-x-[-150%] w-max'
      } transition-all duration-300 py-5 ease-linear text-7xl h-full w-full fixed z-40 pt-20 bg-white`}
    >
      <>
        <NavItem setOpen={setOpen} mobile href="/">
          <p onClick={() => setOpen(!isOpen)}>Home</p>
        </NavItem>
        <NavItem mobile href="/featured">
          <p onClick={() => setOpen(!isOpen)}>Featured</p>
        </NavItem>
        <NavItem mobile href="/popular">
          <p onClick={() => setOpen(!isOpen)}>Popular</p>
        </NavItem>
        <NavItem mobile href="/recent">
          <p onClick={() => setOpen(!isOpen)}>Recent</p>
        </NavItem>
      </>
    </section>
  )
}
