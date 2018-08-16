class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1);
    return endDate.getFullYear() - this.startDate.getFullYear();
  }
}

class Route {

}
