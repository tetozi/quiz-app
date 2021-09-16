//https://opentdb.com/api.php?amount=10&type=multiple

const data = [
  {
    question: "What five letter word is the motto of the IBM Computer company?",
    incorrectAnswers: ["Click", "Logic", "Pixel"],
    correctAnswer: "Think",
  },

  {
    question:
      "While Apple was formed in California, in which western state was Microsoft founded?",
    incorrectAnswers: ["Washington", "Colorado", "Arizona"],
    correctAnswer: "New Mexico",
  },
  {
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    incorrectAnswers: ["Neptune", "Whistler", "Bliss"],
    correctAnswer: "Luna",
  },
  {
    question: `WIn CSS, which of these values CANNOT be used with the "position" ,?`,
    incorrectAnswers: ["static", "absolute", "relative"],
    correctAnswer: "center",
  },
  {
    question: "Which is the correct CSS syntax?",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    incorrectAnswers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"],
    correctAnswer: "Motorola 68000",
  },
  {
    question: "Which of these people was NOT a founder of Apple Inc?",
    incorrectAnswers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
    correctAnswer: "Jonathan Ive",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
  },
  {
    question:
      "Which internet company began life as an online bookstore called Cadabra?",
    incorrectAnswers: ["eBay", "Overstock", "Shopify"],
    correctAnswer: "Amazon",
  },
  {
    question: "Laserjet and inkjet printers are both examples of what type of printer?",
      incorrectAnswers: [ "Impact printer", "Daisywheel printer","Dot matrix printer"
      ],
      correctAnswer: "Non-impact printer",
},
{
  question: "Approximately how many Apple I personal computers were created??",
    incorrectAnswers: [
      "100",
      "500",
      "1000",
    ],
    correctAnswer: "200",
},
];

export default data;
