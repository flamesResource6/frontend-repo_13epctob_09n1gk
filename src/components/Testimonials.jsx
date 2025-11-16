import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DATA = [
  { name: 'Anna, Bromma', text: 'Proffsig leverans från start till mål. Tydlig plan och noggrant utfört. Rekommenderas varmt!' },
  { name: 'Johan, Nacka', text: 'Vi fick vårt drömkök – precis enligt ritning och i tid. Kommunikation i toppklass.' },
  { name: 'Elin, Vasastan', text: 'Modern känsla med premiumfinish. Hela teamet var lösningsorienterat och lyhörda.' },
  { name: 'Mikael, Solna', text: 'Snabb byggservice för vår brf, med mycket hög kvalitet och bra dokumentation.' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(()=> setIndex((i)=> (i+1)%DATA.length), 5000)
    return ()=> clearInterval(t)
  }, [])

  return (
    <section id="omdomen" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Omdömen</h2>
        <p className="mt-3 text-gray-700/90 dark:text-gray-300">Några ord från kunder som valt oss för att förena form, funktion och noggrannhet.</p>
        <div className="mt-10 relative h-40 sm:h-32">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{opacity:0, y: 20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.6}} className="absolute inset-0">
              <p className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">“{DATA[index].text}”</p>
              <div className="mt-4 text-gray-600 dark:text-gray-400">— {DATA[index].name}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
