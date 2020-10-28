import React from "react"
import "./error.style.scss"

import imgError from "../../assets/500error_0.jpg"
//  <reference path='./index.d.ts'/>

 interface URLImageProps {
    // image?: HTMLImageElement;
    imgUrl: string
  
  }

//   interface IntrinsicElements {
//      namespace JSX {
//         interface IntrinsicElements {
//           "img":  HTMLImageElement & {
//             alt: string,
//             src: string,
//             loading?: 'lazy' | 'eager' | 'auto';
//           }
//         }
//       }


const Error: React.FC = () => (
    <div>
        <img className="img__error" src={imgError} alt="error"/>
    </div>
)

export default Error