import { Hero } from "./Hero";
import "../styles/Home.scss"

export function Home() {
    return (
        <div>
            <Hero text="Welcome to Movie Browser" />
            <div className="home-container">
                <div className="home-intro">
                    <p>
                        Quisque accumsan pretium dolor vel blandit. Nam id facilisis magna. Donec interdum, leo id fermentum varius, quam ipsum feugiat sem, ut faucibus turpis massa in lorem. Suspendisse sed convallis felis, sit amet iaculis neque. Mauris sagittis imperdiet libero id scelerisque. Donec pellentesque, metus in accumsan consectetur, nisi est molestie tellus, ac fermentum diam lorem sit amet lectus. Nunc viverra risus mattis mattis tristique. Mauris dictum lacinia mi, ac tincidunt libero rhoncus id. Pellentesque ac finibus leo. Etiam facilisis, sem vel tincidunt pulvinar, nisl diam pretium purus, eu pulvinar mauris nisl non risus. Nulla dignissim facilisis tristique. Pellentesque tellus lectus, ultrices eu metus ut, finibus sodales arcu. Mauris tincidunt facilisis erat, ut luctus nunc lacinia sit amet. Vivamus mollis arcu sodales, malesuada augue vel, maximus justo.
                    </p>
                </div>
            </div>
        </div>
    )
}