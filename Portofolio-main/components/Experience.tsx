'use client'

import { Briefcase, Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import Reveal from './Reveal'

export default function Experience() {
  const { lang } = useLanguage()
  const exps = t.experience.items

  return (
    <section id="experience" className="bg-white dark:bg-dark-900">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title text-center">{t.experience.title[lang]}</h2>
          <p className="section-subtitle text-center mx-auto">
            {t.experience.subtitle[lang]}
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-primary-700/50" />

          {exps.map((exp, index) => (
            <Reveal key={index} delay={index * 120} className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
              <div className="absolute left-2 sm:left-3 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 shadow ring-4 ring-primary-500/20" />
              <div className="card p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-700 flex items-center justify-center p-1.5 shadow overflow-hidden">
                    {(exp as any).logoImg ? (
                      <img
                        src={`/${(exp as any).logoImg}`}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className={`w-full h-full rounded-lg ${exp.logo.color} text-white font-bold flex items-center justify-center text-sm sm:text-base`}>
                        {exp.logo.initials}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role[lang]}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-dark-400">
                      <span className="font-medium text-primary-600 dark:text-primary-400">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period[lang]}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points[lang].map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-dark-400">
                          <span className="mt-2 w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
