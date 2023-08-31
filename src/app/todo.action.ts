export function changeText(txt: string) {
  return {type:  'AddTxt', payload: txt}
}

export function removeText(index: number) {
  return {type:  'RemoveTxt', payload: index}
}

export function addTodoList() {
  return {type: 'AddTodoList'}
}
 