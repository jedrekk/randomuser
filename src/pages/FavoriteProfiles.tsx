// https://randomuser.me/api/?inc=name,dob,picture&noinfo&nat=de&results=20
import { useEffect, useState } from 'react'
import { Profile } from '../components/Profile'
import { ProfileApiT } from '../types'
import { Link } from 'react-router-dom';


const useLocalStorage = (localStorageKey:string, defaultValue:string) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);

  return [value, setValue];
};

export const FavoriteProfiles = () => {
  const [favoriteProfiles, setFavoriteProfiles] = useState<ProfileApiT[]>([])

  const removeFav = (profileIndex: number) => {
    const currentProfile = favoriteProfiles.slice(profileIndex, profileIndex+1)[0];
    const updatedFavoriteProfiles = favoriteProfiles.filter(profile => profile.dob.date !== currentProfile.dob.date);

    localStorage.setItem('favorites', JSON.stringify(updatedFavoriteProfiles))
    setFavoriteProfiles(updatedFavoriteProfiles)
  }

  useEffect(() => {
    const favoritesLocalStorage = localStorage.getItem('favorites')
    if (favoritesLocalStorage) {
      setFavoriteProfiles(JSON.parse(favoritesLocalStorage))
    }
  }, [])

  const isProfileFavorite = (profile:ProfileApiT) => {
    return favoriteProfiles.map(v => v.dob.date).includes(profile.dob.date);
  }

  return (
    <>
      <h1>Favorite profiles</h1>
      <Link to="/">See more generated profiles</Link>
      {favoriteProfiles.length > 0 && (
        <ul>
          {favoriteProfiles.map((profile: ProfileApiT, index) => (
            <Profile
              key={`k${profile?.dob?.date}`}
              profileName={profile?.name}
              dob={profile?.dob?.date}
              fav={isProfileFavorite(profile)}
              avatar={profile?.picture?.medium}
              toggleFavF={() => removeFav(index)}
            />
          ))}
        </ul>
      )}
    </>
  )
}