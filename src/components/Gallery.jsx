import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Penthouse, Vasastan', category: 'Totalrenovering', summary: 'Genomgående ek, specialsnickeri och smart belysning.', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=60' },
  { id: 2, title: 'Flerbostad, Sundbyberg', category: 'Fasad & Tak', summary: 'Ventilerad fasad och nytt tätskikt, +18% energibesparing.', img: 'https://images.unsplash.com/photo-1503354200261-30f21eacc2b3?auto=format&fit=crop&w=1600&q=60' },
  { id: 3, title: 'Villa, Bromma', category: 'Tillbyggnad', summary: '60 kvm påbyggnad i två plan som smälter in i originalet.', img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=60' },
  { id: 4, title: 'Kontor, City', category: 'Hyresgästanpassning', summary: 'Öppna ytor, akustiklösningar och glaspartier.', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60' },
  { id: 5, title: 'Radhus, Nacka', category: 'Kök & Badrum', summary: 'Vattensäkert badrum och platsbyggt kök med stenbänkar.', img: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1600&q=60' },
  { id: 6, title: 'Terrass, Lidingö', category: 'Altan & Uterum', summary: 'Komposittrall, infälld belysning och stålstomme.', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=60' },
  { id: 7, title: 'Brf, Årsta', category: 'Byggservice', summary: 'Löpande underhåll och snabb felavhjälpning.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=60' },
  { id: 8, title: 'Showroom, Solna', category: 'Måleri & Glas', summary: 'Glaspartier, mikrocement och varmvita armaturer.', img: 'https://images.unsplash.com/photo-1487956382158-bb4d7a1c9a5d?auto=format&fit=crop&w=1600&q=60' },
  { id: 9, title: 'Lägenhet, Södermalm', category: 'Ytskikt', summary: 'Listverk, fiskbensparkett och specialpigment.', img: 'https://images.unsplash.com/photo-1522877939213-95dd07b7a95f?auto=format&fit=crop&w=1600&q=60' },
]

export default function Gallery(){
  return (
    <section id="projekt" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Utvalda projekt</motion.h2>
        <p className="mt-3 max-w-3xl text-gray-700/90 dark:text-gray-300">Ett urval av uppdrag där vi kombinerat teknik, design och hållbarhet. Vid förfrågan skickar vi fler case med budget och tidslinje.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p,i)=> (
            <motion.a key={p.id} href="#kontakt" initial={{opacity:0, y: 24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.03}} className="group relative overflow-hidden rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-70"/>
              <div className="absolute bottom-0 p-4">
                <div className="text-xs uppercase tracking-widest text-white/70">{p.category}</div>
                <div className="text-white text-lg font-semibold">{p.title}</div>
                <div className="mt-1 text-white/80 text-sm">{p.summary}</div>
                <div className="mt-3 inline-flex items-center text-xs text-white/90 bg-white/10 backdrop-blur px-2 py-1 rounded-full">Se detaljer →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
