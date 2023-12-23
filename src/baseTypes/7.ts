/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days{
  Sunday = "Sunday",
  Monday="Monday",
  Tuesday="Tuesday",
  Wednesday="Wednesday",
  Thursdat ="Thursday",
  Friday="Friday",
  Saturday="Saturday",

}
function isWeekend (days:Days):boolean{
  return days === Days.Saturday||days === Days.Sunday
}
