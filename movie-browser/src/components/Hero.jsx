import "../styles/Hero.scss"

export function Hero({ text, backdrop }) {
    return (
        <header className="hero-container hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}>
            <h1 className="hero-text">{text}</h1>
        </header>
    )
}