/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 
//let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
 function solve(boardString) {
  let arr = boardString.split("");
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, 9);
    res.push(chunk);
  }
  function result(res){
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      if(res[i][j] === '-') {
        for(let k = 1; k <= 9; k++) {
          if(correctNumber(res,i,j,String(k))){
            res[i][j] = String(k);
            if(result(res)){
              return true;
            } else {
              res[i][j] = "-";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
function correctNumber(res, i, j, num) {
for(let z = 0; z < 9; z++){
  if(res[i][z] === num || res[z][j]=== num) {
    return false;
  }
}
return true;
}
result(res);
return res;
}


//let res = solve(boardString);

function arrToString(res) {
  return  res = [].concat(...res).join('');
}
//console.log(arrToString(result));
//let board = arrToString(res)
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(res) {
  let sum = 0;
for(let i = 0; i < res.length; i++) {
sum += Number(res[i]);
} 
if( sum === 405) {
  return true;
} 
return false;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
 function prettyBoard(board) {
  for (let i = 0; i < board.length; i = i + 9) {
    if (i % 27 === 0 && i !== 0) {
      console.log("🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺");
    }
    let resultArr = [];
    resultArr.push(
      board
        .slice(i, i + 3).split("").join(" ")
    );
    resultArr.push(
      board.slice(i + 3, i + 6).split("").join(" ")
    );
    resultArr.push(
      board.slice(i + 6, i + 9).split("").join(" ")
    );
   console.log(resultArr.join(" 🍗 "));
  }
  console.log("🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯");
}
// console.log(prettyBoard(board));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  arrToString,
};
