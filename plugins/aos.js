import Vue from 'vue'
import AOS from "aos";
import "aos/dist/aos.css";

// export default ({ app }) => {
//   app.AOS = new AOS.init({ 
//     disable: false,
//     // offset: 200,
//     duration: 500,
//     easing: 'ease-in-out-cubic',
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false,
//     // anchorPlacement: 'top-bottom'
//   }); // or any other options you need
// };

class AosPlugin {
  config = {
    disable: false,
    // offset: 200,
    duration: 500,
    easing: 'ease-in-out-cubic',
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true,
  }

  install(Vue) {
    AOS.init(this.config)

    Vue.mixin({
      updated() {
        this.$nextTick(function () {
          AOS.refreshHard() // This is needed to avoid the un-animate aos effect
        })
      }
    })
  }
}

Vue.use(new AosPlugin())