'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import Reveal from './Reveal'

export default function About() {
  const { lang } = useLanguage()

  return (
    <section id="about" className="bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">{t.about.title[lang]}</h2>
            <p className="section-subtitle text-center mx-auto">
              {t.about.subtitle[lang]}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-gradient-to-r from-primary-50 dark:from-primary-900/40 to-white dark:to-dark-700/40 border border-gray-200 dark:border-dark-700 rounded-2xl p-8 sm:p-10">
              <p className="text-lg text-gray-700 dark:text-dark-300 leading-relaxed text-justify">
                {t.about.content[lang]}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
