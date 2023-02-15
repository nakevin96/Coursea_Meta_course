const finalProj = require('./finalProject.js');

test('getDiscount(2,true) 결과', () => {
  const spy = jest.spyOn(console, 'log');
  finalProj.getDiscount(true, 2);
  expect(spy).toHaveBeenCalledWith('Dish: Italian pasta Price: $ 11.46');
  expect(spy).toHaveBeenCalledWith('Dish: Rice with veggies Price: $ 10.38');
  expect(spy).toHaveBeenCalledWith('Dish: Chicken with potatoes Price: $ 18.66');
  expect(spy).toHaveBeenCalledWith('Dish: Vegetarian Pizza Price: $ 7.74');
  expect(spy).toHaveBeenCalledWith('Discount is: $ 5');
  spy.mockRestore();
});