import Image from 'next/image'
import Testimonial from './Testimonial'

export default function Jumbotron() {
  return (
    <main className="grid lg:grid-cols-2 gap-20 z-40">
      <section className="flex flex-col lg:items-start  justify-center text-left lg:w-10/12">
        <h1 className=" font-medium font-serif text-7xl flex items-center">
          Explore the Riviera Maya
        </h1>
        <p className="text-sm text-gray-300 font-medium pb-12 pt-4">
          Let's spend your money and relieve your stress by going around the
          Riviera Maya, a small part of heaven on Earth.
        </p>
        <article className="flex gap-20 justify-between lg:justify-start">
          <button className="shadow-xl drop-shadow-xl px-4 py-2 text-white bg-[#f9844a] rounded-full">
            Go Exploring
          </button>
          <button className="font-bold">Get a Price</button>
        </article>
      </section>

      <section className="hidden lg:flex mx-auto">
        <article className="border-2 border-[#00b4d8] p-10 rounded-full">
          <aside className="w-[400px] bg-[#00b4d8] rounded-full p-10">
            <Image
              src={'/images/feature.jpg'}
              alt={'Feature image on jumbotron'}
              width={400}
              height={400}
              objectFit="cover"
              layout="responsive"
              className="rounded-full"
            />
          </aside>
          <aside className="absolute rounded-bl-none bg-white border-4 border-yellow-200 rounded-full h-16 w-16 p-4 flex items-center justify-center top-40 right-32">
            <span className="text-3xl">😍</span>
          </aside>
          <aside>
            <Testimonial />
          </aside>
        </article>
      </section>
    </main>
  )
}
