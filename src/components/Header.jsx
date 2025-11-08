import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Gamify Workplace</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Engaja, motiva e celebra conquistas</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Funcionalidades</a>
          <a href="#impact" className="hover:text-gray-900">Impacto</a>
          <a href="#contact" className="hover:text-gray-900">Contato</a>
        </nav>
      </div>
    </header>
  )
}
