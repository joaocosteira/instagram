import Post from "./Post"

const posts = [{
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
}]
const Posts = () => {

    return(
        <div>
            {/**Iterate throu all the posts... */}
            {posts.map( p => <Post key={p.id} {...p}/>)}
        </div>
    )
}

export default Posts