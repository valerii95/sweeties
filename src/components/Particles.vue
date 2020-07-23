<template>
  <div :id="componentId" class="particles"></div>
</template>

<script>

export default {
  name: 'ParticlesJS',
  props: {
    componentId: {
      default: 'particles-js',
      type: String
    },
    quantity: {
      default: 5,
      type: Number
    },
    images: {
      default: () => ['header/strawberry.png', 'header/strawberry1.png', 'header/strawberry2.png'],
      type: Array
    },
    onHover: {
      default: false,
      type: Boolean
    },
    onHoverEvent: {
      default: 'repulse',
      type: String
    },
    onClick: {
      default: false,
      type: Boolean
    },
    onClickEvent: {
      default: 'push',
      type: String
    },
    randomSize: {
      default: false,
      type: Boolean
    }
  },
  mounted () {
    require('@/assets/plugins/particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      particlesJS(this.componentId, {
        "particles": {
          "number": {
            "value": this.quantity,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": ["image", "image2", "image3"],
            "random": false,
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": require(`../assets/img/${this.images[0] || ''}`),
            },
            "image2": {
              "src": require(`../assets/img/${this.images[1] || ''}`),
            },
            "image3": {
              "src": require(`../assets/img/${this.images[2] || ''}`),
            },
          },
          "opacity": {
            "value": 1,
            "random": false,
          },
          "size": {
            "value": 50,
            "random": this.randomSize,
            
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
            "out_mode": "bounce",
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
              "enable": this.onHover,
              "mode": this.onHoverEvent
            },
            "onclick": {
              "enable": this.onClick,
              "mode": this.onClickEvent
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
  .particles 
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 0
</style>
