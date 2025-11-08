import { ArrowRight } from 'lucide-react'

export default function DemoCTA() {
  return (
    <section id="impact" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold">Pronto para ver impacto real?</h3>
              <p className="mt-2 text-white/90">
                Aumente o engajamento e celebre conquistas com transparência e motivação contínua.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2.5 text-sm font-semibold shadow hover:bg-gray-50"
            >
              Fale com a nossa equipa
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
