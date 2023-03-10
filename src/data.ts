export interface UserType {
    name: string
    notificationText: string
    when: string
    avatar: string
    message?: string
    group?: string
    post?: string
    picture?: string
    active?: boolean | null
}

export const userData: UserType[] = [
    {
        avatar: '/images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        notificationText: 'reacted to your recent post',
        when: '1m ago',
        post: 'My first tournament today!',
        active: true,
    },
    {
        avatar: '/images/avatar-angela-gray.webp',
        name: 'Angela Gray',
        notificationText: 'followed you',
        when: '5m ago',
        active: true,
    },
    {
        avatar: '/images/avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        notificationText: 'has joined your group',
        when: '1 day ago',
        group: 'Chess Club',
        active: true,
    },
    {
        avatar: '/images/avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        notificationText: 'sent you a private message',
        when: '5 days ago',
        message:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
        avatar: '/images/avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        notificationText: 'commented on your picture',
        when: '1 week ago',
        picture: '/images/image-chess.webp',
    },
    {
        avatar: '/images/avatar-nathan-peterson.webp',
        name: 'Nathan Peterson ',
        notificationText: 'reacted to your recent post',
        when: '2 weeks ago',
        post: '5 end-game strategies to increase your win rate',
    },
    {
        avatar: '/images/avatar-anna-kim.webp',
        name: ' Anna Kim',
        notificationText: 'left the group',
        when: '2 weeks ago',
        group: 'Chess Club',
    },
]
