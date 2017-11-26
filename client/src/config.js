
const TRANSLINK_KEY = 'Dl9ZMciUCrn2zxn9hUXH';

export const getKey = () => {
    return 'pk.eyJ1IjoidGtldmluIiwiYSI6ImNqYWZzZ3FwbDE2dHEycWxleXlic213M3UifQ.SlZ-RYjpxc2yERTK7A1zaw';
}

export const getTransHost = () => {
  return `http://api.translink.ca/rttiapi/v1/buses?apikey=${TRANSLINK_KEY}`
}