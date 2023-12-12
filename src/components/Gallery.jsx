function Gallery()
{

    const galleryStyle={
        galleryImages:{borderRadius:"5px",margin:"auto",width:"200px"},
        verticalHR:{border:"1px solid black",height:"400px"}
    }
    return(
        <div>
        <h3>-My Gallery-</h3>
        <div className="row">
            <div className="col-md-3"><img src="https://picsum.photos/300/300?random=1" alt="Error!" style={galleryStyle.galleryImages}/><div className="caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quam laudantium repellat esse voluptas impedit voluptatibus earum ex beatae, tempore delectus ut reprehenderit laborum vitae blanditiis nobis possimus in. Ipsa.</div></div>
            <div style={galleryStyle.verticalHR}></div>
            <div className="col-md-3"><img src="https://picsum.photos/300/300?random=2" alt="Error!" style={galleryStyle.galleryImages}/><div className="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi culpa deleniti sint nihil voluptatum necessitatibus quam. Voluptatibus, inventore, fugiat illo alias eligendi eos quae, voluptas sequi assumenda natus qui!</div></div>
            <div style={galleryStyle.verticalHR}></div>
            <div className="col-md-3"><img src="https://picsum.photos/300/300?random=3" alt="Error!" style={galleryStyle.galleryImages}/><div className="caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dicta eos nihil, deleniti illum necessitatibus nobis consequuntur fugit veritatis id corporis possimus! Suscipit quis alias vitae laboriosam dolor! Ipsa, dolorum?</div></div>
        </div>
        <hr />
        </div>
    )
}

export {Gallery}