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
                        
                        <div className="f-content">
                            <p 
                                className="f-detail" 
                                dangerouslySetInnerHTML={{ __html: f.formula }} 
                            />
                            {f.explanation && (
                                <p 
                                    className="f-explanation" 
                                    dangerouslySetInnerHTML={{ __html: f.explanation }} 
                                />
                            )}
                        </div>
                    </details>
                </div>
            ))}
        </div>
    )
}

export default Form;