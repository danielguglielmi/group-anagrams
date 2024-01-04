
const processAnagram = (inputAnagram) => {
  const uniqueKeys = new Set();
  const mappedValues = new Map();

  inputAnagram.forEach((val) => {
    let textValue = val.split("").join("");
    let keyValue = val.split("").sort().join("");

    uniqueKeys.add(keyValue);

    let mapped = mappedValues.get(keyValue);
    if (mapped === undefined) {
      let temp = [];
      temp.push(textValue);
      mappedValues.set(keyValue, temp);
    } else {
      mapped.push(textValue);
      mappedValues.set(keyValue, mapped);
    }
  });
  
  let finalArray = [];
  Array.from(uniqueKeys).forEach((val) => {
    finalArray.push(mappedValues.get(val))
  })

  return finalArray.sort()
};

module.exports = {
  processAnagram
}