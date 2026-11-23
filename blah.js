async function fetchLastCommitDate(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
  const commits = await response.json();
  
  const rawDate = commits[0].commit.committer.date;

  lastCommitDate = new Date(rawDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Run anything that uses lastCommitDate here, after the fetch completes
  return lastCommitDate;
}

fetchLastCommitDate('MLByrne232', 'mlbyrne232.github.io').then(x=>{
	const paragraph = document.createElement("p");
	paragraph.textContent = `Last updated ${x}`;
	document.body.querySelector("footer").appendChild(paragraph);
})

