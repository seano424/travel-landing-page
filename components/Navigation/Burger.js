import { Squeeze as Hamburger } from 'hamburger-react'

export default function Burger({ isOpen, setOpen }) {
  return (
    <div className="block fixed right-10 md:hidden z-50">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  )
}
