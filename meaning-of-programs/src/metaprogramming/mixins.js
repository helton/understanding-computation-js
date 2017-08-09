const InspectMixin = BaseClass => class extends BaseClass {
  inspect () {
    return `« ${this.toString()} »`
  }
}

export { InspectMixin }
