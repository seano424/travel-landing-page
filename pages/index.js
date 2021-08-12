import Head from 'next/head'
import Jumbotron from '@/components/Home/Jumbotron'
import LocationCard from '@/components/Home/LocationCard'
import BestOfTheWeek from '@/components/Home/BestOfTheWeek'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="mb-20 mx-16">
          <Jumbotron />
        </section>
        <section className="flex flex-col lg:flex-row justify-between mx-16">
          <LocationCard
            src="/images/beach2.jpg"
            location="Isla Mujeres"
            stars="4.8"
            reviews="20"
          />
          <LocationCard />
          <BestOfTheWeek />
        </section>
      </main>
    </div>
  )
}
