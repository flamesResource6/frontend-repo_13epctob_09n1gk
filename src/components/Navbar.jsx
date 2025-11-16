import { useEffect, useState } from 'react'
import { Menu, Phone, Sun, Moon, Mail } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-sm font-medium text-gray-900/80 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors">
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30 border border-white/30 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30" />
              <div className="leading-tight">
                <div className="text-[10px] tracking-widest uppercase text-gray-700 dark:text-gray-300">Stockholm</div>
                <div className="text-base font-semibold text-gray-900 dark:text-white">Byggideal AB</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#tjanster">Tjänster</NavLink>
              <NavLink href="#projekt">Projekt</NavLink>
              <NavLink href="#varfor">Varför vi</NavLink>
              <NavLink href="#omdomen">Omdömen</NavLink>
              <NavLink href="#kontakt">Kontakt</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button aria-label="Tema" onClick={onToggleTheme} className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition">
                {theme === 'dark' ? <Sun size={18} className="text-amber-300"/> : <Moon size={18} className="text-gray-800"/>}
              </button>
              <a href="#kontakt" className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition">
                <Phone size={16}/> Få offert
              </a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button aria-label="Tema" onClick={onToggleTheme} className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/5">
                {theme === 'dark' ? <Sun size={18} className="text-amber-300"/> : <Moon size={18} className="text-gray-800"/>}
              </button>
              <button aria-label="Meny" onClick={() => setOpen(!open)} className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/5">
                <Menu size={18} className="text-gray-900 dark:text-white"/>
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2 p-3 rounded-xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <a href="#tjanster" className="py-2 text-gray-900 dark:text-gray-200" onClick={() => setOpen(false)}>Tjänster</a>
                <a href="#projekt" className="py-2 text-gray-900 dark:text-gray-200" onClick={() => setOpen(false)}>Projekt</a>
                <a href="#varfor" className="py-2 text-gray-900 dark:text-gray-200" onClick={() => setOpen(false)}>Varför vi</a>
                <a href="#omdomen" className="py-2 text-gray-900 dark:text-gray-200" onClick={() => setOpen(false)}>Omdömen</a>
                <a href="#kontakt" className="py-2 text-gray-900 dark:text-gray-200" onClick={() => setOpen(false)}>Kontakt</a>
                <a href="#kontakt" className="mt-2 inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-semibold justify-center">
                  <Mail size={16}/>Få offert
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
