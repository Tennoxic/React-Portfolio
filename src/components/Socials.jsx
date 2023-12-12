import githubLogo from './res/github.png'
import instagramLogo from './res/instagram.png'
import linkedinLogo from './res/linkedin.png'

function Socials()
{

    const socialsStyle={
        set:{position:"absolute",marginLeft:"90%"},
        images:{width:"50px"},
        header:{margin:"auto"}
    }
    return(
        <div style={socialsStyle.set}>
            <h3 style={socialsStyle.header}>-Socials-</h3>
            <a href="#"><img src={githubLogo} alt="Error!" style={socialsStyle.images}/></a>
            <a href="#"><img src={linkedinLogo} alt="Error!" style={socialsStyle.images}/></a>
            <a href="#"><img src={instagramLogo} alt="Error!" style={socialsStyle.images}/></a>
        </div>
    )
}

export {Socials}
