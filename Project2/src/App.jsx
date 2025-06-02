import Entry from './components/Entry.jsx';
import Header from './components/Header.jsx'
import data from './data.js';

export default function App() {
    const dataEntry = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
                // Uncomment the following lines if you want to pass individual properties
                // img={entry.img}
                // country={entry.country}
                // title={entry.title}
                // date={entry.dates}
                // googleMapsLink={entry.googleMapsLink}
                // description={entry.text}
            />
        )
    })

    return (
        <>
        <Header />
        <main className="container">
            {dataEntry}
        </main>
        </>
    );
}
