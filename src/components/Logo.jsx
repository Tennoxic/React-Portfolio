import useLogo from "./res/Logo.png"

function Logo()
{
    const logoStyle={
        set:{width:"7%",position:"absolute"}
      }

    return(
        <img src={useLogo} alt="Error!" style={logoStyle.set}/>
    )
}

export {Logo}