<template>
  <div class="navigation-mobile">
          <div class="bars"  @click="showNav">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <a href="/" class="logo">
      <img src="~@/assets/logo.png" alt=""/>
    </a>
    </div>
 <aside class="home-redes" :class="{ show: showSidebar }">
    <a href="/" class="logo desktop">
      <img src="~@/assets/logo.png" alt=""/>
    </a>
  
    <div class="home-navigation ">
      <div class="bars desktop"  @click="showNav">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      
      
      <router-link  to="/"   class="nav-link" @click="hideNav">
        <div class="link-box">
          <i class="fas fa-home"></i>
          <p >Home</p>
        </div>
      </router-link>

      <router-link  to="/about" class="nav-link" @click="hideNav">
        <div class="link-box">
          <i class="fas fa-info"></i>
          <p >About</p>
        </div>
      </router-link>

      <router-link  to="/clases" class="nav-link" @click="hideNav">
        <div class="link-box">
          <i class="fas fa-calendar"></i>
          <p >Reserva</p>
        </div>
      </router-link>

      <div class="redes">
        <a href="https://www.instagram.com/escueladesurfyarte/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/locosxelsurf">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="http://laradio.caster.fm/?fbclid=IwAR3n0VlfRMag63PRSeuNLaJPfDbyYkoSIdxsZbmiR7XjUp2N5DXL54MIDkE">
          <i class="fas fa-broadcast-tower"></i>
        </a>
      </div>
    </div>
  </aside> 
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script>
 

export default {

  data: () => {
    return {
      showSidebar: false,
    };
  },
  methods: {
    showNav() {
      this.showSidebar = !this.showSidebar;
    },
    hideNav() {
      this.showSidebar = false;
    },
  },


};
</script>

<style lang="scss">
@import url(~@/assets/sass/_globales.scss);

/** route transition **/
.fade-enter-from {
  opacity: 0;
  transform: translateX(100px) skewX(1deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px) skewX(1deg);
}
.fade-leave-active,
.fade-enter-from {
  transition: all 0.6s ease-in;
}
  .navigation-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background:white;
    
    padding: .1em .6em;
      @media screen and(min-width: 1100px) {
        display: none;
      }
    .logo {

    img {
      max-width: 50px;
    }
  }
    .bars {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 1s ease;
    &.desktop {
  @media screen and(max-width: 1100px) {
    display: none;
  }
}
    .bar {
      width: 1.6em;
      height: 3px;
      margin: .2em 0;
      color: black;
      background: black;
      margin-top: 15%;
      transition: all 1s ease;
      transform-origin: 55%;

    }
  }
  }
  
.home-redes {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 155;
  background-color: white;
  position: absolute;
  transition: all 1s ease;
  @media screen and(max-width:  1100px) {
    transform: translateX(-100%);
  }
  
   .logo {
     padding: 2em 0;
    img {
      max-width: 50px;
    }
  }
    .bars {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 1s ease;
    &.desktop {
  @media screen and(max-width: 1100px) {
    display: none;
  }
}
    .bar {
      width: 1.6em;
      height: 3px;
      margin: .2em 0;
      color: black;
      background: black;
      margin-top: 15%;
      transition: all 1s ease;
      transform-origin: 55%;

    }
  }
  &.show {
    transform: translateX(0%);
    .home-navigation {
     width: 22vw;
     @media screen and(max-width:  1100px) {
          width: 100vw;
        }

    }
    

    .nav-link  {
        background-size:contain;
         
         @media screen and(max-width:  1100px) {
          background: white;
          &:hover {
            background: black;
            color: white; 
            i {
              color: white;
            }
            p {
              color: white;
            }
          }
        }
      p {
        left: 70%;
        opacity: 1;
        transition: all 4s ease;
        @media screen and(max-width:  1100px) {
          left: 0;
        }
      }
    

    }
    .bars {
      transform: rotate(180deg);
    }
    .bar:nth-child(1) {
      -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);

    }
    .bar:nth-child(2) {
      transform: rotate(40deg);
      opacity: 0;
    }
    .bar:nth-child(3){
       -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);


    }
  }
  
  .nav-link p {
    cursor: pointer;
        background: $negro;
    color: $blanco;
    padding: .1em .3em;
    transition: all .6s ease;
    position: absolute;
    opacity: 0;
    left: 80%;
    @media screen and(max-width:  1100px) {
      left: -200%;
      right: 0;
      background: transparent;
      color: black;
    }
  }
  .home-navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    height: 100%;
    width:70px;
    transition: all 1s ease;
    .nav-link {
      width: 100%;
      transition: all 1s ease;
      @media screen and(max-width: 1100px) {
       
        margin: 0 1em;
        width: 100%;
        max-width: 5.5em;
        padding: 1em 0;
        border-radius: 15px;
      }

    }
    .link-box {
      display: flex;
      align-items: center;
      gap: 2em;

      height: 100%;
      width: 100%;
      max-height: 5vh;
      position: relative;
      justify-content: center;
      transition: all 1s ease;
      
      @media screen and(max-width: 1100px) {
      display: block;
      margin: 0 auto;
      text-align: center;
        max-height: unset;
      padding-bottom: 1em;
      overflow: unset;
      }
      i {
        font-size:calc(1rem + .3vw);
    
      }
    }
    i {
      color: #131313;
      
      font-size: 1.2em;
    }

    .redes {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 10%;
      height: 40%;
      padding: 1% 0 25% 0;
      gap: 10%;

      .fa-instagram {
        color: #ff1e00;
      }
      .fa-facebook {
        color: #3b3bd1;
      }
      .fa-broadcast-tower {
        color: orchid;
      }
    }
  }
}
.desktop {
    display: none;
  @media screen and(min-width: 1100px) {
    display: block;
  }
}

</style>
