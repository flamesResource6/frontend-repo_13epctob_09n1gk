import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Clock, GaugeCircle } from 'lucide-react'

const items = [
  {icon: ShieldCheck, title: 'Certifierad kvalitet', desc: 'Licensierade hantverkare, kontrollerade processer och tydliga garantier.'},
  {icon: GaugeCircle, title: 'Effektiv leverans', desc: 'Digital planering och smidig kommunikation ger punktlig leverans.'},
  {icon: BadgeCheck, title: 'Transparens', desc: 'Tydliga offerter, inga överraskningar – bara tryggt resultat.'},
  {icon: Clock, title: 'Långsiktig partner', desc: 'Service och underhåll för att byggnaden ska prestera år efter år.'},
]

export default function WhyUs(){
  return (
    <section id="varfor" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.07),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.12),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Varför välja oss</motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item,i)=> (
            <motion.div key={i} initial={{opacity:0, y: 24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white grid place-items-center shadow-lg shadow-black/10 dark:shadow-black/30">
                <item.icon size={22}/>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-700/90 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
