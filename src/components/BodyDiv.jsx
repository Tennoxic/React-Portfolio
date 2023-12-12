import { TripleUserName } from "./tripleUserName"
import { SendName } from "./tripleUserName"

function BodyDiv()
{
    const bodyDivStyle={
        yourImage:{borderRadius:"50%"}
    }
    return(
        <div>
            <div className="row">
                <div className="col-md-4"><img src="https://source.unsplash.com/random/300x300" alt="Error!" style={bodyDivStyle.yourImage}/></div>
                <div className="col-md-8">
                <h3><SendName/></h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis repellat similique quas provident voluptate ab quos? Magni quisquam saepe voluptatibus fugit? Voluptates beatae repudiandae quibusdam nemo doloremque maiores velit?
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate eaque atque facere impedit natus iure eos quam labore modi numquam eius dolorum consectetur nobis, perspiciatis ipsum ipsa qui dolor?
                </div>
            </div>
            <hr />
        </div>
    )
}

export {BodyDiv}