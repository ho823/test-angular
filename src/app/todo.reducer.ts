export interface State  {
  text: string[];
}
 
export const initialState: State = {
  text: ['sdfjwdjfldbf', 'kdfbvwdfjk'],
};
 
export function todoReducer(
  state = initialState.text, 
  action: any,
  ) {
  console.log(state, action)
  switch (action.type) {
    case 'AddTxt':
      return [...state, action.payload]
    case 'RemoveTxt':
      let newText = [...state]
      newText.splice(action.payload, 1)
      return newText
    case 'AddTodoList':
      return state
 
    default:
      return state;
  }
}