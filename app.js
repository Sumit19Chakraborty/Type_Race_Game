const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "Mr.Trump’s late night twitter blunder that involved a typo had left the Twitter users puzzled. The typo namely “covfefe” had been later deleted by the President yet it got people talking. He inadvertently typed ‘covfefe’ instead of typing ‘coverage’ and his tweet went viral. He tweeted, “Despite the constant negative press covfefe”. This was the birth of covfefe. But will this buzzword become a word in itself in the future? Only time will tell.",
  "Do the voters vote for their favourite candidates by making instinct decisions? Or are they making rational decisions? Do people find enough time to vote for his favourite candidate on the basis of reasoning i.e. by considering the candidate’s policies, his vision etc.? Or are they finding shortcut ways to select a particular candidate by making their first impressions?Through a compendium of various research projects, the writer says why the voters vote for a candidate. The basic idea that the article talks about is that Political decisions are based upon a person’s competitive appearance.Impressions matter especially for the unknowledgeable politically-ignorant couch potatoes",
  "The Paris Climate deal which aims at reducing greenhouse gas emissions in a bid to keep global warming below 2 degree Celsius which has been ratified by 146 nations is an essential step to save the planet for our future generation.But with Trump taking over as the President, there has been speculations that the White house is planning to pull itself off from being a part of this agreement.What would it be like without the US involvement in this climate agreement?The writer in this article presents the view of various experts to address this question",
  "Looking for a great source of English reading passages? You have come to the right place!A recent study shows that the habit of reading is diminishing rapidly among youngsters today. They can’t concentrate on a given English reading passage for more than a few seconds at a stretch! At the same time, reading was and still is an integral part of all competitive exams. So, how do you improve your reading skills? The answer to this question is actually another question: What is the use of Reading Skills? The main purpose of reading is to ‘make sense’. Keep in mind these points while attempting English reading passages:",
  "Why do you wanna become a programmer?",
  "Which programming language you like the most?",
  "What is Golang? and why do you wanna learn it?",
  "What is CSS",
];

const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  let randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const duration = new Date();
  game.start = duration.getTime(); // unix timestamp
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
  btn.textContent = "Start";
}

function results() {
  let valueOne = game.arrText.split(" ");
  let valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}