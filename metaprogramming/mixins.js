const InspectMixin = BaseClass => class extends BaseClass {
  inspect() {
    return `« ${this.toString()} »`
  }
}

module.exports = { InspectMixin }