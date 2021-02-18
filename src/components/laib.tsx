import React from "react";
import "./laib.css"

const Laib = (props: any) => {
    const [book, setBook] = React.useState("");
    const [auther, setAuther] = React.useState("");

    const { books, setRefresh } = props;

    if (!books.length) {
        return <h1 className="loading">Loading...</h1>
    }

    function Add() {
        if (book === "" || auther === "") {
            return false;
        }
        fetch("/api/books/add", {
            method: "POST",
            body: JSON.stringify({ auther, book })
        })
            .then((res: any) => res.json())
            .then((data: any) => {
                console.log(data);
                setRefresh(Math.random());
                setAuther("");
                setBook("");
            });

    }

    // function edit() {
    //     fetch("/api/books/5235",
    //         {
    //             method: "POST",
    //             // body: JSON.stringify({auther, book})
    //         }
    //     )
    //         .then((res: any) => res.json())
    //         .then((data: any) => {
    //             // console.log(data);
    //             setRefresh(Math.random());

    //         });

    // }

    return (
        <div className="librarie">
            <h1>Available Books</h1>
            <ul>
                {
                    books.map((item: any, ind: number) => {
                        return <li>Books: {item.book}, <span>Auther: {item.auther}</span></li>
                    })
                }
            </ul>
            <input type="text" placeholder="Auther" value={auther} onChange={(e) => setAuther(e.target.value)} />
            <input type="text" placeholder="Book" value={book} onChange={(e) => setBook(e.target.value)} />
            <button onClick={Add}>Add to Librarie</button>

            {/* <button onClick={edit}>edit</button> */}
        </div>
    )
};

export default Laib;
