import { ProfileApiT } from './../types'

export const isProfileFavorite = (profile: ProfileApiT, favoriteProfiles: ProfileApiT[]) => {
  if (!profile || Object.keys(profile).length === 0) return false;
  return favoriteProfiles.map(v => v.dob.date).includes(profile.dob.date)
}

export const daysFromNowCurrentYear = (goalDateString: string) => {
  let dobCurrent = new Date(goalDateString)
  dobCurrent.setFullYear(new Date().getFullYear())
  dobCurrent.setHours(0)
  dobCurrent.setMinutes(0)

  if (dobCurrent < new Date()) {
    dobCurrent.setFullYear(new Date().getFullYear() + 1)
  }

  const day = 1000 * 60 * 60 * 24
  const today = Date.now()
  return Math.floor((dobCurrent.getTime() - today) / day)
}
