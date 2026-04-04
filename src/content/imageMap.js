const rawImages = import.meta.glob("../assets/images/*", {
	eager: true,
	import: "default",
});

export const imageMap = Object.fromEntries(
	Object.entries(rawImages).map(([path, value]) => {
		const filename = path.split("/").pop() ?? "";
		const key = filename.replace(/\.[^.]+$/, "");
		return [key, value];
	}),
);
