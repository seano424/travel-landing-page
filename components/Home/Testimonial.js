import Image from 'next/image'

export default function Testimonial() {
  return (
    <section className="absolute pt-8 pb-14 z-20 bottom-16 right-[26em] bg-white dark:bg-gray-800 shadow-lg text-left rounded-xl px-4 w-64">
      <article className="absolute -top-7 flex items-center z-30 bg-yellow-200 max-w-max rounded-full p-1">
        <Image
          className="rounded-full"
          alt="profil"
          src="/images/dog.jpg"
          width={50}
          height={50}
        />
      </article>
      <article>
        <p className="text-gray-600 dark:text-white text-xs text-left py-2">
          Mexico is amazing! Don't think, just go. I had such a phenomenal time
          here I can't wait to go back ❤️
        </p>
        <p className="text-yellow-500 font-bold text-sm italic">~ Fatima</p>
      </article>
    </section>
  )
}
