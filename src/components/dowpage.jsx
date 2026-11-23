import { getBooks } from "../data/book"


function DowPage() {
    const books = getBooks()
    return <>
    <div className="books">
        {
            books.map(
                (b) => <div className="book">
                    <h1>{b.title}</h1>
                    <h2 className="author">{b.author}</h2>
                    <a download={b.href}>установить</a>
                </div>
            )
        }
    </div>
    </>
}

export default DowPage;