import React from "react";
import BoostrapCard from "react-bootstrap/Card";
const CardB = (props) => {
    return <div className="col-4">
            <BoostrapCard>
                <div className="d-flex overflow-hidden img-card justify-content-center aling-item-center">
                <BoostrapCard.Img variant="top" src={props.url}/>
                </div>
                <BoostrapCard.Body>
                    <BoostrapCard.Title>{props.titulo}</BoostrapCard.Title>
                    <BoostrapCard.Text>{props.descripcion}</BoostrapCard.Text>
                    <div>
                    <BoostrapCard.Link className="btn btn-primary" href={props.LinkWiki} target={"_blank"}>{props.botonWiki}</BoostrapCard.Link>
                    <BoostrapCard.Link className="btn btn-secondary" href={props.LinkVideo} target={"_blank"}>{props.botonVideo}</BoostrapCard.Link>
                    </div>
                </BoostrapCard.Body>
            </BoostrapCard>
    </div>
}
export default CardB