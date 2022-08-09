const MiniPofile = () => {

    return(
        <div className="flex items-center justify-between mt-14 ml-10">
                <img 
                    src="https://avatars.githubusercontent.com/u/37018199" 
                    alt="Mini profile pic" 
                    className="h-16 w-16 rounded-full  border p-[2px] cursor-pointer"
                />
                <div>
                    <h2 className="font-bold">Costeira</h2>
                    <h3 className="text-sm text-gray-400">Welcome to FakeGram</h3>
                </div>
                <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniPofile;