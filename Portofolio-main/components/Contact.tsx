'use client'

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import Reveal from './Reveal'

export default function Contact() {
  const { lang } = useLanguage()

  return (
    <section id="contact" className="bg-white dark:bg-dark-900">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title text-center">{t.contact.title[lang]}</h2>
          <p className="section-subtitle text-center mx-auto">
            {t.contact.subtitle[lang]}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <a
                href="tel:+6285813380763"
                className="card p-6 sm:p-8 text-center w-full max-w-xs hover:-translate-y-1 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.phone[lang]}</h3>
                <p className="text-sm text-gray-500 dark:text-dark-400">+62 858-1338-0763</p>
              </a>

              <a
                href="mailto:aryalukas65@gmail.com"
                className="card p-6 sm:p-8 text-center w-full max-w-xs hover:-translate-y-1 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.email[lang]}</h3>
                <p className="text-sm text-gray-500 dark:text-dark-400">aryalukas65@gmail.com</p>
              </a>

              <a
                href="http://www.linkedin.com/in/lukas-raden-arya-jatayu"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 sm:p-8 text-center w-full max-w-xs hover:-translate-y-1 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.linkedin[lang]}</h3>
                <p className="text-sm text-gray-500 dark:text-dark-400">Lukas Raden Arya Jatayu</p>
              </a>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center gap-2 text-gray-600 dark:text-dark-400 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>Madiun, Jawa Timur, Indonesia</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
