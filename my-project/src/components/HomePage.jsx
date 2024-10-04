import { useState } from "react";
import { books as bookData } from "../constants/mockData.js";
//Components
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";
import Search from "./Search.jsx";


const HomePage = () => {
    const [books, setBooks] = useState(bookData);
    const [liked, setLiked] = useState([]);
    const [search, setSearch] = useState([]);

    const handleLikedList = (book ,status) => {
        if (status) {
            const newLikedList = liked.filter(item => item.id !== book.id);
            setLiked(newLikedList);
        }else{
            setLiked(liked => [...liked, book]);
        }
    }

    const searchHandler = () => {
        if (search) {
            const newBooks = bookData.filter(book =>
                book.title.toLowerCase().includes(search)
                );
            setBooks(newBooks);
        } else {
            setBooks(bookData);
        }
    }

    return(
        <>
            <div className="flex w-3/5 mx-auto my-10 bg-red">
                <Search search={search} setSearch={setSearch} searchHandler={searchHandler}/>
            </div>
            <div className="flex w-3/5 h-full mx-auto my-50px px-10 py-20 rounded-lg bg-white">
                <div className="flex flex-col w-screen me-5">
                    {books.map(book => (
                        <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
                    ))}
                </div>
                {!!liked.length &&
                    <div className="container flex flex-col w-4/5 h-fit mx-auto p-5 rounded-md bg-gray-100">
                        <h4 className="py-5 text-md font-bold text-black">Favorites List</h4>
                        {liked.map(book =>
                            <SideCard key={book.id} data={book}/>)}
                    </div>}
            </div>
        </>
    )
}

export default HomePage;