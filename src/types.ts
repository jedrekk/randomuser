export type NameT = {
  first: string
  last: string
  title: string
}

type PictureT = {
  large: string
  medium: string
  thumbnail: string
}

type DobT = {
  age: number
  date: string
}

export type ProfileApiT = {
  name: NameT
  picture: PictureT
  dob: DobT
}