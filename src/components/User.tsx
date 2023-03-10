import { UserType } from '../data'

const User = ({
    name,
    notificationText,
    when,
    message,
    group,
    post,
    picture,
    avatar,
    active,
}: UserType) => {
    return (
        <div
            className={`${message ? 'items-start' : 'items-center'}
            flex w-full gap-6 py-4 px-6 h-full ${
                active ? 'bg-verylightGrayishBlue' : ''
            }  rounded-lg relative`}
        >
            <img className="w-10 h-10" src={avatar} alt="profile-photo" />
            <div className={`flex flex-col`}>
                <div className="flex items-center gap-2 w-full">
                    <p className="relative font-extrabold hover:text-blue w-full cursor-pointer">
                        {name}
                        <span className="ml-2 text-darkGrayishBlue font-medium">
                            {notificationText}
                        </span>
                        {post && (
                            <span className="ml-2 cursor-pointer hover:text-blue font-extrabold text-darkGrayishBlue">
                                {post}
                            </span>
                        )}

                        {group && (
                            <span className="ml-2 cursor-pointer text-blue font-extrabold">
                                {group}
                            </span>
                        )}
                    </p>
                    {active && (
                        <span className="w-2 h-2  bg-red rounded-full"></span>
                    )}

                    {picture && (
                        <img
                            className="w-10 h-10 absolute right-0"
                            src={picture}
                        />
                    )}
                </div>
                <p className="text-grayishBlue">{when}</p>
                {message && (
                    <span className="mt-4 p-5 border cursor-pointer hover:bg-lightGrayishBlue1 text-darkGrayishBlue border-lightGrayishBlue2 rounded-md">
                        {message}
                    </span>
                )}
            </div>
        </div>
    )
}

export default User
