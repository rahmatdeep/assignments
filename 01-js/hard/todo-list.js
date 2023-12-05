/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todoArr = [];
  }
  add(todo){
    this.todoArr.push(todo)
  }
  remove(i){
    this.todoArr.splice(i, 1);
  }
  update(index, updatedTodo){
    if(index<this.todoArr.length){ 
      this.todoArr[index]=updatedTodo;
    }
  }
  getAll(){
    return this.todoArr
  }
  get(index){
    if(index<this.todoArr.length){
    return this.todoArr[index]}
    else{
      return null
    }
  }
  clear(){
    this.todoArr = [];
  }
}

module.exports = Todo;


// test('get', () => {
//   

//   expect(todoList.get(0)).toBe('Task 1');
//   expect(todoList.get(2)).toBe('Task 3');
//   expect(todoList.get(3)).toBeNull();
// });


