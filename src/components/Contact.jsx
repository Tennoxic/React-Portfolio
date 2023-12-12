function Contact()
{
    const contactContainer=[
        {platformName:"Github",linkOfPlatform:"#"},
        {platformName:"LinkedIn",linkOfPlatform:"#"},
        {platformName:"Instagram",linkOfPlatform:"#"},
        {platformName:"Youtube",linkOfPlatform:"#"},
        {platformName:"Twitch",linkOfPlatform:"#"}
    ]
    return (
        <div>
        <div className="row">
            <div className="col-md-3 align-middle"><h1>Contact..: </h1></div>
            <div style={{border:"1px solid black",height:"270px"}}></div>
            <div className="col-md-8">
                <ul className="list-group">
                    {contactContainer.map(item=><li key={item.id} className="list-group-item list-group-item-action"><a href={item.linkOfPlatform}>{item.platformName}</a></li>)}
                </ul>
            </div>
        </div>
        <hr />
    </div>
    )
}

export {Contact}