'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import Reveal from './Reveal'

export default function Skills() {
  const { lang } = useLanguage()
  const cats = t.skills.categories

  return (
    <section id="skills" className="bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title text-center">{t.skills.title[lang]}</h2>
          <p className="section-subtitle text-center mx-auto">
            {t.skills.subtitle[lang]}
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {cats.map((cat, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="card p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300 h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-dark-700">
                  {cat.title[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items[lang].map((item: string, i: number) => (
                    <span key={i} className="skill-badge text-sm">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
