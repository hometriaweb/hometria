'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PropertyGalleryProps {
  images: string[]
  title: string
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [[page, direction], setPage] = useState([0, 0])
  const [lightbox, setLightbox] = useState(false)

  // We wrap around using math modulo
  const imageIndex = ((page % images.length) + images.length) % images.length

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  const openLightbox = useCallback(() => setLightbox(true), [])
  const closeLightbox = useCallback(() => setLightbox(false), [])

  if (!images.length) return null

  return (
    <>
      <div className="relative group rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'tween', ease: 'easeOut', duration: 0.3 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) paginate(1)
              else if (swipe > swipeConfidenceThreshold) paginate(-1)
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            onClick={openLightbox}
          >
            <Image
              src={images[imageIndex]}
              alt={`${title} — zdjęcie ${imageIndex + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Fullscreen button */}
        <button
          onClick={(e) => { e.stopPropagation(); openLightbox(); }}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
        >
          <Expand className="w-4 h-4" />
        </button>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); paginate(-1) }}
              className="absolute left-3 z-10 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); paginate(1) }}
              className="absolute right-3 z-10 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
              {imageIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                i === imageIndex ? 'border-[#FF1493]' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="80px" />
              {i === imageIndex && <div className="absolute inset-0 bg-[#FF1493]/10" />}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm z-10">
              {imageIndex + 1} / {images.length}
            </span>

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: 'tween', ease: 'easeOut', duration: 0.3 }, opacity: { duration: 0.2 } }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) paginate(1)
                    else if (swipe > swipeConfidenceThreshold) paginate(-1)
                  }}
                  className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing p-4 sm:p-12"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full max-w-6xl max-h-[85vh] aspect-[16/9]">
                    <Image
                      src={images[imageIndex]}
                      alt=""
                      fill
                      className="object-contain pointer-events-none"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Lightbox nav */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); paginate(-1) }}
                  className="absolute left-4 z-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); paginate(1) }}
                  className="absolute right-4 z-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
