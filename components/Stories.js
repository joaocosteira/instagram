import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Story from './Story';
const Stories = () => {

    const [suggestions,setSuggestions] = useState([]);
    const { data : session }= useSession();

    useEffect(() => {
        setSuggestions([...Array(20)].map( (_,i) => ({
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            id : i
        })));
    },[]);

    return(
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {/**My Story */}
            { session &&
                <Story
                    key={session.user.uid}
                    img={session.user.image}
                    username={session.user.username}
                />
            }
            {suggestions.map(profile => <Story 
                key={profile.id} 
                img={profile.avatar}
                username={profile.username}
             />)}
        </div>
    )
}

export default Stories;