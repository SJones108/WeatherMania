
import Background from '../assets/images/background.jpg'
function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}} className="flex justify-center mx-auto bg-cover bg-fixed">
          <div className='flex place-items-center h-screen'>
            <h3 className='p-5 text-slate-100 rounded text-5xl border bg-black bg-opacity-70'>
              WeatherMania - Keep Track Of Your Weather!</h3>
          </div>
    </div>
  )
}

export default Home
