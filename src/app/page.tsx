import FootballScene from '@/components/FootballScene'

// URL выдаёт Spline: Export → Code → React → скопировать ссылку на scene.splinecode.
// Задаётся в .env.local: NEXT_PUBLIC_SPLINE_SCENE=https://prod.spline.design/<id>/scene.splinecode
const SCENE = process.env.NEXT_PUBLIC_SPLINE_SCENE

export default function Page() {
  if (!SCENE) {
    return (
      <main className="setup">
        <div>
          <h1>Нужна ссылка на сцену</h1>
          <p>
            В Spline откройте <b>Export → Code → React</b>, нажмите <b>Update</b> и скопируйте
            ссылку вида <code>https://prod.spline.design/…/scene.splinecode</code>.
          </p>
          <p>
            Вставьте её в файл <code>.env.local</code>:
            <br />
            <code>NEXT_PUBLIC_SPLINE_SCENE=ваша_ссылка</code>
            <br />и перезапустите <code>npm run dev</code>.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <FootballScene scene={SCENE} />
    </main>
  )
}
