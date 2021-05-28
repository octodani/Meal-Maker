const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  /*set appetizers(appetizerIn) {
    this._courses.appetizers = appetizers;
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set mains(mainIn) {},
  get mains() {},
  set desserts(dessertIn) {},
  get desserts() {},*/
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const price = appetizer.price + main.price + dessert.price;
    return `You ate ${appetizer.name}, ${main.name} and ${dessert.name}. The bill is ${price} euros.`
  }
};

menu.addDishToCourse('appetizers', 'Salmorejo', 5);
menu.addDishToCourse('mains', 'Paella', 10);
menu.addDishToCourse('desserts', 'Arroz con leche', 3);

menu.addDishToCourse('appetizers', 'Ensalada', 5);
menu.addDishToCourse('mains', 'Carne', 10);
menu.addDishToCourse('desserts', 'Natillas', 3);

menu.addDishToCourse('appetizers', 'Hummus', 5);
menu.addDishToCourse('appetizers', 'Ensaladilla rusa', 10);
menu.addDishToCourse('appetizers', 'Altramuces', 5);

const meal = menu.generateRandomMeal();
console.log(meal);

