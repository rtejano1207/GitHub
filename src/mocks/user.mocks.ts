import { User } from '../models/user.interface'

const userList: User[] = [
    {
        name: 'Raymond Tejano',
        company: 'Hatag Inc,',
        location: 'Davao City, Philippines',
        bio: 'No bio at the moment',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'mon_tejano@yahoo.com'
    },
    {
        name: 'Diomellah O. Tejano',
        company: 'Hatag Inc.',
        location: 'Davao City, Philippines',
        bio: 'No bio at the moment',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'john@doe.com'

    }
]

export const USER_LIST = userList;