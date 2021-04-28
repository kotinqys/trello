const initialState = {
    items:[]
}

function actionTask(text, what, action) {
  let result = []
  const task = action.payload

  if (what === 'filter') {
    return result = text.tasks.filter((val, index) => index !== action.taskId)
  }
    
  else if (what === 'set') {
    return result = [...text.tasks,task]
  }
  return result
}

function getTasks(state,action,what) {
  const newItems = [
    ...state.items
  ]

  const newlist = newItems.map((val, index) => {
    if (index === action.mainId) {
      return {
        ...val, list: val.list.map((text, index) => {
          if (index === action.id) {
            return {
               ...text, tasks: actionTask(text,what,action)
            }
          }
          else {
            return text
          }
      })
    }}
    else {
      return val
    }
  })
  
  return newlist
}

const board = (state = initialState, action) => {
  
  switch (action.type) {
    case 'SET_BOARD': {
      const newitem = {
        name: action.payload,
        list: []
      }
      return {
        ...state,
        items: [...state.items, newitem]
      }
    }
    case 'DELETE_BOARD': {
      const newitems = [
        ...state.items
      ]
      return {
        ...state,
        items: newitems.filter((item, index) => index !== action.id)
      }
    }
    case 'DELETE_LIST': {
      const newitems = [
        ...state.items
      ]

      return {
        ...state,
        items: newitems.map((val, index) => {
          if (index === action.mainId) {
            return {
              ...val,
              list:val.list.filter((item,i)=>i!==action.id)
            }
          } else {
            return val
          }
        })
      }
    }
    case 'SET_LIST_TO_BOARD': {

      const newList = {
        text: action.payload,
        tasks: []
      }

      const newitems = [
        ...state.items
      ]
      const list = newitems.map((val, index) => {
        if (index === action.id) {
          return { ...val, list: [...val.list, newList] }
        }
        else {
          return val
        }
      })

      return {
        ...state,
        items: list
      }
    }

    case 'DELETE_TASK':
        const filter = getTasks(state, action,'filter')
          
        return {
            ...state,
            items:filter
      }
    
    case 'SET_TASK_TO_LIST':
      const set = getTasks(state, action, 'set')
      
      return {
        ...state,
        items:set
      }
    default:
      return state
  }
}
export default board;