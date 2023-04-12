import { ChangeEvent, useEffect, useState } from 'react'
import { Profile, LoadingProfile } from '../components/Profile'
import { ProfileApiT } from '../types'
import { Link } from 'react-router-dom'
import { isProfileFavorite } from '../lib/utils'

export const GenerateProfiles = () => {
  const [profileCount, setProfileCount] = useState(5)
  const [generatedProfiles, setGeneratedProfiles] = useState<ProfileApiT[]>([])
  const [favoriteProfiles, setFavoriteProfiles] = useState<ProfileApiT[]>([])
  const [loading, setLoading] = useState(false)
  const [errorState, setErrorState] = useState<string | null>(null)

  const registerError = (error:any) => {
    setErrorState(error.message)
    return error
  }

  const getProfiles = async () => {
    setLoading(true)
    setErrorState(null)
    const response = await fetch(
      `https://randomuser.me/api/?inc=name,dob,picture&noinfo&nat=de&results=${profileCount}`
    ).catch(registerError)

    if (response.ok) {
      const data = await response.json()
      setGeneratedProfiles(data.results)
    }

    setLoading(false)
  }

  useEffect(() => {
    getProfiles()
  }, [])

  const toggleFav = (profileIndex: number) => {
    const currentProfile = generatedProfiles.slice(profileIndex, profileIndex + 1)[0]
    let updatedFavoriteProfiles: ProfileApiT[] = []

    if (isProfileFavorite(currentProfile, favoriteProfiles)) {
      updatedFavoriteProfiles = favoriteProfiles.filter(
        profile => profile.dob.date !== currentProfile.dob.date
      )
    } else {
      updatedFavoriteProfiles = [currentProfile, ...favoriteProfiles]
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

  const updateGeneratedProfiles = (e: ChangeEvent) => {
    setProfileCount(parseInt((e.target as HTMLSelectElement).value))
  }

  return (
    <>
      <h1>Profile Generator</h1>
      <Link to="/favorites">See favorite profiles &gt;</Link>
      <div className="loader block">
        <select onChange={updateGeneratedProfiles}>
          {Array.from({ length: 16 }, (_, i) => i + 5).map(v => (
            <option key={`option-${v}`} value={v}>
              {v}
            </option>
          ))}
        </select>
        <button onClick={getProfiles}>Load {profileCount} other profiles</button>
      </div>
      {errorState && <div className="error block">{errorState}</div>}
      {loading && (
        <ul>
          {[...new Array(profileCount)].map((v, index) => (
            <LoadingProfile key={`k-${index}`} />
          ))}
          Loading...
        </ul>
      )}
      {!loading && generatedProfiles.length > 0 && (
        <ul>
          {generatedProfiles.map((profile: ProfileApiT, index) => (
            <Profile
              key={`k${profile?.dob?.date}`}
              profileName={profile?.name}
              dob={profile?.dob?.date}
              fav={isProfileFavorite(profile, favoriteProfiles)}
              avatar={profile?.picture?.medium}
              toggleFavF={() => toggleFav(index)}
            />
          ))}
        </ul>
      )}
    </>
  )
}
