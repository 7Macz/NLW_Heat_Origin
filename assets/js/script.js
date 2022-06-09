const LinksSocialMedia = {
  github: "7Macz",
  youtube: "UCbaBFO9Z7BDaoq4i-Wbg_ng",
  facebook: "bruno.goncalves.50",
  instagram: "bruuno_goncalves",
  twitter: "Bruuno_Gon",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;

    alert(li.children[0].href);
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink..href = data.html_url
    })
}

getGitHubProfileInfos()