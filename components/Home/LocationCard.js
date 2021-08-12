import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
export default function LocationCard({
  src = '/images/beach1.jpg',
  alt = 'Image of some location in Mexico',
  type = 'Beach',
  location = 'Playa del Carmen',
  stars = '5.0',
  reviews = '12',
}) {
  return (
    <article className="rounded-lg flex flex-col w-80">
      <aside className="w-80">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          layout="responsive"
          className="rounded-3xl"
        />
      </aside>
      <aside className="bg-white flex flex-col gap-2 items-start relative -top-16 shadow-2xl drop-shadow-xl px-8 py-6 rounded-xl w-11/12 mx-auto">
        <p className="uppercase text-xs font-light text-gray-300 tracking-widest">
          {type}
        </p>
        <h2 className="text-2xl font-serif">{location}</h2>
        <div className="flex gap-1 text-sm items-center">
          <span className="text-red-600">
            <AiFillStar />
          </span>
          <span>
            {stars} <span className="text-gray-400">({reviews} Reviews)</span>
          </span>
        </div>
      </aside>
    </article>
  )
}
