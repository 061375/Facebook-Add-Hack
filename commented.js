/// TODO merge these into one function

// find all the sponsored ads
function killads()
{
  let ads = document.querySelectorAll(".sponsored_ad");
  // loop and hide
  for(let i=0;i<ads.length;i++)
  {
    ads[i].style.display = 'none'; // hide the add ... old version removed the nodes but they were replaced immediatly...this works
  }
}
// kill all the followy garbage that's not typically related to your friend traffic
function killfollow()
{
  let test = document.querySelectorAll(".x1fey0fg");
  for(let i=0;i<test.length;i++)
  {
    if(test[i].innerHTML=="Follow"){
      test[i].closest(".x1n2onr6").style.display = 'none'; // hide the node ... old version removed the nodes but they were replaced immediatly...this works
    }
  } 
}
// as the use scrolls hide any now junk as it comes up
document.addEventListener("scroll",()=>{killads();killfollow();})
