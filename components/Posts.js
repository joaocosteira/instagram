import { useEffect, useState } from "react";
import Post from "./Post"
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { db } from '../firebase';

/* const posts = [{
    id : '123',
    username : 'costeirao',
    userImg : 'https://avatars.githubusercontent.com/u/37018199',
    img : 'https://avatars.githubusercontent.com/u/37018199',
    caption : 'Costeirao wearing a bucket hat'
},
{
    id : '124',
    username : 'costeirao',
    userImg : 'https://avatars.githubusercontent.com/u/37018199',
    img : 'https://avatars.githubusercontent.com/u/37018199',
    caption : 'Costeirao wearing a bucket hat'
},
{
    id : '125',
    username : 'costeirao',
    userImg : 'https://avatars.githubusercontent.com/u/37018199',
    img : 'https://avatars.githubusercontent.com/u/37018199',
    caption : 'Costeirao wearing a bucket hat'
},
{
    id : '126',
    username : 'costeirao',
    userImg : 'https://avatars.githubusercontent.com/u/37018199',
    img : 'https://avatars.githubusercontent.com/u/37018199',
    caption : 'Costeirao wearing a bucket hat'
},
{
    id : '127',
    username : 'costeirao',
    userImg : 'https://avatars.githubusercontent.com/u/37018199',
    img : 'https://avatars.githubusercontent.com/u/37018199',
    caption : 'Costeirao wearing a bucket hat'
}] */

const Posts = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => 
        onSnapshot(
            query(collection(db, 'posts'),orderBy('timestamp','desc')),
            snapshot =>{ setPosts(snapshot.docs) })
    ,[db])

    return(
        <div>
            {/**Iterate throu all the posts... */}
            {posts.map( p => 
                //<Post key={p.id} {...p}/>
                <Post 
                    key={p.id}
                    id={p.id}
                    username={p.data().username}
                    userImg={p.data().profileImg}
                    img={p.data().image}
                    caption={p.data().caption}
                />
            )}
        </div>
    )
}

export default Posts