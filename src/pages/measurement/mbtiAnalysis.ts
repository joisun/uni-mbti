import { testType } from "@/consts"
type ScoreType = { E_I : number, S_N : number, T_F : number, J_P : number, A_T : number, }
export type AnalysisResult = {
	E_I : string, S_N : string, T_F : string, J_P : string, A_T : string,
	MBTI_Type : string
}
function mbtiAnalysis(scores : ScoreType, type : testType) {
	let questions : ScoreType

	// 根据测试类型设置每个维度的题目数
	switch (type) {
		case testType.BASE:
			questions = { E_I: 10, S_N: 10, T_F: 10, J_P: 10, A_T: 10 };
			break;
		case testType.STANDARD:
			questions = { E_I: 20, S_N: 20, T_F: 20, J_P: 20, A_T: 10 };
			break;
		case testType.PRO:
			questions = { E_I: 50, S_N: 50, T_F: 50, J_P: 50, A_T: 10 };
			break;
		default:
			return JSON.stringify({ error: 'Invalid test type provided.' });
	}

	const analysisResult : AnalysisResult = {
		E_I: '', S_N: '', T_F: '', J_P: '', A_T: '',
		MBTI_Type: ''
	};

	for (const ds in scores) {
		const dimension = ds as keyof ScoreType
		const score = scores[dimension];
		const maxScore = questions[dimension] * 5; // 每道题最高5分
		const halfMax = maxScore / 2;

		// 判断偏好
		if (score > halfMax) {
			analysisResult[dimension] = '偏向 ' + dimension.split('_')[0]; // 获取外向E、内向I等关键字
		} else if (score < halfMax) {
			analysisResult[dimension] = '偏向 ' + dimension.split('_')[1];
		} else {
			analysisResult[dimension] = '中立';
		}
	}

	// 组装最终类型
	let mbtiType = '';
	mbtiType += scores['E_I'] > (questions['E_I'] * 5) / 2 ? 'E' : 'I'; // 判断E或I
	mbtiType += scores['S_N'] > (questions['S_N'] * 5) / 2 ? 'S' : 'N'; // 判断S或N
	mbtiType += scores['T_F'] > (questions['T_F'] * 5) / 2 ? 'T' : 'F'; // 判断T或F
	mbtiType += scores['J_P'] > (questions['J_P'] * 5) / 2 ? 'J' : 'P'; // 判断J或P
	mbtiType += scores['A_T'] > (questions['A_T'] * 5) / 2 ? '-A' : '-T'; // 判断A或T

	analysisResult.MBTI_Type = mbtiType;

	return analysisResult
}


export default mbtiAnalysis;