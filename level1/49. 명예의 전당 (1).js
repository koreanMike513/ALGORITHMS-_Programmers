// 명예의 전당 (1)

function solution(k, score) {
	const result = [];
	const hallOfFame = [];

	for (let i = 0; i < score.length; i++) {
		hallOfFame.push(score[i]);
		hallOfFame.sort((a, b) => b - a);
		
		if (hallOfFame.length > k) hallOfFame.pop();
		result.push(hallOfFame[hallOfFame.length - 1]);
	}

	return result;
}
