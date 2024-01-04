const { processAnagram } = require("./main");

describe("Grouping Anagrams", () => {
  test('Group  ["eat","tea","tan","ate","nat","bat"]', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = processAnagram(input);
    const expected = [["bat"], ["eat", "tea", "ate"], ["tan", "nat"]];
    expect(result).toEqual(expected);
  });

  test('Group   [""]', () => {
    const input = [""];
    const result = processAnagram(input);
    const expected = [[""]];
    expect(result).toEqual(expected);
  });

  test('Group   ["a"]', () => {
    const input = ["a"];
    const result = processAnagram(input);
    const expected = [["a"]];
    expect(result).toEqual(expected);
  });
});
