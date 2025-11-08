import { Rocket, Trophy } from 'lucide-react'

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
        <div className="hidden sm:flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-sm font-medium ring-1 ring-amber-200">
            <Trophy className="h-4 w-4" />
            Demo Interativa
          </span>
        </div>
      </div>
    </header>
  )
}
