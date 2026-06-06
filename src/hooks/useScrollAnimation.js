import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('aos-hidden')
          el.classList.add('aos-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    )

    el.classList.add('aos-hidden')
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useScrollAnimationGroup() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('aos-hidden')
            entry.target.classList.add('aos-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    children.forEach((child, i) => {
      child.classList.add('aos-hidden')
      child.style.transitionDelay = `${i * 0.08}s`
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [])

  return containerRef
}
