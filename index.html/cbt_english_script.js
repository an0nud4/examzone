
// ═══════════════════════════════════════════════════════════
//  EXAMZONE CBT – ENGLISH LANGUAGE (60 Questions)
//  Sections: Comprehension | Lexis & Structure | Oral | Novel
// ═══════════════════════════════════════════════════════════

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VaevgO3FHWq5eLPByX2c";

const SECTIONS = [
  { id:"comp",   label:"Comprehension",      icon:"📖", color:"#2ECC71",  range:[0,9]  },
  { id:"lexis",  label:"Lexis & Structure",  icon:"📝", color:"#63B3ED",  range:[10,34]},
  { id:"oral",   label:"Oral Forms",          icon:"🔊", color:"#F5A623",  range:[35,44]},
  { id:"novel",  label:"The Lekki Headmaster",icon:"📚", color:"#A78BFA",  range:[45,49]},
];

const PASSAGE = `"Nigerian novelists, like other writers, have been influenced by their environment and by the circumstances in history, which helped to make that environment what it is today. They write partly to explain the social dilemmas of the group to which they belong and partly to portray a way of life, which has survived, to some extent. This culture might have survived more fully if certain historical events had not so drastically affected Africa and the attitude of Africans, not only to people of other races but also to their own selves. Of these experiences the slave trade is the most remote and has therefore exercised only an indirect influence on the present writer. What certainly provided the motivation and subsequently the tools for writing is the colonial experience. This experience was such that it disturbed the life of the average Nigerian even though it left him free for the most part to carry on his traditional pursuits. Just as the colonial government followed the lead of the trading companies in administrative matters, so also did it allow the missionaries to take the initiative in matters of formal education. Though the government was at first slow in providing education, it was willing, albeit reluctantly, to give support to the effort of the missionaries. The missionaries controlled education at the early stages and most of the Nigerian writers attended missionary schools at least at the primary level. The aim of Christian missionary education was to make converts to the Christian faith. Its target was the people and to reach the people, the vernacular had to be used."`;

const ALL_QUESTIONS = [
  // ── SECTION A: COMPREHENSION (Q1–10) ──
  {
    sec:"comp", num:1,
    q:"Which of the following constituted a major influence on Nigerian writers?",
    opts:["Social group and history","Social group and the slave trade","Environment and history","The slave trade and colonialism"],
    a:2,
    e:"The first sentence states that Nigerian writers have been influenced by their environment and circumstances in history."
  },
  {
    sec:"comp", num:2,
    q:"Which of the following statements is TRUE according to the passage?",
    opts:["Nigerian writers are Christians","The slave trade has an indirect influence on Nigerian writers","The missionaries had no interest in education","The colonial government was very quick in providing education"],
    a:1,
    e:"The passage explicitly says: 'Of these experiences the slave trade is the most remote and has therefore exercised only an indirect influence on the present writer.'"
  },
  {
    sec:"comp", num:3,
    q:"The colonial experience motivated Nigerian writers to ______",
    opts:["become missionaries","join the trading companies","write","travel abroad"],
    a:2,
    e:"The passage states: 'What certainly provided the motivation and subsequently the tools for writing is the colonial experience.'"
  },
  {
    sec:"comp", num:4,
    q:"The aim of Christian missionary education was to ______",
    opts:["teach the vernacular","make converts to the Christian faith","support the colonial government","produce writers"],
    a:1,
    e:"The passage says: 'The aim of Christian missionary education was to make converts to the Christian faith.'"
  },
  {
    sec:"comp", num:5,
    q:"The word 'vernacular' as used in the passage means ______",
    opts:["foreign language","Latin","local or native language","English"],
    a:2,
    e:"The passage says missionaries used the vernacular to reach the people, meaning their local or native language."
  },
  {
    sec:"comp", num:6,
    q:"According to the passage, the slave trade has exercised ______ influence on Nigerian writers.",
    opts:["a direct","an indirect","a negative","a positive"],
    a:1,
    e:"The passage states the slave trade 'has therefore exercised only an indirect influence on the present writer.'"
  },
  {
    sec:"comp", num:7,
    q:"The colonial experience disturbed the life of the average Nigerian ______",
    opts:["completely","slightly","for the most part","never"],
    a:2,
    e:"The passage says: 'This experience was such that it disturbed the life of the average Nigerian even though it left him free for the most part to carry on his traditional pursuits.' — This means 'for the most part' he was still free."
  },
  {
    sec:"comp", num:8,
    q:"The missionaries were given the initiative in matters of ______",
    opts:["trading","administration","formal education","agriculture"],
    a:2,
    e:"The passage states: 'so also did it allow the missionaries to take the initiative in matters of formal education.'"
  },
  {
    sec:"comp", num:9,
    q:"The attitude of the writer of this passage is ______",
    opts:["critical","humorous","factual and analytical","sarcastic"],
    a:2,
    e:"The writer presents information in a neutral, factual manner, analysing influences on Nigerian writers without personal emotion."
  },
  {
    sec:"comp", num:10,
    q:"A suitable title for this passage would be ______",
    opts:["The Slave Trade in Nigeria","Missionary Activities in Nigeria","Influences on Nigerian Writers","Colonial Administration in Nigeria"],
    a:2,
    e:"The passage focuses on how environment, history, the slave trade and colonial experience influenced Nigerian writers — making 'Influences on Nigerian Writers' the best title."
  },

  // ── SECTION B: LEXIS & STRUCTURE (Q11–45) ──
  // Synonyms
  {
    sec:"lexis", num:11,
    q:"The accused was exonerated after new evidence emerged.",
    opts:["punished","arrested","cleared","convicted"],
    a:2,
    e:"Exonerated means to be absolved or cleared from blame or criminal charges."
  },
  {
    sec:"lexis", num:12,
    q:"Agwube's explanation of her poor performance at the examination only begged the question.",
    opts:["raised another question","provided a satisfactory answer","avoided the real issue","confused everyone"],
    a:2,
    e:"'To beg the question' means to avoid addressing the real issue — the answer is not given directly."
  },
  {
    sec:"lexis", num:13,
    q:"We have every need to preserve some of our national monuments for posterity.",
    opts:["future generations","present enjoyment","political reasons","tourists"],
    a:0,
    e:"Posterity means future generations or descendants — those who come after us."
  },
  {
    sec:"lexis", num:14,
    q:"He commands the confidence and respect of all his subordinates.",
    opts:["equals","superiors","juniors","colleagues"],
    a:2,
    e:"Subordinates are people under one's authority — juniors in rank or position."
  },
  {
    sec:"lexis", num:15,
    q:"The president has mapped out some laudable projects to embark upon.",
    opts:["profitable","expensive","praiseworthy","impossible"],
    a:2,
    e:"Laudable means deserving praise or commendable — worthy of admiration."
  },
  {
    sec:"lexis", num:16,
    q:"Adamu's father is a stern man.",
    opts:["gentle","strict","weak","kind"],
    a:1,
    e:"Stern means strict, severe or firm in character. It does not mean cruel."
  },
  {
    sec:"lexis", num:17,
    q:"Her remark was considered sarcastic.",
    opts:["polite","serious","mocking","friendly"],
    a:2,
    e:"Sarcastic means using irony to mock or convey contempt — it has a cutting, derisive tone."
  },
  {
    sec:"lexis", num:18,
    q:"The politician's statement was regarded as ambiguous.",
    opts:["truthful","unclear","dangerous","dishonest"],
    a:1,
    e:"Ambiguous means having more than one possible meaning — open to interpretation; unclear."
  },
  // Antonyms
  {
    sec:"lexis", num:19,
    q:"Choose the ANTONYM (opposite) of 'hostile'.",
    opts:["harsh","cold","friendly","cruel"],
    a:2,
    e:"Hostile means unfriendly or antagonistic. Its opposite is friendly."
  },
  {
    sec:"lexis", num:20,
    q:"His explanation was plausible. Choose the ANTONYM.",
    opts:["convincing","reasonable","believable","doubtful"],
    a:3,
    e:"Plausible means seemingly reasonable or believable. Its antonym is doubtful or implausible."
  },
  {
    sec:"lexis", num:21,
    q:"The witness gave a coherent account of the incident. Choose the ANTONYM.",
    opts:["logical","consistent","confusing","clear"],
    a:2,
    e:"Coherent means logical and clearly expressed. Its opposite is confusing or incoherent."
  },
  {
    sec:"lexis", num:22,
    q:"She is very frugal in her spending habits. Choose the ANTONYM.",
    opts:["economical","thrifty","wasteful","careful"],
    a:2,
    e:"Frugal means careful with money and avoiding waste. Its antonym is wasteful or extravagant."
  },
  {
    sec:"lexis", num:23,
    q:"The new policy had a detrimental effect on the company. Choose the ANTONYM.",
    opts:["harmful","damaging","beneficial","destructive"],
    a:2,
    e:"Detrimental means causing harm or damage. Its antonym is beneficial."
  },
  // Sentence Completion
  {
    sec:"lexis", num:24,
    q:"Hardly had the teacher entered the class ______ the students became silent.",
    opts:["when","than","as","before"],
    a:0,
    e:"The correct structure is 'Hardly...when' to show two events happening quickly in sequence."
  },
  {
    sec:"lexis", num:25,
    q:"Neither the principal nor the teachers ______ willing to accept the proposal.",
    opts:["is","was","are","has been"],
    a:2,
    e:"With 'neither...nor', the verb agrees with the nearer subject (teachers = plural → 'are')."
  },
  {
    sec:"lexis", num:26,
    q:"She speaks French ______ fluently than her sister.",
    opts:["most","more","much","very"],
    a:1,
    e:"The comparative form 'more' is used with 'than' when comparing two things."
  },
  {
    sec:"lexis", num:27,
    q:"The committee insisted that the report ______ submitted immediately.",
    opts:["is","was","be","has been"],
    a:2,
    e:"After verbs of insistence like 'insist', the subjunctive 'be' is used (not 'is' or 'was')."
  },
  {
    sec:"lexis", num:28,
    q:"No sooner had the rain started ______ the match was cancelled.",
    opts:["when","than","as","before"],
    a:1,
    e:"The correct structure is 'No sooner...than'. Remember: 'Hardly...when' vs 'No sooner...than'."
  },
  {
    sec:"lexis", num:29,
    q:"He denied ______ the money from the drawer.",
    opts:["to take","taking","to have taken","take"],
    a:1,
    e:"After 'deny', we use the gerund (verb + -ing). He denied taking (not 'to take')."
  },
  {
    sec:"lexis", num:30,
    q:"The book, together with its illustrations, ______ missing.",
    opts:["are","were","have been","is"],
    a:3,
    e:"The subject 'book' is singular. 'Together with its illustrations' is a parenthetical phrase and does not change the number."
  },
  {
    sec:"lexis", num:31,
    q:"If he ______ earlier, he would have caught the bus.",
    opts:["came","had come","comes","has come"],
    a:1,
    e:"Third conditional: 'If + past perfect (had come), would have + past participle'. This expresses an unreal past condition."
  },
  {
    sec:"lexis", num:32,
    q:"One of the players ______ been injured.",
    opts:["have","were","has","are"],
    a:2,
    e:"'One of the players' is singular — the head noun is 'One', not 'players'. Use 'has'."
  },
  {
    sec:"lexis", num:33,
    q:"The principal, along with his staff, ______ expected to attend.",
    opts:["are","were","is","have been"],
    a:2,
    e:"The main subject is 'principal' (singular). 'Along with his staff' is a parenthetical phrase and does not change the verb."
  },
  {
    sec:"lexis", num:34,
    q:"It is high time we ______ home.",
    opts:["go","went","have gone","are going"],
    a:1,
    e:"'It is high time' is always followed by the past subjunctive (went), even though it refers to the present."
  },
  // Sentence Interpretation
  {
    sec:"lexis", num:35,
    q:"'If he had listened to advice, he would not be in trouble now.' This means that he ______",
    opts:["is now receiving advice","ignored advice in the past","will listen to advice later","has never been advised"],
    a:1,
    e:"The mixed conditional shows a past action (not listening) causing a present consequence. He ignored advice in the past."
  },
  {
    sec:"lexis", num:36,
    q:"'He spoke as though he knew everything.' This means that he ______",
    opts:["actually knew everything","pretended to know everything","was asked to explain everything","was ignorant of everything"],
    a:1,
    e:"'As though' introduces a hypothetical or false situation — he was pretending to know everything."
  },
  {
    sec:"lexis", num:37,
    q:"'He was given the lion's share of the inheritance.' This means he got ______",
    opts:["nothing","the smallest portion","the largest portion","all of it"],
    a:2,
    e:"'Lion's share' means the greatest or largest part. It comes from Aesop's Fable."
  },
  {
    sec:"lexis", num:38,
    q:"'The manager turned down the request.' This means he ______",
    opts:["postponed it","accepted it","rejected it","reviewed it"],
    a:2,
    e:"'Turned down' is a phrasal verb meaning rejected or refused."
  },
  {
    sec:"lexis", num:39,
    q:"'She is an old hand at this job.' This means she ______",
    opts:["is too old for the job","has just started the job","has much experience","dislikes the job"],
    a:2,
    e:"'Old hand' means an experienced person — someone who has done something for a long time."
  },
  {
    sec:"lexis", num:40,
    q:"'He kicked the bucket last week.' This means he ______",
    opts:["got angry","traveled","died","resigned"],
    a:2,
    e:"'Kicked the bucket' is a euphemistic idiom meaning to die."
  },
  // Idioms
  {
    sec:"lexis", num:41,
    q:"He is the apple of his mother's eye. This means he is ______",
    opts:["hated","loved deeply","ignored","punished often"],
    a:1,
    e:"'Apple of one's eye' means someone greatly loved or cherished."
  },
  {
    sec:"lexis", num:42,
    q:"The new employee is still a greenhorn.",
    opts:["experienced","inexperienced","angry","lazy"],
    a:1,
    e:"'Greenhorn' means a novice, beginner, or someone new and inexperienced."
  },
  {
    sec:"lexis", num:43,
    q:"Don't beat about the bush; tell me the truth.",
    opts:["delay","avoid the main point","speak directly","shout"],
    a:1,
    e:"'Beat about the bush' means to avoid coming to the main point — to talk around the issue."
  },
  {
    sec:"lexis", num:44,
    q:"He broke the ice by telling a joke.",
    opts:["created tension","ended the conversation","made people feel more relaxed","broke a glass"],
    a:2,
    e:"'Break the ice' means to relieve tension or awkwardness in a social situation."
  },
  {
    sec:"lexis", num:45,
    q:"She promised to pay me back, but she is paying me with the left hand.",
    opts:["paying quickly","paying reluctantly","paying generously","not paying at all"],
    a:1,
    e:"'Pay with the left hand' means to pay unwillingly, reluctantly or in a begrudging manner."
  },

  // ── SECTION C: ORAL FORMS (Q46–55) ──
  {
    sec:"oral", num:46,
    q:"Choose the word that has the same consonant sound as the underlined letters in 'Church'.",
    opts:["character","chemist","machine","archive"],
    a:0,
    e:"'Church' has the /tʃ/ sound. 'Character' also has /tʃ/ at the start. 'Chemist' = /k/, 'machine' = /ʃ/, 'archive' = /k/."
  },
  {
    sec:"oral", num:47,
    q:"Choose the word that rhymes with 'Height'.",
    opts:["weight","eight","fate","kite"],
    a:3,
    e:"Height /haɪt/ rhymes with kite /kaɪt/. Both end in the /aɪt/ sound."
  },
  {
    sec:"oral", num:48,
    q:"Choose the word that has the stress on the FIRST syllable.",
    opts:["economy","photographic","educate","industrial"],
    a:2,
    e:"'Educate' is stressed on the first syllable: ED-u-cate. 'Economy' = e-CON-o-my, 'photographic' = pho-to-GRAPH-ic."
  },
  {
    sec:"oral", num:49,
    q:"Choose the word that has a DIFFERENT vowel sound from the others.",
    opts:["seat","heat","great","beat"],
    a:2,
    e:"Seat /iː/, heat /iː/, beat /iː/ — all share the long 'ee' sound. 'Great' /eɪ/ is different."
  },
  {
    sec:"oral", num:50,
    q:"EMEKA finished his homework yesterday. (Emphatic stress on EMEKA) What does this imply?",
    opts:["He started his homework yesterday","No, he FINISHED it (not started)","Someone else finished it","He finished it today"],
    a:1,
    e:"Stress on 'finished' would emphasise the action. Stress on 'EMEKA' contrasts him with someone else — implying Emeka (not another person) finished it."
  },
  {
    sec:"oral", num:51,
    q:"Choose the word that has the same vowel sound as the underlined sound in 'Bread'.",
    opts:["break","great","head","beach"],
    a:2,
    e:"Bread /e/ and head /e/ share the short /ɛ/ sound. 'Break' and 'great' have /eɪ/, 'beach' has /iː/."
  },
  {
    sec:"oral", num:52,
    q:"Choose the word that has the same consonant sound as the underlined letters in 'This'.",
    opts:["thin","thanks","that","think"],
    a:2,
    e:"'This' has the voiced dental fricative /ð/. 'That' also has /ð/. 'Thin', 'thanks', 'think' have the voiceless /θ/."
  },
  {
    sec:"oral", num:53,
    q:"Choose the word that does NOT have the same vowel sound as the others.",
    opts:["through","rude","blood","true"],
    a:2,
    e:"Through /uː/, rude /uː/, true /uː/ — all have the long 'oo' sound. 'Blood' /ʌ/ is different."
  },
  {
    sec:"oral", num:54,
    q:"The word 'photography' is stressed on the ______ syllable.",
    opts:["first","second","third","fourth"],
    a:1,
    e:"pho-TO-gra-phy — the stress falls on the second syllable 'TO'. Compare: PHO-to-graph (first syllable)."
  },
  {
    sec:"oral", num:55,
    q:"Choose the option that rhymes with 'Fight'.",
    opts:["freight","feet","fit","fate"],
    a:0,
    e:"Fight /faɪt/ and freight /freɪt/ — both end in the /t/ consonant and share a similar vowel+t rhyme pattern in JAMB context."
  },

  // ── SECTION D: THE LEKKI HEADMASTER (Q56–60) ──
  {
    sec:"novel", num:56,
    q:"The author of 'The Lekki Headmaster' is ______",
    opts:["Chinua Achebe","Kabir Alabi Garba","Wole Soyinka","Chimamanda Adichie"],
    a:1,
    e:"Kabir Alabi Garba is the confirmed author of the 2026 JAMB prescribed novel 'The Lekki Headmaster'."
  },
  {
    sec:"novel", num:57,
    q:"The protagonist of 'The Lekki Headmaster' is ______",
    opts:["Mr. Okon","Mrs. Ibidun Gloss","Mr. Adewale Adebepo (Bepo)","Mr. Fafore"],
    a:2,
    e:"The protagonist is the school principal, Mr. Adewale Adebepo, popularly called Bepo — a dedicated headmaster facing many challenges."
  },
  {
    sec:"novel", num:58,
    q:"The Managing Director of Stardom Schools in the novel is ______",
    opts:["Mr. Adewale Adebepo","Mr. Okon","Mrs. Ibidun Gloss","Mr. Fafore"],
    a:2,
    e:"Mrs. Ibidun Gloss is the business-oriented, profit-driven Managing Director of Stardom Schools."
  },
  {
    sec:"novel", num:59,
    q:"What major problem is faced at Stardom Schools in the novel?",
    opts:["Lack of students","Teachers resigning to travel abroad","Destruction of the school building","Lack of government approval"],
    a:1,
    e:"The novel vividly depicts the 'Japa syndrome' — many qualified teachers want to relocate abroad, creating a staffing crisis."
  },
  {
    sec:"novel", num:60,
    q:"The theme of 'Japa syndrome' in the novel refers to ______",
    opts:["discipline in schools","leaving Nigeria for better opportunities abroad","financial management","corruption in education"],
    a:1,
    e:"'Japa' is Nigerian slang for emigration — leaving Nigeria in search of better economic or professional prospects abroad."
  },
];

// ── APP STATE ──
const state = {
  mode: "home",      // home | setup | exam | result
  section: null,     // selected section filter (null = all)
  questions: [],
  answers: [],
  current: 0,
  timeLeft: 0,
  timerInterval: null,
  mapOpen: false,
  showPassage: false,
};

// ── HELPERS ──
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function getColor(secId) {
  return SECTIONS.find(s => s.id === secId)?.color || "#fff";
}

// ── HOME SCREEN ──
function buildHome() {
  const grid = document.getElementById("sectionGrid");
  grid.innerHTML = SECTIONS.map(s => {
    const count = ALL_QUESTIONS.filter(q => q.sec === s.id).length;
    return `<div class="sec-card" data-id="${s.id}" onclick="selectSection('${s.id}', this)" style="--sc:${s.color}">
      <div class="sec-card-glow"></div>
      <div class="sc-icon">${s.icon}</div>
      <div class="sc-name">${s.label}</div>
      <div class="sc-count">${count} questions</div>
      <div class="sc-check">✓</div>
    </div>`;
  }).join("");

  // All questions card
  document.getElementById("allCard").onclick = () => startExam(null);
  showScreen("homeScreen");
}

function selectSection(id, card) {
  document.querySelectorAll(".sec-card").forEach(c => c.classList.remove("sel"));
  card.classList.add("sel");
  state.section = id;
  document.getElementById("startExamBtn").disabled = false;
  const count = ALL_QUESTIONS.filter(q => q.sec === id).length;
  const mins = Math.max(5, Math.round(count * 0.9));
  document.getElementById("startInfo").textContent = `${count} questions · ~${mins} minutes · Instant explanations`;
}

function startExam(secId) {
  const filter = secId !== undefined ? secId : state.section;
  let qs = filter ? ALL_QUESTIONS.filter(q => q.sec === filter) : [...ALL_QUESTIONS];
  if (!qs.length) return;

  // Shuffle
  qs = qs.sort(() => Math.random() - 0.5);

  state.questions = qs;
  state.answers = new Array(qs.length).fill(null);
  state.current = 0;
  state.section = filter;
  state.mapOpen = false;
  state.showPassage = false;

  const mins = Math.max(5, Math.round(qs.length * 0.9));
  state.timeLeft = mins * 60;

  // Set header
  const sec = SECTIONS.find(s => s.id === filter);
  document.getElementById("etbTitle").textContent = sec
    ? `JAMB English – ${sec.label}`
    : "JAMB English – Full Practice (60 Questions)";
  document.getElementById("etbMeta").textContent = `${qs.length} Questions · ${mins} minutes`;

  showScreen("examScreen");
  buildMap();
  loadQuestion();
  startTimer();
}

// ── LOAD QUESTION ──
function loadQuestion() {
  const qs = state.questions;
  const i = state.current;
  const q = qs[i];
  const answered = state.answers[i] !== null;
  const total = qs.length;
  const sec = SECTIONS.find(s => s.id === q.sec);

  document.getElementById("qNumDisplay").textContent = `Question ${i + 1} of ${total}`;
  document.getElementById("examProgFill").style.width = `${((i + 1) / total) * 100}%`;
  document.getElementById("qNumDisplay").style.color = sec?.color || "#fff";

  // Tags
  document.getElementById("qTagsDisplay").innerHTML =
    `<span class="qtag" style="background:${sec?.color}22;color:${sec?.color};border:1px solid ${sec?.color}44">${sec?.icon} ${sec?.label}</span>
     <span class="qtag qtag-num">Q${q.num}</span>`;

  // Passage toggle for comprehension
  const passBtn = document.getElementById("passageToggleBtn");
  if (q.sec === "comp") {
    passBtn.style.display = "flex";
  } else {
    passBtn.style.display = "none";
    state.showPassage = false;
    document.getElementById("passageBox").style.display = "none";
  }

  document.getElementById("qText").textContent = q.q;

  // Options
  const letters = ["A", "B", "C", "D"];
  document.getElementById("qOpts").innerHTML = q.opts.map((opt, oi) => {
    let cls = "";
    let icon = "";
    if (answered) {
      cls = "locked";
      if (oi === q.a) { cls += " correct"; icon = `<span class="opt-icon">✅</span>`; }
      else if (oi === state.answers[i]) { cls += " wrong"; icon = `<span class="opt-icon">❌</span>`; }
    } else if (state.answers[i] === oi) {
      cls = "chosen";
    }
    return `<div class="opt ${cls}" onclick="selectAnswer(${oi})">
      <div class="opt-key" style="${answered && oi===q.a ? 'background:#2ECC71;color:#fff' : answered && oi===state.answers[i] ? 'background:#EF4444;color:#fff' : ''}">${letters[oi]}</div>
      <span>${opt}</span>${icon}
    </div>`;
  }).join("");

  // Explanation
  const expl = document.getElementById("qExpl");
  if (answered) {
    const isCorrect = state.answers[i] === q.a;
    expl.innerHTML = `<strong style="color:${isCorrect ? '#2ECC71' : '#EF4444'}">${isCorrect ? '✅ Correct!' : '❌ Wrong!'}</strong><br><strong>📝 Explanation:</strong> ${q.e}`;
    expl.classList.add("show");
  } else {
    expl.classList.remove("show");
    expl.innerHTML = "";
  }

  // Nav
  document.getElementById("prevBtn").disabled = i === 0;
  document.getElementById("prevBtn").style.opacity = i === 0 ? "0.35" : "1";
  document.getElementById("nextBtn").textContent = i === total - 1 ? "Finish →" : "Next →";

  updateMapHighlight();
  updateMapCount();
}

function selectAnswer(idx) {
  const i = state.current;
  if (state.answers[i] !== null) return;
  state.answers[i] = idx;
  updateMapBtn(i, idx === state.questions[i].a);
  loadQuestion();
}

function nextQ() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    loadQuestion();
    closeMap();
  } else {
    confirmSubmit();
  }
}

function prevQ() {
  if (state.current > 0) {
    state.current--;
    loadQuestion();
    closeMap();
  }
}

// ── PASSAGE ──
function togglePassage() {
  state.showPassage = !state.showPassage;
  const box = document.getElementById("passageBox");
  const btn = document.getElementById("passageToggleBtn");
  box.style.display = state.showPassage ? "block" : "none";
  btn.textContent = state.showPassage ? "📖 Hide Passage" : "📖 Read Passage";
  box.innerHTML = `<div class="passage-title">📖 Comprehension Passage</div><p>${PASSAGE}</p>`;
}

// ── MAP ──
function buildMap() {
  const grid = document.getElementById("qMapGrid");
  grid.innerHTML = state.questions.map((_, i) =>
    `<button class="qm-btn" id="qmb${i}" onclick="jumpTo(${i})">${i + 1}</button>`
  ).join("");
}

function updateMapBtn(i, isCorrect) {
  const btn = document.getElementById(`qmb${i}`);
  if (btn) btn.classList.add("answered");
}

function updateMapHighlight() {
  document.querySelectorAll(".qm-btn").forEach((b, i) => {
    b.classList.toggle("current", i === state.current);
  });
}

function updateMapCount() {
  const done = state.answers.filter(a => a !== null).length;
  document.getElementById("mapCount").textContent = `${done}/${state.questions.length}`;
}

function jumpTo(i) {
  state.current = i;
  loadQuestion();
  closeMap();
}

function toggleMap() {
  const panel = document.getElementById("qMapPanel");
  state.mapOpen = !state.mapOpen;
  panel.classList.toggle("show", state.mapOpen);
}

function closeMap() {
  document.getElementById("qMapPanel").classList.remove("show");
  state.mapOpen = false;
}

// ── TIMER ──
function startTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    const m = String(Math.floor(state.timeLeft / 60)).padStart(2, "0");
    const s = String(state.timeLeft % 60).padStart(2, "0");
    document.getElementById("timerDisplay").textContent = `${m}:${s}`;
    const tb = document.getElementById("examTimer");
    if (state.timeLeft <= 60) tb.classList.add("warn");
    if (state.timeLeft <= 0) { clearInterval(state.timerInterval); submitExam(); }
  }, 1000);
}

// ── SUBMIT ──
function confirmSubmit() {
  const unanswered = state.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  }
  submitExam();
}

function confirmExit() {
  if (confirm("Exit this CBT session? Your progress will be lost.")) {
    clearInterval(state.timerInterval);
    buildHome();
  }
}

function submitExam() {
  clearInterval(state.timerInterval);

  let correct = 0, wrong = 0, skipped = 0;
  state.questions.forEach((q, i) => {
    if (state.answers[i] === null) skipped++;
    else if (state.answers[i] === q.a) correct++;
    else wrong++;
  });

  const total = state.questions.length;
  const pct = Math.round((correct / total) * 100);

  // Section breakdown
  const secBreakdown = {};
  SECTIONS.forEach(s => { secBreakdown[s.id] = { correct: 0, total: 0 }; });
  state.questions.forEach((q, i) => {
    secBreakdown[q.sec].total++;
    if (state.answers[i] === q.a) secBreakdown[q.sec].correct++;
  });

  // Grade
  let grade, msg, gradeColor;
  if (pct >= 80) { grade = "🏆 Excellent!"; msg = "Outstanding! You are very well prepared for JAMB English."; gradeColor = "#2ECC71"; }
  else if (pct >= 70) { grade = "⭐ Very Good"; msg = "Great work! A little more revision and you will be fully ready."; gradeColor = "#4ADE80"; }
  else if (pct >= 60) { grade = "👍 Good"; msg = "Good effort. Focus on your weak sections and try again."; gradeColor = "#F5A623"; }
  else if (pct >= 50) { grade = "📖 Average"; msg = "Keep studying. Review all explanations carefully."; gradeColor = "#FB923C"; }
  else { grade = "💪 Keep Trying"; msg = "Do not give up! Study the explanations and practice daily."; gradeColor = "#EF4444"; }

  // Update result screen
  document.getElementById("resultLabel").textContent =
    `JAMB English · ${total} Questions`;
  document.getElementById("scoreNum").textContent = correct;
  document.getElementById("scoreTotal").textContent = `/${total}`;
  document.getElementById("scorePct").textContent = `${pct}%`;
  document.getElementById("resultGrade").textContent = grade;
  document.getElementById("resultGrade").style.color = gradeColor;
  document.getElementById("resultMsg").textContent = msg;
  document.getElementById("rsCorrect").textContent = correct;
  document.getElementById("rsWrong").textContent = wrong;
  document.getElementById("rsSkipped").textContent = skipped;

  // Animate score ring
  const circ = 377;
  const offset = circ - (circ * pct / 100);
  document.getElementById("scoreCircle").style.strokeDashoffset = offset;
  document.getElementById("scoreCircle").style.stroke = gradeColor;

  // Section breakdown
  const sbHtml = SECTIONS.map(s => {
    const d = secBreakdown[s.id];
    if (!d || d.total === 0) return "";
    const sp = Math.round((d.correct / d.total) * 100);
    return `<div class="sb-item">
      <div class="sb-label"><span>${s.icon}</span> ${s.label}</div>
      <div class="sb-bar-wrap"><div class="sb-bar" style="width:${sp}%;background:${s.color}"></div></div>
      <div class="sb-score" style="color:${s.color}">${d.correct}/${d.total}</div>
    </div>`;
  }).join("");
  document.getElementById("secBreakdown").innerHTML = sbHtml;

  // WhatsApp channel CTA
  document.getElementById("waCta").innerHTML = `
    <div class="wa-box">
      <div class="wa-icon">📣</div>
      <div class="wa-text">
        <div class="wa-title">Join Our WhatsApp Channel for Daily Practice!</div>
        <div class="wa-sub">Get daily JAMB questions, tips, and answers sent directly to you.</div>
      </div>
      <a href="${WHATSAPP_CHANNEL}" target="_blank" class="wa-btn">
        💬 Follow Channel
      </a>
    </div>`;

  document.getElementById("reviewList").style.display = "none";
  showScreen("resultScreen");
}

// ── REVIEW ──
function showReview() {
  const list = document.getElementById("reviewList");
  if (list.style.display !== "none") { list.style.display = "none"; return; }
  const letters = ["A", "B", "C", "D"];
  list.innerHTML = state.questions.map((q, i) => {
    const ua = state.answers[i];
    const isCorrect = ua === q.a;
    const isSkipped = ua === null;
    const sec = SECTIONS.find(s => s.id === q.sec);
    let ansHtml = "";
    if (isSkipped) {
      ansHtml = `<div class="ri-answer skipped">⏭️ Skipped — not answered</div>
                 <div class="ri-correct-ans">✅ Correct: ${letters[q.a]}. ${q.opts[q.a]}</div>`;
    } else if (isCorrect) {
      ansHtml = `<div class="ri-answer correct">✅ Your answer: ${letters[ua]}. ${q.opts[ua]}</div>`;
    } else {
      ansHtml = `<div class="ri-answer wrong">❌ Your answer: ${letters[ua]}. ${q.opts[ua]}</div>
                 <div class="ri-correct-ans">✅ Correct: ${letters[q.a]}. ${q.opts[q.a]}</div>`;
    }
    return `<div class="review-item">
      <div class="ri-meta">
        <span class="qtag" style="background:${sec?.color}22;color:${sec?.color};border:1px solid ${sec?.color}44">${sec?.icon} ${sec?.label}</span>
        <span class="qtag qtag-num">Q${q.num}</span>
        <span class="qtag" style="background:${isSkipped?'rgba(255,255,255,.06)':isCorrect?'rgba(46,204,113,.12)':'rgba(239,68,68,.12)'};color:${isSkipped?'rgba(255,255,255,.4)':isCorrect?'#2ECC71':'#EF4444'}">${isSkipped?"SKIPPED":isCorrect?"CORRECT":"WRONG"}</span>
      </div>
      <div class="ri-q">${q.q}</div>
      ${ansHtml}
      <div class="ri-expl">📝 ${q.e}</div>
    </div>`;
  }).join("");
  list.style.display = "flex";
  list.scrollIntoView({ behavior: "smooth" });
}

function retryExam() {
  startExam(state.section);
}

function goHome() {
  clearInterval(state.timerInterval);
  state.section = null;
  document.getElementById("startExamBtn").disabled = true;
  document.getElementById("startInfo").textContent = "Select a section above to begin";
  document.querySelectorAll(".sec-card").forEach(c => c.classList.remove("sel"));
  buildHome();
}

// ── INIT ──
window.addEventListener("DOMContentLoaded", buildHome);
