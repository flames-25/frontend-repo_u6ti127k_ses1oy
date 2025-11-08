import Header from './components/Header'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import DemoCTA from './components/DemoCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-indigo-50/50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-6xl px-6 space-y-10 pb-16">
        <Hero />
        <FeatureGrid />
        <DemoCTA />
      </main>
      <footer className="border-t border-gray-200/70">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} Gamify Workplace. Feito com foco em motivação, transparência e impacto.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-900">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
