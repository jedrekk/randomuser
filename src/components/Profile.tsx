import { FunctionComponent } from 'react'
import { NameT } from '../types';
import './Profile.css'

interface ProfileProps {
  profileName: NameT
  dob: string
  avatar: string
  fav: boolean
  toggleFavF: () => void
}

export const LoadingProfile = () => {
  return (
    <li>
      <div className="empty" />
    </li>
  )
}

export const Profile: FunctionComponent<ProfileProps> = ({ profileName, dob, avatar, fav, toggleFavF}) => {
  const { first, last } = profileName
  return (
    <li>
      <img className='profile' src={avatar} />
      <h2>
        {first} {last}
      </h2>
      { !fav && <button onClick={ toggleFavF } className='fav'>Fav</button> }
      { fav && <button onClick={ toggleFavF } className='fav active'>unfav</button> }
    </li>
  )
}
