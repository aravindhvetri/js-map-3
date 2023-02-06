//using map method

const users =[
{
	first_name:"Mike",
	location:"London",
},
{
	first_name:"Tim",
	location:"US",
},
{
	first_name:"John",
	location:"Australia",
}
];
  let userVal=users.map(function(user){
	  return `${user.first_name} lives in ${user.location}`;
  })
  console.log(userVal);