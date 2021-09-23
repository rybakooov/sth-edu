export default () => ({
  data () {
    return {
      runningTick: false
    }
  },
  methods: {
    tick () {},
    runTick (name) {
      if (!this.runningTick) {
        this.runningTick = true
        this.$raf.addCallback(this.tick, name)
      }
    },
    stopTick () {
      if (this.runningTick) {
        this.runningTick = false
        this.$raf.removeCallback(this.tick)
      }
    }
  },
  beforeDestroy() {
    this.stopTick()
  }
})
