import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[380px] md:h-[460px] rounded-3xl overflow-hidden ring-1 ring-gray-200/60 bg-white">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        <div className="relative z-10 p-8 md:p-12 flex h-full items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 max-w-2xl">
              Gamificação corporativa moderna para equipas mais motivadas
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Pontos, badges, níveis, streaks e desafios temporários. Tudo em tempo real com
              feedback visual e integrações com ferramentas do dia-a-dia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2.5 text-sm font-semibold shadow hover:bg-indigo-700">
                Explorar demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-4 py-2.5 text-sm font-semibold shadow ring-1 ring-gray-200 hover:bg-gray-50">
                Ver funcionalidades
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
