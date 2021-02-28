import React from 'react'
import { Spring } from 'react-spring/renderprops'

const MountainCss = () => {
    return(
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            >
            {props => <div className={`${props} mountain-container`}>
                <div className="mountain1">
                    <div className="snow1" />
                </div>
                <div className="mountain2">
                    <div className="snow2" />
                </div>
                <div className="mountain3">
                    <div className="snow3" />
                </div>
            </div>}
        </Spring>
    )
}
export default MountainCss