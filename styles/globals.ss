@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@100;200;300;400&display=swap');


:root{
  --main-color: #2196f3;
  --main-color-alt: #1787e0;
  /* --main-transtion: 0.6s;
  --main-padding-top: 100px;
  --main-padding-bottom: 100px; */
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
a{
  text-decoration: none;
  color: inherit;
}
header{
  position: sticky;
  z-index: 30;
  height:fit-content;
  overflow: hidden;
  top: 0;
  /* background: linear-gradient(to bottom right, #f05a28, #3399ff); */
  background-color:  transparent;
    max-width: 100%;
    box-shadow: 0 0 10px #bbb;
    position: relative;
    -webkit-box-shadow: 0 0 10px #bbb;
    -moz-box-shadow: 0 0 10px #bbb;
    color: red;
    background-color:  #feca04;
    position:fixed;
    width: 100vw;
}
nav{
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  
  /* background-color: #f1f1f1; */
  width: 100%;
  text-align: center;
  position: relative; 
  height: 70px;
  padding-left: 24px;
}

nav::after{
  content: "";
  position: absolute;
  border-radius: 6px;
  
  left: 50%;
  transform: translateX(-50%);  
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 98%;
  z-index: -1;
  height: 95%;
  background:  rgba(255,255,255,.3);
}

.logo{
  position: relative;
  z-index: 9999;
  color: red;
  font-family: monospace;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
}

.menu{
  display: flex;
  position: absolute;
  z-index: 1;
  flex-direction: column;
  justify-content:baseline;
  row-gap: 6px;
  right: 2%;
  cursor: pointer;
  width: 40px;
  height: 60px;
}
.menu div{
  width: 20px;
  height: 100%;
  position: relative;
  margin:5px;

}

.menu span {
  background: red;
    width: 100%;
  height: 0.1em;
  border-radius: 5px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s, width 0.5s, background-color 0.5s;
}

.menu .line-1 {
  width: 50%;
  transform: translate(-100%, -10px);
}

.menu .line-3 {
  width: 50%;
  left: auto;
  right: 0;
  transform: translate(0, 8px);
}

.openmenu .line-1 {
  transform: translate(-50%, -50%) rotate(0);
  transform: translate(-50%, -50%) rotate(45deg);
}

.openmenu .line-2 {
  transform: translate(-50%, -50%);
  opacity: 0;
}

.openmenu .line-3 {
  transform: translate(-50%, -50%) rotate(0);
  transform: translate(-50%, -50%) rotate(-45deg);
}


.nav__menu-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 70px);
  position: fixed;
  top: 70px;
  width: 288px;
  row-gap: 24px;
  right: -100%;
  padding: 24px 16px;
  transition: all 0.8s;
  min-height: 100%;
  /* background: linear-gradient(to bottom right, #f05a28, #3399ff); */
  background-color:transparent;
    width: 100%;
    backdrop-filter:blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100%;
  z-index: -1;
  height: calc(100vh - 60px);
  background:  #feca04;
    
}
.linkContainer{
  height: 100vh;
    width: 100vw;
    
    text-align: center;
    position: relative; 
    top: 0;

}


.link{
  overflow: hidden;
  position: relative;
}

.linkInner {
  opacity: 0;
  position: relative;
  top: 55px;
  animation-delay: 2s;
}

.openmenu .linkInner {
  animation-delay: 2s;
  animation: slideIn 3s forwards;
}



 /* .linkInner{
  opacity: 0;
  position: relative;
  top:55px;
} */

.side{
  content: "";
    position: absolute;
    border-radius: 6px;
    left: 20%;
    transform: translate(-50%); 
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter: blur(20px);
    width: 33.33%;
    z-index: 0;
    height: 85vh;
    background: linear-gradient(135deg, rgba(255,255,255,.2), rgba(255,255,255,0));
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    padding-left: 30px;
  } 

  .itemTitle{
    font-weight: 700;
    font-size: 19px;
  }


.nav__menu-list.active{
  right: 0;
  width: 100vw;
  text-align: center;
}
.link{
  font-size: 50px; 
  line-height: 1.5;
  position: relative;
  transition: all 0.2s;
}

.link:hover{
 font-weight: bold;
}

.center{
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  }
.switchContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  position: absolute;
  right: 90px;
  top: 34%;
  
}

.btn{
  position: relative;
  height: 56px;
  color: #111;
  display: flex;
  align-items: center;
}

.btn input{
  position: relative;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  appearance: none;
  font-family: "Raleway";
  font-weight: bold;
  box-shadow: 1px 6px 11px #000000;
}

.btn input::before,
.btn input::after{
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #111;
  font-family: 'Arvo', serif;
font-family: 'Montserrat', sans-serif;
}

.btn input::before{
  content: "EN";
  left: 40px;
}

.btn input::after{
  content: "AR";
  right: 40px;
}

.btn label{
  z-index: 1;
  position: absolute;
  top: 10px;
  bottom: 10px;
  border-radius: 20px;
}

.btn.btn-1 input{
  transition: .2s -0.1s;
}

.btn.btn-1 input:checked{
  background: red;

}

.btn.btn-1:checked.btn-1:checked::before{
  color: #111;
  transition: color .5s .2s;
}

.btn.btn-1:checked.btn-1:checked::after{
  color: #111;
  transition: color .5s .2s;
}

.btn.btn-1 input:checked + label{
  left: 10px;
  right: 100px;
  background: #fff;
  transition: left .5s, right  .4s .2s;
}

.btn.btn-1 input:not(:checked){
  background: #fff;
  transition: background .5s -0.1s;
}

.btn.btn-1 input:not(:checked)::before{
  color: #111;
  transform: color .5s;
}

.btn.btn-1 input:not(:checked)::after{
  color: #1e1e1e;
  transform: color .5s;
}

.btn.btn-1 input:not(:checked) + label{
  left: 100px;
  right: 10px;
  background: red;
  transition: left .4s .2s, right .5s, background .35s -0.1s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    top:55px;
  }
  to {
    opacity: 1;
    top:0;
  }
}

@media screen and (max-width: 840px) {
  .linkContainer{
    flex-direction: column;
  }
  .side{
    display: none;
  }
  .switchContainer{
    position: static;
    
  }
  .nav__menu-list{
    padding: 0;
  }
}










.slider {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.5s ease;
}

@media screen and (min-width: 600px) {
  .slide img {
    width: 100%;
    height: 100%;
  }
}

.slide img {
  width: 100%;
  height: 100vh;
}

.current {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}

.content {
  position: absolute;
  top: 23rem;
  left: 5rem;
  opacity: 0;
  width: 50%;
  color: #fff;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.3);
  animation: slide-up 1s ease 0.5s;
   animation-delay: 1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}

@keyframes slide-up {
  0% {
    visibility: visible;
    top: 23rem;
  }
  100% {
    visibility: visible;
    top: 17rem;
  }
}

@media screen and (max-width: 600px) {
  .content {
    width: 80%;
    transform: translateX(-50%);
    left: 50%;
  }
}

.content > * {
  color: #fff;
  margin-bottom: 1rem;
}

.current .content {
  opacity: 1;
  transition: all 0.5s ease;
}

.arrow {
  border: 2px solid white;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
}
.arrow:hover {
  background-color: #fff;
  color: #777;
}

.next {
  top: 35%;
  right: 1.5rem;
}
.prev {
  top: 35%;
  left: 1.5rem;
}

hr {
  height: 2px;
  background: white;
  width: 50%;
}

















/* start landing */
.landing{
  position: relative;
  overflow: hidden;
  background-color: #ffcf00;
  height: 100vh;
  /* background-image: url(/imgs/photo_2023-07-06_19-43-44.jpg);
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;*/
  min-height: 700px;
} 
/* .landing::before{
  content: "";
  position: absolute;
  left: 0;
  top:-40px;
  height: 100%;
  width: 100%;
  background-color: #ececec;
  z-index: -1;
  transform: skewY(-6deg);
  transform-origin: top left;
} */
.landing::before{
  content: url(/imgs/Plane.png);
  position: absolute;
  bottom: -100px;
    left: -330px;
}
.landing::after{
  content: url(../public/imgs/Ship.png);
  position: absolute;
  top: -55px;
  right: -293px;
  z-index: 0;
}
.landing .container{
  height: 100vh;
  min-height:  700px;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  padding-bottom: 120px;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  text-align: center;
}
/* .landing .container::before{
  content: url(/imgs/Truck.png);
  position: absolute;
  bottom: -20px;
  right: -186px;
} */

.landing .container::after{
  content: url(/imgs/Man\ Truck.png);
  position: absolute;
  bottom: 0px;
  /* right: -57px; */
  right: -88px;
}

/* .landing .text{
  flex: 1;
} */
.Typewriter__cursor{
  color: #feca04;
  z-index: 10;
}
.p{
  color: #feca04;
  z-index: 10;
}
@media (max-width: 991px) {
  .landing .text{
      text-align: center;
  }
}
.landing .text h1{
  font-size: 40px;
  margin: 0;
  letter-spacing: -2px;
  color: black;
}
@media (max-width: 767px){
  /* .landing{
    background-image: url(/imgs/photo_2023-07-06_20-13-18.jpg);
    background-position: center;
  } */
  .landing .text h1{
      font-size: 28px;
  }
  /* .landing .container::before{
    right: -293px;
  } */
  
  .landing .container::after{
    right: -189px;
  }
}
.landing .text p{
  font-size: 24px;
  line-height: 1.7;
  margin: 5px 0 0;
  color: red;
  max-width: 500px;
}



@media (max-width: 991px){
  .landing .text p{
      margin: 10px auto;
  }
}
@media (max-width: 767px){
  .landing .text p{
      font-size: 18px;
  }
}


.landing .go-down{
  color: #1787e0;
  position: absolute;
  bottom: 30px;
  width: 30px;
  height: 30px;
  left: 50%;
  transform: translateX(-50%);
  transition: .6s;
}
.landing .go-down .icon{
  animation: bouncing 2s infinite;
  color: #feca04;
}
@keyframes bouncing{
  0%, 10%, 20%, 50%, 80%, 100%{
      transform: translateY(0);
  }
  40%, 60%{
      transform: translateY(-15px);
  }
}

/* .circle{
  position: absolute;
  width: 100vw;
  height: 60vh;
  bottom: 0;
  transform: translateY(50%);
  background-color: red;
  border-radius: 50%;
} */
/* end landing */
























/* Start Loading */
/* @import url(https://fonts.googleapis.com/css?family=Open+Sans:300);

body {
  background-color: #f1c40f;
  overflow: hidden;
}

.load h1 {
  position: absolute;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  left: 50%;
  top: 58%;
  margin-left: -20px;
}

.load .body {
  position: absolute;
  top: 50%;

  margin-left: -50px;
  left: 50%;
  animation: speeder .4s linear infinite;

  > span {
    height: 5px;
    width: 35px;
    background: #000;
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
  }
}

.base {
  span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #000;
    border-bottom: 6px solid transparent;

    &:before {
      content: "";
      height: 22px;
      width: 22px;
      border-radius: 50%;
      background: #000;
      position: absolute;
      right: -110px;
      top: -16px;
    }

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 0 solid transparent;
      border-right: 55px solid #000;
      border-bottom: 16px solid transparent;
      top: -16px;
      right: -98px;
    }
  }
}

.face {
  position: absolute;
  height: 12px;
  width: 20px;
  background: #000;
  border-radius: 20px 20px 0 0;
  transform: rotate(-40deg);
  right: -125px;
  top: -15px;

  &:after {
    content: "";
    height: 12px;
    width: 12px;
    background: #000;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }
}

.load .body > span > span:nth-child(1),
.load .body > span > span:nth-child(2),
.load .body > span > span:nth-child(3),
.load .body > span > span:nth-child(4) {
  width: 30px;
  height: 1px;
  background: #000;
  position: absolute;
  animation: fazer1 .2s linear infinite;
}

.load.body > span > span:nth-child(2) {
  top: 3px;
  animation: fazer2 .4s linear infinite;
}

.load .body > span > span:nth-child(3) {
  top: 1px;
  animation: fazer3 .4s linear infinite;
  animation-delay: -1s;
}

.load .body > span > span:nth-child(4) {
  top: 4px;
  animation: fazer4 1s linear infinite;
  animation-delay: -1s;
}

@keyframes fazer1 {
  0% {
    left: 0;
  }
  100% {
    left: -80px;
    opacity: 0;
  }
}

@keyframes fazer2 {
  0% {
    left: 0;
  }
  100% {
    left: -100px;
    opacity: 0;
  }
}

@keyframes fazer3 {
  0% {
    left: 0;
  }
  100% {
    left: -50px;
    opacity: 0;
  }
}

@keyframes fazer4 {
  0% {
    left: 0;
  }
  100% {
    left: -150px;
    opacity: 0;
  }
}

@keyframes speeder {
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.longfazers {
  position: absolute;
  width: 100%;
  height: 100%;

  span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: #000;

    &:nth-child(1) {
      top: 20%;
      animation: lf .6s linear infinite;
      animation-delay: -5s;
    }

    &:nth-child(2) {
      top: 40%;
      animation: lf2 .8s linear infinite;
      animation-delay: -1s;
    }

    &:nth-child(3) {
      top: 60%;
      animation: lf3 .6s linear infinite;
    }

    &:nth-child(4) {
      top: 80%;
      animation: lf4 .5s linear infinite;
      animation-delay: -3s;
    }
  }
}

@keyframes lf {
  0% {
    left: 200%;
  }
  100% {
    left: -200%;
    opacity: 0;
  }
}
@keyframes lf2 {
  0% {
    left: 200%;
  }
  100% {
    left: -200%;
    opacity: 0;
  }
}
@keyframes lf3 {
  0% {
    left: 200%;
  }
  100% {
    left: -100%;
    opacity: 0;
  }
}
@keyframes lf4 {
  0% {
    left: 200%;
  }
  100% {
    left: -100%;
    opacity: 0;
  }
} */

/* End Loading */