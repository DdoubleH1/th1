

// Function to bind quiz data to the survey form
function bindQuizData(quizData) {
  const quizContainer = document.getElementById('quiz-container');
 

  quizData.questions.forEach((questionData, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <p>${index + 1}. ${questionData.question}</p>
    `;

    if (questionData.type === 'boolean') {
      // Add boolean input (true/false)
      questionElement.innerHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="question${index}" id="question${index}-true" value="true">
          <label class="form-check-label" for="question${index}-true">True</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="question${index}" id="question${index}-false" value="false">
          <label class="form-check-label" for="question${index}-false">False</label>
        </div>
      `;
    } else if (questionData.type === 'singleChoice') {
      // Add single choice options
      questionData.answers.forEach((answer, ansIndex) => {
        questionElement.innerHTML += `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="question${index}" id="question${index}-choice${ansIndex}" value="${answer}">
            <label class="form-check-label" for="question${index}-choice${ansIndex}">${answer}</label>
          </div>
        `;
      });
    } else if (questionData.type === 'multipleChoice') {
      // Add multiple choice options
      questionData.answers.forEach((answer, ansIndex) => {
        questionElement.innerHTML += `
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="question${index}-choice${ansIndex}" id="question${index}-choice${ansIndex}" value="${answer}">
            <label class="form-check-label" for="question${index}-choice${ansIndex}">${answer}</label>
          </div>
        `;
      });
    } else if (questionData.type === 'essay') {
      // Add essay textarea
      questionElement.innerHTML += `
        <textarea class="form-control" name="question${index}-answer" id="question${index}-answer" rows="3" placeholder="Your answer"></textarea>
      `;
    }

    // Append the question to the container
    quizContainer.appendChild(questionElement);
  });

  // Function to save user answers and show them when the submit button is clicked
   // Array to store user answers
}

// Bind quiz data to the survey form on page load
const quizData = {
  questions: [
    // **Nhóm 1: Lựa chọn đúng/sai (10 câu)**
    {
      question: "Thủ đô của Việt Nam là Hà Nội.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Sông Nile là con sông dài nhất thế giới.",
      type: "boolean",
      correctAnswer: false,
    },
    // ... 8 câu tiếp theo
    {
      question: "Mặt Trời mọc ở phía Tây.",
      type: "boolean",
      correctAnswer: false,
    },
    {
      question: "Mặt Trăng không có ánh sáng riêng.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có hình cầu.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất quay quanh Mặt Trời.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có 2 cực.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có 4 mùa.",
      type: "boolean",
      correctAnswer: true,
    },
    {
      question: "Trái Đất có 365 ngày.",
      type: "boolean",
      correctAnswer: false,
    },
    {
      question: "Trái Đất có 24 giờ.",
      type: "boolean",
      correctAnswer: true,
    },

    // **Nhóm 2: Chọn 1 trong 4 đáp án (10 câu)**
    {
      question: "Con vật nào sau đây không có xương sống?",
      type: "singleChoice",
      correctAnswer: "Sứa",
      answers: ["Cá", "Chó", "Sứa", "Thằn lằn"],
    },
    {
      question: "Màu nào sau đây không thuộc màu cơ bản?",
      type: "singleChoice",
      correctAnswer: "Cam",
      answers: ["Đỏ", "Xanh dương", "Vàng", "Cam"],
    },
    // ... 8 câu tiếp theo
    {
      question: "Trái cây nào sau đây không có hạt?",
      type: "singleChoice",
      correctAnswer: "Dưa hấu",
      answers: ["Dưa hấu", "Dâu tây", "Chuối", "Xoài"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },
    {
      question: "Loài vật nào sau đây không phải là động vật?",
      type: "singleChoice",
      correctAnswer: "Cây cỏ",
      answers: ["Cá", "Chó", "Cây cỏ", "Chuột"],
    },

    // **Nhóm 3: Chọn nhiều đáp án trong 4 lựa chọn (10 câu)**
    {
      question: "Những quốc gia nào sau đây thuộc Đông Nam Á?",
      type: "multipleChoice",
      correctAnswers: ["Việt Nam", "Thái Lan", "Indonesia", "Singapore"],
      answers: [
        "Việt Nam",
        "Trung Quốc",
        "Thái Lan",
        "Indonesia",
        "Singapore",
        "Nhật Bản",
      ],
    },
    {
      question: "Những loại trái cây nào sau đây có vị chua?",
      type: "multipleChoice",
      correctAnswers: ["Chanh", "Ổi", "Dâu tây", "Kiwi"],
      answers: ["Táo", "Cam", "Chanh", "Ổi", "Dâu tây", "Kiwi", "Bưởi"],
    },
    // ... 8 câu tiếp theo
    {
      question: "Những loại thức uống nào sau đây có cà phê?",
      type: "multipleChoice",
      correctAnswers: ["Cà phê sữa", "Cà phê đen", "Cà phê phin"],
      answers: [
        "Cà phê sữa",
        "Cà phê đen",
        "Cà phê phin",
        "Trà sữa",
        "Sinh tố",
        "Nước ép",
      ],
    },
    {
      question: "Ai là nhà văn nổi tiếng của Việt Nam?",
      type: "multipleChoice",
      correctAnswers: ["Nguyễn Du", "Nam Cao", "Tô Hoài", "Xuân Diệu"],
      answers: [
        "Nguyễn Du",
        "Nam Cao",
        "Tô Hoài",
        "Xuân Diệu",
        "Nguyễn Tuân",
        "Tố Hữu",
      ],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },
    {
      question: "Những loại thức ăn nào sau đây có chứa đường?",
      type: "multipleChoice",
      correctAnswers: ["Kẹo", "Bánh", "Nước ngọt", "Kem"],
      answers: ["Kẹo", "Bánh", "Nước ngọt", "Kem", "Thịt", "Rau"],
    },

    // **Nhóm 4: Trả lời tự luận (10 câu)**
    {
      question: "Hãy nêu 3 nguyên nhân chính dẫn đến biến đổi khí hậu.",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    // ... 8 câu khác nhau tiếp theo
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", // Không có đáp án chính xác, đánh giá dựa trên nội dung và logic
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", //
    },
    {
      question: "Theo bạn, làm thế nào để bảo vệ môi trường sống?",
      type: "essay",
      correctAnswer: "", //
    },
  ],
};

bindQuizData(quizData);


// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Gather user's answers
  const userAnswers = [];

  const form = document.getElementById('survey-form');
  const questions = form.getElementsByClassName('question');
  let unansweredQuestions = [];

  for (let i = 0; i < questions.length; i++) {
    const questionData = quizData.questions[i];
    const questionElement = questions[i];

    let userAnswer;

    if (questionData.type === 'boolean') {
      const selectedOption = form.querySelector(`input[name="question${i}"]:checked`);
      userAnswer = selectedOption ? selectedOption.value : 'Not answered';
    } else if (questionData.type === 'singleChoice') {
      const selectedOption = form.querySelector(`input[name="question${i}"]:checked`);
      userAnswer = selectedOption ? selectedOption.value : 'Not answered';
    } else if (questionData.type === 'multipleChoice') {
      const checkboxes = questionElement.querySelectorAll(`input[name="question${i}-choice"]:checked`);
      if (checkboxes.length > 0) {
        userAnswer = [];
        checkboxes.forEach((checkbox) => {
          userAnswer.push(checkbox.value);
        });
      } else {
        userAnswer = 'Not answered';
        unansweredQuestions.push(questionData.question);
      }
    } else if (questionData.type === 'essay') {
      userAnswer = form.querySelector(`textarea[name="question${i}-answer"]`).value.trim();
      if (userAnswer === '') {
        userAnswer = 'Not answered';
        unansweredQuestions.push(questionData.question);
      }
    }

    userAnswers.push({
      question: questionData.question,
      userAnswer: userAnswer
    });
  }

  // Check if there are unanswered questions
  if (unansweredQuestions.length > 0) {
    alert('Please answer all questions before submitting the form.');
    return;
  }

  // Log user's answers to the console
  console.log('User Answers:', userAnswers);

  // If all questions are answered, submit the form
  form.submit();
}

// Bind quiz data to the survey form on page load



// Bind the saveUserAnswers function to the submit button click event
const form = document.getElementById('survey-form');
form.addEventListener('submit', handleSubmit);

