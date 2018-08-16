class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date();
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {

}
