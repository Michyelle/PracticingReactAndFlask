import Entry from './components/Entry.jsx';
import Header from './components/Header.jsx'

export default function App() {
    return (
        <>
        <Header />
        <Entry 
            img={{src: "https://scrimba.com/links/travel-journal-japan-image-url", alt: "mount fuji"}}
            country="Japan"
            title="Mount Fuji"
            date="12 Jan, 2021 - 24 Jan, 2021"
            googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. Mount Fuji is a UNESCO World Heritage Site and is known for its iconic symmetrical cone shape."
        />
        <Entry 
            img={{src: "https://scrimba.com/links/travel-journal-japan-image-url", alt: "mount fuji"}}
            country="Michelle"
            title="Michelle Land"
            date="30 Mar, 2002 - Present"
            googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. Mount Fuji is a UNESCO World Heritage Site and is known for its iconic symmetrical cone shape."
        />
        </>
    );
}
