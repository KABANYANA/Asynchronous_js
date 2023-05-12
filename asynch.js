// Write an asynchronous function that accepts a 
// message string and a delay time in milliseconds. 
// The function should log the message to the console after 
// the specified delay time.



  async function delayMessage(mess,delTime){
      await new Promise(resolve=>setTimeout(resolve, delTime))
console.log(mess)
  }
 delayMessage("Hello Joyeuse, you are cute!", 4000); 

  
// You have an array of 
// user IDs and a function getUserData(id) that 
// returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data 
// for each user ID one by one, in sequence.
class getNewUsers{}


  async function fetchData(users){
      for (const id of users){
const newUsers = await getNewUsers(id)
// console.log(newUsers)
      }
  }
//  const users =[23,45,67,89]
// fetchData(users)
    



// You have an asynchronous 
// function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects
//  if there's an error. Write a function that calls performTask() 
//  and logs a custom success message if the task is successful, 
//  and a custom error message if there's an error.

async function execution() {
    try {
      await performTask();
      console.log("Task completed successfully!");
    } catch (error) {
      console.error("An error occurred while performing the task:", error);
    }
  }
  execution();
