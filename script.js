//Part 1 looping and arrays assignment 

for ( var i = 1000; i >= 0 ; i-=2 )
{
 console.log(i);
}

 for (var i = 0;  i <= 10000; i++)
{
  if  (i === 2500)
  {
     alert ('You are 1/4 of the way there');
  } 
  if ( i === 5000)
  {
     alert ('You are halfway there!');
  }
  if (i === 10000)
  {
     alert('The loop is done');
  }
  
}

   

//Part 2 of Looping and Arrays assignment 

var tvShows= ['it crowd', 'inventing anna', 'the office', 'friends', 'how i met your father',];
for (i = 0; i < 5;i++){
 console.log('My #1 favorite tv show is ' + tvShows[3]);
 
 console.log('My #2 favorite tv show is '+tvShows[0]);
 
 console.log('My #3 favorite tv show is '+tvShows[1]);
 
 console.log('My #4 favortie tv show is '+ tvShows[2]);

 console.log('My #5 favorite tv show is '+ tvShows[4]);
  break;
}