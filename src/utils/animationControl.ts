interface controlSet {
  stop: boolean
  pause: boolean
  action: (key: string) => void
}

const controller: controlSet = {
  stop: false,
  pause: false,
  action: function (key) {
    switch (key) {
      case 'stop': this.stop = true
        break;
      case 'pause': this.pause = !this.pause
        break;
      case 'reset': {
        this.stop = false
        this.pause = false
      }
        break;
      /*    default:
                    break; */
    }
  }
}

export default controller
