const ASSETS={hero:'UI素材/hero.webp',states:'UI素材/states.webp',frames:'UI素材/frames.webp'};
const DATA_FILE='送礼大王_礼物数据集_MVP_v1.8.json?v=6';
const fallback={items:[
  {id:'demo-perfume',name:'香水探索礼盒',gift_type:'氛围审美型',category:'香氛与个护',price:[199,599],objects:['亲密关系','熟人朋友'],scenes:['生日','纪念日'],interests:['香氛美妆','穿搭配饰'],styles:['有仪式感','美观'],age:['青年','中年'],taboos:[],reason:'用小容量组合降低选错香味的风险，同时保留逐一尝试的仪式感。',focus:'优先选择可试闻的小容量组合，确认对方是否介意浓香。',send:'用素色礼盒和细丝带包装，把试香顺序写在小卡上。',recipient_roles:['partner','close_friend'],closeness_range:['familiar','close'],birthday_intents:['understood','celebrated'],risks:['scent','taste'],giftworthiness:5,personalization:4},
  {id:'demo-bag',name:'设计感小皮具或通勤包',gift_type:'氛围审美型',category:'穿搭配饰',price:[299,899],objects:['亲密关系','熟人朋友','长辈/家人'],scenes:['生日','纪念日'],interests:['穿搭配饰','生活方式'],styles:['美观','简洁'],age:['青年','中年'],taboos:['已有同类'],reason:'它能进入日常，也能通过颜色、材质和细节体现你对对方风格的观察。',focus:'留意对方常穿的颜色、包袋尺寸和通勤习惯。',send:'用防尘袋或硬挺纸盒包装，在卡片上写下你观察到的一个穿搭细节。',recipient_roles:['partner','family','close_friend'],closeness_range:['familiar','close'],birthday_intents:['understood','celebrated','upgrade'],risks:['taste','size'],giftworthiness:5,personalization:4},
  {id:'demo-flowers',name:'当季花束与小花器',gift_type:'氛围审美型',category:'花礼与家居',price:[159,499],objects:['亲密关系','熟人朋友','长辈/家人'],scenes:['生日','纪念日','感谢/探望'],interests:['居家','手作'],styles:['有仪式感','美观'],age:['青年','中年','老年'],taboos:[],reason:'花束负责庆祝感，小花器让这份心意在生日之后仍能留在日常里。',focus:'确认对方是否对花粉敏感，并选择方便带走的体量。',send:'提前修剪并补好水袋，见面后尽早送出。',recipient_roles:['partner','family','close_friend','peer'],closeness_range:['polite','familiar','close'],birthday_intents:['celebrated','safe'],risks:['allergy','maintenance'],giftworthiness:5,personalization:3},
  {id:'demo-album',name:'共同回忆纪念册',gift_type:'情绪纪念型',category:'纪念与表达',price:[99,399],objects:['亲密关系','熟人朋友','长辈/家人'],scenes:['生日','纪念日'],interests:['摄影','阅读'],styles:['有仪式感'],age:['青年','中年','老年'],taboos:[],reason:'重点不在相册本身，而在你替对方整理出了一段值得被看见的共同经历。',focus:'少放模板祝福，多写照片背后的具体小事。',send:'把最重要的一页留到最后，在有时间慢慢翻看的时候送出。',recipient_roles:['partner','family','close_friend'],closeness_range:['close'],birthday_intents:['understood','memory'],risks:['intimacy','time'],giftworthiness:5,personalization:5},
  {id:'demo-experience',name:'双人手作或艺术体验',gift_type:'体验互动型',category:'体验活动',price:[199,699],objects:['亲密关系','熟人朋友'],scenes:['生日','纪念日'],interests:['手作','生活方式'],styles:['有仪式感','轻松'],age:['青年','中年'],taboos:[],reason:'它不只提供一个物件，还给彼此留下一段可以共同参与和记住的时间。',focus:'确认地点、有效期和可改期规则，不要替对方锁死时间。',send:'把预约信息做成邀请卡，同时给出两个可选日期。',recipient_roles:['partner','family','close_friend'],closeness_range:['familiar','close'],birthday_intents:['memory','celebrated'],risks:['schedule'],giftworthiness:5,personalization:4},
  {id:'demo-tea',name:'精品咖啡或茶饮小礼盒',gift_type:'消耗享用型',category:'食品与饮品',price:[99,399],objects:['普通社交','熟人朋友','长辈/家人'],scenes:['生日','感谢/探望','节日/节气'],interests:['美食','生活方式'],styles:['简洁','美观'],age:['青年','中年','老年'],taboos:['有饮食限制'],reason:'体量克制、容易分享，也能通过风味体现认真挑选而不是随手购买。',focus:'确认咖啡因习惯、冲泡设备和保质期。',send:'用小份组合而不是巨型礼盒，附一张风味建议卡。',recipient_roles:['family','close_friend','peer','formal'],closeness_range:['polite','familiar','close'],birthday_intents:['safe','understood'],risk_tags:['food','diet','caffeine'],giftworthiness:4,personalization:3},
  {id:'B160',name:'学校、城市或展览文创小礼',gift_type:'氛围审美型',category:'文具与文创',price:[39,99],objects:['普通社交','熟人朋友'],scenes:['生日','感谢/探望','节日/节气'],interests:['阅读','旅行','生活方式'],styles:['简洁','精致','审美感'],age:['青年','中年','老年'],taboos:[],reason:'小型文创自带具体来历，又不会让关系尚浅的人承担太重的回应压力。',focus:'优先选择与赠礼人经历或双方共同话题有关的来源。',send:'用薄纸或小信封包装，在明信片上写清为什么这个地点或图案让你想到了对方。',recipient_roles:['peer','formal'],closeness_range:['polite','familiar'],birthday_intents:['safe','understood'],giftworthiness:5,personalization:4},
  {id:'B161',name:'中性官方 IP 小物',gift_type:'兴趣爱好型',category:'潮玩与文创',price:[59,99],objects:['普通社交','熟人朋友'],scenes:['生日','感谢/探望','节日/节气'],interests:['动漫游戏IP','生活方式'],styles:['有趣','轻松','精致'],age:['青年','中年'],taboos:['不符合对方兴趣'],reason:'无明确角色倾向的官方小物能保留趣味，也减少认错角色或阵营的风险。',focus:'确认正版授权，不知道具体偏好时只选择中性设计。',send:'用轻便小盒包装，不提前强调稀缺或价格。',recipient_roles:['peer','formal','close_friend'],closeness_range:['polite','familiar'],birthday_intents:['safe','upgrade'],risk_tags:['toy'],giftworthiness:4,personalization:3},
  {id:'B162',name:'潮牌盲盒或小型桌面玩具',gift_type:'氛围审美型',category:'潮玩与桌面小物',price:[69,99],objects:['普通社交','熟人朋友'],scenes:['生日','感谢/探望','节日/节气'],interests:['动漫游戏IP','生活方式'],styles:['有趣','轻松','审美感'],age:['青年','中年'],taboos:['不符合对方兴趣','已有同类'],reason:'小体量潮玩适合年轻、轻松的社交关系，前提是对方接受盲盒或桌面玩具。',focus:'确认接受度、收纳空间和系列雷点。',send:'保持包装完整，用一张简短卡片说明是轻松的小礼物。',recipient_roles:['peer','formal'],closeness_range:['polite','familiar'],birthday_intents:['safe','celebrated'],risk_tags:['toy','storage'],giftworthiness:4,personalization:2},
  {id:'B163',name:'挂耳咖啡或茶包小礼',gift_type:'消耗享用型',category:'食品与饮品',price:[39,99],objects:['普通社交','熟人朋友'],scenes:['生日','感谢/探望','节日/节气'],interests:['美食','生活方式'],styles:['简洁','轻松','精致'],age:['青年','中年','老年'],taboos:['有食物过敏','有饮食限制'],reason:'确认饮食和咖啡因习惯后，小份咖啡或茶包容易分享、消耗负担也低。',focus:'必须先确认咖啡因接受度、过敏和饮食限制。',send:'保留独立密封包装，装入简洁纸袋并附冲泡提示。',recipient_roles:['peer','formal'],closeness_range:['polite','familiar'],birthday_intents:['safe','upgrade'],risk_tags:['food','food_allergy','diet','caffeine'],giftworthiness:5,personalization:3}
]};

const recipientRoles=[['partner','伴侣 / 心仪的人'],['family','家人 / 长辈'],['close_friend','好朋友'],['peer','普通朋友 / 同学 / 同事'],['formal','工作往来 / 老师']];
const closenessOptions=[['close','很亲近','了解生活细节，可以表达更私人的心意'],['familiar','比较熟','知道一些偏好，也需要把握分寸'],['polite','还不太熟','优先得体，不给对方造成负担']];
const scenes=['生日','纪念日','感谢 / 探望','节日 / 节气'];
const birthdayIntents=[['understood','我真的懂 ta'],['celebrated','被认真庆祝'],['memory','一起留下回忆'],['upgrade','日常变好一点'],['safe','稳妥又得体']];
const birthdayContexts=[['ordinary','普通生日'],['milestone','重要年龄'],['first','第一次一起过'],['remote','不能当面'],['party','多人聚会']];
const interests=['香氛美妆','穿搭配饰','美食咖啡','阅读','手作艺术','动漫游戏 IP','数码','旅行户外','居家生活','影音娱乐','摄影记录','运动'];
const ages=['18 岁以下','18–25 岁','26–35 岁','36–50 岁','50 岁以上'];
const styles=['精致有质感','有仪式感','温柔治愈','简洁耐看','有趣特别','实用但不普通'];
const evidenceOptions=[['explicit','ta 明确说过想要或喜欢'],['repeated','最近经常提到或分享'],['observed','我从日常习惯中观察到'],['none','还没有明确线索']];
const giftAttitudeOptions=[['ritual','很在意细节和仪式'],['light','喜欢小心意，不必隆重'],['fit','更看重是否适合自己'],['pressure','不习惯收礼，容易有压力'],['unknown','不确定']];
const priceComfortOptions=[['accept','会开心接受'],['close_only','关系亲近时可以接受'],['pressure','容易觉得有压力'],['unknown','不确定']];
const foodSafetyOptions=[['clear','确认过，没有忌口或过敏'],['restricted','有忌口或过敏'],['unknown','不确定']];
const tabooStatusOptions=[['none','没有其他需要避开的'],['selected','有，我来选择'],['unknown','不确定']];
const tabooOptions=[['已有同类','不想送重复的东西'],['不符合对方兴趣','拿不准 ta 是否喜欢这类东西'],['不喝酒','不喝酒或不适合酒精'],['少咖啡因','需要避开咖啡因'],['香味敏感','对香味比较敏感'],['宗教或文化禁忌','需要避开宗教或文化寓意'],['不喜欢玩偶摆件','不喜欢玩偶、盲盒或摆件'],['不便收纳','不方便收纳或维护'],['不希望礼物太亲密','不希望礼物显得太亲密']];
const strategyMeta={
  personal:{label:'最像 ta 的',note:'优先回应已经观察到的偏好和生活细节。'},
  safe:{label:'稳妥但不敷衍',note:'把关系边界和使用负担放在前面。'},
  surprise:{label:'更有惊喜感',note:'保留一点意外，同时不过度冒险。'}
};
function strategyLabel(strategy){return strategy==='personal'&&!hasPersonalClue()?'有细节的选择':strategyMeta[strategy]?.label||'推荐选择'}
const defaultAnswers=()=>({recipientRole:'',closeness:'',object:'',scene:'',birthdayIntent:'',birthdayContext:'',budget:'',interest:[],evidenceSource:'',age:'',style:[],giftAttitude:'',priceComfort:'',foodSafety:'',tabooStatus:'',taboo:[]});
const $=selector=>document.querySelector(selector);
const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function loadSavedAnswers(){try{localStorage.removeItem('gift-king-plan-v2')}catch{}return defaultAnswers()}
function persistAnswers(){}

let data=fallback;
let returnFocus=null;
let drawerInHistory=false;
let state={screen:'home',step:1,answers:loadSavedAnswers(),ranked:[],results:[],near:[],tab:'picked',shuffle:0,nearShuffle:0,share:{summary:true,picked:true,reason:true,send:true},generating:false};

function toast(message){const element=$('#toast');element.textContent=message;element.classList.add('show');window.setTimeout(()=>element.classList.remove('show'),2200)}
function roleLabel(value){return recipientRoles.find(([key])=>key===value)?.[1]||''}
function closenessLabel(value){return closenessOptions.find(([key])=>key===value)?.[1]||''}
function intentLabel(value){return birthdayIntents.find(([key])=>key===value)?.[1]||''}
function legacyObjectForRole(role){return{partner:'亲密关系',family:'长辈/家人',close_friend:'熟人朋友',peer:'熟人朋友',formal:'普通社交'}[role]||''}
function roleValues(role){return{partner:['partner','伴侣/心仪的人','伴侣 / 心仪的人'],family:['family','家人/长辈','家人 / 长辈'],close_friend:['close_friend','好朋友'],peer:['peer','普通朋友/同学/同事','普通朋友 / 同学 / 同事'],formal:['formal','工作往来/老师','工作往来 / 老师']}[role]||[]}
function closenessValues(value){return{close:['close','很亲近'],familiar:['familiar','比较熟'],polite:['polite','还不太熟']}[value]||[]}
function normalizeScene(scene=''){return scene.replaceAll(' ','')}
function hasPersonalClue(){return state.answers.interest.length>0}
function isUnknown(value){return!value||value==='unknown'}
function budgetCompatibility(giftRange){
  const amount=Number(state.answers.budget);
  if(!amount||!Array.isArray(giftRange))return 0;
  return Number(giftRange[0])<=amount?1:0
}
function includesAny(source=[],selected=[]){return selected.some(value=>source.includes(value))}
function derivedInterests(item){
  const explicit=[...(item.signals||[]),...(item.interests||[])];
  const text=`${item.name||''}${item.category||''}${explicit.join('')}`;
  const rules=[
    ['香氛美妆',/香氛|香薰|香水|护肤|美妆|个护/],['穿搭配饰',/手提包|背包|包袋|皮具|首饰|配饰|丝巾|穿搭|衣物/],
    ['美食咖啡',/咖啡|茶|饮品|点心|食品|果干|坚果|烘焙|食材|调味|蜂蜜|果酱|可可|美食/],
    ['阅读',/书|阅读|文具|信件|明信片|故事|食谱/],['手作艺术',/手作|陶|画|花艺|书法|拼装|材料|艺术|乐器/],
    ['数码',/数码|电子|键盘|音箱|耳机|充电|编程|灯箱/],['旅行户外',/旅行|出行|城市|露营|户外|骑行|温泉|行李|野餐/],
    ['居家生活',/居家|家居|桌面|花器|绿植|靠枕|灯|杯|收纳|护理|摆件|相框|托盘/],
    ['动漫游戏 IP',/动漫|游戏IP|潮玩|盲盒|玩偶|手办|模型|官方IP|周边/],['影音娱乐',/电影|音乐|桌游|拼图|密室|游戏|黑胶/],['摄影记录',/摄影|照片|相册|纪念册|肖像|时间线|回忆|地图/],['运动',/运动|骑行|护腕/]
  ];
  return[...new Set(rules.filter(([,pattern])=>pattern.test(text)).map(([label])=>label))]
}
function evidenceStrength(){return{explicit:1,repeated:.88,observed:.7,none:0}[state.answers.evidenceSource]||0}
function giftworthiness(item){if(Number(item.giftworthiness))return Number(item.giftworthiness);if(Number(item.giftability))return Number(item.giftability);if(item.gift_suitability?.level==='avoid_default')return 1;return Math.max(1,Math.min(5,Number(item.gift_suitability?.gift_score||3)))}
function personalization(item){if(Number(item.personalization))return Number(item.personalization);if(item.gift_type==='情绪纪念型')return 5;if(['体验互动型','兴趣爱好型'].includes(item.gift_type))return 4;if(item.gift_type==='氛围审美型')return 3;return 2}
function surpriseValue(item){if(Number(item.surprise))return Number(item.surprise);if(item.gift_type==='体验互动型')return 5;if(['情绪纪念型','氛围审美型'].includes(item.gift_type))return 4;return 2}
function itemRisks(item){
  const result=new Set(item.risk_tags||[]);
  const taboos=item.taboos||[],riskText=(item.risks||[]).join(''),text=`${item.name||''}${item.category||''}${item.focus||''}${riskText}${taboos.join('')}`,identityText=`${item.name||''}${item.category||''}`;
  if(/香氛|香薰|香水|线香/.test(text))result.add('scent');
  if(/首饰|手提包|背包|包袋|皮具|衣物|靠枕|拖鞋|护腰|尺寸|规格/.test(text))result.add('size');
  if(/摆件|装饰|画|花器|相框|托盘|审美|风格偏好/.test(text))result.add('taste');
  if(/绿植|花束|宠物|维护|打理/.test(text))result.add('maintenance');
  if(/收纳|占地|体积|空间|尺寸、空间|挂墙/.test(text))result.add('storage');
  if(/重复|已有同类/.test(text)||item.avoid_rules?.duplicate_risk==='high')result.add('duplicate');
  if(/食品与饮品|食品与花礼|食物|食材|下厨|料理|零食|饮品|茶叶|茶饮|咖啡|巧克力|坚果|蜂蜜|果干|点心|烘焙|果酱|谷物|调味|水果/.test(text))result.add('food');
  if(result.has('food')&&(taboos.includes('有食物过敏')||/食物过敏|过敏原|过敏、饮食/.test(riskText)))result.add('food_allergy');
  if(result.has('food')&&(taboos.includes('有饮食限制')||/饮食限制|饮食禁忌|过敏、饮食/.test(riskText)))result.add('diet');
  if(!/无酒精/.test(text)&&/酒类|红酒|白酒|啤酒|葡萄酒|含酒精/.test(text))result.add('alcohol');
  if(/咖啡|茶叶|茶饮|可可|巧克力/.test(text))result.add('caffeine');
  if(/宗教|信仰|民俗|生肖|星座|祈福|护身|佛|神像|经文|图腾|祭祀|丧葬|花语|寓意|象征/.test(identityText))result.add('culture');
  if(/摆件|装饰|挂画|艺术品|相框|挂饰|香插|花礼|花器|摆钟|雨伞|拖鞋/.test(text))result.add('symbolic_decor');
  if(/盲盒|玩偶|手办|模型/.test(text))result.add('toy');
  if(item.avoid_rules?.intimacy_sensitivity==='high')result.add('intimacy');
  return[...result]
}
function politeAppropriate(item){
  const risks=itemRisks(item);
  if(giftworthiness(item)<4)return false;
  if(['intimacy','scent','size','taste','maintenance','storage'].some(risk=>risks.includes(risk)))return false;
  return['消耗享用型','氛围审美型','兴趣爱好型'].includes(item.gift_type)
}
function matchesInterestEvidence(item){return includesAny(derivedInterests(item),state.answers.interest)}
function comfortCeiling(){
  const budget=Number(state.answers.budget)||0;
  let ceiling=state.answers.closeness==='polite'?150:state.answers.closeness==='familiar'?300:600;
  if(state.answers.recipientRole==='formal')ceiling=Math.min(ceiling,200);
  return Math.min(budget,ceiling)
}
function hardReject(item){
  const answers=state.answers;
  if(!budgetCompatibility(item.price))return true;
  const risks=itemRisks(item);
  const roleMatched=includesAny(item.recipient_roles||[],roleValues(answers.recipientRole));
  if(item.recipient_roles?.length&&!roleMatched)return true;
  if(answers.taboo.includes('已有同类')&&risks.includes('duplicate'))return true;
  if(answers.taboo.includes('不符合对方兴趣')&&(risks.includes('taste')||risks.includes('scent')||item.gift_suitability?.requires_interest))return true;
  if(answers.foodSafety==='restricted'&&risks.includes('food'))return true;
  if(isUnknown(answers.foodSafety)&&risks.includes('food'))return true;
  if(isUnknown(answers.tabooStatus)&&['culture','symbolic_decor','toy'].some(risk=>risks.includes(risk)))return true;
  if(answers.taboo.includes('不喝酒')&&risks.includes('alcohol'))return true;
  if(answers.taboo.includes('少咖啡因')&&risks.includes('caffeine'))return true;
  if(answers.taboo.includes('香味敏感')&&risks.includes('scent'))return true;
  if(answers.taboo.includes('宗教或文化禁忌')&&(risks.includes('culture')||risks.includes('symbolic_decor')))return true;
  if(answers.taboo.includes('不喜欢玩偶摆件')&&(risks.includes('toy')||risks.includes('symbolic_decor')))return true;
  if(answers.taboo.includes('不便收纳')&&(risks.includes('maintenance')||risks.includes('storage')))return true;
  if(answers.taboo.includes('不希望礼物太亲密')&&risks.includes('intimacy'))return true;
  if(answers.giftAttitude==='pressure'&&risks.includes('intimacy'))return true;
  if(answers.priceComfort==='pressure'&&Number(item.price?.[0])>comfortCeiling())return true;
  if(answers.priceComfort==='close_only'&&answers.closeness!=='close'&&Number(item.price?.[0])>comfortCeiling())return true;
  if(item.gift_suitability?.level==='avoid_default')return true;
  if(item.gift_suitability?.requires_closeness&&answers.closeness!=='close')return true;
  if(itemRisks(item).includes('intimacy')&&answers.closeness==='polite')return true;
  if(answers.recipientRole==='formal'&&itemRisks(item).includes('intimacy'))return true;
  if(answers.closeness==='polite'&&item.closeness_range?.length&&!includesAny(item.closeness_range,closenessValues('polite'))&&!politeAppropriate(item))return true;
  if(item.gift_suitability?.requires_interest&&!matchesInterestEvidence(item))return true;
  const blocked=item.gift_suitability?.not_default_for||[];
  if(blocked.includes(normalizeScene(answers.scene))||blocked.includes(answers.object)||includesAny(blocked,roleValues(answers.recipientRole)))return true;
  if(normalizeScene(answers.scene)==='生日'&&Number(item.occasion_fit?.birthday)<=1&&answers.birthdayIntent!=='upgrade')return true;
  if(normalizeScene(answers.scene)==='生日'&&item.gift_type==='安心照料型')return!(answers.birthdayIntent==='upgrade'&&answers.recipientRole==='family'&&answers.closeness==='close');
  if(normalizeScene(answers.scene)==='生日'&&answers.birthdayContext==='remote'&&risks.includes('schedule'))return true;
  return false
}
function relationFit(item){
  const answers=state.answers;
  const roleMatched=includesAny(item.recipient_roles||[],roleValues(answers.recipientRole));
  let fit=roleMatched?1:(item.objects||[]).includes(answers.object)?.68:.25;
  if(answers.recipientRole==='partner'&&['情绪纪念型','氛围审美型','体验互动型'].includes(item.gift_type))fit+=.22;
  if(answers.recipientRole==='formal'&&['消耗享用型','氛围审美型'].includes(item.gift_type))fit+=.16;
  if(answers.recipientRole==='close_friend'&&['兴趣爱好型','体验互动型','氛围审美型'].includes(item.gift_type))fit+=.16;
  if(answers.recipientRole==='family'&&['情绪纪念型','消耗享用型','体验互动型'].includes(item.gift_type))fit+=.14;
  if(item.closeness_range?.length&&!includesAny(item.closeness_range,closenessValues(answers.closeness)))fit-=.25;
  if(answers.closeness==='polite'&&itemRisks(item).includes('intimacy'))fit-=.5;
  return Math.max(0,Math.min(1,fit))
}
function occasionFit(item){
  const scene=normalizeScene(state.answers.scene),explicit=item.occasion_fit?.[scene]??item.occasion_fit?.[state.answers.scene]??(scene==='生日'?item.occasion_fit?.birthday:undefined);
  if(typeof explicit==='number')return explicit/5;
  if(typeof explicit?.score==='number')return explicit.score/5;
  const matches=(item.scenes||[]).map(normalizeScene).includes(scene);
  if(scene!=='生日')return matches?.82:.28;
  if(Number(item.birthday_fit))return Number(item.birthday_fit)/5;
  return({'氛围审美型':.9,'情绪纪念型':.9,'体验互动型':.86,'兴趣爱好型':.76,'消耗享用型':.68,'实用型':.44,'安心照料型':.18}[item.gift_type]??.4)
}
function intentFit(item){
  const intent=state.answers.birthdayIntent;
  if(normalizeScene(state.answers.scene)!=='生日'||!intent)return .7;
  const normalizedIntents=(item.birthday_intents||[]).map(value=>String(value).replaceAll(' ',''));
  if(item.birthday_intents?.includes(intent)||normalizedIntents.includes(intentLabel(intent).replaceAll(' ',''))||
    (intent==='upgrade'&&item.birthday_intents?.includes('日常被照顾到')))return 1;
  const mapping={understood:['兴趣爱好型','情绪纪念型','氛围审美型'],celebrated:['氛围审美型','情绪纪念型','体验互动型'],memory:['体验互动型','情绪纪念型'],upgrade:['氛围审美型','实用型','消耗享用型'],safe:['消耗享用型','氛围审美型']};
  return mapping[intent]?.includes(item.gift_type)?.9:.42
}
function birthdayContextFit(item){
  const context=state.answers.birthdayContext;
  if(normalizeScene(state.answers.scene)!=='生日'||!context)return .72;
  const type=item.gift_type,risks=itemRisks(item);
  if(context==='milestone')return['情绪纪念型','体验互动型','氛围审美型'].includes(type)?1:.45;
  if(context==='first')return['体验互动型','氛围审美型','消耗享用型'].includes(type)&&!risks.includes('intimacy')?.92:.5;
  if(context==='remote')return['消耗享用型','氛围审美型','情绪纪念型'].includes(type)&&!risks.includes('schedule')?.9:.5;
  if(context==='party')return['消耗享用型','体验互动型','氛围审美型'].includes(type)&&!risks.includes('intimacy')?.9:.48;
  return .75
}
function preferenceFit(item){
  const answers=state.answers;
  let points=0,possible=0;
  if(answers.interest.length){possible+=12;if(includesAny(derivedInterests(item),answers.interest))points+=12}
  if(answers.style.length){
    possible+=8;
    const text=(item.styles||[]).join('');
    const matched=answers.style.some(value=>(value==='精致有质感'&&/精致|审美|美观|有仪式感|品质/.test(text))||(value==='简洁耐看'&&/简洁|耐看|实用/.test(text))||(value==='温柔治愈'&&/温柔|治愈|安心|轻松/.test(text))||(value==='有趣特别'&&/有趣|特别|轻松|有仪式感/.test(text))||(value==='实用但不普通'&&/实用|品质|设计/.test(text))||(item.styles||[]).includes(value));
    if(matched)points+=8
  }
  if(answers.age){possible+=4;const legacy=answers.age==='50 岁以上'?'老年':answers.age==='36–50 岁'?'中年':'青年';if((item.age||[]).includes(legacy))points+=4}
  return possible?points/possible:.62
}
function attitudeFit(item){
  const attitude=state.answers.giftAttitude,risks=itemRisks(item),type=item.gift_type;
  if(attitude==='ritual')return['情绪纪念型','体验互动型','氛围审美型'].includes(type)||/(有仪式感|精致|审美)/.test((item.styles||[]).join(''))?1:.5;
  if(attitude==='light')return(['消耗享用型','兴趣爱好型'].includes(type)||(risks.includes('toy')&&state.answers.tabooStatus==='none'))&&!['intimacy','maintenance'].some(risk=>risks.includes(risk))?1:.55;
  if(attitude==='fit')return matchesInterestEvidence(item)?1:(giftworthiness(item)>=4?.72:.45);
  if(attitude==='pressure')return !['intimacy','maintenance','storage','schedule'].some(risk=>risks.includes(risk))&&Number(item.price?.[0])<=comfortCeiling()?1:.28;
  return .7
}
function socialFallbackFit(item){
  if(!['formal','peer'].includes(state.answers.recipientRole)||state.answers.closeness!=='polite'||hasPersonalClue())return 0;
  const text=`${item.name||''}${item.category||''}`;
  if(/学校|大学|城市|博物馆|展览|文创|书签|明信片|笔记本/.test(text))return 1;
  if(state.answers.foodSafety==='clear'&&/咖啡|茶饮|茶叶/.test(text))return .9;
  if(/盲盒|玩偶|IP|周边/.test(text)&&!state.answers.taboo.includes('不喜欢玩偶摆件'))return .68;
  return 0
}
function riskPenalty(item){
  const risks=itemRisks(item);
  let penalty=0;
  if(risks.includes('intimacy')&&state.answers.closeness==='familiar')penalty+=7;
  if(risks.includes('taste')&&!state.answers.interest.length)penalty+=4;
  if(risks.includes('scent')&&!state.answers.interest.includes('香氛美妆'))penalty+=6;
  if(risks.includes('size')&&state.answers.closeness!=='close')penalty+=4;
  if(risks.includes('maintenance')&&state.answers.closeness==='polite')penalty+=4;
  if(isUnknown(state.answers.priceComfort)&&item.avoid_rules?.price_sensitivity==='high')penalty+=5;
  if(state.answers.priceComfort==='close_only'&&state.answers.closeness!=='close'&&item.avoid_rules?.price_sensitivity==='high')penalty+=8;
  if(state.answers.giftAttitude==='light'&&['intimacy','maintenance','storage'].some(risk=>risks.includes(risk)))penalty+=7;
  if(state.answers.giftAttitude==='pressure'&&['情绪纪念型','体验互动型'].includes(item.gift_type))penalty+=8;
  if(risks.includes('authenticity'))penalty+=3;
  if(risks.includes('secondhand'))penalty+=5;
  return penalty
}
function evaluate(item){
  const relation=relationFit(item),occasion=occasionFit(item),preference=preferenceFit(item),intent=intentFit(item),context=birthdayContextFit(item),quality=giftworthiness(item)/5,price=budgetCompatibility(item.price),attitude=attitudeFit(item);
  const components=[[relation,24],[occasion,18],[quality,15],[price,10]];
  if(state.answers.interest.length||state.answers.style.length||state.answers.age)components.push([preference,16]);
  if(normalizeScene(state.answers.scene)==='生日'&&state.answers.birthdayIntent)components.push([intent,12]);
  if(normalizeScene(state.answers.scene)==='生日'&&state.answers.birthdayContext)components.push([context,6]);
  if(!isUnknown(state.answers.giftAttitude))components.push([attitude,10]);
  const totalWeight=components.reduce((sum,[,weight])=>sum+weight,0),weighted=components.reduce((sum,[fit,weight])=>sum+fit*weight,0)/totalWeight*100;
  const score=Math.max(0,Math.min(99,Math.round(weighted-riskPenalty(item))));
  const interestMatch=matchesInterestEvidence(item)?1:0,riskCount=itemRisks(item).length,fallbackFit=socialFallbackFit(item),evidenceBoost=interestMatch*evidenceStrength()*10;
  const specificityBoost=interestMatch&&(item.gift_suitability?.requires_interest||item.avoid_rules?.interest_required)?evidenceStrength()*8:0;
  return{...item,score,interestMatch,riskCount,strategyScores:{personal:score+interestMatch*12+personalization(item)*5+evidenceBoost+specificityBoost+fallbackFit*10,safe:score+Math.max(0,12-riskCount*2)+(item.gift_type==='消耗享用型'?4:0)+fallbackFit*14,surprise:score+surpriseValue(item)*4+(item.gift_type==='体验互动型'?5:0)+(state.answers.giftAttitude==='ritual'?6:0)}}
}
function rankForStrategy(strategy){return[...state.ranked].sort((a,b)=>b.strategyScores[strategy]-a.strategyScores[strategy]||b.score-a.score)}
function chooseStrategies(offset=0){
  const used=new Set(),usedTypes=new Set();
  return['personal','safe','surprise'].flatMap(strategy=>{
    const ranked=rankForStrategy(strategy),rotated=[...ranked.slice(offset%Math.max(1,ranked.length)),...ranked.slice(0,offset%Math.max(1,ranked.length))];
    const list=rotated.filter(item=>{
      if(item.score<80)return false;
      if(strategy==='personal')return hasPersonalClue()?item.interestMatch>0:personalization(item)>=3;
      if(strategy==='safe')return giftworthiness(item)>=3&&!['scent','size','taste','intimacy','maintenance','storage','culture'].some(risk=>itemRisks(item).includes(risk))&&!(state.answers.foodSafety!=='clear'&&itemRisks(item).includes('food'))&&!(itemRisks(item).includes('toy')&&!hasPersonalClue());
      return surpriseValue(item)>=3&&['体验互动型','情绪纪念型','氛围审美型','兴趣爱好型'].includes(item.gift_type)
    });
    const candidate=list.find(item=>!used.has(item.id)&&!usedTypes.has(item.gift_type))||list.find(item=>!used.has(item.id));
    if(candidate){used.add(candidate.id);usedTypes.add(candidate.gift_type);return[{...candidate,strategy}]}
    return[]
  })
}
function chooseNear(offset=0){
  const selected=new Set(state.results.map(item=>item.id)),pool=state.ranked.filter(item=>!selected.has(item.id)&&item.score>=55);
  if(!pool.length)return[];
  const start=(offset*4)%pool.length;
  return[...pool.slice(start),...pool.slice(0,start)].slice(0,Math.min(4,pool.length))
}
function compute(){
  state.answers.object=legacyObjectForRole(state.answers.recipientRole);
  state.ranked=data.items.filter(item=>!hardReject(item)).map(evaluate).sort((a,b)=>b.score-a.score);
  state.shuffle=0;state.nearShuffle=0;state.results=chooseStrategies(0);state.near=chooseNear(0);state.tab=state.results.length?'picked':'more';persistAnswers()
}

function tagList(values){return(values||[]).filter(Boolean).slice(0,5).map(value=>`<span class="tag">${esc(value)}</span>`).join('')}
function progressDots(step){
  const index=step<=3?step:step-3,count=step<=3?3:4;
  return`<div class="progress" aria-label="当前进度 ${index} / ${count}">${Array.from({length:count},(_,i)=>`<i class="${i<index?'active':''}"></i>`).join('')}</div>`
}
function choiceGrid(items,key,compact=false){
  return`<div class="option-grid ${compact?'compact-options':''}">${items.map(item=>{
    const value=Array.isArray(item)?item[0]:item,label=Array.isArray(item)?item[1]:item,description=Array.isArray(item)?item[2]:'',selected=state.answers[key]===value;
    return`<button type="button" class="option ${selected?'selected':''}" data-choice="${esc(key)}" data-value="${esc(value)}" aria-pressed="${selected}"><span><strong>${esc(label)}</strong>${description?`<small>${esc(description)}</small>`:''}</span><span class="radio-mark" aria-hidden="true"></span></button>`
  }).join('')}</div>`
}
function multiGrid(items,key){
  const selected=state.answers[key]||[];
  return`<div class="tag-options">${items.map(item=>`<button type="button" class="tag-option ${selected.includes(item)?'selected':''}" data-multi="${esc(key)}" data-value="${esc(item)}" aria-pressed="${selected.includes(item)}">${esc(item)}</button>`).join('')}</div>`
}
function home(){
  return`<section class="shell hero">
    <div class="hero-copy">
      <div class="eyebrow">A thoughtful gift begins with noticing</div>
      <h1>送礼<br><em>大王</em></h1>
      <p class="hero-lede">用更少的时间，选一份更有心意的礼物。</p>
      <p class="story">准备礼物的人比收到礼物的人更早感到幸福</p>
      <button class="primary" type="button" data-action="start">开始选礼物 <span aria-hidden="true">→</span></button>
      <p class="local-note">不用登录，填写内容仅用于本次推荐</p>
    </div>
    <div class="hero-art" role="img" aria-label="窗边的礼物、花束与手写卡片"></div>
  </section>`
}
function recipientStep(){
  return`<div class="relationship-list">${recipientRoles.map(([value,label])=>{
    const selected=state.answers.recipientRole===value;
    return`<section class="relationship-option ${selected?'selected expanded':''}">
      <button type="button" class="relationship-trigger" data-choice="recipientRole" data-value="${esc(value)}" aria-pressed="${selected}" aria-expanded="${selected}">
        <strong>${esc(label)}</strong><span class="radio-mark" aria-hidden="true"></span>
      </button>
      ${selected?`<div class="relationship-closeness"><h3>你们有多熟？</h3><div class="closeness-grid">${closenessOptions.map(([key,title,description])=>{
        const active=state.answers.closeness===key;
        return`<button type="button" class="closeness-choice ${active?'selected':''}" data-choice="closeness" data-value="${esc(key)}" aria-pressed="${active}"><span><strong>${esc(title)}</strong><small>${esc(description)}</small></span><span class="radio-mark" aria-hidden="true"></span></button>`
      }).join('')}</div></div>`:''}
    </section>`
  }).join('')}</div><div class="error" id="step-error" role="alert"></div>`
}
function sceneStep(){
  const birthday=normalizeScene(state.answers.scene)==='生日'?`<div class="birthday-panel">
    <div class="birthday-panel-head"><span class="birthday-crop" aria-hidden="true"></span><div><h3>这次更想让 ta 感受到什么？</h3><p>这个选择会改变礼物的方向，而不只是换一句文案。</p></div></div>
    ${choiceGrid(birthdayIntents,'birthdayIntent',true)}
    <h4>还有什么特别之处？</h4>
    ${choiceGrid(birthdayContexts,'birthdayContext',true)}
  </div>`:'';
  return`${choiceGrid(scenes,'scene',true)}${birthday}<div class="error" id="step-error" role="alert"></div>`
}
function budgetStep(){
  const amount=Number(state.answers.budget);
  return`<div class="budget-layout">
    <div class="field">
      <label for="budget">你愿意为这份礼物准备多少？</label>
      <div class="money-input"><span>¥</span><input id="budget" type="number" min="1" step="1" inputmode="numeric" value="${esc(state.answers.budget)}" placeholder="例如 300" aria-describedby="budget-help budget-error"></div>
      <p id="budget-help">填写你愿意承担的上限即可，合适的礼物不需要把预算花满。</p>
      <div id="budget-error" class="error" role="alert"></div>
    </div>
    <div class="budget-presets" aria-label="常用预算">${[100,200,300,500,800,1200].map(value=>`<button type="button" class="budget-chip ${amount===value?'selected':''}" data-budget="${value}">¥${value}</button>`).join('')}</div>
  </div>`
}
function interestStep(){
  return`${multiGrid(interests,'interest')}
    <div class="inline-question"><h3>你是从哪里发现这些偏好的？</h3>${choiceGrid(evidenceOptions,'evidenceSource',true)}</div>`
}
function tabooStep(){
  const selected=state.answers.taboo;
  return`<div class="risk-section"><h3>ta 平时怎么看待收礼物？</h3>${choiceGrid(giftAttitudeOptions,'giftAttitude',true)}</div>
    <div class="risk-section"><h3>ta 收到偏贵的礼物时通常会？</h3>${choiceGrid(priceComfortOptions,'priceComfort',true)}</div>
    <div class="risk-section"><h3>食物和饮品方面，你确认过吗？</h3>${choiceGrid(foodSafetyOptions,'foodSafety',true)}${state.answers.foodSafety==='restricted'?'<p class="risk-note">将暂不推荐食品和饮品，避免误碰过敏或饮食限制。</p>':''}</div>
    <div class="risk-section"><h3>还有其他需要避开的情况吗？</h3>${choiceGrid(tabooStatusOptions,'tabooStatus',true)}
      ${state.answers.tabooStatus==='selected'?`<div class="tag-options taboo-options">${tabooOptions.map(([value,label])=>`<button type="button" class="tag-option ${selected.includes(value)?'selected':''}" data-multi="taboo" data-value="${esc(value)}" aria-pressed="${selected.includes(value)}">${esc(label)}</button>`).join('')}</div>`:''}
      ${state.answers.tabooStatus==='unknown'?'<p class="risk-note">会优先避开高风险选项，并在推荐中提示需要确认的事项。</p>':''}
    </div><div class="error" id="step-error" role="alert"></div>`
}
function wizard(){
  const step=state.step;
  const content={
    1:['先想起 ta','ta 和你是什么关系？',recipientStep()],
    2:['再想起时刻','为什么准备这份礼物？',sceneStep()],
    3:['确定一个范围','预算大约是多少？',budgetStep()],
    4:['让推荐更像 ta','ta 的兴趣是什么？',interestStep()],
    5:['补充一点了解','ta 大概多大？',choiceGrid(ages,'age',true)],
    6:['补充一点了解','ta 会喜欢什么感觉？',multiGrid(styles,'style')],
    7:['最后确认分寸','怎样表达更适合 ta？',tabooStep()]
  }[step];
  const actionLabel=step===3?'查看初步推荐':step===7?'查看推荐':'继续';
  return`<section class="flow-shell">
    <div class="section-head"><div><div class="kicker">${content[0]}</div><h2>${content[1]}</h2></div>${progressDots(step)}</div>
    ${content[2]}
    <div class="form-actions"><button type="button" class="secondary" data-action="back"><span aria-hidden="true">←</span> 返回</button><button type="button" class="primary" data-action="next">${actionLabel} <span aria-hidden="true">→</span></button></div>
  </section>`
}
function summaryTags(){
  return tagList([roleLabel(state.answers.recipientRole),closenessLabel(state.answers.closeness),state.answers.scene,state.answers.birthdayIntent?intentLabel(state.answers.birthdayIntent):'',state.answers.budget?`预算 ¥${state.answers.budget}`:''])
}
function expressionGuidance(){
  const answers=state.answers;
  if(answers.giftAttitude==='pressure')return{title:'只表达心意也成立',text:'ta 可能不习惯收礼。当前会优先选择轻量、低负担的表达；一顿饭、一次共同活动或一张认真写的卡片，也可以比实物更合适。'};
  if(answers.priceComfort==='pressure')return{title:'不用把预算花满',text:'当前会把还礼压力放在价格之前。礼物接近预算上限时，可以降低金额，或和共同的朋友一起准备。'};
  if(answers.giftAttitude==='ritual')return{title:'把仪式感放在细节里',text:'当前优先考虑包装、打开过程和专属线索，而不是只用价格制造隆重感。'};
  if(answers.giftAttitude==='light')return{title:'小而准确，比隆重更合适',text:'当前优先选择体量轻、容易接受，也能带上一点个人线索的礼物。'};
  if(isUnknown(answers.foodSafety)||isUnknown(answers.tabooStatus))return{title:'还有一些信息值得确认',text:'食物、饮品、装饰寓意和文化因素尚不明确，高风险候选不会进入推荐；确定后可以在“补充喜好”中更新。'};
  return{title:'先回应线索，再决定礼物',text:'推荐会优先使用 ta 明确说过、反复提到或日常中表现出的偏好，并同时控制关系尺度和接受压力。'}
}
function resultChoice(item,more=false){
  return`<button type="button" class="gift-choice" data-detail="${esc(item.id)}" aria-label="查看${esc(item.name)}的完整建议">
    <span class="gift-choice-match">${esc(more?'相近推荐':`高度匹配 · ${item.score}%`)}</span>
    <span class="gift-choice-name">${esc(item.name)}</span>
    <span class="gift-choice-price">¥${esc(item.price?.[0])}–¥${esc(item.price?.[1])}</span>
    <span class="gift-choice-arrow" aria-hidden="true">›</span>
  </button>`
}
function results(){
  const list=state.tab==='picked'?state.results:state.near;
  const guidance=expressionGuidance();
  return`<section class="result-shell">
    <div class="result-head">
      <div><div class="kicker">你的送礼地图</div><h2>为 ta 挑出的礼物</h2><div class="summary">${summaryTags()}</div></div>
      <div class="result-actions"><button type="button" class="secondary subtle" data-action="edit">修改条件</button><button type="button" class="secondary refine" data-action="refine">补充喜好</button><button type="button" class="primary save-entry" data-action="share">保存图片</button></div>
    </div>
    <div class="tabs" role="tablist"><button type="button" class="tab ${state.tab==='picked'?'active':''}" data-tab="picked" role="tab" aria-selected="${state.tab==='picked'}">高度匹配（${state.results.length}）</button><button type="button" class="tab ${state.tab==='more'?'active':''}" data-tab="more" role="tab" aria-selected="${state.tab==='more'}">相近推荐（${state.near.length}）</button></div>
    <div class="gift-list">${list.length?list.map(item=>resultChoice(item,state.tab==='more')).join(''):'<div class="empty"><span class="empty-crop" aria-hidden="true"></span><h3>这组条件暂时没有合适的礼物</h3><p>可以调整预算或补充 ta 的兴趣，我们不会用不合适的礼物凑数。</p></div>'}</div>
    <aside class="expression-guidance"><span aria-hidden="true"></span><div><strong>${esc(guidance.title)}</strong><p>${esc(guidance.text)}</p></div></aside>
    <div class="result-bottom-actions"><span>还想看看别的组合？</span><button type="button" class="secondary" data-action="shuffle">换一组</button></div>
  </section>`
}
function matchClues(item){
  const clues=derivedInterests(item).filter(value=>state.answers.interest.includes(value));
  if(state.answers.birthdayIntent)clues.push(intentLabel(state.answers.birthdayIntent));
  clues.push(closenessLabel(state.answers.closeness));
  return clues
}
function personalReason(item){
  const meta=item.strategy?{...strategyMeta[item.strategy],label:strategyLabel(item.strategy)}:null,matched=derivedInterests(item).filter(value=>state.answers.interest.includes(value)),parts=[];
  if(meta)parts.push(`${meta.label}这条思路，${meta.note}`);
  if(matched.length)parts.push(`它回应了 ta 对${matched.join('、')}的偏好。`);
  if(state.answers.birthdayIntent)parts.push(`你希望 ta 感到“${intentLabel(state.answers.birthdayIntent)}”，这件礼物在表达方向上更接近。`);
  if(state.answers.giftAttitude==='light')parts.push('它的表达强度比较克制，更接近 ta 喜欢的小心意。');
  if(state.answers.giftAttitude==='pressure')parts.push('它在体量、价格和关系分寸上更轻，尽量不给 ta 增加回应压力。');
  if(state.answers.priceComfort==='pressure')parts.push('价格不是这次选择的重点，舒适地收下比把预算花满更重要。');
  parts.push(item.reason||'它在关系边界、预算和礼物感之间取得了比较合适的平衡。');
  return parts.join('')
}
function sendAdvice(item){
  let wrapping={'实用型':'选择硬挺纸盒或布袋，避免直接使用快递包装；把一处与 ta 有关的颜色放进系带或卡片里。','情绪纪念型':'使用有触感的纸张或信封，把最重要的一句话放在打开礼物后最先看到的位置。','兴趣爱好型':'包装保持克制，用一个与兴趣有关的小细节提示内容。','体验互动型':'把预约信息做成一张邀请卡，清楚写出内容，同时为时间选择留出余地。','氛围审美型':'用素色薄纸、细绳或小盒突出材质，避免过多装饰。','消耗享用型':'选择小份、完整的组合，附上你最推荐先尝试的一款。','安心照料型':'选择干净、容易拆开的包装，避免包装成医疗用品的感觉。'}[item.gift_type]||'用容易打开的素色包装，留一处与 ta 有关的小细节。';
  let surprise={'情绪纪念型':'先给一张照片、一句话或一个共同记忆作为线索，再让对方看到真正想说的内容。','体验互动型':'先透露当天会留出一段时间，到了现场再揭晓内容；不要提前锁死日程。','兴趣爱好型':'从 ta 最近提到的一次兴趣话题切入，让礼物像是你认真听过那段话的回应。','氛围审美型':'把礼物放进当天真实会出现的生活场景里，让它自然被发现。','消耗享用型':'安排一个能一起尝试的短暂时刻，让味道与当天的记忆连在一起。'}[item.gift_type]||'不追求夸张揭晓，把礼物留到对方不匆忙、能够自然回应的时刻。';
  let timing='在见面后的自然空档送出，给对方留出从容打开和回应的空间。';
  if(normalizeScene(state.answers.scene)==='生日')timing=state.answers.birthdayContext==='party'?'在聚会进入放松阶段、切蛋糕后或分别前送出，避免对方一边招呼大家一边照看礼物。':state.answers.birthdayContext==='remote'?'尽量安排在生日当天较从容的时间送达，并提前确认收件是否方便；把真正想说的话单独发出。':'选择能够慢慢打开、不急着赶下一程的时刻。关系越亲近，越适合留一段只属于你们的时间。';
  if(normalizeScene(state.answers.scene)==='纪念日')timing='选择不被打断、能够单独相处的时刻，让打开礼物成为当天完整的一段记忆。';
  if(normalizeScene(state.answers.scene)==='感谢/探望')timing='坐下聊过一会儿、准备离开前送出，表达心意但不给对方增加招待压力。';
  const birthday=normalizeScene(state.answers.scene)==='生日';
  let card={partner:birthday?'看到它的时候，我想到的是你生活里那个很具体的小细节。生日快乐，希望你一直知道，我有认真在看见你。':'看到它的时候，我想到了你。谢谢你让许多普通的日子，也有值得记住的细节。',family:birthday?'想送你的不只是一样东西，也是我们一起好好过日子的心意。愿新的一岁轻松、自在，也有很多值得期待的小事。':'谢谢你一直以来的照顾。这份小心意，希望能让最近的日子多一点轻松。',close_friend:birthday?'你提过的那些小事，我其实都有记得。希望这份礼物刚好落在你会喜欢的位置，生日快乐。':'你随口提过的小事，我其实有记得。看到它时觉得很像你，希望你会喜欢。',peer:birthday?'认真挑了一份觉得很适合你的礼物。祝你新的一岁有喜欢的事可做，也常遇到让人开心的小惊喜。':'前段时间刚好想到你提过的事，就挑了这份小礼物。希望它能给你带来一点好心情。',formal:'谢谢一直以来的照顾与支持。这份小礼物表达心意，也祝接下来的日子顺心愉快。'}[state.answers.recipientRole]||'看到它的时候想到了你，希望这份小心意刚好落在你会喜欢的位置。';
  if(state.answers.giftAttitude==='pressure'){
    wrapping='保留原有包装或用一层素色纸简单包好，不强调价格，也不制造需要当场回应的隆重感。';
    surprise='自然地递给 ta，并说明“只是看到时想到了你，不用特意回礼”，把接受压力降到最低。';
    timing='在聊天或见面的自然空档送出，不要求当场拆开，也给对方保留婉拒或稍后回应的空间。';
    card='看到它时刚好想到了你，就带来和你分享。是一点小心意，不用有回礼压力。'
  }
  const dataSend=item.send||'';
  const packaging=state.answers.giftAttitude==='pressure'?wrapping:/包装|礼盒|纸|丝带|信封|装帧|装袋|卡片|硬盒|防尘袋/.test(dataSend)?dataSend:wrapping;
  return{wrapping:packaging,surprise,timing,card}
}
function openDetail(id,trigger){
  const item=[...state.results,...state.near,...state.ranked,...data.items].find(candidate=>candidate.id===id);
  if(!item)return;
  returnFocus=trigger||document.activeElement;
  const advice=sendAdvice(item);
  $('#dialog-root').innerHTML=`<div class="drawer-backdrop" data-action="close-detail"></div><aside class="drawer gift-detail" role="dialog" aria-modal="true" aria-labelledby="detail-title">
    <button type="button" class="drawer-close" data-action="close-detail" aria-label="关闭详情">×</button>
    <div class="detail-hero"><div class="score">${esc(item.strategy?strategyLabel(item.strategy):'相近选择')} · ${esc(item.score||'—')}% 匹配</div><h2 id="detail-title">${esc(item.name)}</h2><p class="detail-price">¥${esc(item.price?.[0])}–¥${esc(item.price?.[1])}</p></div>
    <div class="detail-tags">${tagList([item.gift_type,item.category,...matchClues(item)])}</div>
    <div class="detail-block"><h3>为什么推荐</h3><p>${esc(personalReason(item))}</p><p class="detail-focus"><strong>挑选时留意：</strong>${esc(item.focus||'确认对方是否已有同类，并留意尺寸、材质与使用门槛。')}</p></div>
    <section class="give-guide" aria-labelledby="give-guide-title"><div class="give-guide-head"><span class="kicker">HOW TO GIVE</span><h3 id="give-guide-title">把这份礼物送得更用心</h3></div>
      <div class="give-guide-grid"><article><span>01</span><h4>包装方式</h4><p>${esc(advice.wrapping)}</p></article><article><span>02</span><h4>制造惊喜</h4><p>${esc(advice.surprise)}</p></article><article><span>03</span><h4>赠送时机</h4><p>${esc(advice.timing)}</p></article><article class="card-copy"><span>04</span><h4>贺卡文案</h4><p>“${esc(advice.card)}”</p><button type="button" class="mini-btn" data-copy-card="${esc(advice.card)}">复制文案</button></article></div>
    </section>
  </aside>`;
  $('.drawer-close')?.focus();
  if(!drawerInHistory){history.pushState({giftDrawer:true},'');drawerInHistory=true}
}
function closeDetail(fromHistory=false){
  if(!$('#dialog-root').children.length)return;
  $('#dialog-root').innerHTML='';
  if(!fromHistory&&drawerInHistory){drawerInHistory=false;history.back()}else drawerInHistory=false;
  returnFocus?.focus?.()
}

function posterText(){
  const active=state.results[0]||state.near[0];
  const lines=['送礼大王',`${roleLabel(state.answers.recipientRole)} · ${state.answers.scene}`,...state.results.map(item=>`${strategyLabel(item.strategy)}：${item.name}（¥${item.price[0]}–¥${item.price[1]}）`)];
  if(active)lines.push('','为什么推荐',personalReason(active),'','怎么送',sendAdvice(active).timing);
  return lines.join('\n')
}
function share(){
  const active=state.results[0]||state.near[0],advice=active?sendAdvice(active):null;
  return`<section class="share-shell">
    <button type="button" class="back-link" data-action="results"><span aria-hidden="true">←</span> 返回推荐</button>
    <div class="share-head"><div class="kicker">保存这次选择</div><h2>把心意留成一张图。</h2></div>
    <div class="share-layout">
      <div class="poster-preview" aria-label="保存图片预览"><div class="poster-floral" aria-hidden="true"></div><h3>送礼大王</h3>${state.share.summary?`<p>${esc(roleLabel(state.answers.recipientRole))} · ${esc(state.answers.scene)}</p>`:''}
        ${state.share.picked?state.results.map(item=>`<article><b>${esc(strategyLabel(item.strategy))}</b><strong>${esc(item.name)}</strong><span>¥${esc(item.price[0])}–¥${esc(item.price[1])}</span></article>`).join(''):''}
        ${active&&state.share.reason?`<div class="poster-reason"><b>为什么推荐</b><p>${esc(personalReason(active))}</p></div>`:''}
        ${advice&&state.share.send?`<div class="poster-timing"><b>赠送时机</b><p>${esc(advice.timing)}</p></div>`:''}
      </div>
      <div class="save-controls"><h3>选择图片内容</h3><div class="check-list">
        ${[['summary','对象与场景'],['picked','推荐结果'],['reason','为什么推荐'],['send','赠送时机']].map(([key,label])=>`<label class="check-item"><input type="checkbox" data-share="${key}" ${state.share[key]?'checked':''}>${label}</label>`).join('')}
      </div><button type="button" class="primary" data-action="generate" ${state.generating?'disabled':''}>${state.generating?'正在生成…':'保存图片'}</button><button type="button" class="secondary" data-action="copy">复制文字</button><div id="share-error" class="error" role="alert"></div></div>
    </div>
  </section>`
}
function render({preserveScroll=false,focusControl=null}={}){
  const scrollPosition=window.scrollY;
  const app=$('#app');
  document.body.classList.toggle('home-screen',state.screen==='home');
  if(state.screen==='home')app.innerHTML=home();
  if(state.screen==='wizard')app.innerHTML=wizard();
  if(state.screen==='results')app.innerHTML=results();
  if(state.screen==='share')app.innerHTML=share();
  window.scrollTo({top:preserveScroll?scrollPosition:0,behavior:'instant'});
  if(focusControl)requestAnimationFrame(()=>{
    window.scrollTo({top:scrollPosition,behavior:'instant'});
    const control=[...document.querySelectorAll(`[data-${focusControl.attribute}]`)].find(element=>element.dataset[focusControl.attribute]===focusControl.key&&(!focusControl.value||element.dataset.value===focusControl.value));
    control?.focus({preventScroll:true})
  })
}
function validateStep(){
  if(state.step===1&&(!state.answers.recipientRole||!state.answers.closeness)){const error=$('#step-error');if(error)error.textContent='请选择关系和熟悉程度。';return false}
  if(state.step===2&&!state.answers.scene){const error=$('#step-error');if(error)error.textContent='请选择这次送礼的时刻。';return false}
  if(state.step===3&&(!Number(state.answers.budget)||Number(state.answers.budget)<=0)){const error=$('#budget-error');if(error)error.textContent='请输入大于 0 的金额，或选择一个常用预算。';$('#budget')?.setAttribute('aria-invalid','true');return false}
  if(state.step===7&&state.answers.tabooStatus==='selected'&&!state.answers.taboo.length){const error=$('#step-error');if(error)error.textContent='请选择需要避开的情况，或重新选择“不确定”。';return false}
  return true
}
function resetApp(){
  state={...state,screen:'home',step:1,answers:defaultAnswers(),ranked:[],results:[],near:[],tab:'picked',shuffle:0,nearShuffle:0};
  closeDetail(true);
  render()
}
function shuffleResults(){
  if(state.tab==='picked'){
    if(state.ranked.length<=state.results.length){toast('当前条件下暂时只有这些合适的礼物');return}
    const previousIds=new Set(state.results.map(item=>item.id));
    let attempts=0;
    let next=[];
    do{state.shuffle=(state.shuffle+1)%state.ranked.length;next=chooseStrategies(state.shuffle);attempts+=1}
    while(next.some(item=>previousIds.has(item.id))&&attempts<state.ranked.length);
    if(!next.length||next.some(item=>previousIds.has(item.id))){toast('当前条件下没有另一组完全不同的合适礼物');return}
    state.results=next;
    state.near=chooseNear(state.nearShuffle)
  }else{
    const available=state.ranked.length-state.results.length;
    if(available<=state.near.length){toast('当前条件下暂时只有这些备选');return}
    const previousIds=new Set(state.near.map(item=>item.id));
    let attempts=0,next=[];
    do{state.nearShuffle+=1;next=chooseNear(state.nearShuffle);attempts+=1}
    while(next.some(item=>previousIds.has(item.id))&&attempts<available);
    if(!next.length||next.some(item=>previousIds.has(item.id))){toast('当前条件下没有另一组完全不同的备选');return}
    state.near=next
  }
  render();
  toast('已经换成另一组选择')
}
function loadImage(source){
  return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=source})
}
function drawWrappedText(context,text,x,y,maxWidth,lineHeight,maxY){
  let line='',currentY=y;
  for(const character of String(text)){
    if(character==='\n'){context.fillText(line,x,currentY);line='';currentY+=lineHeight;continue}
    if(context.measureText(line+character).width>maxWidth){context.fillText(line,x,currentY);line=character;currentY+=lineHeight;if(currentY>maxY)break}else line+=character
  }
  if(line&&currentY<=maxY)context.fillText(line,x,currentY);
  return currentY+lineHeight
}
async function drawPoster(){
  const canvas=document.createElement('canvas');
  canvas.width=1080;canvas.height=1920;
  const context=canvas.getContext('2d');
  context.fillStyle='#fbf8f1';context.fillRect(0,0,canvas.width,canvas.height);
  context.strokeStyle='#e7d9c4';context.lineWidth=3;context.strokeRect(54,54,972,1812);
  try{
    const image=await loadImage(ASSETS.hero);
    context.globalCompositeOperation='multiply';
    context.globalAlpha=.78;
    context.drawImage(image,1210,425,220,360,720,1450,260,380);
    context.drawImage(image,18,35,500,410,45,1380,390,320);
    context.globalAlpha=1;
    context.globalCompositeOperation='source-over'
  }catch{}
  context.fillStyle='#142d2b';context.font='700 72px Georgia, serif';context.fillText('送礼大王',92,165);
  context.fillStyle='#ef6b55';context.fillRect(92,198,86,5);
  let y=270;
  if(state.share.summary){
    context.fillStyle='#546864';context.font='30px Georgia, serif';
    y=drawWrappedText(context,`${roleLabel(state.answers.recipientRole)} · ${state.answers.scene}${state.answers.birthdayIntent?` · ${intentLabel(state.answers.birthdayIntent)}`:''}`,92,y,850,46,1760)+28
  }
  if(state.share.picked){
    for(const item of state.results){
      context.fillStyle='#ef6b55';context.font='700 24px Georgia, serif';context.fillText(strategyLabel(item.strategy),92,y);
      context.fillStyle='#142d2b';context.font='700 43px Georgia, serif';y=drawWrappedText(context,item.name,92,y+58,710,55,1760);
      context.fillStyle='#687673';context.font='26px Georgia, serif';context.fillText(`¥${item.price[0]}–¥${item.price[1]}`,92,y);y+=72
    }
  }
  const active=state.results[0];
  if(active&&state.share.reason&&y<1250){
    context.fillStyle='#142d2b';context.font='700 28px Georgia, serif';context.fillText('为什么推荐',92,y);
    context.font='27px Georgia, serif';context.fillStyle='#3d524d';y=drawWrappedText(context,personalReason(active),92,y+48,760,42,1420)+22
  }
  if(active&&state.share.send&&y<1450){
    context.fillStyle='#142d2b';context.font='700 28px Georgia, serif';context.fillText('赠送时机',92,y);
    context.font='27px Georgia, serif';context.fillStyle='#3d524d';drawWrappedText(context,sendAdvice(active).timing,92,y+48,760,42,1670)
  }
  return canvas.toDataURL('image/png')
}
async function savePoster(){
  if(state.generating)return;
  state.generating=true;render();
  try{
    const href=await drawPoster(),anchor=document.createElement('a');
    anchor.download='送礼大王-礼物建议.png';anchor.href=href;anchor.click();toast('图片已保存')
  }catch{
    state.generating=false;render();
    const error=$('#share-error');
    if(error)error.innerHTML='图片生成失败，已保留当前选择。<button type="button" class="text-button" data-action="generate">重试</button>';
    return
  }
  state.generating=false;render()
}
function bind(){
  document.addEventListener('input',event=>{
    if(event.target.id==='budget')state.answers.budget=event.target.value;
    if(event.target.id==='budget')persistAnswers()
  });
  document.addEventListener('change',event=>{if(event.target.dataset.share){const key=event.target.dataset.share;state.share[key]=event.target.checked;render({preserveScroll:true,focusControl:{attribute:'share',key}})}});
  document.addEventListener('click',event=>{
    const target=event.target.closest('[data-action],[data-choice],[data-multi],[data-budget],[data-tab],[data-detail],[data-taboo-clear],[data-copy-card]');
    if(!target)return;
    if(target.dataset.choice){
      const key=target.dataset.choice,value=target.dataset.value,previousValue=state.answers[key];
      state.answers[key]=state.answers[key]===value&&['age','birthdayIntent','birthdayContext'].includes(key)?'':value;
      if(key==='recipientRole'){
        state.answers.object=legacyObjectForRole(value);
        if(previousValue!==value)state.answers.closeness=''
      }
      if(key==='scene'&&normalizeScene(value)!=='生日'){state.answers.birthdayIntent='';state.answers.birthdayContext=''}
      if(key==='tabooStatus'&&value!=='selected')state.answers.taboo=[];
      persistAnswers();render({preserveScroll:true,focusControl:key==='recipientRole'?null:{attribute:'choice',key,value}});
      if(key==='recipientRole')requestAnimationFrame(()=>document.querySelector('[data-choice="closeness"]')?.focus({preventScroll:true}));
      return
    }
    if(target.dataset.multi){
      const key=target.dataset.multi,selected=state.answers[key]||[];
      state.answers[key]=selected.includes(target.dataset.value)?selected.filter(value=>value!==target.dataset.value):[...selected,target.dataset.value];
      if(key==='taboo')state.answers.tabooStatus=state.answers[key].length?'selected':'';
      persistAnswers();render({preserveScroll:true,focusControl:{attribute:'multi',key,value:target.dataset.value}});return
    }
    if(target.dataset.budget){const value=target.dataset.budget;state.answers.budget=value;persistAnswers();render({preserveScroll:true,focusControl:{attribute:'budget',key:value}});return}
    if(target.dataset.tab){const key=target.dataset.tab;state.tab=key;render({preserveScroll:true,focusControl:{attribute:'tab',key}});return}
    if(target.dataset.detail){openDetail(target.dataset.detail,target);return}
    if(target.dataset.tabooClear!==undefined){state.answers.taboo=[];state.answers.tabooStatus='none';persistAnswers();render({preserveScroll:true});return}
    if(target.dataset.copyCard){navigator.clipboard?.writeText(target.dataset.copyCard).then(()=>toast('贺卡文案已复制')).catch(()=>toast('复制失败，请手动选择文案'));return}
    const action=target.dataset.action;
    if(action==='start'){state={...state,screen:'wizard',step:1,answers:defaultAnswers(),ranked:[],results:[],near:[],tab:'picked',shuffle:0,nearShuffle:0};render()}
    if(action==='home'){state.screen='home';closeDetail(true);render()}
    if(action==='reset')resetApp();
    if(action==='back'){state.step>1?state.step-=1:state.screen='home';render()}
    if(action==='next'&&validateStep()){if(state.step===3||state.step===7){compute();state.screen='results';render()}else{state.step+=1;render()}}
    if(action==='edit'){state.screen='wizard';state.step=1;render()}
    if(action==='refine'){state.screen='wizard';state.step=4;render()}
    if(action==='results'){state.screen='results';render()}
    if(action==='share'){state.screen='share';render()}
    if(action==='shuffle')shuffleResults();
    if(action==='close-detail')closeDetail();
    if(action==='copy')navigator.clipboard?.writeText(posterText()).then(()=>toast('文字已复制')).catch(()=>toast('复制失败，请手动选择文字'));
    if(action==='generate')savePoster()
  });
  document.addEventListener('keydown',event=>{
    const drawer=$('.drawer');
    if(!drawer)return;
    if(event.key==='Escape'){event.preventDefault();closeDetail();return}
    if(event.key!=='Tab')return;
    const focusable=[...drawer.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])')].filter(element=>!element.disabled);
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  });
  window.addEventListener('popstate',()=>closeDetail(true))
}
async function loadData(){
  try{
    const response=await fetch(DATA_FILE);
    if(!response.ok)throw new Error('data load failed');
    const parsed=await response.json();
    if(!Array.isArray(parsed.items)||!parsed.items.length)throw new Error('empty data');
    data=parsed
  }catch{
    data=fallback;
    if(location.protocol!=='file:')toast('礼物数据加载失败，当前使用精简礼物库')
  }
}
window.__giftApp={getState:()=>state,setAnswers:answers=>{state.answers={...defaultAnswers(),...answers}},compute,getData:()=>data};
bind();
render();
loadData();
