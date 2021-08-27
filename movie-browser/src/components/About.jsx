import { Hero } from "./Hero";
import "../styles/About.scss"

export function About() {
    return (
        <div>
            <Hero text="About Us" />
            <div className="about-container">
                <div className="about-intro">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat turpis et tellus molestie euismod. Vestibulum tincidunt, libero eu pellentesque ultrices, urna nisi accumsan nisi, ac malesuada tortor ligula eu odio. Etiam ut enim ex. Fusce sed sodales eros. Vivamus at mattis neque. Mauris porttitor commodo est vitae viverra. Etiam vitae lorem ac est luctus mollis.
                    </p>
                </div>
            </div>
        </div>
    )
}