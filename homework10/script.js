const textDiv = document.getElementById("textDiv");
const textElement = document.getElementById("text");
const changeColorBtn = document.getElementById("changeColorBtn");

let textColorChanged = false;

changeColorBtn.addEventListener("click", function() {
  if (textColorChanged) {
    textElement.style.color = ""; 
  } else {
    textElement.style.color = "pink"; 
  }
  textColorChanged = !textColorChanged; 
});




const multiplicationTable = document.getElementById("multiplicationTable");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  multiplicationTable.appendChild(row);
}


function showRandomImage() {
    const imageContainer = document.getElementById("randomImage");
    const imageFolder = "photo/";
    const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"
    ];
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    const randomImageName = imageNames[randomIndex];
    const imagePath = imageFolder + randomImageName;
    imageContainer.src = imagePath;
}
