'use client'

import { Calendar, ImageIcon } from 'lucide-react'
import { useState, useRef, useCallback } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'

const COLORS = ['#0284c7', '#059669', '#d97706', '#7c3aed']

function ScreenshotThumb({ imgSrc, caption, color, onClick }: { imgSrc: string | null; caption: string; color: string; onClick: () => void }) {
  const [errored, setErrored] = useState(false)
  const noImage = !imgSrc || errored

  return (
    <button
      onClick={onClick}
      className="group relative w-44 shrink-0 aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-dark-100 hover:shadow-lg transition-all"
    >
      {noImage ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-3"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
        >
          <ImageIcon className="w-6 h-6 mb-2 opacity-60" />
          <p className="text-[10px] text-center font-medium leading-tight opacity-90 line-clamp-2">{caption}</p>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={caption}
          className="w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
    </button>
  )
}

export default function Projects() {
  const { lang } = useLanguage()
  const projects = t.projects.items
  const [modalIndex, setModalIndex] = useState<{ project: number; screenshot: number } | null>(null)

  return (
    <section id="projects" className="bg-white dark:bg-dark-900">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title text-center">{t.projects.title[lang]}</h2>
          <p className="section-subtitle text-center mx-auto">
            {t.projects.subtitle[lang]}
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, pIdx) => {
            const ss = project.screenshots ?? []
            const color = COLORS[pIdx % COLORS.length]

            return (
              <Reveal key={pIdx} delay={pIdx * 120}>
                <div className="card hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title[lang]}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">{project.role[lang]}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 shrink-0">
                        <Calendar className="w-3 h-3" />
                        {project.period[lang]}
                      </span>
                    </div>

                    <div className="md:grid md:grid-cols-3 md:gap-6 mb-6">
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 dark:text-dark-400 mb-4">{project.type[lang]}</p>
                        <ul className="space-y-2">
                          {project.points[lang].map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-dark-400 text-justify">
                              <span className="mt-2 w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(project as any).poster && (
                        <div className="mt-4 md:mt-0 flex flex-col items-center justify-start">
                          <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-dark-700 shadow-sm">
                            <img
                              src={`/documentation/${(project as any).poster}`}
                              alt="Poster"
                              className="w-full h-auto"
                              onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {ss.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-medium text-gray-500 dark:text-dark-500 uppercase tracking-wider mb-3">
                          {lang === 'id' ? 'Screenshot' : 'Screenshots'}
                        </p>
                        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                          {ss.map((screenshot: any, sIdx: number) => (
                            <ScreenshotThumb
                              key={sIdx}
                              imgSrc={screenshot.img ? `/documentation/${screenshot.img}` : null}
                              caption={screenshot[lang].caption}
                              color={color}
                              onClick={() => setModalIndex({ project: pIdx, screenshot: sIdx })}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, i: number) => (
                        <span key={i} className="skill-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {modalIndex && (
        <ProjectModal
          title={projects[modalIndex.project].title[lang]}
          screenshots={projects[modalIndex.project].screenshots!.map((ss: any) => ({ img: ss.img, ...ss[lang] }))}
          currentIndex={modalIndex.screenshot}
          onClose={() => setModalIndex(null)}
          onPrev={() => setModalIndex({
            project: modalIndex.project,
            screenshot: modalIndex.screenshot === 0
              ? projects[modalIndex.project].screenshots!.length - 1
              : modalIndex.screenshot - 1,
          })}
          onNext={() => setModalIndex({
            project: modalIndex.project,
            screenshot: modalIndex.screenshot === projects[modalIndex.project].screenshots!.length - 1
              ? 0
              : modalIndex.screenshot + 1,
          })}
        />
      )}
    </section>
  )
}
