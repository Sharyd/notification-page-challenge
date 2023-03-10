import { useState } from 'react'
import User from './components/User'
import Wrapper from './components/Wrapper'
import { userData } from './data'

function App() {
    const [user, setUser] = useState(userData)

    const getUnreadMessages = user.filter((user) => user.active)

    const handleMarkAllAsRead = () => {
        setUser(
            user.map((user) => ({
                ...user,
                active: user.active === null,
            }))
        )
    }
    console.log(user)

    return (
        <Wrapper>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-extrabold">Notifications</h1>
                    <span className="bg-blue  text-white py-0.5 px-3 rounded-md">
                        {getUnreadMessages.length}
                    </span>
                </div>
                <button
                    onClick={() => handleMarkAllAsRead()}
                    className="text-darkGrayishBlue hover:text-blue"
                >
                    Mark all as read
                </button>
            </div>
            <div className="mt-6 flex items-center flex-col gap-2">
                {user.map((user, idx) => (
                    <User key={idx} {...user} />
                ))}
            </div>
        </Wrapper>
    )
}

export default App
