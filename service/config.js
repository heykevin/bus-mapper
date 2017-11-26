const TRANSLINK_KEY = 'Dl9ZMciUCrn2zxn9hUXH';

export const getTransHost = () => {
  return `http://api.translink.ca/rttiapi/v1/buses?apikey=${TRANSLINK_KEY}`
}
