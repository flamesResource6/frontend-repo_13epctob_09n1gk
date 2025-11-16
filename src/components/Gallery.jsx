import { motion } from 'framer-motion'

const projects = Array.from({length:9}).map((_,i)=>({
  id: i,
  title: `Projekt ${i+1}`,
  category: ['Renovering','Fasad','Altan','Kök'][i%4],
  img: `https://images.unsplash.com/photo-${
    [1503387762, 1501183638710, 1503174971373, 1500530855697, 1479839672679, 1501785888041, 1503354200261, 1487956382158, 1501785888041][i]
  }?auto=format&fit=crop&w=1200&q=60`
}))

export default function Gallery(){
  return (
    <section id="projekt" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Projekt</motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p,i)=> (
            <motion.a key={p.id} href="#kontakt" initial={{opacity:0, y: 24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.03}} className="group relative overflow-hidden rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-70"/>
              <div className="absolute bottom-0 p-4">
                <div className="text-xs uppercase tracking-widest text-white/70">{p.category}</div>
                <div className="text-white text-lg font-semibold">{p.title}</div>
                <div className="mt-2 inline-flex items-center text-xs text-white/80 bg-white/10 backdrop-blur px-2 py-1 rounded-full">Se detaljer →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
