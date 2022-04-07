import "./watch.scss"

import { ArrowBackOutlined } from "@material-ui/icons"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>

            <iframe className="video"  src="https://www.youtube.com/embed/x7Krla_UxRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}
