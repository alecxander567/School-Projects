const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

const fixedQuestions =  [
	"What are the courses available?",
	"Who are the school program heads?",
	"What is your name?",
	"Hi",
	"What are the requirements for enrollment?",
	"Thank you",
	"program heads",
	"courses offered",
	"courses available",
	"hello",
	"requirements for enrollment",
	"what are the requirements",
    "what are the requirements?",
    "What are the courses?",
    "How many courses available?",
    "thanks",
    "what are the available courses?",
    "what are the programs available?",
    "what are the programs offered",
    "available programs",
    "programs available",
    "courses available",
    "available courses",
    "who are you?",
    "what is your name",
    "who are you",
    "what courses the school offer?",
    "what courses does the school offers?",
    "courses offered",
    "programs offered",
    "courses",
    "courses?",
    "what are the school programs?",
    "what are the school programs",
    "programs of the school",
    "school programs",
    "programs",
    "programs?",
    "school heads?",
    "school heads",
    "who is the BSIT program head?",
    "who is the program head for bsit?",
    "program head of bsit",
    "who is the BSIT program head",
    "program head for bsit",
    "program head for bsit?",
    "bsit program head?",
    "bsit program head",
    "who is the program head of bsit?",
    "who is the program head for bsit",
    "program head bsit?",
    "program head bsit",
    "How much is the tuition?",
    "how much is the tuition",
    "how much is the tuition fee?",
    "how much is the tuition fee",
    "how much is the tuition for college?",
    "how much is the tuition for college",
    "college tuition fee",
    "who is the bsed program head?",
    "who is the bsed program head",
    "BSED program head",
    "program head bsed",
    "Who is the bsba program head?",
    "bsba program head",
    "program head bsba",
    "heads of the school?",
    "heads of the school",
    "School head",
    "college tuition",
    "tuition",
    "requirements",
    "who are the program heads?",
    "who are the program heads",
    "who are the niggers?"
	];


const fixedAnswers =  [
	"Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
	"President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
	"My name is Nortrom the chatbot, I am here to assist you.",
	"Hello, how can I help you?",
	"The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
	"You're welcome.",
	"President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
	"Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
	"Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
	"Hello, how can I help you?",
	"The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "You're welcome.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "My name is Nortrom the chatbot, I am here to assist you.",
    "My name is Nortrom the chatbot, I am here to assist you.",
    "My name is Nortrom the chatbot, I am here to assist you.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "The BSIT program head is Atty. Grecel Paclipan, for further information please visit us.",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "The BSED Program Head is Dr. Katherine Rosales, for further questions and informations please visit us.",
    "The BSED Program Head is  Dr. Katherine Rosales, for further questions and informations please visit us.",
    "The BSED Program Head is Dr. Katherine Rosales, for further questions and informations please visit us.",
    "The BSED Program Head is Dr. Katherine Rosales, for further questions and informations please visit us.",
    "The BSBA Program Head is Dr. Marybeth Lauron, for further questions and informations please visit us.",
    "The BSBA Program Head is Dr. Marybeth Lauron, for further questions and informations please visit us.",
    "The BSBA Program Head is Dr. Marybeth Lauron, for further questions and informations please visit us.",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "College Department: Total Student Services(New Student): 3,936.38, (Old Students): 3,719.58, Total other fees: (New Student): 530.00, (Old Student): 120.00, To be paid upon enrollment: (New Student): 4,616.38, (Old Student): 3,839.58",
    "The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
    "I am the nigger"
	];

function sendMessage(){
	const userMessage = userInput.value.trim();

	if(userMessage !== ""){
		addMessage("You", userMessage, "outgoing");

		const botResponse = processInput(userMessage);

		addMessage("Bot", botResponse, "ongoing");

		userInput.value = "";

	}
}

function addMessage(sender, text, className){
	const messageElement = document.createElement("li");
	messageElement.textContent = text;
	messageElement.className = `chat ${className}`;
	const ulElement = document.createElement("ul");
	ulElement.appendChild(messageElement);
	chatbox.appendChild(ulElement);
}

function processInput(userInput){
    userInput = userInput.toLowerCase();

    const index = fixedQuestions.findIndex(question => userInput.includes(question.toLowerCase()));
    if(index !== -1){
    	return fixedAnswers[index];
    }

    return "For further questions and informations, please visit us or contact us at 291-2007 or email us at saintpetertoril@yahoo.com";
}