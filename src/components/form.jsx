import { getForms } from "../data/form";

function Form() {
    const forms = getForms();

    return (
        <div className="forms">
            {forms.map((f) => (
                <div className="form" key={f.id}>
                    <h1>{f.title}</h1>
                    <details className="form-details">
                        <summary className="detail-sum-f">узнать</summary>
                        <p 
                            className="f-detail" 
                            dangerouslySetInnerHTML={{ __html: f.formula }} 
                        />
                    </details>
                </div>
            ))}
        </div>
    )
}

export default Form;