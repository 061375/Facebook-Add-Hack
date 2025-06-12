// add specific names of friends, relatives or groups to remove
var FBFRIENDS_TO_REMOVE = [];

// find all the sponsored ads
function killads() {
    let ads = document.querySelectorAll(".sponsored_ad");
    // loop and hide
    for (let i = 0; i < ads.length; i++) {
        ads[i].style.display = 'none'; // hide the add ... old version removed the nodes but they were replaced immediatly...this works
    }
}
// kill all the followy garbage that's not typically related to your friend traffic
function killfollow() {
    let test = document.querySelectorAll(".x1fey0fg");
    for (let i = 0; i < test.length; i++) {
        if (test[i].innerHTML == "Follow") {
            test[i].closest(".x1n2onr6").style.display = 'none'; // hide the node ... old version removed the nodes but they were replaced immediatly...this works
        }
    }
}
function killjoin() {
    let test = document.querySelectorAll(".x1fey0fg");
    for (let i = 0; i < test.length; i++) {
        if (test[i].innerHTML == "Join") {
            test[i].closest(".x1yztbdb.x1n2onr6.xh8yej3.x1ja2u2z").style.display = 'none'; // hide the node ... old version removed the nodes but they were replaced immediatly...this works
        }
    }
}
function killFriends(names = null) {
    // no names ... no reason to run this
    if (null == names || names.length == 0)
        return;
    let test = document.querySelectorAll(".html-span.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1hl2dhg.x16tdsg8.x1vvkbs");
    for (let i = 0; i < test.length; i++) {
        if (names.indexOf(test[i].innerText) > -1) {
            test[i].closest(".x1yztbdb.x1n2onr6.xh8yej3.x1ja2u2z").style.display = 'none'; // hide the node ... old version removed the nodes but they were replaced immediatly...this works
        }
    }
}
// as the use scrolls hide any now junk as it comes up
document.addEventListener("scroll", () => {
    killads();
    killfollow();
    killjoin();
    killFriends(FBFRIENDS_TO_REMOVE);
});
