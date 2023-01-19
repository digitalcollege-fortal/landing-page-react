export default function Section2() {
    return (
        <section>
            <div>
                IMAGEM
            </div>

            <div>
                <Card icon="celular" title="Device mockups" content="Bla bla bla"/>
                <Card icon="presente" title="Free to use" content="Bla bla bla"/>

            </div>
            <div>

            </div>
        </section>
    )
}

function Card(props) {
    return (
        <div>
            <i>{props.icon}</i> <br/>
            <strong>{props.title}</strong>
            <p>{props.content}</p>
        </div>
    )    
}