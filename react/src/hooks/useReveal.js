import { useEffect } from 'react'

/**
 * Observes elements with class 'reveal' and adds 'visible' when they enter viewport.
 * Also observes elements using the 'in' class pattern (e.g. ns-about-left) for staggered child animations.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    // Standard .reveal elements → add 'visible' + 'in'
    const elements = document.querySelectorAll('.reveal:not(.visible)')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          e.target.classList.add('in')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach(el => obs.observe(el))

    // Elements that use 'in' class for staggered child animations (e.g. .ns-about-left)
    const inEls = document.querySelectorAll('.ns-about-left:not(.in)')
    const obsIn = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          obsIn.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    inEls.forEach(el => obsIn.observe(el))

    return () => {
      obs.disconnect()
      obsIn.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
