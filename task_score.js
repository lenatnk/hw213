// Для расчета создайте переменные, которые будут хранить баллы по каждому модулю, 
// переменную, которая будет рассчитывать среднее значение по всем модулям.
let introductionScore = 10;
let gitScore = 15;
let jsScore = 20;
let totalScore = introductionScore + gitScore + jsScore;
let averageScore = totalScore / 3;
console.log(`Средний балл студента за домашние задания равен ${averageScore} баллам.`)

// Добавьте переменные с именем и фамилией студента и также добавьте их в вывод к количеству баллов в консоли.
let studentName = "Elena";
let studentSurname = "Tonenkova";
let student = studentName + " " + studentSurname;
console.log(`Средний балл ${student} за домашние задания равен ${averageScore} баллам.`)