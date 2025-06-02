export default function Entry(props) {
    return (
        <>
        <article className="main-container">
            <div className="entry-image-container">
                <img src={props.entry.img.src} className="entry-image" alt={props.entry.img.alt} />
            </div>

            <div className="entry-text">
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google</a>
                <h2>{props.entry.title}</h2>
                <p><b>{props.entry.dates}</b></p>
                <p>{props.entry.text}</p>
            </div>
        </article>
        </>
    )
}