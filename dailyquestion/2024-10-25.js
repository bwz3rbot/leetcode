/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folders) {
	const checked = [];

	do {
		for (let i = 0; i < folders.length; i++) {
			const folder = folders.pop();
			const subfolders = folder.split("/");
			let checkedHasFolder = false;
			for (const folder of subfolders) {
				if (checked.find(f => f.startsWith(folder) + "/")) {
					checkedHasFolder = true;
				}
			}
			if (!checkedHasFolder) checked.push(folder);
		}
	} while (folders.length);
	return checked;
};
// var removeSubfolders = function (folders) {
// 	folders.sort((a, b) => a.localeCompare(b));
// 	const result = [];
// 	let prev = folders[0];
// 	result.push(prev);
// 	for (let i = 1; i < folders.length; i++) {
// 		const current = folders[i];
// 		if (!current.startsWith(prev + "/")) {
// 			result.push(current);
// 			prev = current;
// 		}
// 	}

// 	return result;
// };
const test1 = removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]);
console.log(test1); // [ '/a', '/c/d', '/c/f' ]
const test2 = removeSubfolders(["/a", "/a/b/c", "/a/b/d"]);
console.log(test2); // [ '/a' ]
const test3 = removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]);
console.log(test3); // [ '/a/b/c', '/a/b/ca', '/a/b/d' ]
