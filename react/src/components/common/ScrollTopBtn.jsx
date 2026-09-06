import { useScrollTop } from '../../hooks/useScrollTop'

export default function ScrollTopBtn() {
  const visible = useScrollTop(400)
  return (
    <button
      id="scrollTopBtn"
      className={visible ? 'visible' : ''}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
