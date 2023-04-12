import { ProfileApiT } from './../types'

export const isProfileFavorite = (profile: ProfileApiT, favoriteProfiles: ProfileApiT[]) => {
  return favoriteProfiles.map(v => v.dob.date).includes(profile.dob.date)
}
