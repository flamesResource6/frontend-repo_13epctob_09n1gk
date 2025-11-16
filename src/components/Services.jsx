import { motion } from 'framer-motion'
import { Hammer, Ruler, BrickWall, Home, Bath, Building2 } from 'lucide-react'

const items = [
  { icon: Hammer, title: 'Renovering', desc: 'Precis renovering av kök, badrum och hela hem – med premiumdetaljer.' },
  { icon: Building2, title: 'Tillbyggnad', desc: 'Smidiga utbyggnader och påbyggnader som smälter in i arkitekturen.' },
  { icon: BrickWall, title: 'Fasad', desc: 'Energieffektiva fasader med moderna material och perfekt finish.' },
  { icon: Home, title: 'Altan', desc: 'Skräddarsydda altaner och uterum, byggda för svenska säsonger.' },
  { icon: Bath, title: 'Kök & Badrum', desc: 'Funktionella premiumkök och badrum med noggrann installation.' },
  { icon: Ruler, title: 'Projektledning', desc: 'Digital planering, tydliga tidslinjer och transparent kommunikation.' },
]

export default function Services(){
  return (
    <section id="tjanster" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.07),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.12),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Tjänster</motion.h2>
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
