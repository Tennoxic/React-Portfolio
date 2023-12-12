var name="User Name";
function TripleUserName()
{
    const userName=[
        {sendName:name,class:"opacity100"},
        {sendName:name,class:"opacity60"},
        {sendName:name,class:"opacity35"}
    ]
    return(
        <div className="center">
        <ul className="noListStyle">
            {userName.map(item=><li key={item.id}><h3 className={item.class}>{item.sendName}</h3></li>)}
        </ul>
        </div>
    )
}

function SendName()
{
    return(<p>{name}</p>)
}

export {TripleUserName}
export {SendName}