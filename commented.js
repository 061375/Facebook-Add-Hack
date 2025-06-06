/**
 * find all the sponsored ads and kill em
 */
function killads()
{
  let ads = document.querySelectorAll(".sponsored_ad");
  // loop and hide
  for(let i=0;i<ads.length;i++)
  {
    ads[i].style.display = 'none'; // hide the add ... old version removed the nodes but they were replaced immediatly...this works
  }
}
/**
 * kill all the followy garbage that's not typically related to your friend traffic
 */
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
/**
 * get rid of groups you have not yet joined. This is the bulk of the crap...If you want to join groups then navigate away and then come back
 */
function killjoin()
{
  let test = document.querySelectorAll(".x1fey0fg");
  for(let i=0;i<test.length;i++)
  {
    if(test[i].innerHTML=="Join"){
      test[i].closest(".x1yztbdb.x1n2onr6.xh8yej3.x1ja2u2z").style.display = 'none'; // hide the node ... old version removed the nodes but they were replaced immediatly...this works
    }
  } 
}
// as the use scrolls hide any now junk as it comes up
document.addEventListener("scroll",()=>{ 
  killads();
  killfollow();
  killjoin();
});
