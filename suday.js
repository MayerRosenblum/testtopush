const today = new Date();
const dayOfWeek = today.getDay(); // get the current day of the week (0 for Sunday, 6 for Saturday)
const sunday = new Date(today); // create a new Date object with today's date
sunday.setDate(today.getDate() - dayOfWeek); // subtract the current day of the week to get the previous Sunday

console.log(sunday); // this will give you the Sunday of this week