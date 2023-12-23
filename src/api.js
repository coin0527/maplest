const API_KEY =
  "test_15ce087d5bfbde67014b535d0c1cc70098e24c67776b87d067bf51020fa0889db0edb0787e2e41e4355a93fb49eb3766";
const characterName = "캐릭터명";
const urlString =
  "https://open.api.nexon.com/heroes/v1/id?character_name=" + characterName;

const answer = fetch(urlString, {
  headers: {
    test_15ce087d5bfbde67014b535d0c1cc70098e24c67776b87d067bf51020fa0889db0edb0787e2e41e4355a93fb49eb3766:
      API_KEY,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

console.log(answer);
