import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 dark:from-black/60 dark:via-black/50 dark:to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
            Svensk premiumkvalitet • Modern byggteknik
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Stockholm Byggideal AB
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Vi förenar hantverk i toppklass med framtidens teknik. Från vision till färdig byggnad – hållbart, exakt och utan kompromisser.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#kontakt" className="inline-flex h-12 items-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 text-white font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition">
              Få offert
            </a>
            <a href="#projekt" className="inline-flex h-12 items-center rounded-xl px-6 border border-gray-900/10 dark:border-white/10 text-gray-900 dark:text-white/90 hover:bg-gray-900/5 dark:hover:bg-white/5 transition">
              Se projekt
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white dark:to-black" />
    </section>
  )
}
