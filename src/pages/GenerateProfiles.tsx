// https://randomuser.me/api/?inc=name,dob,picture&noinfo&nat=de&results=20
import { useEffect, useState } from 'react'
import { Profile } from '../components/Profile'
import { ProfileApiT } from '../types'
import { Link } from 'react-router-dom'


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

  const toggleFav = (profileIndex: number) => {

    const currentProfile = generatedProfiles.slice(profileIndex, profileIndex+1)[0];
    let updatedFavoriteProfiles:ProfileApiT[] = [];

    if (isProfileFavorite(currentProfile)) {
      updatedFavoriteProfiles = favoriteProfiles.filter(profile => profile.dob.date !== currentProfile.dob.date);
    } else {
      updatedFavoriteProfiles = [
        currentProfile,
        ...favoriteProfiles
      ]
      }

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
      <Link to="/favorites">See favorite profiles</Link>
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
              toggleFavF={() => toggleFav(index)}
            />
          ))}
        </ul>
      )}
    </>
  )
}
