import {v4} from 'uuid'
import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    resultList: [],
    inputValue: '',
  }

  addResultItem = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newUser = {
      id: v4(),
      userName: inputValue,
    }
    this.setState(prevState => ({
      resultList: [...prevState.resultList, newUser],
      inputValue: '',
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, resultList} = this.state
    console.log(resultList)
    return (
      <div className="main-container">
        <div className="result-container">
          <h1 className="result-heading">
            Count the characters like a Boss...
          </h1>
          {resultList.length ? (
            <ul className="result-list-container">
              {resultList.map(eachItem => (
                <li className="result-item" key={eachItem.id}>
                  <p className="result-name">
                    {eachItem.userName}: {eachItem.userName.length}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-user-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-image"
              />
            </div>
          )}
        </div>
        <div className="character-container">
          <h1 className="character-heading">Character Counter</h1>
          <form className="form-container" onSubmit={this.addResultItem}>
            <input
              type="text"
              className="input"
              value={inputValue}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
