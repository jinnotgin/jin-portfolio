import projectsData from "./projects.json";

export function getProjectKey(slug) {
	return `/${slug}`;
}

export function getProjectItems(slug) {
	return projectsData[getProjectKey(slug)];
}

export function getProjectName(projectItems) {
	return projectItems?.find((item) => item.type === "name")?.content;
}

export function getProjectOrder() {
	return projectsData.projectOrder ?? [];
}

export function getAdjacentProjectLinks(slug) {
	const currentKey = getProjectKey(slug);
	const projectOrder = getProjectOrder();
	const currentIndex = projectOrder.indexOf(currentKey);
	const maxIndex = projectOrder.length - 1;

	const leftArrow = {
		text: "Return Home",
		to: "/",
	};

	const rightArrow = {
		text: "Return Home",
		to: "/",
	};

	if (currentIndex === -1) {
		return { leftArrow, rightArrow };
	}

	if (currentIndex > 0) {
		leftArrow.text = "Previous Project";
		leftArrow.to = `/project${projectOrder[currentIndex - 1]}`;
	}

	if (currentIndex < maxIndex) {
		rightArrow.text = "Next Project";
		rightArrow.to = `/project${projectOrder[currentIndex + 1]}`;
	}

	return { leftArrow, rightArrow };
}
