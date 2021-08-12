import React from 'react'

export default function BestOfTheWeek() {
  return (
    <section className="flex flex-col items-start w-72">
      <h1 className="font-serif text-3xl">Best of the Week</h1>
      <p className="text-gray-400 text-sm text-left pt-4">
        Let's spend your money and relieve your stress by going around the
        beaches of Mexico
      </p>
      <aside className="flex justify-between py-12 w-full">
        <div className="flex flex-col items-start">
          <span className="text-yellow-500">50+</span>
          <span className="text-sm">Destinations</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-yellow-500">200+</span>
          <span className="text-sm">Tourists</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-yellow-500">100+</span>
          <span className="text-sm">Hotels</span>
        </div>
      </aside>
      <button className="shadow-xl drop-shadow-2xl bg-gray-900 text-white rounded-3xl px-3 py-1">
        Find a Place
      </button>
    </section>
  )
}
