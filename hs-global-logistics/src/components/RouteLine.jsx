export default function RouteLine({ flip = false }) {
  return (
    <div className={`route-line ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0 30 Q 300 -10, 600 30 T 1200 30" fill="none" stroke="#FF7A3D" strokeWidth="2.5" strokeDasharray="1 14" strokeLinecap="round" />
      </svg>
      <style>{`
        .route-line { width: 100%; overflow: hidden; line-height: 0; }
        .route-line.flip { transform: scaleY(-1); }
        .route-line svg { width: 100%; height: 40px; display: block; }
      `}</style>
    </div>
  )
}
