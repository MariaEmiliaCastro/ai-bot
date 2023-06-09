
require('dotenv').config();

//In ai.js
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: `${process.env.OPENAI_API_KEY}`,
});
    const openai = new OpenAIApi(configuration);
    async function ask(prompt) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
    prompt,
    temperature: 0.5,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;
    console.log(answer);
    return answer;
}
    //Export the "ask" function
    module.exports = {
      ask,
};