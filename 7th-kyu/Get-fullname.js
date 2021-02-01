class Dinglemouse {
  constructor(firstName, lastName) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.getFullName = this.getFullName.bind(this));
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
