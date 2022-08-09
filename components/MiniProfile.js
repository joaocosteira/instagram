import { signOut, useSession } from 'next-auth/react';

const MiniPofile = () => {

    const { data : session }= useSession();
    
    if(!session)
        return null 

    return(
        <div className="flex items-center justify-between mt-14 ml-10">
                <img 
                    src={session?.user?.image} 
                    alt="Mini profile pic" 
                    className="h-16 w-16 rounded-full  border p-[2px] cursor-pointer"
                />
                <div>
                    <h2 className="font-bold">{session?.user?.name}</h2>
                    <h3 className="text-sm text-gray-400">Welcome to FakeGram</h3>
                </div>
                <button onClick={signOut} className="text-blue-400 hover:text-blue-500 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniPofile;