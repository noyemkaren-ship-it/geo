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
                    <a href={b.href} download={`Геометрия-7-9_Погорелов.pdf`}>установить</a>
                </div>
            )
        }
    </div>
    </>
}

export default DowPage;