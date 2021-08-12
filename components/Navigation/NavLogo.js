import Link from 'next/link'
export default function NavLogo() {
  return (
    <li>
      <Link href="/">
        <a className="flex gap-3 items-center">
          <h1 className="rounded-full bg-green-300 text-white px-2 py-1 uppercase">
            M
          </h1>
          <h1 className=" font-semibold font-serif">Riviera Maya</h1>
        </a>
      </Link>
    </li>
  )
}
