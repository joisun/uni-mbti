import INTP from "@/assets/charactors/analysts/intp.svg"
import ENTP from "@/assets/charactors/analysts/entp.svg"
import ENTJ from "@/assets/charactors/analysts/entj.svg"
import INTJ from "@/assets/charactors/analysts/intj.svg"
import ENFP from "@/assets/charactors/diplomats/campaigner.svg"
import ENFJ from "@/assets/charactors/diplomats/protagonist.svg"
import INFJ from "@/assets/charactors/diplomats/advocate.svg"
import INFP from "@/assets/charactors/diplomats/mediator.svg"
import ISTP from "@/assets/charactors/explorers/virtuoso.svg"
import ESTP from "@/assets/charactors/explorers/entrepreneur.svg"
import ISFP from "@/assets/charactors/explorers/adventurer.svg"
import ESFP from "@/assets/charactors/explorers/entertainer.svg"
import ISTJ from "@/assets/charactors/sentinels/logistician.svg"
import ESTJ from "@/assets/charactors/sentinels/executive.svg"
import ESFJ from "@/assets/charactors/sentinels/consul.svg"
import ISFJ from "@/assets/charactors/sentinels/defender.svg"


export type MBTI_KEYS = "INTJ" | "INTP" | "ENTJ" | "ENTP" | "INFJ" | "INFP" | "ENFJ" | "ENFP" | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ" | "ISTP" | "ISFP" | "ESTP" | "ESFP"
export type MBTI_RECORD = {
	charactor : string
	summary : string,
	details : { title : string, detail : string }[]
	jobs : string[]
	strengths : string[]
	weaknesses : string[]
	famous_people : string[]
	relationships : string
	personal_growth : string
	src : string
}

export type MBTI_TYPE = {
	[x in MBTI_KEYS]: MBTI_RECORD;
};
export const MBTI_REPORT_DATA : MBTI_TYPE = {
	'INTJ': {
		charactor: '建筑师',
		src: INTJ,
		summary: '富有想象力和战略性思维，一切皆在计划之中.',
		details: [
			{
				'title': '高处不胜寒',
				'detail': '作为最稀有的人格类型之一，建筑师 (INTJ) 非常了解这一点。理性而机智的建筑师以自己的思考能力为傲，更不用说他们看穿虚伪和做作的神奇本领了。'
			},
			{
				'title': '开拓精神',
				'detail': '建筑师质疑一切。在追求更高效的工作方式时，他们不害怕冒险和挑战传统。'
			},
			{
				'title': '意志坚定',
				'detail': '建筑师希望成功，真正有效的想法是他们追求的目标。他们将全部精力投入到实现理想中。'
			},
			{
				'title': '对知识的渴望',
				'detail': '建筑师既是大胆的梦想家，也是对人性持批判态度的观察者。他们推崇智慧和意志力。'
			}
		],
		jobs: ['科学家', '工程师', '程序员', '学者', '分析师'],
		strengths: ['战略性思维', '独立性强', '高效解决问题能力', '深思熟虑', '善于分析'],
		weaknesses: ['对情感理解不足', '社交能力弱', '对细节不够关注', '难以接受不合理之事'],
		relationships: '建筑师通常表现出较强的独立性，可能在与人沟通时显得冷淡。他们在亲密关系中希望拥有智力上的交流，但可能需要多一些情感的理解和关怀。',
		famous_people: ['艾萨克·牛顿', '阿尔伯特·爱因斯坦', '马克·扎克伯格'],
		personal_growth: '尝试练习同理心，增进与他人的情感连接，多参与社交活动，提升人际交往能力。',
	},
	'INTP': {
		charactor: '思考者',
		src: INTP,
		summary: '热衷探索抽象理论与新概念.',
		details: [
			{
				'title': '创新的思想家',
				'detail': '思考者 (INTP) 以独特的方式看待世界，善于提出新观点和创意。'
			},
			{
				'title': '喜爱独立思考',
				'detail': '思考者享受独自深入分析和探索复杂问题的过程，他们乐于挑战传统理论。'
			},
			{
				'title': '求知欲强',
				'detail': '思考者热爱知识，不断寻找提升自我的机会，探索未知的领域。'
			},
			{
				'title': '情感淡漠',
				'detail': '在感情表达上，思考者可能显得较为疏离，更关注逻辑和理性的分析。'
			}
		],
		jobs: ['程序员', '科学家', '哲学家', '数据分析师', '工程师'],
		strengths: ['逻辑思维', '创造性', '独立', '灵活', '好奇心'],
		weaknesses: ['缺乏行动力', '难以处理日常琐事', '可能显得冷漠', '人际交往能力较弱'],
		relationships: '思考者在关系中通常比较倾向于理智交流，可能缺乏情感温度，但在深入的讨论中能够表现出极高的洞察力。',
		famous_people: ['阿尔伯特·爱因斯坦', '查尔斯·达尔文', '苏格拉底'],
		personal_growth: '努力提升情感表达，参与社交以扩展视野，积极实践更加务实的决策。'
	},
	'ENTJ': {
		charactor: '指挥官',
		src: ENTJ,
		summary: '自然的领导者，擅长制定和执行计划.',
		details: [
			{
				'title': '战略家',
				'detail': '指挥官 (ENTJ) 擅长制定长期计划并领导团队实现目标。他们能够清晰地看出成功的路径。'
			},
			{
				'title': '果断性',
				'detail': '指挥官在重大决策中表现出果断，能够快速分析形势并做出选择。'
			},
			{
				'title': '自信',
				'detail': '无论在何种情况下，指挥官总是表现出自信，他们也激励他人追随他们的步伐。'
			},
			{
				'title': '能量驱动',
				'detail': '指挥官常常充满激情和动力，他们努力推展项目并带动团队成员一起前进。'
			}
		],
		jobs: ['企业高管', '律师', '项目经理', '销售经理', '顾问'],
		strengths: ['领导能力', '组织能力强', '适应能力强', '高效', '远见卓识'],
		weaknesses: ['倾向于控制', '缺乏耐心', '直言不讳可能伤人', '忽视他人感受'],
		relationships: '指挥官在关系中往往表现出强烈的推动力，喜欢在各方面引领，但可能忽视伴侣的感受和需求。',
		famous_people: ['哈里·杜鲁门', '临床心理学家'], // 此处可以添加适合的名人
		personal_growth: '练习倾听他人意见，学习柔和的表达方式，了解自己的情感，并寻找生活以外的成就感。',
	},
	'ENTP': {
		charactor: '辩论家',
		src: ENTP,
		summary: '机智且有创造力，挑战常规观点.',
		details: [
			{
				'title': '头脑灵活',
				'detail': '辩论家 (ENTP) 以敏锐的思维和迅速的反应能力而著称，始终乐于挑战他人。'
			},
			{
				'title': '激发灵感',
				'detail': '辩论家能够激发他人的创造力，喜欢与智者交谈以产生新的理念。'
			},
			{
				'title': '追求新奇',
				'detail': '辩论家对新想法充满热情，享受探索的新领域和多样化的方案。'
			},
			{
				'title': '面对冲突',
				'detail': '辩论家善于处理冲突和争议，看到不同的观点并乐于进行辩论。'
			}
		],
		jobs: ['企业家', '创新者', '法律顾问', '市场经理', '科技开发者'],
		strengths: ['创造性思维', '快速反应能力', '乐于挑战', '适应性强', '聪明机智'],
		weaknesses: ['可能显得肤浅', '不耐烦', '难以坚持长久计划', '容易冲动'],
		relationships: '辩论家在感情中展现出极强的吸引力，然而他们可能在深层交流中遇到困难。',
		famous_people: ['本杰明·富兰克林', '托马斯·爱迪生', '史蒂夫·乔布斯'],
		personal_growth: '培养深层次交流的能力，提升耐心和专注度，更加注重听取他人意见。'
	},
	'INFP': {
		charactor: '调停者',
		src: INFP,
		summary: '富有理想和同情心，追求内心的和平与真理.',
		details: [
			{
				'title': '理想主义者',
				'detail': '调停者 (INFP) 对未来充满希望，并努力为这个世界带来积极的改变。他们无法接受虚伪和不公正。'
			},
			{
				'title': '寻求意义',
				'detail': '调停者总是在寻找生命深层次的意义，渴望与他人建立深厚的情感联系。'
			},
			{
				'title': '富有同情心',
				'detail': '调停者非常关心他人的感受，常常将他人的需求置于自己之上。'
			},
			{
				'title': '内心的矛盾',
				'detail': '虽然拥有美好的理想，但调停者时常感到与现实的矛盾，产生焦虑和不安。'
			}
		],
		jobs: ['心理咨询师', '作家', '社工', '艺术家', '教育工作者'],
		strengths: ['高度同情心', '富有创造力', '深思熟虑', '情感丰富', '忠诚'],
		weaknesses: ['过于理想主义', '情绪波动', '行动迟缓', '容易感到孤独'],
		relationships: '调停者具有强烈的同情心，在人际关系中渴求深情的连接。他们倾向于投身于帮助他人，但在处理冲突时可能缺乏果断。',
		famous_people: ['威廉·莎士比亚', '我是山姆', 'J.R.R. 托尔金'],
		personal_growth: '关注自己的情感需求，寻求心理健康支持，加强决策能力，多尝试克服恐惧感，接纳挑战。',
	},
	'ENFP': {
		src: ENFP,
		charactor: '活动家',
		summary: '极富创意，热情洋溢，关注人类灵魂的多样性.',
		details: [
			{
				'title': '创新者',
				'detail': '活动家 (ENFP) 对新想法和新体验充满好奇，他们欣赏每个人的独特性。'
			},
			{
				'title': '人际交往能力',
				'detail': '活动家对社交场合的敏感度极高，能够轻松与不同背景的人建立联系。'
			},
			{
				'title': '情感驱动',
				'detail': '活动家通过感情和直觉引导自己，倾向于关注周围人的情感需求。'
			},
			{
				'title': '灵活应变',
				'detail': '活动家面对变化时，他们总能快速适应，乐于尝试新事物和新环境。'
			}
		],
		jobs: ['市场营销', '公共关系', '顾问', '演艺', '创业者'],
		strengths: ['创造力', '强烈的热情', '适应性强', '善于交流', '深刻的同理心'],
		weaknesses: ['容易分心', '计划性不足', '情绪化', '难以坚持'],
		relationships: '活动家在人际交往中经常受到欢迎，他们渴望有趣而具有启发性的关系，但有时可能忽视深层的情感问题。',
		famous_people: ['奥普拉·温弗瑞', '罗宾·威廉姆斯', '马克·吐温'],
		personal_growth: '加强自我管理能力，练习专注，寻找平衡，充分利用自身的热情来实现目标。',
	},
	'ISFJ': {
		src: ISFJ,
		charactor: '守护者',
		summary: '忠诚而可靠，注重传统和责任感.',
		details: [
			{
				'title': '贴心的朋友',
				'detail': '守护者 (ISFJ) 总是愿意伸出援手，关心他人并为身边的人提供支持。'
			},
			{
				'title': '注重细节',
				'detail': '守护者在完成任务时非常注重细节，确保每个步骤都达到高标准。'
			},
			{
				'title': '重视传统',
				'detail': '守护者尊重历史和传统，倾向于关注建立在已有经验基础上的做法。'
			},
			{
				'title': '内向但富有感情',
				'detail': '守护者在日常生活中可能显得内向，但是在情感上却极其丰富和敏感。'
			}
		],
		jobs: ['护士', '教师', '行政助理', '社工', '爱心志愿者'],
		strengths: ['高度责任感', '同情心', '社交能力强', '忠诚', '组织能力'],
		weaknesses: ['不善于处理冲突', '难以拒绝他人', '可能对新事物的接受能力不足', '自我牺牲倾向'],
		relationships: '守护者在关系中非常可靠，关心他人，但他们有时需要学习表达自己的需求。',
		famous_people: ['德母·特蕾莎', '米歇尔·奥巴马', '安妮·弗兰克'],
		personal_growth: '关注自我的感受，学习说“不”，多参与个人感兴趣的活动，以实现更好的个人成长。',
	},
	'ISTJ': {
		src: ISTJ,
		charactor: '检查员',
		summary: '务实，可靠，注重实现最终目标.',
		details: [
			{
				'title': '责任感强',
				'detail': '检查员 (ISTJ) 对自己的责任感非常强，始终坚持原则，努力追求结果。'
			},
			{
				'title': '重视规则与结构',
				'detail': '检查员对规则和程序非常敏感，倾向于依赖已有的系统和流程来指导行动。'
			},
			{
				'title': '现实主义者',
				'detail': '检查员看重事实和证据，通常倾向于采取务实的态度来处理问题。'
			},
			{
				'title': '忠诚可靠',
				'detail': '无论对待工作还是朋友，检查员都是值得信赖的，给人一种稳定的感觉。'
			}
		],
		jobs: ['审计师', '公务员', '会计', '项目经理', '研究人员'],
		strengths: ['组织能力', '遵守承诺', '逻辑分析能力', '务实', '耐心'],
		weaknesses: ['过于固执', '对变化不适应', '缺乏灵活性', '有时显得冷漠'],
		relationships: '检查员在关系中非常忠诚，但可能在表达情感上不够积极，容易让人感到疏远。',
		famous_people: ['乔治·华盛顿', '赫尔曼·梅尔维尔', '还天乐'],
		personal_growth: '尝试更加开放地对待新观点，保持灵活性，适时表达内心的感受，增强人际关系。',
	},
	'ESFJ': {
		src: ESFJ,
		charactor: '社交者',
		summary: '外向、友善，热爱与他人互动.',
		details: [
			{
				'title': '社交天才',
				'detail': '社交者 (ESFJ) 擅长交际，他们总是努力让每个人都感到舒适和受欢迎。'
			},
			{
				'title': '关注他人',
				'detail': '社交者自然关心他人的需求，愿意为朋友和家人的幸福付出努力。'
			},
			{
				'title': '维护和谐',
				'detail': '社交者重视人际关系的和谐，努力避免冲突并促进团队合作。'
			},
			{
				'title': '组织能力强',
				'detail': '社交者在计划和管理社交活动方面表现出色，总是能够把事情安排得井井有条。'
			}
		],
		jobs: ['活动策划', '公共关系', '护理', '教育者', '销售代表'],
		strengths: ['善于人际沟通', '乐于助人', '组织能力强', '积极乐观', '团队合作精神'],
		weaknesses: ['过于迎合他人需求', '难以说“不”', '对冲突的恐惧', '可能忽视自我需求'],
		relationships: '社交者在群体中常显得非常温暖，他们在亲密关系中的关心和照顾使人感到愉悦。',
		famous_people: ['巴拉克·奥巴马', '詹妮弗·安妮斯顿', '曾轶可'],
		personal_growth: '应谨慎对待自我需求，学会适时拒绝，以避免情绪负担，增强独立性。',
	},
	'ESTJ': {
		src: ESTJ,
		charactor: '管理者',
		summary: '以果断和组织著称，全面掌控事物的进展.',
		details: [
			{
				'title': '强大的领导能力',
				'detail': '管理者 (ESTJ) 在团队中自然充当领袖角色，他们能够激励他人并带领团队向目标迈进。'
			},
			{
				'title': '高效务实',
				'detail': '管理者关注实用性，总是寻找更有效的解决方案和改进措施。'
			},
			{
				'title': '重视秩序与结构',
				'detail': '管理者喜欢清晰的结构和规则，以确保团队的顺利运作。'
			},
			{
				'title': '直接而真诚',
				'detail': '无论是在工作还是在日常生活中，管理者总是以直接和真实的方式与他人沟通。'
			}
		],
		jobs: ['公司经理', '军队指挥官', '法官', '运营主管', '警察'],
		strengths: ['高效组织者', '自然的领导者', '果断', '承诺和责任感', '实践导向'],
		weaknesses: ['可能过于专制', '情感表达欠缺', '不善于处理非理性冲突', '缺乏灵活性'],
		relationships: '管理者在处理关系时直接而真诚，但他们的专制行为有时可能让他人感到压迫。',
		famous_people: ['安吉拉·默克尔', '约瑟夫·史大林', '罗纳德·里根'],
		personal_growth: '学习放下对控制的执念，练习倾听和接受反馈，保持开放的心态。',
	},

	'ISFP': {
		src: ISFP,
		charactor: '冒险家',
		summary: '个人主义者，追求自我表达与艺术.',
		details: [
			{
				'title': '热爱自由',
				'detail': '冒险家 (ISFP) 享受即兴发挥和自由选择，让他们的生活充满色彩。'
			},
			{
				'title': '艺术家',
				'detail': '冒险家在艺术和创作方面有独特的天赋，通过作品表达内心世界。'
			},
			{
				'title': '个人主义',
				'detail': '冒险家尊重个体自由，倾向于做出与众不同的选择，不愿意轻易 conform。'
			},
			{
				'title': '敏感与直觉并存',
				'detail': '尽管外表显得轻松随意，但冒险家内心对情感和氛围极为敏感。'
			}
		],
		jobs: ['艺术家', '设计师', '音乐家', '摄影师', '护肤品开发人员'],
		strengths: ['创造力', '敏感性', '与众不同', '自我表达能力强', '适应能力强'],
		weaknesses: ['内向过度', '避免冲突', '优柔寡断', '难以长期关注'],
		relationships: '冒险家在关系中表现出深深的情感，但有时可能因为对冲突的逃避而感到不安、孤单.',
		famous_people: ['帕布罗·毕加索', '奥黛丽·赫本', '珍妮·摩根'],
		personal_growth: '鼓励自己在安全的环境中表达真实情感，增强自我反思能力，学会设定期望与边界。',
	},

	'ESFP': {
		src: ESFP,
		charactor: '表演者',
		summary: '社交达人，热衷于享受生活的每一刻.',
		details: [
			{
				'title': '生活的乐观主义者',
				'detail': '表演者 (ESFP) 充满活力，享受每一个瞬间，乐于分享欢乐与快乐。'
			},
			{
				'title': '擅长社交',
				'detail': '表演者容易与人建立友谊，善于与他人互动和沟通。'
			},
			{
				'title': '高情商',
				'detail': '表演者对他人的情感十分敏感，能够理解和照顾身边人的需要。'
			},
			{
				'title': '冒险精神',
				'detail': '表演者热衷于尝试新体验，总是寻求刺激和有趣的活动。'
			}
		],
		jobs: ['演员', '主持人', '教师', '旅游顾问', '活动策划'],
		strengths: ['活力与热情', '社交能力强', '乐于分享', '高度适应能力', '友善'],
		weaknesses: ['容易分心', '成熟度不足', '有时缺乏自制力', '短期思维'],
		relationships: '表演者在人际关系中通常显得阳光灿烂，与他人互动时充满乐趣，但可能在复杂情感中显得脆弱。',
		famous_people: ['玛丽莲·梦露', '辣妹组合', '卓别林'],
		personal_growth: '努力培养耐心和持久性，学会设定目标，以使自己的能力得到更好的发挥。'
	},
	'ISTP': {
		src: ISTP,
		charactor: '技匠',
		summary: '非常独立且务实，喜欢解决问题.',
		details: [
			{
				'title': '实用主义者',
				'detail': '技匠 (ISTP) 注重问题的实际解决方案，对操作和工程有着自然的兴趣。'
			},
			{
				'title': '爱好动手',
				'detail': '技匠善于动手操作，常常通过实践学习并解决问题。'
			},
			{
				'title': '冷静分析',
				'detail': '技匠面对紧急情况时总是保持冷静，能够迅速做出判断。'
			},
			{
				'title': '自由精神',
				'detail': '技匠重视个人自由，不愿意被束缚于繁琐的规则之中。'
			}
		],
		jobs: ['机械师', '工程师', '程序员', '建筑工人', '警察'],
		strengths: ['动手能力强', '迅速反应', '冷静', '高效解决问题', '独立性高'],
		weaknesses: ['不善于团队合作', '难以表达情感', '可能显得冷漠', '抗拒规则'],
		relationships: '技匠在与他人建立关系时偏向于独立，情感表达上略显不足，但一旦建立信任，会表现出极高的忠诚。',
		famous_people: ['斯蒂夫·沃兹尼亚克', '安东尼·霍普金斯', '亚历克斯·哈里斯'],
		personal_growth: '努力提升与他人的沟通能力，同时注重内心情感的表达，尝试以不同的方式来面对情感问题。'
	},
	'ESTP': {
		src: ESTP,
		charactor: '发起者',
		summary: '充满活力，乐于社交，享受冒险.',
		details: [
			{
				'title': '好奇心强',
				'detail': '对世界充满好奇，渴望体验新事物。'
			},
			{
				'title': '行动导向',
				'detail': '热衷于实际行动，而非长时间的理论思考。'
			},
			{
				'title': '社交达人',
				'detail': '擅长与不同背景的人建立联系。'
			},
			{
				'title': '乐于冒险',
				'detail': '喜欢挑战和刺激，易于享受生活。'
			}
		],
		jobs: ['销售代表', '运动员', '公关专家', '消防员'],
		strengths: ['社交能力', '快速反应', '乐观', '决策果断'],
		weaknesses: ['易于分心', '长期规划能力不足', '缺乏耐心'],
		relationships: '在感情中充满激情，但可能容易忽视他人的情感需求。',
		famous_people: ['玛丽莲·梦露', '詹姆斯·迪恩'],
		personal_growth: '注意倾听他人，并在推动自己冒险的同时关注伴侣的需求。',
	},
	'INFJ': {
		src: INFJ,
		charactor: '提倡者',
		summary: '富有理想和同情心，渴望对世界产生积极的影响.',
		details: [
			{
				'title': '深思熟虑',
				'detail': 'INFJ通常会对问题进行深入思考，寻找深层的意义。'
			},
			{
				'title': '强烈的同情心',
				'detail': '他们能够敏锐地理解他人的情感和需求。'
			},
			{
				'title': '理想主义者',
				'detail': 'INFJ渴望通过自己的行动来改善社会，以实现更高的目标。'
			},
			{
				'title': '创造性',
				'detail': '他们通常在艺术和创意领域表现出色，能通过独特的视角看待事物。'
			}
		],
		jobs: ['心理咨询师', '社会工作者', '作家', '艺术家', '教育工作者'],
		strengths: ['同情心', '洞察力', '理想主义', '高度创造力'],
		weaknesses: ['过于理想主义', '情绪波动', '难以拒绝他人', '可能被视为孤僻'],
		relationships: 'INFJ在关系中非常投入，渴望深入的情感连接，但在冲突中可能表现得较为脆弱。',
		famous_people: ['马丁·路德·金', '特尔斯·阿尔弗雷德·阿德勒'],
		personal_growth: '学习更好地表达自己的情感，同时保持对他人的理解与支持。'
	},
	'ENFJ': {
		src: ENFJ,
		charactor: '主人',
		summary: '具有人际沟通能力的领导者，关心他人的需求和情感，渴望提升团队的整体表现.',
		details: [
			{
				'title': '强大的领导能力',
				'detail': 'ENFJ能够激励并引导他人，通常在团队中担任领导角色。'
			},
			{
				'title': '关注他人',
				'detail': '他们对他人的感受非常敏感，努力促进和谐的社交环境。'
			},
			{
				'title': '理想主义',
				'detail': 'ENFJ有追求更高理想的倾向，努力为他人提供支持与帮助。'
			},
			{
				'title': '充满热情',
				'detail': '他们以积极的态度感染周围的人，善于进行社交互动。'
			}
		],
		jobs: ['教师', '顾问', '公共关系专家', '心理学家', '社交活动策划人'],
		strengths: ['领导能力', '社交能力', '洞察力', '有同理心'],
		weaknesses: ['容易感到被压垮', '过于理想主义', '可能过于关注他人而忽略自我'],
		relationships: 'ENFJ在感情中非常投入，倾向于建立深厚且长期的关系，善于理解和满足伴侣的需求。',
		famous_people: ['纳尔逊·曼德拉', '麦当娜'],
		personal_growth: '学习设定个人界限，确保自己也能得到支持与关怀。'
	}
};