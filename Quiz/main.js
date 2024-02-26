window.onload = function() {
   stopDisplay = updateScore();
  stopDisplay.style.display = 'none';
    const initialScore = document.getElementById("L2");
      initialScore.value = 0;
      var assetsToPreload = [
        {
          type: 'audio',
          src: 'gui.mp3'
        }
      ];
    
      showLoader(); // Show SweetAlert loader
    
      preloadAssets(assetsToPreload, function() {
        hideLoader();
      });
    
      function preloadAssets(assetList, callback) {
        var loadedCount = 0;
    
        function assetLoaded() {
          loadedCount++;
    
          updateLoaderProgress(loadedCount, assetList.length);
    
          if (loadedCount === assetList.length) {
            callback();
          }
        }
    
        assetList.forEach(function(asset) {
          if (asset.type === 'audio') {
            var audio = new Audio();
            audio.oncanplaythrough = audio.onload = assetLoaded;
            audio.src = asset.src;
          }
        });
      }
    
      function showLoader() {
        loader = Swal.fire({
          title: 'Loading resources, please wait!',
          html: '<div id="loading-progress">Progress</div>',
         // allowOutsideClick: false,
          showConfirmButton: false,
          showCancelButton: false,
          heightAuto:false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
      }
    
      function updateLoaderProgress(progress, total) {
        const percentLoaded = Math.round((progress / total) * 100);
        const progressText = `Progress... ${percentLoaded}%`;
        document.getElementById('loading-progress').innerHTML = progressText;
      }
    
      function hideLoader() {
        if (loader) {
          loader.close();
        }
      }
    
      
    };

function display(){
  let UserName = document.getElementById("name").value;
    var audio = new Audio("gui.mp3");
      audio.play();
      audio.loop = true;
  Swal.fire({
    icon:'success',
    title:`Welcome ${UserName}`,
    text: `\n`,
    allowOutsideClick: false,
    showConfirmButton: false,
    confirmButtonColor: 'blue',
    timer:2000,
    heightAuto:false
  }).then(() => {
    Swal.fire({
      icon:'info',
      title: 'Guide',
      text:'Read the questions carefully before attempting the quiz. Are you ready?',
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonColor:'blue',
      cancelButtonColor:'red',
      allowOutsideClick:false,
      heightAuto:false
    }).then((result) => {
      if(result.isConfirmed){
      var element = document.documentElement; // Fullscreen the entire document
  
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      run();
        
      }else{
        window.close();
      }
    });
    
  });
}


function game(){
  let nextPage = document.getElementById("B1");
  let newDiv = document.getElementById("lan2");
  nextPage.style.animation = 'bouce 1s infinite';
  let newDiv1 = document.getElementById("foo");
let nextPage1 = document.getElementById("btn");
let nextPage2 = document.getElementById("name");
let nextPage3 = document.getElementById("lan");
let nextPage4 = document.getElementById("quizContainer");
  nextPage4.style.display = 'inline';
  nextPage1.style.display = 'none';
  nextPage2.style.display = 'none';
  nextPage3.style.display = 'none';
  newDiv1.style.display = 'none';
  //newDiv.innerText = questions[0].name;
  
    
    stopDisplay.style.display = "inline-block";
    stopDisplay.style.left = '0';
  timer();
}



  var currentQuestionIndex = 0;
  
        let quizData = [
              { question: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], correctAnswerIndex: 0 },
              { question: "What law states that an object at rest will stay at rest unless acted upon by an external force?", options: ["Newton's Third Law", "Kepler's First Law", "Newton's First Law", "Archimedes' Principle"], correctAnswerIndex: 2 },
              { question: "What is the formula for calculating electric power?", options: ["P = IV", "P = I^2R", "P = VI", "P = V/R"], correctAnswerIndex: 0 },
              { question: "What is the fundamental particle of an atom with a negative charge?", options: ["Proton", "Neutron", "Electron", "Quark"], correctAnswerIndex: 2 },
              { question: "According to Einstein's theory of relativity, as an object's speed approaches the speed of light, what happens to its mass?", options: ["Decreases", "Stays the same", "Increases", "Mass becomes zero"], correctAnswerIndex: 2 },
              { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperTransfer Markup Language", "HighTech Modern Language", "HyperText Modern Language"], correctAnswerIndex: 0 },
              { question: "In programming, what does the acronym API stand for?", options: ["Application Programming Interface", "Advanced Programming Instruction", "Automated Processing Interface", "Application Process Integration"], correctAnswerIndex: 0 },
              { question: "What is the purpose of CSS in web development?", options: ["Client-Side Scripting", "Cascading Style Sheets", "Computer Style System", "Cascading Script System"], correctAnswerIndex: 1 },
              { question: "Which programming language is commonly used for developing mobile applications?", options: ["Java", "Swift", "Python", "Kotlin"], correctAnswerIndex: 1 },
              { question: "What does SQL stand for in the context of databases?", options: ["Simple Query Language", "Structured Question Language", "Structured Query Language", "System Query Language"], correctAnswerIndex: 2 },
              { question: "What is the primary function of a compiler?", options: ["Converts high-level code to machine code", "Optimizes website performance", "Manages database transactions", "Analyzes network protocols"], correctAnswerIndex: 0 },
              { question: "Which data structure follows the Last In, First Out (LIFO) principle?", options: ["Queue", "Stack", "Linked List", "Tree"], correctAnswerIndex: 1 },
              { question: "What is the purpose of the 'git clone' command in Git?", options: ["Creates a new branch", "Downloads a repository from a remote server", "Removes a file from the staging area", "Commits changes to the repository"], correctAnswerIndex: 1 },
              { question: "What does OOP stand for in programming?", options: ["Object-Oriented Programming", "Ordered Output Protocol", "Operational Object Process", "Object-Oriented Process"], correctAnswerIndex: 0 },
              { question: "Which protocol is commonly used for secure communication over the internet?", options: ["FTP", "HTTPS", "SMTP", "TCP/IP"], correctAnswerIndex: 1 },
          { question: "Who is credited with the discovery of the World Wide Web (www)?", options: ["Tim Berners-Lee", "Mark Zuckerberg", "Bill Gates", "Steve Jobs"], correctAnswerIndex: 0 },
          {question:"which of these is a quality of a metal?",
          options:["malleability","brittle","sharp","bad conductor"],
          correctAnswerIndex:0},
      {question: "what is the chemical symbol of Sodium", options:["K","Na","Au","F"], correctAnswerIndex:1},
   {question:"What does the acronym API stand for?",options:["Application Programming Interface","Advanced Programming Instruction","Automated Processing Interface","Application Process Integration"],correctAnswerIndex:0},
      {question:"Which of these rays has the highest penetrating electromagnetic radiation?",options:["Beta rays","Alpha rays","Gamma rays","Xrays"],correctAnswerIndex:2},
      {question:"What is the crystal structure of a diamond?",options:["Tetrahedral","Octahedral","Pentagonal","Hexagonal"], correctAnswerIndex:0},
      {question:"Among the first twenty elements which of these gases diffuse the fastest?",options:["Hydrogen","Oxygen","Nitrogen","Fluorine"], correctAnswerIndex:0},
      {question:"In electrolysis oxidation occurs at what site?", options:["Cathode","Anode","Cell","Switch"],correctAnswerIndex:1},
      {question:"Acid burns are tested using?",options:["pH paper","Water","Base","Salt"],correctAnswerIndex:0},
      {question:"What does the acronym GIS stand for?",options:["Geographic Intelligence System","Geographic Information System","Geographic Informative Status","Geological Intellectual Process"],correctAnswerIndex:1},
      {question: "What is the instrument used in measuring an earthquake power?", options:["Manometer","Barometer","Ritchter scale","Sphygmomanometer"],correctAnswerIndex:2},
      {question:"Which of the following is the largest ocean in the World?",options:["Atlantic","Pacific","Indian","Arctic"],correctAnswerIndex:1},
      {question:"Which among these is porous?",options:["Sandy soil","Loamy soil","Clay soil","Grey soil"],correctAnswerIndex:0},
      {question:"The ecosystem is made up of how many components?",options:["Three","Four","Five","Two"], correctAnswerIndex:3},
      {question:"One of these decomposes dead organic matter to release nutrients?",options:["Saprophytes","Heterotrophs","Autotrophs","Symbionts"],correctAnswerIndex:0},
      {question:"One of these is a problem of mining Gold?",options:["Adequate Infrastructure","Good transport network","High rate of sabotage by unpatriotic people in the mining area","Revenue generation"], correctAnswerIndex:2},
      {question:"What is the acronym 'HTC' stand for?", options:["High tech company ","High technical computer", "High tech computer","Higher trade company"],correctAnswerIndex:2},
      {question:"What does Virus stand for?",options:["Vital Information Resource Under Siege","Viral intelligence technology","Vital instruction license","Valuable Documents unlicensed"],correctAnswerIndex:0},
      
   {question:"Solve the equation: 2x + 5 = 15", options:["x = 5", "x = 7", "x = 8", "x = 10"], correctAnswerIndex:0},
   {question:"Calculate the area of a rectangle with length 8 cm and width 5 cm", options:["20 sq cm", "30 sq cm", "40 sq cm", "50 sq cm"], correctAnswerIndex:2},
   {question:"If a triangle has angles of 30°, 60°, and 90°, what is the measure of the third angle?", options:["45°", "60°", "75°", "90°"], correctAnswerIndex:0},
   {question:"What is the value of π (pi) to two decimal places?", options:["3.14", "3.16", "3.18", "3.20"], correctAnswerIndex:0},
   {question:"If a car travels at a speed of 60 km/h, how far will it travel in 3 hours?", options:["150 km", "180 km", "200 km", "240 km"], correctAnswerIndex:1},
   {question:"Evaluate the expression: 4² - 2(3 + 5)", options:["-6", "0", "10", "18"], correctAnswerIndex:1},
   {question:"What is the solution to the inequality: 2x + 7 < 15", options:["x < 4", "x > 4", "x < 5", "x > 5"], correctAnswerIndex:0},
   {question:"Find the value of √25", options:["3", "4", "5", "6"], correctAnswerIndex:2},
   {question:"Simplify: 3/5 + 2/3", options:["1", "11", "13/15", "15/18"], correctAnswerIndex:0},
   {question:"If the radius of a circle is 6 cm, what is its circumference? (Use π = 3.14)", options:["18.84 cm", "37.68 cm", "56.52 cm", "75.36 cm"], correctAnswerIndex:1},
   {question:"Solve the system of equations: 2x + y = 8, 3x - 2y = 1", options:["x = 2, y = 4", "x = 3, y = 2", "x = 4, y = 0", "x = 5, y = -2"], correctAnswerIndex:0},
   {question:"Find the derivative of f(x) = 3x^2 - 2x + 1", options:["f'(x) = 6x - 2", "f'(x) = 6x + 2", "f'(x) = 4x - 2", "f'(x) = 4x + 1"], correctAnswerIndex:0},
   {question:"If A and B are matrices, what is the result of the matrix multiplication AB if A is a 3x2 matrix and B is a 2x4 matrix?", options:["A 3x4 matrix", "A 2x2 matrix", "A 3x2 matrix", "A 2x4 matrix"], correctAnswerIndex:0}
      
      ];
      
      
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffleArray(quizData);
    let HighScore = 0;
    function loadQuestion() {
       
       currentQuestion = quizData[currentQuestionIndex];
    
      document.getElementById("questionText").textContent = currentQuestion.question;
    
      var optionsContainer = document.getElementById("optionsContainer");
      optionsContainer.innerHTML = "";
    
      currentQuestion.options.forEach(function(option, index) {
        var label = document.createElement("label");
        var input = document.createElement("input");
    
        input.type = "radio";
        input.name = "quizOption";
        input.value = index;
        label.classList.add("option-label");
        input.onclick = sound;
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + option));
    
        optionsContainer.appendChild(label);
      });
      
      
    }
    function sound(){
      let aud = new Audio("click.mp3");
      aud.play();
    }
    
    let split = "\n";
    function submitAnswer() {
     sound();
      var selectedOption = document.querySelector('input[name="quizOption"]:checked');
    
      if (selectedOption !== null) {
        var userAnswer = parseInt(selectedOption.value);
    
        if (userAnswer === quizData[currentQuestionIndex].correctAnswerIndex) {
          HighScore++;
          Swal.fire({
            icon: 'success',
            title: 'Correct',
            heightAuto:false
          }).then((result) => {
            
            // Move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
              loadQuestion();
            
            
            } else {
              Swal.fire({
                icon: 'success',
                title: 'Quiz completed!',
                text: `Score: ${HighScore}/${quizData.length}${split} Play again?`,
                      showCancelButton: true,
                      showConfirmButton: true,
                      allowOutsideClick: false,
                      confirmButtonColor: 'green',
                      cancelButtonColor: 'red',
                      heightAuto:false
                    }).then((result) => {
                          if (result.isConfirmed) {
                            game();
                            currentQuestionIndex= 0;// Reload the page
                      HighScore = 0;      reset();
                shuffleArray(quizData);
                  loadQuestion();
                          } else {
                            window.close();
                }
                
              });
            }
          });
        } else {
          Swal.fire({
            icon: 'warning',
            text: `Incorrect. The correct answer is: ${quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].correctAnswerIndex]}`,
            heightAuto:false
          }).then(() => {
            // Move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
              loadQuestion();
            } else {
              Swal.fire({
                icon: 'success',
                title: 'Quiz completed!',
                text:`Score: ${HighScore}${split}play again?`,
                showCancelButton:true,
                showConfirmButton:true,
                allowOutsideClick:false,
                confirmButtonColor:'green',
                cancelButtonColor:'red',
                heightAuto:false
              }).then((result) => {
                if(result.isConfirmed){
                      game();
                      currentQuestionIndex= 0;// Reload the page
                      HighScore = 0;
                      reset();
                 shuffleArray(quizData);
                  loadQuestion();
                }else{
                window.close();
                }
            });
            }
        });
        }
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Please select an option',
          heightAuto:false
        });
      }
      const textScore = document.getElementById("L2");
     textScore.value = HighScore;
        
    }
    
    // Initial load
    loadQuestion();
let realTime = 240000;
function timer() {
    
    let left = realTime / (1000 * 60);
    let timer = document.getElementById("timer");
    let second = 60;
    timer.innerHTML = "";
  
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = "text";
    input.id = "txt";
    label.id = "txt2";
    input.readOnly = true;
    label.appendChild(document.createTextNode(" Time left:"));
  label.appendChild(input);
    timer.appendChild(label);
  
    let interval = setInterval(() => {
      second = second - 1; // Update the time left
      input.value = `${left}:${second}`; // Update the input field
      
      if (second <= 0) {
        
        left -= 1;
        second = 60;
        second = second -1;
        if(left <= -1){
          left = 0
        clearInterval(interval);
        Swal.fire({
          icon:'warning',
          title:'Game over',
          text:`Score:${HighScore}/${quizData.length} Try again?`,
          showCancelButton:true,
          showConfirmButton:true,
          cancelButtonColor:'red',
          confirmButtonColor:'green',
          allowOutsideClick: false,
          heightAuto: false
        }).then((result) => {
          if(result.isConfirmed){
              window.location.href = window.location.origin; // Set the URL to the initial one
                window.location.reload(); // Reload the page
          }else{
            window.close();
          }
        });
        }
      }
    }, 1000); // Update every minute (1000 ms * 60 s)
    
    
  }
  
  function updateScore(){
  let highScore = document.getElementById("score");
    let label1 = document.createElement("label");
    let input2 = document.createElement("input");
    label1.id = "L1";
    input2.id = "L2";
    input2.readOnly = true;
    label1.appendChild(document.createTextNode("Score:"));
    label1.appendChild(input2);
    highScore.appendChild(label1);
    return highScore;
    
  }
  
  function reset(){
  const resetScore = document.getElementById("L2");
    resetScore.value = HighScore;
  }
  
  async function difficulty(){
    return new Promise((resolve, reject) => {
      
    
    let arrayItem = [{
      name:'Easy',num:420000
    },
    {
      name:'Medium',num:360000
    },
    {
      name:'Hard',num:180000
    }];
    Swal.fire({
      icon:'info',
      input:'select',
      inputOptions: arrayItem.map(character => character.name),
      title:'Select difficulty',
      allowOutsideClick:false,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonColor:'red',
      confirmButtonColor:'green',
      heightAuto:false
    }).then((result) => {
      if(result.isConfirmed){
        tan2 = result.value;
        realTime = arrayItem[tan2].num;
        resolve();
      }
    });
    
    });
  }
  async function run() {
    await difficulty();
    game();
  }
