import { ProfileApiT } from '../types'

export const PROFILE_LIST = JSON.parse(
  '[{"name":{"title":"Miss","first":"Penha","last":"da Paz"},"dob":{"date":"1976-05-18T15:21:04.669Z","age":46},"picture":{"large":"https://randomuser.me/api/portraits/women/85.jpg","medium":"https://randomuser.me/api/portraits/med/women/85.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/85.jpg"}},{"name":{"title":"Ms","first":"Eloane","last":"Giraud"},"dob":{"date":"1957-02-20T02:41:11.250Z","age":66},"picture":{"large":"https://randomuser.me/api/portraits/women/50.jpg","medium":"https://randomuser.me/api/portraits/med/women/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/50.jpg"}},{"name":{"title":"Ms","first":"Inés","last":"Vidal"},"dob":{"date":"1970-11-06T14:53:43.239Z","age":52},"picture":{"large":"https://randomuser.me/api/portraits/women/10.jpg","medium":"https://randomuser.me/api/portraits/med/women/10.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/10.jpg"}},{"name":{"title":"Mrs","first":"Emilia","last":"Luoma"},"dob":{"date":"1988-06-28T07:29:57.457Z","age":34},"picture":{"large":"https://randomuser.me/api/portraits/women/27.jpg","medium":"https://randomuser.me/api/portraits/med/women/27.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/27.jpg"}},{"name":{"title":"Monsieur","first":"Ben","last":"Lopez"},"dob":{"date":"1970-08-27T21:05:51.850Z","age":52},"picture":{"large":"https://randomuser.me/api/portraits/men/71.jpg","medium":"https://randomuser.me/api/portraits/med/men/71.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/71.jpg"}},{"name":{"title":"Mr","first":"Ekansh","last":"Uchil"},"dob":{"date":"1960-08-08T09:49:31.551Z","age":62},"picture":{"large":"https://randomuser.me/api/portraits/men/2.jpg","medium":"https://randomuser.me/api/portraits/med/men/2.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/2.jpg"}},{"name":{"title":"Mrs","first":"Saga","last":"Bakkerud"},"dob":{"date":"1957-11-24T07:42:22.185Z","age":65},"picture":{"large":"https://randomuser.me/api/portraits/women/64.jpg","medium":"https://randomuser.me/api/portraits/med/women/64.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/64.jpg"}},{"name":{"title":"Mr","first":"Carter","last":"Sanders"},"dob":{"date":"1983-06-29T20:56:20.569Z","age":39},"picture":{"large":"https://randomuser.me/api/portraits/men/75.jpg","medium":"https://randomuser.me/api/portraits/med/men/75.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/75.jpg"}},{"name":{"title":"Mrs","first":"Mila","last":"Brown"},"dob":{"date":"1973-01-04T00:47:54.233Z","age":50},"picture":{"large":"https://randomuser.me/api/portraits/women/18.jpg","medium":"https://randomuser.me/api/portraits/med/women/18.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/18.jpg"}},{"name":{"title":"Madame","first":"Elif","last":"Fleury"},"dob":{"date":"1993-06-14T19:59:01.720Z","age":29},"picture":{"large":"https://randomuser.me/api/portraits/women/9.jpg","medium":"https://randomuser.me/api/portraits/med/women/9.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/9.jpg"}},{"name":{"title":"Miss","first":"Grace","last":"Reyes"},"dob":{"date":"1983-09-09T16:25:36.200Z","age":39},"picture":{"large":"https://randomuser.me/api/portraits/women/82.jpg","medium":"https://randomuser.me/api/portraits/med/women/82.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/82.jpg"}},{"name":{"title":"Mrs","first":"Antonia","last":"Medina"},"dob":{"date":"1969-11-04T01:34:06.967Z","age":53},"picture":{"large":"https://randomuser.me/api/portraits/women/4.jpg","medium":"https://randomuser.me/api/portraits/med/women/4.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/4.jpg"}},{"name":{"title":"Mr","first":"Cameron","last":"Roberts"},"dob":{"date":"2001-04-16T17:00:16.423Z","age":21},"picture":{"large":"https://randomuser.me/api/portraits/men/40.jpg","medium":"https://randomuser.me/api/portraits/med/men/40.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/40.jpg"}},{"name":{"title":"Ms","first":"Amy","last":"Chow"},"dob":{"date":"1983-09-09T12:15:05.540Z","age":39},"picture":{"large":"https://randomuser.me/api/portraits/women/58.jpg","medium":"https://randomuser.me/api/portraits/med/women/58.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/58.jpg"}},{"name":{"title":"Mr","first":"Manthan","last":"Taj"},"dob":{"date":"1953-03-22T10:41:14.772Z","age":70},"picture":{"large":"https://randomuser.me/api/portraits/men/22.jpg","medium":"https://randomuser.me/api/portraits/med/men/22.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/22.jpg"}},{"name":{"title":"Mr","first":"Emilio","last":"Sanz"},"dob":{"date":"1999-08-08T10:04:50.574Z","age":23},"picture":{"large":"https://randomuser.me/api/portraits/men/36.jpg","medium":"https://randomuser.me/api/portraits/med/men/36.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/36.jpg"}},{"name":{"title":"Ms","first":"Sharanya","last":"Chavare"},"dob":{"date":"1960-10-30T07:18:14.841Z","age":62},"picture":{"large":"https://randomuser.me/api/portraits/women/52.jpg","medium":"https://randomuser.me/api/portraits/med/women/52.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/52.jpg"}},{"name":{"title":"Ms","first":"Juana","last":"Castro"},"dob":{"date":"1968-04-03T08:11:17.280Z","age":55},"picture":{"large":"https://randomuser.me/api/portraits/women/78.jpg","medium":"https://randomuser.me/api/portraits/med/women/78.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/78.jpg"}},{"name":{"title":"Mr","first":"Aleksi","last":"Arola"},"dob":{"date":"1948-06-27T14:16:53.899Z","age":74},"picture":{"large":"https://randomuser.me/api/portraits/men/81.jpg","medium":"https://randomuser.me/api/portraits/med/men/81.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/81.jpg"}},{"name":{"title":"Mr","first":"Brady","last":"De Witte"},"dob":{"date":"1964-10-24T15:25:21.012Z","age":58},"picture":{"large":"https://randomuser.me/api/portraits/men/76.jpg","medium":"https://randomuser.me/api/portraits/med/men/76.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/76.jpg"}}]'
)
export const NON_MATCH_PROFILE: ProfileApiT = {
  name: {
    title: 'Mr',
    first: 'Oshkosh',
    last: 'Begosh',
  },
  dob: {
    date: '1950-08-03T09:49:31.551Z',
    age: 61,
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/6.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/6.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
  },
}

export const MATCH_PROFILE: ProfileApiT = {
  name: {
    title: 'Mr',
    first: 'Ekansh',
    last: 'Uchil',
  },
  dob: {
    date: '1960-08-08T09:49:31.551Z',
    age: 62,
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/2.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/2.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
  },
}
