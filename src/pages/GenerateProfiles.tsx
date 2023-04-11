// https://randomuser.me/api/?inc=name,dob,picture&noinfo&nat=de&results=20
import { useEffect, useState } from 'react'
import { Profile } from '../components/Profile'
import { ProfileApiT } from '../types'


const useLocalStorage = (localStorageKey:string, defaultValue:string) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);

  return [value, setValue];
};

export const GenerateProfiles = () => {
  const [profileCount, setProfileCount] = useState(5)
  const [generatedProfiles, setGeneratedProfiles] = useState<ProfileApiT[]>([])
  const [favoriteProfiles, setFavoriteProfiles] = useState<ProfileApiT[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProfiles = async () => {
      setLoading(true)
      const response = await fetch(
        `https://randomuser.me/api/?inc=name,dob,picture&noinfo&nat=de&results=${profileCount}`
      )
      const data = await response.json()
      setGeneratedProfiles(data.results)
      setLoading(false)
    }

    getProfiles()
  }, [profileCount])

  const addFav = (profileIndex: number) => {
    const updatedFavoriteProfiles = [
      ...generatedProfiles.splice(profileIndex, 1),
      ...favoriteProfiles,
    ]
    localStorage.setItem('favorites', JSON.stringify(updatedFavoriteProfiles))
    setFavoriteProfiles(updatedFavoriteProfiles)
  }
  
  const removeFav = (profileIndex: number) => {
    const updatedFavoriteProfiles = [
      ...generatedProfiles.splice(profileIndex, 1),
      ...favoriteProfiles,
    ]
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
      <h1>Profile Generator</h1>
      {loading && <div>Loading...</div>}
      {!loading && generatedProfiles.length > 0 && (
        <ul>
          {generatedProfiles.map((profile: ProfileApiT, index) => (
            <Profile
              key={`k${profile?.dob?.date}`}
              profileName={profile?.name}
              dob={profile?.dob?.date}
              fav={isProfileFavorite(profile)}
              avatar={profile?.picture?.medium}
              toggleFavF={() => addFav(index)}
            />
          ))}
        </ul>
      )}
      {favoriteProfiles.length > 0 && (
        <ul>
          <h3>Favorite profiles</h3>
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
