import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Header from '../../components/Header';

const SignIn = ({ providers }) => {

    return(
        <>
            <Header />
            <div  className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" 
                    alt=""
                    className='w-80'
                />
                <p className='font-xs italix'>
                    Welcome to FakeGram. Obviously this is not the real app nor is trying to be. This is simply a Web development exercise {":)"}
                </p>
                <div className='mt-40 '>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button 
                                className='p-3 bg-blue-500 rounded-lg text-white'
                                onClick={() => signIntoProvider(provider.id, { callbackUrl : '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            </>
    )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props : {
            providers
        }
    }
}

export default SignIn;