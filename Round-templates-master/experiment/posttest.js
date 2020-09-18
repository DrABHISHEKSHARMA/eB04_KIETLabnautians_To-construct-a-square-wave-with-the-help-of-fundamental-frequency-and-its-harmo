/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
        question: " 1.	What is a line spectrum?",
        answers: {
            a: '  Plot showing magnitudes of waveforms are called line spectrum',
            b: ' Plot showing each of harmonic amplitudes in the wave is called line spectrum',
            c: ' Plot showing each of harmonic amplitudes in the wave is called line spectrum',
            d: ' Plot showing each of harmonic amplitudes called line spectrum'

        },
        correctAnswer: 'b'
    },
    {
        question: "2. Fourier series is not valid for Discrete time sequence/signals ",
        answers: {
            a: ' True',
            b: ' False'

        },
        correctAnswer: 'b'
    },
    {
        question: "3. Fourier series uses which domain representation of signals?",
        answers: {
            a: ' Time domain representation',
            b: ' Frequency domain representation',
            c: ' Both combined',
            d: ' Neither depends on the situation'

        },
        correctAnswer: 'b'
    },
    {
        question: "4.	Continuous Time Fourier Series is valid for  ",
        answers: {
            a: ' Periodic signals',
            b: ' Non periodic signals',
            c: ' Even signals only',
            d: ' None of the above'

        },
        correctAnswer: 'a'
    },
    {
        question: "5. Select the correct relation between the amplitude of the nth harmonic element for Fourier series (An is representing amplitude of the nth harmonic)",
        answers: {
            a: ' A7 > A6 > A5 > A4',
            b: ' A7 > A6 < A5 < A4',
            c: ' A7 < A6 < A5 < A4',
            d: ' None of the above'

        },
        correctAnswer: 'c'
    }

  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
