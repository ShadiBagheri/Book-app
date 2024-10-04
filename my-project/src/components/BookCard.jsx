import { useState } from "react";
//Icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {data} from "autoprefixer";

const BookCard = ({ data, handleLikedList }) => {
    const { title, image, author, language, pages } = data;
    const [like, setLike] = useState(false);

    const likeHandler = () => {
        handleLikedList(data, like);
        setLike(like => !like);
    }

    return(
        <div className="container flex flex-col mb-5 bg-gray-100 rounded-md">
            <div className="flex justify-between">
                <div className="flex p-5">
                    <img className="w-20 h-24 rounded-md" src={image} alt={title}/>
                    <div className="ml-8">
                        <h3 className="text-lg text-black font-bold">{title}</h3>
                        <p className="my-2 text-sm text-black font-bold">{author}</p>
                        <div className="flex mt-4 gap-4">
                            <span className="text-xs text-gray-400">{language}</span>
                            <span className="text-xs text-gray-400">{pages} Pages</span>
                        </div>
                    </div>
                </div>
                <button className="me-5" onClick={likeHandler}>
                    {like ? <FaHeart className="size-6 fill-red-500"/> : <FaRegHeart className="size-6"/> }
                </button>
            </div>
        </div>
    )
}

export default BookCard