'use client'

import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react'
import { useMemo } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLanguage()

  const dynamicRoles = useMemo(() => {
    try {
      const projects = (t as any).projects?.items || []
      const counts: Record<string, number> = {}
      const displayMap: Record<string, string> = {}

      projects.forEach((p: any) => {
        const raw = (p.role && p.role[lang]) || (p.role && p.role.en) || ''
        if (!raw) return
        // split on common separators like &, •, comma, slash, or the word 'and'
        const parts = raw.split(/\s*(?:&|•|,|\/|\band\b)\s*/i).map((s: string) => s.trim()).filter(Boolean)

        parts.forEach((part: string) => {
          const key = part.toLowerCase()
          counts[key] = (counts[key] || 0) + 1
          if (!displayMap[key]) displayMap[key] = part
        })
      })

      const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a])
      if (sorted.length === 0) return (t as any).hero.roles[lang]

      const top = sorted.slice(0, 3).map(k => displayMap[k])
      return top.join(' • ')
    } catch (e) {
      return (t as any).hero.roles[lang]
    }
  }, [lang])

  const staticRoles = (t as any).hero?.preferredRoles?.[lang]

  const statsArr = (t as any).hero?.stats?.[lang] || [
    { value: '3+', label: (t as any).hero.stat1[lang] },
    { value: '4+', label: (t as any).hero.stat2[lang] },
    { value: '10+', label: (t as any).hero.stat3[lang] },
    { value: '6', label: (t as any).hero.stat4[lang] },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary-400 font-medium mb-4 animate-fade-up">{t.hero.hi[lang]}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '120ms' }}>
              {t.hero.title[lang]}
            </h1>
            <p className="text-xl sm:text-2xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '240ms' }}>
              {staticRoles || dynamicRoles}
            </p>
            <p className="text-lg text-dark-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '360ms' }}>
              {t.hero.desc[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '480ms' }}>
              <a href="#contact" className="btn-primary">{t.hero.btnContact[lang]}</a>
              <a href="#projects" className="btn-secondary">{t.hero.btnProjects[lang]}</a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-dark-400 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Madiun, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+62 858-1338-0763</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>aryalukas65@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="max-w-md mx-auto relative animate-float">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-2xl opacity-30" />
              <div className="relative w-full">
                <img
                  src="/Lukas.png"
                  alt="Lukas Raden Arya Jatayu"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-6 bg-dark-800 rounded-2xl shadow-xl p-5 border border-dark-700 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <div className="grid grid-cols-2 gap-3">
                {statsArr.map((s: any, i: number) => (
                  <div key={i} className="bg-primary-900/40 p-3 rounded-xl text-center">
                    <p className="text-2xl font-bold text-primary-400">{s.value}</p>
                    <p className="text-xs text-dark-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-dark-800 p-3 rounded-xl shadow-lg border border-dark-700 animate-fade-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary-400 shrink-0" />
                <a href="http://www.linkedin.com/in/lukas-raden-arya-jatayu" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-dark-300 hover:text-primary-400 transition-colors truncate">
                  linkedin.com/in/lukas-raden-arya-jatayu
                </a>
                <ExternalLink className="w-4 h-4 text-dark-500 shrink-0 ml-auto" />
              </div>
            </div>

            {/* <div className="mt-4 bg-dark-800 p-3 rounded-xl shadow-lg border border-dark-700 animate-fade-up" style={{ animationDelay: '900ms' }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <a href="https://github.com/rakharn" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-dark-300 hover:text-primary-400 transition-colors truncate">
                  github.com/rakharn
                </a>
                <ExternalLink className="w-4 h-4 text-dark-500 shrink-0 ml-auto" />
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#about" className="inline-flex items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>{t.hero.scroll[lang]}</span>
          </a>
        </div>
      </div>
    </section>
  )
}