import MyClass from '../src/MyClass';
describe('MyTest', () => {
  test('create', () => {
   const myClass = new MyClass();
   expect(myClass).toBeDefined();
   expect(myClass.log()).toBeTruthy();
  });
});

