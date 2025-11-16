export default function Footer(){
  return (
    <footer className="py-10 border-t border-gray-900/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div>© {new Date().getFullYear()} Stockholm Byggideal AB. Alla rättigheter förbehållna.</div>
        <div className="flex gap-6">
          <a href="#tjanster" className="hover:text-rose-500">Tjänster</a>
          <a href="#projekt" className="hover:text-rose-500">Projekt</a>
          <a href="#kontakt" className="hover:text-rose-500">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
