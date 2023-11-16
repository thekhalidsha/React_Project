import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoInput: "", //Temporary state for saving each keyinput into input tag
      TodoList: [], // Object state for saving the todo item in object array.
      QuoteData: '', // State For Storing Quote and author data as object array
    };
  }

  // For Returning FontAwesome Icon as per className
  FIcon = (value) => {
    return (
      <i className={`fas ${value}`}></i>
    )
  }

  // For Saving Each key Input to a Temporary state.
  ContentBuffer = (e) => {
    this.setState(() => ({ TodoInput: e.target.value }))
  }

  // Adding the Temporary state to a Object State 
  AddTodo = () => {
    var TempArray = this.state.TodoList;
    var TempInput = this.state.TodoInput;
    if (TempInput === "" || TempInput.trim() === "") { return '' }
    TempArray.push({ title: TempInput, status: true });
    this.setState(() => ({ TodoList: TempArray }));
    document.getElementById('inputBox').value = '';
  }

  // For Listening the Keyboard Input incase user clicks ENTER Button for Submitting Todo.
  KeyCode = (e) => {
    if (e.keyCode === 13) {
      document.getElementById('TodoButton').click();
    }
  }

  // For Deleting Object item from Object state using index position key.
  TodoDelete = (id) => {
    var TempArray = this.state.TodoList;
    TempArray.splice(id, 1);
    this.setState(() => ({ TodoList: TempArray }))
  }

  // A Object state value which can be used to determine whether the todo item is done or not
  TodoStatus = (id) => {
    var TempArray = this.state.TodoList;
    (TempArray[id].status ? TempArray[id].status = false : TempArray[id].status = true)
    this.setState(() => ({ TodoList: TempArray }))
  }

  QuoteGen = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.quotable.io/quotes/random');
    xhr.onload = () => {
      try {
        const responseData = JSON.parse(xhr.response);
        this.setState(() => ({
          QuoteData: {
            content: responseData[0].content,
            author: responseData[0].author,
          },
        }));
      } catch (error) {
        console.error('Error parsing JSON:', error);
        this.setState(() => ({
          QuoteData: {
            content: "Not every wise person achieve success, not all successfull peoples are wise.",
            author: 'Mohammed Khalid',
          },
        }));
      }
    };
    xhr.send();
  }

  componentDidMount() {
    this.QuoteGen();
  }
  render() {
    return (
      <section className='min-h-Home bg-dark text-white p-2 pb-2'>
        <center className='mb-3'><h2><i>Random Quote & To-Do List</i></h2></center>
        <div className="t_main">
          <div className="t_first">
            <q>{this.state.QuoteData.content}</q>
            <p>~ {this.state.QuoteData.author}</p>
          </div>
          <div className="t_second text-dark">
            <h3>To-Do List <i className="fa-solid fa-calendar-check"></i></h3>
            <div className="to_do">
              <div className="boxed">
                <input id='inputBox' type="text" placeholder='Add your Task' onKeyDown={this.KeyCode} onChange={this.ContentBuffer} />
                <button id='TodoButton' onClick={this.AddTodo}>{this.FIcon('fa-regular fa-pen-to-square')}</button>
              </div>
              <div className="listed py-2 mt-2">
                <ul className='ul'>
                  {
                    (this.state.TodoList.length <= 0 ? <center><h5 className='mt-5'>No Records to Show</h5></center>
                      :
                      this.state.TodoList.map((item, key) => {
                        return (
                          <li key={key}>
                            <span onClick={() => { this.TodoStatus(key) }} className={(item.status === true ? 'li_square' : 'li_check_square')}>
                              {item.status}
                            </span>
                            {(item.status === false ? <span className='crosslined'>{item.title}</span> : <span>{item.title}</span>)}
                            <button className="closeMark" onClick={() => { this.TodoDelete(key) }}>{this.FIcon('fa-x')}</button>
                          </li>
                        )
                      })
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Todo;
