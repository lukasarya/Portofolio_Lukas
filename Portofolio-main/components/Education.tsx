'use client'

import { Award } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import Reveal from './Reveal'

export default function Education() {
  const { lang } = useLanguage()

  return (
    <section id="education" className="bg-dark-800">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title text-center">{t.education.title[lang]}</h2>
          <p className="section-subtitle text-center mx-auto">
            {t.education.subtitle[lang]}
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal>
            <div className="card p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-dark-700 flex items-center justify-center p-1.5 shadow shrink-0 overflow-hidden">
                  {(t.education.uniLogo as any).logoImg ? (
                    <img src={`/${(t.education.uniLogo as any).logoImg}`} alt={t.education.uni[lang]} className="w-full h-full object-contain" />
                  ) : (
                    <span className={`w-full h-full rounded-lg ${t.education.uniLogo.color} text-white font-bold flex items-center justify-center text-sm sm:text-base`}>
                      {t.education.uniLogo.initials}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-white">{t.education.uni[lang]}</h3>
                  <p className="text-primary-400 font-medium mt-1">{t.education.degree[lang]}</p>
                  <p className="text-dark-400 text-sm mt-1">{t.education.gpa[lang]}</p>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-dark-300 mb-2">{t.education.relevantCourses[lang]}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.education.courses[lang].map((mk: string, i: number) => (
                        <span key={i} className="skill-badge">{mk}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-dark-900/60 rounded-xl border border-dark-700">
                    <p className="text-sm font-medium text-dark-300 mb-1">{t.education.thesis[lang]}</p>
                    <p className="text-sm text-dark-400 italic text-justify">
                      {t.education.thesisText[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-900/40 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">{t.education.coursesTitle[lang]}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {t.education.certs[lang].map((cert: any, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-dark-400">
                        <span className="shrink-0 w-6 h-6 rounded-md bg-white border border-dark-700 flex items-center justify-center p-0.5 overflow-hidden">
                          {cert.logoImg ? (
                            <img src={`/${cert.logoImg}`} alt="" className="w-full h-full object-contain" />
                          ) : (
                            <span className="w-full h-full rounded bg-dark-700" />
                          )}
                        </span>
                        {cert.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}