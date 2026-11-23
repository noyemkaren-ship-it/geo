import { getAnother } from "../data/another";

export default function Another() {
    const data = getAnother()
    return <>
    <div class="books">
        {
            data.map((a) => <div class="book">
                <h1>{a.title}</h1>
                <h2 class="author">{a.details}</h2>
                <a href={a.href}>Сыллка</a>
            </div>)
        }
    </div>
    </>
}


