import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export function Header() {
    return (
        <>
            <header className='header'>
                <img src='/src/assets/react.svg' className='nav-logo' alt='logo pic' />
                <nav>
                    <ul className='nav-items'>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

