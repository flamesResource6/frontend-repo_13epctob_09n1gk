import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Kunde inte skicka. Försök igen.')
      setStatus({ ok: true, msg: 'Tack! Vi återkommer inom kort.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.07),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.12),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Kontakta oss</motion.h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Namn</label>
                <input name="namn" required className="mt-1 w-full h-11 rounded-xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 outline-none focus:ring-2 focus:ring-rose-500"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300">E-post</label>
                  <input name="epost" type="email" required className="mt-1 w-full h-11 rounded-xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 outline-none focus:ring-2 focus:ring-rose-500"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300">Telefon</label>
                  <input name="telefon" className="mt-1 w-full h-11 rounded-xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 outline-none focus:ring-2 focus:ring-rose-500"/>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Tjänst</label>
                <select name="typ" className="mt-1 w-full h-11 rounded-xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 outline-none focus:ring-2 focus:ring-rose-500">
                  <option>Renovering</option>
                  <option>Tillbyggnad</option>
                  <option>Fasad</option>
                  <option>Altan</option>
                  <option>Kök & Badrum</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Meddelande</label>
                <textarea name="meddelande" rows="4" className="mt-1 w-full rounded-xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"/>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button disabled={loading} className="inline-flex h-11 items-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 text-white font-semibold shadow-lg shadow-red-600/30 disabled:opacity-60">
                  {loading ? 'Skickar…' : 'Skicka förfrågan'}
                </button>
                {status && (
                  <div className={`${status.ok ? 'text-green-600' : 'text-red-600'} text-sm`}>{status.msg}</div>
                )}
              </div>
            </form>
          </div>
          <div className="rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <div className="text-gray-900 dark:text-white text-lg font-semibold">Stockholm Byggideal AB</div>
            <div className="mt-2 text-gray-700 dark:text-gray-300">Premium byggentreprenör i Stockholm.</div>
            <div className="mt-6 space-y-2 text-gray-800 dark:text-gray-200">
              <a href="tel:+468000000" className="block hover:text-rose-500">Telefon: 08-000 00 00</a>
              <a href="mailto:kontakt@byggideal.se" className="block hover:text-rose-500">E-post: kontakt@byggideal.se</a>
              <div>Org.nr: 559000-0000</div>
            </div>
            <div className="mt-6 h-64 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
