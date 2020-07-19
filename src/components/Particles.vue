<template>
  <div id='particles-js'></div>
</template>

<script>

export default {
  name: 'ParticlesJS',

  mounted () {
    require('@/assets/plugins/particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      particlesJS('particles-js', {
        "particles": {
    "number": {
      "value": 7,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
            "type": ["image", "image2", "image3"],
            "random": true,
            // "type": "image",
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": require('../assets/img/header/strawberry.png')
            },
            "image2": {
              "src": require('../assets/img/header/strawberry1.png')
            },
            "image3": {
              "src": require('../assets/img/header/strawberry2.png')
            },
          },
    "opacity": {
      "value": 1,
      "random": false,
    },
    "size": {
      "value": 50,
      "random": false,
      
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 30,
        "size": 75,
        "opacity": 0,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
      })
    }
  }

}
</script>

<style lang="sass">
  #particles-js 
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 0
</style>