const filterPage = document.getElementById("filter-page");
const filterSort = document.getElementById("filter-sort");
const feedbackWrapper = document.getElementsByClassName("feedback-wrapper")[0];

const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();

	feedBackGet();
	feedbackWrapper.innerHTML = "";
});

async function feedBackGet() {
	const response = await fetch(
		`http://51.38.232.174:3002/v1/feedbacks?page=0&pageSize=${filterPage.value}&sort=${filterSort.value}`
	);

	const data = await response.json();
	console.log(data);

	for (let i = 0; i < data.length; i++) {
		ticketMaker(
			(category = data[i].category),
			(comments = data[i].comments),
			(description = data[i].description),
			(title = data[i].title),
			(votes = data[i].votes)
		);
	}
	const feedbackItem = document.createElement("div");
	feedbackItem.classList.add("feedback-item");
}
function ticketMaker(category, comments, description, title, votes) {
	const feedbackItem = document.createElement("div");
	feedbackItem.classList.add("feedback-item");
	feedbackWrapper.appendChild(feedbackItem);

	const feedbackVotes = document.createElement("div");
	feedbackVotes.classList.add("feedback-item-votes");
	feedbackItem.appendChild(feedbackVotes);

	// const Aimg = document.createElementNs("http://www.w3.org/2000/svg", `path`);
	// Aimg.setAttribute(
	// 	`d`,
	// 	`M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z`
	// );
	// feedbackVotes.appendChild(Aimg);

	const Aspan = document.createElement("span");
	Aspan.classList.add("text-regular-3");
	Aspan.textContent = votes;
	feedbackVotes.appendChild(Aspan);

	const divIdk = document.createElement("div");
	divIdk.classList.add("feedback-item-text");
	feedbackItem.appendChild(divIdk);

	const titleh3 = document.createElement("h3");
	titleh3.classList.add("heading-3");
	titleh3.textContent = title;
	divIdk.appendChild(titleh3);

	const descriptiontext = document.createElement("p");
	descriptiontext.textContent = description;
	divIdk.appendChild(descriptiontext);

	const feedbackType = document.createElement("div");
	feedbackType.classList.add("feedback-chip");
	feedbackType.classList.add("text-regular-3");
	feedbackType.textContent = `${category}`;
	divIdk.appendChild(feedbackType);

	const feedbackComments = document.createElement("div");
	feedbackComments.classList.add("feedback-item-comments");
	feedbackItem.appendChild(feedbackComments);

	// const Bimg = document.createElementNs("http://www.w3.org/2000/svg", `path`);
	// Bimg.setAttribute(
	// 	`d`,
	// 	`M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z`
	// );
	// feedbackComments.appendChild(Bimg);

	const Bspan = document.createElement("span");
	Bspan.classList.add("text-regular-3");
	Bspan.textContent = comments;
	feedbackComments.appendChild(Bspan);
}
