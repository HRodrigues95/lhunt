
import { useNavigate } from 'react-router-dom'
import AppFooter from '../../components/AppFooter'
import BGImage from './assets/home-bg.jpg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className={`flex flex-col items-center justify-center h-screen relative`}>
        <div
          className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0'
          style={{
            backgroundImage: `url(${BGImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className='flex flex-col items-center justify-center z-10'>
          <h1 className='text-4xl text-white font-bold italic'>
            <span className='text-red-700'>L</span>Hunt
          </h1>

          <p className='text-white mt-5'>
            Explore a Island forgotten but not abandoned.
          </p>

          <button
            className='bg-red-600 text-white px-4 py-2 mt-5
            border-4 border-dark-ambient-100 rounded-2xl hover:border-dark-ambient-200 hover:bg-red-800
             transition ease-in duration-300'
            onClick={() => navigate('/island')}
          >
            Enter at your peril
          </button>
        </div>
      </div>

      <AppFooter />
    </>
  )
}
