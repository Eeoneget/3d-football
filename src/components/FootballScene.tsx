'use client'

import { useState } from 'react'
import Spline from '@splinetool/react-spline'

/**
 * Вся игра (физика, HUD, меню, звук) живёт внутри сцены Spline как HTML-контент
 * и едет вместе с .splinecode. Режим `inline` запускает её скрипты прямо на
 * странице (window.spline привязан к этой сцене) — клавиатура работает без
 * iframe и без задержки postMessage. Безопасно, потому что сцена ваша.
 */
export default function FootballScene({ scene }: { scene: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Spline
        className="stage"
        scene={scene}
        htmlContentMode="inline"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <div className="loader">Загружаем стадион…</div>}
      <p className="spline-credit">
        <a href="https://spline.design" target="_blank" rel="noopener">
          Made with Spline
        </a>
      </p>
    </>
  )
}
