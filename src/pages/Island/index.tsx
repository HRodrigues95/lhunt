import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IslandSVG from './assets/map.svg';
import { faCity, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent } from 'react';

type POIButtonProps = {
  id: string,
  point: {
    top: string,
    left: string,
    type: string,
    id: string,
  },
}

const POIButton: FunctionComponent<POIButtonProps> = ({ point, id }) => {
  let icon = faLocationPin
  switch (point.type) {
    case 'settlement':
      icon = faCity
      break
  }

  return (
    <button
      className='absolute'
      key={id}
      style={{ top: `${point.top}%`, left: `${point.left}%` }}
    >
      <FontAwesomeIcon
        className='text-red-500'
        icon={icon}
      />
    </button>
  )
}

export default function Island() {

  const POSITIONS = [
    { top: '67', left: '25.5', id: 'survivor_city', type: 'settlement' },
  ]

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='relative overflow-scroll h-fit w-2/3'>
        <div className='min-w-[1440px] min-h-[697px] bg-dark-ambient-100'>
          <img className='' src={IslandSVG} alt='Island' />

          {POSITIONS.map((position) => <POIButton point={position} id={position.id} />)}
        </div>
      </div>

      <div className='h-[90%] w-1/3 text-center bg-dark-ambient-50'>
        <p className="mb-2">Select a cursed location to reveal its horrors</p>
      </div>
    </div>
  )
}
