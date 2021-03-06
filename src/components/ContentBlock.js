import React from 'react';
import Fade from "react-reveal/Fade";


// Styles, Fonts, Images
import "../styles/components/content-block.scss";
import LogoMark from "../assets/images/icons/content-block.svg";

const ContentBlock = (props) => {
    return (
        <Fade>
            <div className="content-block">
                <div className="content-block__heading">
                    <img src={LogoMark} alt="" />
                    <h3>{props.heading}</h3>
                </div>
                <div className="content-block__text">
                    {props.children}
                </div>
            </div>
        </Fade>
    )
}

export default ContentBlock;

