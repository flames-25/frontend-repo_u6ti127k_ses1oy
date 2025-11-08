import { Trophy, Star, Flame, Crown, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    title: 'Pontos & Badges',
    desc: 'Sistema configurável por departamento com auditoria e histórico.',
  },
  {
    icon: Star,
    title: 'Níveis & Streaks',
    desc: 'Progressão por níveis e sequências diárias ao estilo Duolingo.',
  },
  {
    icon: Flame,
    title: 'Desafios & Quests',
    desc: 'Desafios semanais/mensais e missões com narrativa e recompensas.',
  },
  {
    icon: Crown,
    title: 'Rankings em Tempo Real',
    desc: 'Atualizações via WebSocket e cache em Redis.',
  },
  {
    icon: Users,
    title: 'Equipas & Reconhecimento',
    desc: 'Guildas, desafios colaborativos e kudos entre pares.',
  },
  {
    icon: Shield,
    title: 'Segurança & Anti-Fraude',
    desc: 'Rate limiting, auditoria e deteção de padrões anormais.',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-bold text-gray-900">Funcionalidades principais</h3>
        <p className="mt-2 text-gray-600 max-w-2xl">Tudo o que precisa para engajar colaboradores, medir impacto e promover uma cultura de excelência.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center shadow">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{f.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
