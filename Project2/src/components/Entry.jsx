export default function Entry(props) {
    return (
        <>
        <article className="main-container">
            <div className="entry-image-container">
                <img src={props.img.src} className="entry-image" alt={props.img.alt} />
            </div>

            <div className="entry-text">
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google</a>
                <h2>{props.title}</h2>
                <p><b>{props.date}</b></p>
                <p>{props.description}</p>
            </div>
        </article>
        </>
    )
}