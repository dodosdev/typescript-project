interface User {
	name: string;
	age: number;
	site: object;
}

const user: User = {
	name: "포도빛",
	age: "20", // 오류가 발생해야 함!
	site: {
		blog: "https://phodobit.kr",
		github: "https://github.com/smartse0k",
	}
}

console.log(user);