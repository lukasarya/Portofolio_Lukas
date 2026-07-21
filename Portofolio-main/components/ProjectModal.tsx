'use client'

import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { useEffect, useCallback, useState } from 'react'

interface Screenshot {
  img?: string
  caption: string
  desc: string
}

interface ProjectModalProps {
  title: string
  screenshots: Screenshot[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const COLORS = ['#0284c7', '#059669', '#d97706', '#7c3aed', '#dc2626', '#0891b2']

export default function ProjectModal({ title, screenshots, currentIndex, onClose, onPrev, onNext }: ProjectModalProps) {
  const [errored, setErrored] = useState<Record<number, boolean>>({})

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!screenshots.length) return null

  const ss = screenshots[currentIndex]
  const color = COLORS[currentIndex % COLORS.length]
  const hasError = errored[currentIndex]
  const imgSrc = ss.img ? `/documentation/${ss.img}` : null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-dark-800">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate pr-4">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-100 flex items-center justify-center shrink-0 transition-colors">
            <X className="w-5 h-5 text-gray-500 dark:text-dark-500" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col sm:flex-row">
          <div className="relative flex-1 bg-gray-50 dark:bg-dark-900 flex items-center justify-center min-h-[250px] sm:min-h-[400px]">
            <div className="w-full h-full flex items-center justify-center p-6">
              {imgSrc && !hasError ? (
                <img
                  src={imgSrc}
                  alt={ss.caption}
                  className="w-full max-w-3xl max-h-[65vh] rounded-xl object-contain shadow-lg"
                  onError={() => setErrored(prev => ({ ...prev, [currentIndex]: true }))}
                />
              ) : (
                <div
                  className="w-full max-w-3xl max-h-[65vh] rounded-xl flex flex-col items-center justify-center text-white p-6"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
                >
                  <ImageIcon className="w-6 h-6 mb-2 opacity-60" />
                  <p className="text-[10px] text-center font-medium leading-tight opacity-90 line-clamp-2">{ss.caption}</p>
                  <p className="text-sm opacity-70 mt-1">
                    {currentIndex + 1} / {screenshots.length}
                  </p>
                </div>
              )}
            </div>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {screenshots.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          <div className="sm:w-72 p-6 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-dark-800 overflow-y-auto">
            <p className="text-xs font-medium text-gray-500 dark:text-dark-400 uppercase tracking-wider mb-2">
              Screenshot {currentIndex + 1} / {screenshots.length}
            </p>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{ss.caption}</h4>
            <p className="text-sm text-gray-600 dark:text-dark-400 leading-relaxed text-justify">{ss.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
