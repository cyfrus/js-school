var answers = [
  "Create a REEF account",
  "Change the student ID to Match the ID in your course and grade software",
  "Change your email to be your university email address. Don't create account or you may not recieve credit for all your votes",
  "Add your clicker ID",
  "Add your course to your course list in REEF",
  "Vote with one account to avoid losing grade points and contact REEF support as soon as you can",
  "Click the link to sync REEF to your LMS gradebook",
  "Still not working? Contact our knowledgeable staff at REEF Support"
];

var questions = [
  {
    question: "Did you create a REEF account?",
    no: { index: 0, type: "answer" },
    yes: { index: 1, type: "question" }
  },
  {
    question:
      "Will your grades be in your course and grade software/Learning Management System?",
    no: { index: 2, type: "question" },
    yes: { index: 6, type: "question" }
  },
  {
    question: "Are you using a clicker",
    no: { index: 4, type: "question" },
    yes: { index: 3, type: "question" }
  },
  {
    question: "Did you add your clicker ID to your REEF profile?",
    no: { index: 3, type: "question" },
    yes: { index: 4, type: "question" }
  },
  {
    question: "Did you add your course to your REEF account?",
    no: { index: 4, type: "answer" },
    yes: { index: 5, type: "question" }
  },
  {
    question: "Do you have more than one account?",
    no: { index: 7, type: "answer" },
    yes: { index: 5, type: "answer" }
  },
  {
    question:
      "Does the student ID in your REEF profile match the one used in your school's course and grade software?",
    no: { index: 1, type: "answer" },
    yes: { index: 7, type: "question" }
  },
  {
    question:
      "Is your email in your REEF profile your university email address?",
    no: { index: 2, type: "answer" },
    yes: { index: 8, type: "question" }
  },
  {
    question:
      "Did your instruction provide a REEF link in your course and grade software/Learning Management System?",
    no: { index: 2, type: "question" },
    yes: { index: 9, type: "question" }
  },
  {
    question: "Have you clicked that link?",
    no: { index: 6, type: "answer" },
    yes: { index: 2, type: "question" }
  }
];

$(document).ready(function() {
  var questionIndex = 0;
  var text;
  var ui;
  var previousIndex = [];
  $(document).on("click", ".yes", answerYes);
  $(document).on("click", ".no", answerNo);
  $(document).on("click", ".startAgain", startAgain);
  $(document).on("click", ".back", goBack);
  $(document).on("click", ".start", startAgain);

  function answerYes() {
    ui = questions[questionIndex].yes.type;
    previousIndex.push(questionIndex);
    questionIndex = questions[questionIndex].yes.index;
    text =
      ui === "question"
        ? questions[questionIndex].question
        : answers[questionIndex];
    loadUi(text, ui);
  }
  function answerNo(test) {
    ui = questions[questionIndex].no.type;
    previousIndex.push(questionIndex);
    questionIndex = questions[questionIndex].no.index;
    text =
      ui === "question"
        ? questions[questionIndex].question
        : answers[questionIndex];
    loadUi(text, ui);
  }

  function startAgain() {
    console.log("start again !");
    questionIndex = 0;
    previousIndex = [];
    var text = questions[questionIndex].question;
    loadUi(text, "question");
  }

  function goBack() {  
      if(previousIndex.length) {
        text = questions[previousIndex[previousIndex.length-1]].question;
        questionIndex = previousIndex[previousIndex.length-1];
        previousIndex.pop();
        loadUi(text, "question");
      }
  }

  function loadUi(text, type) {
    $(".button_div *").remove();
    $(".ynrow div").remove();
    if (type === "question") {
      $(".ynrow").append(
        '<div class="col-md-auto">' +
          '<div class="yes d-flex align-items-center justify-content-center">' +
          "<span>Yes</span>" +
          "</div>" +
          "</div>" +
          '<div class="col-md-auto">' +
          '<div class="no d-flex align-items-center justify-content-center">' +
          "<span>No</span>" +
          "</div>" +
          "</div>"
      );
      $(".button_div").append(
        '<div class="col-md-auto text-center back d-flex align-items-center justify-content-center"><span class="align-middle ">Back</span></div><div class="col-md-auto text-center start d-flex align-items-center justify-content-center"><span class="align-middle ">Go to start</span></div>'
      );
    } else if (type === "answer") {
      $(".button_div").append(
        '<div class="col-md-auto text-center d-flex align-items-center justify-content-center"><button class="startAgain">Start Again?</button></div>'
      );
    }
    $(".question_div").text(text);
    if (questionIndex > 0) {
      $(".back, .start").addClass("active");
    } else {
      $(".back, .start").removeClass("active");
    }  
  }
});
