// var lyricsText = `My baby I love you so much forever you and I
//     I love you oh~I love you so much forever you and I
//     My baby I love you so much forever you and I
//     I love you oh I love you so much forever you and I

//     Vẫn nhớ ánh mắt, nhớ đôi ngày nào bên anh
//     Và nụ cười tươi xinh của người
//     Vẫn nhớ những lúc bên em mình kề vai nhau
//     Oh cuộc đời ôi sao tuyệt với oh`;

// var lyricsLines = lyricsText.split("\n").filter((line) => line.trim() !== ""); // Tách thành mảng 2 chiều
// var lyricsArray = [];

// // Tách từng từ trong mỗi dòng và lưu vào mảng hai chiều
// lyricsLines.forEach((line) => {
//   var words = line.split(" ");
//   lyricsArray.push(words);
// });

// var lyricsElement = document.getElementById("lyrics");
// var rowIndex = 0;

// function showTwoLines() {
//   var colIndex = 0;

//   function addWord() {
//     var currentWord = lyricsArray[rowIndex][colIndex];
//     if (currentWord !== undefined) {
//       var wordElement = document.createElement("span");
//       wordElement.textContent = currentWord;
//       wordElement.classList.add("word");
//       lyricsElement.appendChild(wordElement);
//       if (colIndex !== lyricsArray[rowIndex].length - 1) {
//         lyricsElement.appendChild(document.createTextNode(" "));
//       }
//       colIndex++;
//       // Kích hoạt hiệu ứng khi một từ mới được thêm vào
//       setTimeout(() => {
//         wordElement.style.opacity = "1";
//         addWord(); // Gọi lại hàm để thêm từ tiếp theo
//       }, 100); // Thời gian delay giữa các từ
//     } else {
//       colIndex = 0;
//       rowIndex++;
//       if (rowIndex !== lyricsArray.length && rowIndex < 2) {
//         lyricsElement.appendChild(document.createElement("br")); // Thêm dòng mới
//         setTimeout(addWord, 500); // Thời gian delay giữa các dòng
//       } else {
//         setTimeout(clearAndShowNextTwoLines, 500); // Xóa và hiển thị hai dòng tiếp theo sau khi hiển thị hai dòng
//       }
//     }
//   }

//   addWord(); // Bắt đầu thêm từng từ
// }

// function clearAndShowNextTwoLines() {
//   lyricsElement.innerHTML = ""; // Xóa nội dung
//   // showTwoLines.rowIndex += 2;
//   setTimeout(showTwoLines, 0); // Hiển thị hai dòng tiếp theo
// }

// setTimeout(() => {
//   console.log(lyricsArray);
//   showTwoLines();
// }, 0);

var lyricsText = `My baby I love you so much forever you and I
    I love you oh~I love you so much forever you and I
    My baby I love you so much forever you and I
    I love you oh I love you so much forever you and I

    Vẫn nhớ ánh mắt, nhớ đôi ngày nào bên anh
    Và nụ cười tươi xinh của người
    Vẫn nhớ những lúc bên em mình kề vai nhau
    Oh cuộc đời ôi sao tuyệt với oh`;

var lyricsLines = lyricsText.split("\n").filter((line) => line.trim() !== ""); // Tách thành mảng 2 chiều
var lyricsArray = [];

// Tách từng từ trong mỗi dòng và lưu vào mảng hai chiều
lyricsLines.forEach((line) => {
  var words = line.split(" ");
  lyricsArray.push(words);
});

var lyricsElement = document.getElementById("lyrics");
var rowIndex = 0;
var checkRow = 2;
function showTwoLines() {
  var colIndex = 0;

  function addWord() {
    var currentWord = lyricsArray[rowIndex][colIndex];
    if (currentWord !== undefined) {
      var wordElement = document.createElement("span");
      wordElement.textContent = currentWord;
      wordElement.classList.add("word");
      lyricsElement.appendChild(wordElement);
      if (colIndex !== lyricsArray[rowIndex].length - 1) {
        lyricsElement.appendChild(document.createTextNode(" "));
      }
      colIndex++;
      // Kích hoạt hiệu ứng khi một từ mới được thêm vào
      setTimeout(() => {
        wordElement.style.opacity = "1";
        addWord(); // Gọi lại hàm để thêm từ tiếp theo
      }, 100); // Thời gian delay giữa các từ
    } else {
      colIndex = 0;
      rowIndex++;
      if (rowIndex !== lyricsArray.length && rowIndex < checkRow) {
        lyricsElement.appendChild(document.createElement("br")); // Thêm dòng mới
        setTimeout(addWord, 500); // Thời gian delay giữa các dòng
      } else {
        setTimeout(clearAndShowNextTwoLines, 500); // Xóa và hiển thị hai dòng tiếp theo sau khi hiển thị hai dòng
      }
    }
  }

  addWord(); // Bắt đầu thêm từng từ
}

function clearAndShowNextTwoLines() {
  checkRow += 2;
  lyricsElement.innerHTML = ""; // Xóa nội dung
  setTimeout(showTwoLines, 0); // Hiển thị hai dòng tiếp theo
}

setTimeout(() => {
  showTwoLines();
}, 0);
