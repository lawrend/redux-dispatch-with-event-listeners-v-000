//Creates a functioning counter redux app
let state;
function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

//adding event handling without jQuery
function dispatch(action) {
  state = changeState(state, action)
  render()
}

function render() {
  let container = document.getElementById('container')
  container.textContent = state.count;
}

//attach dispatch execution
let button = document.getElementById('button')
button.addEventListener('click', function(){
  dispatch({type: 'INCREASE_COUNT'})
})



dispatch({type: '@@INIT'})
