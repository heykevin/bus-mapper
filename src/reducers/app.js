export default function app(state = {}, action) {
  switch(action.type){
    case "BUTTON_CLICK":
      return {
        counter: action.counter + 1,
        title: action.title
      };

    default:
      return state;
  }
}
