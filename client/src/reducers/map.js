export default function map(state = {}, action) {
  switch(action.type){
    case "VIEWPORT_CHANGED":
      console.log(action.state);
      return {
        viewport: action.state
      };
    default:
      return state;
  }
}
