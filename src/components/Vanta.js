import React from 'react';
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min.js';

// Styles
import "../styles/components/vanta.scss";

class Vanta extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    // componentDidMount() {
    //     this.vantaEffect = NET({
    //         el: this.vantaRef.current
    //     })
    // }
    componentDidMount() {
        this.vantaEffect = NET({
            el: this.vantaRef.current,
            THREE: THREE, // use a custom THREE when initializing
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 0.4,
            color: 0x99a1a6,
            backgroundColor: 0x1b1d1f,
            maxDistance: 18.00,
            points: 6.00,
            spacing: 20.00
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return (
            <div className="vanta">
                <div ref={this.vantaRef} className="vanta__inner">
                </div >
            </div >
        )
    }
}

export default Vanta