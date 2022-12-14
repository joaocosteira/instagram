import { 
    BookmarkIcon,
    ChatIcon,
     DotsHorizontalIcon,
     EmojiHappyIcon,
     HeartIcon,
     PaperAirplaneIcon 
    } from "@heroicons/react/outline";
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy, setDoc, doc, deleteDoc } from '@firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ id, username, userImg, img, caption }) => {

    const { data : session }= useSession();
    const [comment,setComment] = useState("");
    const [comments,setComments] = useState([]);
    const [likes,setLikes] = useState([]);
    const [hasLiked,setHasLiked] = useState(false);

    useEffect(()=> onSnapshot(query(collection(db,'posts',id,'comments'),orderBy('timestamp','desc')),snapshot => setComments(snapshot.docs)),[db,id])

    useEffect(()=>
        onSnapshot(collection(db,'posts',id,'likes'), (snapshot) => 
            setLikes(snapshot.docs))
    ,[db,id]);

    useEffect(()=> setHasLiked(likes.findIndex(like => like.id === session?.user?.uid) !== -1 ),[likes]);

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db,'posts',id, 'comments'),{
            comment : commentToSend,
            username : session.user.username,
            userImage : session.user.image,
            timestamp : serverTimestamp()
        })
    }

    const likePost = async () => {

        if(hasLiked){
            await deleteDoc(doc(db,"posts",id,"likes",session.user.uid));
        }else{
            await setDoc(doc(db,'posts',id,'likes',session.user.uid),{
                username : session.user.username
            })
        }
    }

    return(
        <div className="bg-white my-7 border rounded-sm">
            {/**Header */}
            <div className="flex items-center p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>
            {/**img */}
            <img src={img} className="object-cover w-full" alt={`Post by ${username}`} />
            {/**Buttons */}
            { session && 
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {
                            hasLiked ? (
                                <HeartIconFilled onClick={likePost} className="btn text-red-500"/> 
                            ) :

                            <HeartIcon onClick={likePost} className="btn"/>
                        }
                        <ChatIcon className="btn"/>
                        <PaperAirplaneIcon className="btn"/>
                    </div>
                    <BookmarkIcon className="btn"/>
                </div>
            }
            {/**Captions */}
            <p className="p-5 truncate">
                {likes.length > 0 && <p className="font-bold mb-1">{likes.length} likes</p>}
                <span className="font-bold mr-1">{username} </span> {caption}
            </p>
            {/**comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map(c => 
                        <div key={c.id} className="flex items-center space-x-2 mb-3">
                            <img 
                                className="h-7 rounded-full"
                                src={c.data().userImage} 
                            />
                            <p className="text-sm flex-1"><span className="font-bold">{c.data().username} </span>{c.data().comment}</p>
                            <Moment fromNow className="pr-5 text-xs">
                                {c.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    )}
                </div>
            )}
            {/**input box */}
            {session && 
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7"/>
                    <input 
                        type="text" 
                        placeholder="Add a Comment..."
                        className="border-none flex-1 focus:ring-0 outline-none"
                        value={comment}
                        onChange={({target}) => { setComment(target.value) }}
                    />
                    <button type="submit" disabled={!comment.trim()} onClick={sendComment} className="font-semibold text-blue-400 hover:text-blue-600">Post</button>
                </form>
            }
        </div>
    )
}

export default Post;