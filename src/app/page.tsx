import Hero from "@/components/hero";

export default async function Home() {
  const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
  const data = await res.json()

  console.log(data)

  return(
    <div>
      <Hero/>

      <section className="relative w-full h-screen flex items-center justify-center bg-zinc-800/15"></section>
    </div>
  )
}