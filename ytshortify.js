// Creates an observer object which reacts to DOM changes in the document body
watchdog = new MutationObserver(clearShorts)
targetnode = document.body
config = {attributes: true, childList: true, subtree: true}
watchdog.observe(targetnode,config)

// Async wrapper for the remover function
async function clearShorts () {
    console.log("Waiting page to be loaded...")
    await remover()
}

// Removes the shorts section and the shorts button on the left menu
function remover () {

    console.log("Removing short section div...")
    shortsdiv = document.querySelectorAll(".ytd-rich-shelf-renderer")
    shortsdiv.forEach(e => {
        if (e.querySelector("yt-icon") != null) {
            e.remove()
        }
    });

    console.log("Removing short button entry...")
    miniguide = document.querySelectorAll("ytd-mini-guide-entry-renderer")
    miniguide.forEach(e => {
        attr = e.attributes;
        for (a of attr) {
            if (a.value == "Shorts") {
                e.remove()
            }
        }
    })
    console.log("You're good to go!")
}