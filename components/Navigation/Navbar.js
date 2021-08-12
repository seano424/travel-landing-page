export default function Navbar({ children }) {
  return (
    <nav className="fixed md:relative w-full py-4 z-50">
      <ul className="flex space-x-2 justify-between items-center">
        {children}
      </ul>
    </nav>
  )
}
