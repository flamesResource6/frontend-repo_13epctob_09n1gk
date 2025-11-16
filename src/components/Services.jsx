import { motion } from 'framer-motion'
import { Hammer, Ruler, BrickWall, Home, Bath, Building2, Lightbulb, Paintbrush, ScanLine } from 'lucide-react'

const items = [
  { icon: Hammer, title: 'Renovering & ROT', desc: 'Helhetsrenoveringar, kök, badrum och ytskikt. Vi planerar, river, bygger och kvalitetssäkrar.' },
  { icon: Building2, title: 'Till- & Påbyggnad', desc: 'Smarta utökningar som följer husets formspråk – från grund till fasad och interiör.' },
  { icon: BrickWall, title: 'Fasad & Tak', desc: 'Energieffektiva fasader, panel, puts och tak med fokus på livslängd och estetik.' },
  { icon: Home, title: 'Altan & Uterum', desc: 'Skräddarsydda altaner, trappor och uterum – byggt för nordiskt klimat.' },
  { icon: Bath, title: 'Kök & Badrum', desc: 'Vattensäkra lösningar och premiumsnickerier. Vi arbetar med ledande leverantörer.' },
  { icon: Ruler, title: 'Projektledning', desc: 'Tydliga tidplaner, veckorapporter och digital uppföljning i varje steg.' },
  { icon: Lightbulb, title: 'El & VVS via partner', desc: 'Behöriga samarbeten för säkra installationer och dokumentation.' },
  { icon: Paintbrush, title: 'Måleri & Finishing', desc: 'Perfekt finish med robusta system – från spackel till sista strykningen.' },
  { icon: ScanLine, title: 'Byggservice Företag', desc: 'Löpande underhåll, hyresgästanpassning och snabba insatser för B2B.' },
]

export default function Services(){
  return (
    <section id="tjanster" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.07),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.12),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Tjänster</motion.h2>
        <p className="mt-3 max-w-3xl text-gray-700/90 dark:text-gray-300">Vi kombinerar svenskt hantverk med modern teknik för att leverera hållbara resultat med premiumkänsla. Här är vad vi hjälper dig med:</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div key={i} initial={{opacity:0, y: 24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white grid place-items-center shadow-lg shadow-red-600/30">
                {item.icon && <item.icon size={22}/>}            
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-700/90 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
