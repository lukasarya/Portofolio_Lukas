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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 dark:bg-primary-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700/20 dark:bg-primary-700/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-sm sm:text-base animate-fade-up">{t.hero.hi[lang]}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '120ms' }}>
              {t.hero.title[lang]}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '240ms' }}>
              {staticRoles || dynamicRoles}
            </p>
            <p className="text-lg text-gray-600 dark:text-dark-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '360ms' }}>
              {t.hero.desc[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '480ms' }}>
              <a href="#contact" className="btn-primary">{t.hero.btnContact[lang]}</a>
              <a href="#projects" className="btn-secondary">{t.hero.btnProjects[lang]}</a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-dark-400 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>Madiun, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>+62 858-1338-0763</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>aryalukas65@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="max-w-md mx-auto relative animate-float">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-2xl opacity-30 dark:opacity-20" />
              <div className="relative w-full">
                <img
                  src="/Lukas.png"
                  alt="Lukas Raden Arya Jatayu"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-6 bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-5 border border-gray-200 dark:border-dark-700 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <div className="grid grid-cols-2 gap-3">
                {statsArr.map((s: any, i: number) => (
                  <div key={i} className="bg-primary-50 dark:bg-primary-900/40 p-3 rounded-xl text-center">
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{s.value}</p>
                    <p className="text-xs text-gray-600 dark:text-dark-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-white dark:bg-dark-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 animate-fade-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" />
                <a href="http://www.linkedin.com/in/lukas-raden-arya-jatayu" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate">
                  linkedin.com/in/lukas-raden-arya-jatayu
                </a>
                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-dark-500 shrink-0 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#about" className="inline-flex items-center gap-2 text-gray-400 dark:text-dark-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce">
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
