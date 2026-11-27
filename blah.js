async function fetchLastCommitDate(owner, repo) {
	const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
	const commits = await response.json();

	console.log(commits);

	const rawDate = commits[0].commit.committer.date;

	lastCommitDate = new Date(rawDate).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	return lastCommitDate;
}

// we first try to grab the last date
fetchLastCommitDate('MLByrne232', 'mlbyrne232.github.io').then(x=>{
	const paragraph = document.createElement("p");
	//paragraph.classList.add("topborder"); // this would add a top border to the element we're adding
	paragraph.textContent = `Last updated ${x}`;
	document.body.querySelector("footer").appendChild(paragraph);
})

// no other attempt possible

