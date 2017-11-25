export default function test(state = {}, action) {
  switch(action.type){
    case "TEST_CLICK":
      return {
        counting: action.counting + 1,
        title: action.title
      };

    default:
      return state;
  }
}
