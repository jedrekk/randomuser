import { FunctionComponent } from 'react'
import { NameT } from '../types'
import './Profile.css'
import { daysFromNowCurrentYear } from '../lib/utils'

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


export const Profile: FunctionComponent<ProfileProps> = ({
  profileName,
  dob,
  avatar,
  fav,
  toggleFavF,
}) => {
  const { first, last } = profileName

  const daysTilDob = daysFromNowCurrentYear(dob);
  const birthday = new Date(dob).toLocaleDateString('de-DE');

  return (
    <li>
      <img className="profile" src={avatar} />
      <div className="name">
        <h3>
          {first} {last}
        </h3>
        <div>Days until birthday: <strong>{daysTilDob}</strong> | <span className="birthday">{ birthday }</span></div>
      </div>

      {!fav && (
        <button onClick={toggleFavF} className="fav">
          Fav
        </button>
      )}
      {fav && (
        <button onClick={toggleFavF} className="fav active">
          unfav
        </button>
      )}
    </li>
  )
}
