var quotes = [
  {
    text:
      "I want Dr. King to know that I didn’t come to Selma to make his job difficult. I really did come thinking I could make it easier. If the               white people realize what the alternative is, perhaps they will be more willing to hear Dr. King. — in a conversation with Mrs. Coretta                 Scott King. ",
    author: " Malcolm X"
  },

  {
    text:
      "I am not a racist. I am against every form of racism and segregation, every form of discrimination. I believe in human beings, and that                all human beings should be respected as such, regardless of their color.",
    author: " Malcolm X"
  },

  {
    text:
      "You don’t have to be a man to fight for freedom. All you have to do is to be an intelligent human being.",

    author: " Malcolm X"
  },

  { text: "Stumbling is not falling down.", author: "Malcolm X" },

  {
    text:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King, Jr."
  },

  {
    text:
      "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal                   of true education.",
    author: "Martin Luther King, Jr."
  },

  {
    text:
      "Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity.",
    author: "Martin Luther King, Jr."
  },

  {
    text:
      "Law and order exist for the purpose of establishing justice and when they fail in this purpose they become the dangerously structured dams that block the flow of social progress.",
    author: "Martin Luther King, Jr."
  }
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("text").innerText = quotes[randomNumber].text;
  document.getElementById("author").innerText = quotes[randomNumber].author;
  document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=" + quotes[randomNumber].text; 
  
}

newQuote()