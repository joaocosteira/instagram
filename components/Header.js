import Image from "next/image"
import { HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid';
import { PlusCircleIcon, PaperAirplaneIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/outline';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";


const Header = () => {

    const {data : session } = useSession();
    const [open,setOpen] = useRecoilState(modalState);
    const router = useRouter();



    return(
        <div className="shadow-sm border-b-1 bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">

                {/**Left */}
                <div onClick={() => { router.push('/')}} className="hidden lg:inline-grid relative w-24 cursor-pointer">
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
                        layout="fill"
                        alt="instagram logo"
                        objectFit="contain"
                    />
                </div>
                <div onClick={() => { router.push('/')}} className="lg:hidden relative w-10 flex-shrink-0 cursor-pointer">
                    <Image 
                        src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
                        layout="fill"
                        alt="instagram logo"
                        objectFit="contain"
                    />
                </div>

                {/**Middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input 
                            className="bg-gray-50 block w-full 
                                        pl-10 sm:text-sm border-gray-300
                                        focus:ring-black focus:border-black rounded-md" 
                            type="text" 
                            placeholder="Search" />
                    </div>
                </div>
                {/**Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => { router.push('/')}} className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>
                    {
                        session ? (
                            <>
                                <div className="relative navBtn">
                                    <PaperAirplaneIcon className="navBtn rotate-45"/>
                                    <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                                        3
                                    </div>
                                </div>
                                <PlusCircleIcon onClick={() => { setOpen(true) }} className="navBtn"/>
                                <UserGroupIcon className="navBtn"/>
                                <HeartIcon className="navBtn" />

                                <img 
                                    onClick={signOut}
                                    src={session.user.image} 
                                    alt="profile pic" 
                                    className="h-10 w-10 rounded-full cursor-pointer"
                                />
                            </>
                        ):(<button onClick={signIn}>Sign In</button>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Header

