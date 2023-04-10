export default class DeckSession {
  // For backend: check if a user session for this deck exists, else create a new one with all questions/correct set to false
  static UserFlashcards = [
    {
      question: "Question 1",
      answer: "Answer 1",
      correct: false,
      id: 1,
    },
    {
      question: "Question 2",
      answer: "Answer 2",
      correct: true,
      id: 2,
    },
    {
      question: "Question 3",
      answer: "Answer 3",
      correct: false,
      id: 3,
    },
    {
      question: "Question 4",
      answer: "Answer 4",
      correct: true,
      id: 4,
    },
    {
      question: "Question 5",
      answer: "Answer 5",
      correct: false,
      id: 5,
    },
    {
      question: "Question 6",
      answer: "Answer 6",
      correct: false,
      id: 6,
    },
  ];
}
