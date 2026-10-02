/**
 * useSEO — lightweight wrapper around react-helmet-async
 * Call this once per page component.
 *
 * Usage:
 *   useSEO({
 *     title: 'Page Title | Nucleus Systems',
 *     description: '...',
 *     canonical: 'https://www.nucleussystems.com/path',
 *   })
 */
import { useEffect } from 'react'

export function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // Title
    if (title) document.title = title

    // Meta description
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    if (description) desc.setAttribute('content', description)

    // Canonical
    let can = document.querySelector('link[rel="canonical"]')
    if (!can) {
      can = document.createElement('link')
      can.setAttribute('rel', 'canonical')
      document.head.appendChild(can)
    }
    if (canonical) can.setAttribute('href', canonical)

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) ogTitle.setAttribute('content', title)

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc && description) ogDesc.setAttribute('content', description)

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical)

    // Twitter title
    let twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle && title) twTitle.setAttribute('content', title)

    // Twitter description
    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc && description) twDesc.setAttribute('content', description)

    return () => {
      // Restore defaults on unmount
      document.title = 'Nucleus Systems | Digital Trust Assurance'
    }
  }, [title, description, canonical])
}
