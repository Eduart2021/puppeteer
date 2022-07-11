
const list = '{"name":"John", "age":30, "city":"New York"}'

const jString = (list) => {
  return JSON.parse(list)
}

exports.jString = jString