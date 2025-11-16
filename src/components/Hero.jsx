import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/4790393/4790393-uhd_2560_1440_60fps.mp4" type="video/mp4" />
          <source src="https://storage.coverr.co/videos/xo1P6P02KQfB6WwJ08nqSz1bH7KjJMH8iQw8h.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark/light gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 dark:from-black/60 dark:via-black/60 dark:to-black/80" />
        {/* Glass noise for depth */}
        <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white"
          >
            Totalentreprenad • ROT • Företag & privat
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
          >
            Stockholm Byggideal AB
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl"
          >
            Premium svenskt hantverk möter framtidens byggteknik. Vi förverkligar visioner med precision, tydliga processer och hållbara material – från första skiss till slutbesiktning.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { delay: 0.45, staggerChildren: 0.06 } } }}
            className="mt-5 text-sm text-white/90 list-disc pl-5 space-y-1"
          >
            {[
              'Certifierade yrkesgrupper och dokumenterade kontroller',
              'Tidsatta milstolpar och transparent kommunikation',
              'Ansvarsfulla materialval och energismarta lösningar',
            ].map((item) => (
              <motion.li key={item} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>{item}</motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 text-white font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition transform hover:-translate-y-0.5"
            >
              Få offert
            </a>
            <a
              href="#projekt"
              className="inline-flex h-12 items-center rounded-xl px-6 border border-white/20 text-white hover:bg-white/10 transition transform hover:-translate-y-0.5"
            >
              Se projekt
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white dark:to-black" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest">SKROLLA</span>
          <span className="block h-6 w-[2px] bg-white/70 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
