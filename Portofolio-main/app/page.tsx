'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { ChevronUp, Linkedin, Globe } from 'lucide-react'

export default function Home() {
  const { lang, setLang } = useLanguage()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-dark-900/90 backdrop-blur-md z-50 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <a href="#" className="text-lg font-bold text-primary-400 shrink-0">LR</a>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {['about', 'experience', 'education', 'projects', 'skills', 'contact'].map((id, i) => (
                  <a key={id} href={`#${id}`} className="whitespace-nowrap text-sm text-dark-300 hover:text-primary-400 transition-colors">
                    {t.nav[lang][i]}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-700 text-sm font-medium text-dark-300 hover:bg-dark-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {lang === 'id' ? 'EN' : 'ID'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-dark-900 text-white py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
            <div className="min-w-0">
              <p className="text-lg font-bold text-white break-words">Lukas Raden Arya Jatayu</p>
              <p className="text-dark-400 text-sm mt-1 break-words">{t.footer.roles[lang]}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a href="http://www.linkedin.com/in/rakharn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/rakharn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:rakhaarian1@gmail.com" className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <ChevronUp className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-800 text-center text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Lukas Raden Arya Jatayu. {t.footer.rights[lang]}
          </div>
        </div>
      </footer>
    </>
  )
}