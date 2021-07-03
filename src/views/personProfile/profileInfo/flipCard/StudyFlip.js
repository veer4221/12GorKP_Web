/* eslint-disable */

import { useRef, useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import study1 from "../../../../assets/img/study1.png"
// import study2 from "../../../../assets/img/study2.png"
const FlippyStyle = {
    width: '100%',
    height: '200px',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center'
  }

import study2 from "../../../../assets/img/ulogo.png"
 function StudyFlip() {
  const ref = useRef();
  const [isFlif,setIfFlif] = useState(false);
//   setInterval(() => {
//     setIfFlif(!isFlif)
//   }, 5000);

  return (

    <Flippy
    style={FlippyStyle}
      flipOnHover={false} // default false
    //   flipOnClick={true}
    //   isFlipped={isFlif}// default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
    //   style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide  >
    {/* <img src={study1}  height="200px" width="200px"/> */}

    <hr></hr>
    <MenuBookIcon fontSizeLarge/>
    <p>Study</p>
    <hr></hr>

    <br></br>

    </FrontSide >
    <BackSide >

    <img src={study2}  height="200px" width="100px"/>


    </BackSide>
  </Flippy>
  )
}

export default StudyFlip;