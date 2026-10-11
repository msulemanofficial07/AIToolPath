const fs = require("node:fs");
const path = require("node:path");

const base = "https://msulemanofficial07.github.io/AIToolPath/";
const pages = [
  {
    file: "chatgpt-review.html",
    title: "My ChatGPT Review for Freelancers and Students",
    description: "A first-person ChatGPT review from a freelancer and student: coding, learning, research, and writing strengths, plus what to verify.",
    lede: "ChatGPT is the AI assistant I reach for when I want one flexible place to brainstorm, learn a difficult idea, outline a project, or get unstuck in code. Here is where it helps in my student and freelance workflow—and where I do not trust a first answer.",
    sections: [
      ["My experience with ChatGPT", `<p>As a freelancer and student, I have spent years using and comparing AI tools. ChatGPT has earned a regular place in my workflow because it can move between different kinds of work: explain a concept in simpler language, help structure a proposal, brainstorm alternatives, or help me reason through an implementation. That flexibility is more valuable to me than treating one chatbot as a specialist in everything.</p><p>For coding, I use it to discuss an error, understand unfamiliar code, draft a small example, or plan a change before editing a project. I still run the code, inspect the diff, and test edge cases. For education, I ask for a step-by-step explanation or practice questions, then check against my course material. For writing, it is a thinking partner and editor—not a replacement for my own judgment or voice.</p>`],
      ["Which model should I use on ChatGPT Plus?", `<p>When a task needs deeper reasoning or code review, I choose the strongest reasoning-capable model currently shown in my ChatGPT Plus model picker. OpenAI changes model names, limits, and availability over time, so I do not treat a model name in an old article as permanent advice. Check the current selector in your account. ChatGPT Plus is a consumer subscription; API access and API billing are separate.</p><p><a href="https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus" target="_blank" rel="noopener noreferrer">ChatGPT Plus help ↗</a> · <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener noreferrer">OpenAI model documentation ↗</a></p>`],
      ["What I double-check", `<ul><li>A fluent answer can still contain a wrong fact, invented citation, or outdated instruction.</li><li>Generated code may be insecure or subtly wrong. Read, run, and test it before use.</li><li>Long projects need clear context; check that the assistant did not miss a requirement.</li><li>Do not paste confidential client data, private student records, or credentials without checking data controls and permissions.</li></ul><p>Try ChatGPT first if you want a general assistant for mixed study, writing, planning, and coding tasks. For current research, pair it with source discovery and read the originals.</p>`]
    ],
    summary: "ChatGPT is my flexible starting point for mixed tasks. I use it for explanations, drafts, and coding discussions, but verify facts and test code. Choose the latest model available to your plan in the live model selector—not an outdated model name from a review.",
    related: ["claude-review.html", "chatgpt-vs-claude.html", "best-ai-tools-for-students.html"]
  },
  {
    file: "claude-review.html",
    title: "My Claude Review for Coding and Complex Documents",
    description: "My first-person Claude review: coding, long-form writing, complex PDFs and document analysis, with practical limitations and official model links.",
    lede: "When I need to reason carefully through a large piece of writing, a complicated file, or a code problem, Claude is one of the tools I compare. Its strength is not a guarantee of correctness: the workflow still needs careful review.",
    sections: [
      ["Why Claude stands out in my workflow", `<p>Across my work as a freelancer and student, I find Claude useful when I need to stay with a complex task rather than get a quick one-line answer. I use it to analyze substantial text, reorganize a dense brief, critique a draft, and talk through programming decisions. For coding, that can mean explaining an error or planning edits across files. I inspect every proposed change and run the project's checks.</p>`],
      ["Complex files and PDFs", `<p>Claude can help summarize supported documents, compare sections, extract questions, or point me to a passage to inspect. I treat its response as a map through a document, not a substitute for reading the relevant page. For tables, diagrams, footnotes, and academic or legal claims, I confirm exact wording in the source. Supported formats, size limits, and visual handling can change; check the <a href="https://support.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic Help Center ↗</a>.</p>`],
      ["Model choice and trade-offs", `<p>Anthropic's <a href="https://platform.claude.com/docs/en/models/overview" target="_blank" rel="noopener noreferrer">official model overview ↗</a> lists its current model family and links to model-selection guidance. Product and API model lists are not always identical. Compare the strongest model in your own account with a faster option on the same task, and verify current access before paying.</p><p>Claude can misread a requirement, invent a detail, or produce code that fails in the project. Long context is not perfect recall. Avoid uploading client or coursework material unless sharing it is permitted and the current data controls are acceptable.</p><p><a href="https://claude.com/product/overview" target="_blank" rel="noopener noreferrer">Claude product overview ↗</a></p>`]
    ],
    summary: "Claude is my pick to try for complex text, long-document analysis, and thoughtful coding discussions. Its output still needs source checking and tests; do not choose it solely because an article calls one model the latest.",
    related: ["chatgpt-review.html", "claude-vs-github-copilot-coding.html", "best-ai-coding-assistants.html"]
  },
  {
    file: "gemini-review.html",
    title: "My Google Gemini Review for Research and Study",
    description: "A first-person Gemini review for study, Google workflows, and research, with advice on sources, model access, and verification.",
    lede: "Gemini is worth trying when your work already touches Google services or when you want a multimodal assistant. I use it as a research and learning companion, while treating generated answers as leads to verify.",
    sections: [
      ["Where Gemini fits for me", `<p>As a student and freelancer, I value tools that reduce friction between a question, the material I am working with, and the next step. Gemini is a natural candidate when a task connects to Google's ecosystem or when I want to explore a question through a conversational interface. Features depend on the current product, account, country, and plan.</p>`],
      ["Research and education: use sources, not confidence", `<p>I use Gemini to break a broad topic into questions, explain unfamiliar terms, and create an outline for further reading. For recent information, I check whether the version I use has relevant search or source features. I open the cited pages, find primary evidence, and check publication dates. A generated overview is a starting point—not proof.</p><p>Students can ask for an explanation, quiz, or feedback on their reasoning rather than a finished assignment. Follow school rules and make sure submitted work reflects your own understanding.</p>`],
      ["Models and ecosystem", `<p>Google's model catalog changes over time and separates consumer experiences from developer/API model IDs. I check the <a href="https://ai.google.dev/gemini-api/docs/models" target="_blank" rel="noopener noreferrer">official Gemini model catalog ↗</a> and the live product before choosing a model or promising a feature. A familiar ecosystem may be convenient, but it does not make Gemini the best fit for every task.</p><p><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Google Gemini ↗</a></p>`]
    ],
    summary: "Gemini is a useful option to evaluate for Google-centered study and research workflows. Its value depends on current features in your account; I check original sources rather than assuming a summary is right because it links to the web.",
    related: ["perplexity-review.html", "perplexity-vs-gemini-research.html", "best-ai-tools-for-students.html"]
  },
  {
    file: "perplexity-review.html",
    title: "My Perplexity Review for Current Research",
    description: "A first-person Perplexity review for web research and recent information: how I use citations, verify original sources, and avoid common pitfalls.",
    lede: "When I need to explore a current question and find sources to follow up, Perplexity is one of the tools I reach for. Citations make it easier to start checking evidence, but do not remove the need to read the sources.",
    sections: [
      ["What I use Perplexity for", `<p>My student and freelance work often starts with a question that needs context. Perplexity can make the first search-and-summarize step feel more conversational than a list of links. I use it to discover terminology, locate relevant pages, and identify what to read next before writing a brief or study plan.</p>`],
      ["How I check citations", `<p>A citation is a research lead, not an automatic fact-check. I open the source and ask: Is it original or a secondary summary? Does it support this exact sentence? Is it current enough? Does another reliable source agree? I also distinguish marketing pages, forum posts, studies, and official records; they serve different purposes.</p><p>For consequential health, legal, financial, safety, or academic claims, use authoritative sources and do not rely on a generated summary. A correct link can still be attached to an unsupported claim.</p>`],
      ["Strengths, limits, and who should try it", `<p>I would test Perplexity first for a question where web discovery and a visible trail to sources matter. Compare it with Gemini or a conventional search engine for a broad web query, and with Claude or ChatGPT for detailed analysis of material you already have. Students, writers, and freelancers who regularly need current sources may like a search-first workflow.</p><p>Features and plans change; check <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity's current product ↗</a>. For dense PDFs, confirm account file limits and inspect cited pages yourself.</p>`]
    ],
    summary: "Perplexity is my first stop for exploring a current web question and collecting source leads. I do not treat its summary or citations as verified until I read the original pages.",
    related: ["gemini-review.html", "perplexity-vs-gemini-research.html", "best-ai-for-research.html"]
  },
  {
    file: "deepseek-review.html",
    title: "DeepSeek Review: Free Access, Strengths and Trade-Offs",
    description: "A balanced DeepSeek review: when free access can help, why API costs differ, and what privacy and reliability caveats to check.",
    lede: "DeepSeek can be attractive when you want to try an assistant without starting with a paid subscription. I separate free chat access from API use and check privacy and regional details before choosing it for real work.",
    sections: [
      ["Why I try DeepSeek", `<p>As a student and freelancer, cost matters. DeepSeek is worth comparing when its chat service is available to me and I want another option for explanations, brainstorming, coding questions, or reasoning. A free entry point makes experimentation easier, but “free” applies to a specific product, account, location, and time—not every DeepSeek service or unlimited future use.</p>`],
      ["Free chat is not the same as a free API", `<p>Consumer access, rate limits, promotions, and developer/API billing are separate. DeepSeek's <a href="https://api-docs.deepseek.com/quick_start/pricing/" target="_blank" rel="noopener noreferrer">official API pricing and model notes ↗</a> can change. Check the current terms before building an application or estimating recurring use. Also verify availability and terms on <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer">DeepSeek's site ↗</a>.</p>`],
      ["What I would test—and the caveats", `<p>I would try DeepSeek on a non-sensitive coding problem, study explanation, or draft that I can review independently. For recent news or policy, use a live-search workflow and original sources. For client work, check data-processing, retention, and privacy terms against the client's requirements.</p><ul><li>Free access, features, regional availability, and usage limits can change.</li><li>API tokens and hosted products may have separate charges.</li><li>Generated reasoning and code still need fact checks and tests.</li><li>Avoid uploading confidential information until data controls meet your obligations.</li></ul></p>`]
    ],
    summary: "DeepSeek is a compelling low-cost option to try when free access is currently available, especially for low-risk learning and coding experiments. It is not automatically unlimited or free for API use. Verify plan, price, region, and data terms first.",
    related: ["chatgpt-review.html", "best-ai-tools-for-students.html", "affiliate-disclosure.html"]
  },
  {
    file: "grok-review.html",
    title: "My Grok Review for Social and Live Topics",
    description: "A practical Grok review for following current online and social topics, with advice on X context, source quality, and verification.",
    lede: "Grok can be useful when a question involves what people are discussing online. That is different from authoritative research: live conversation can be noisy, incomplete, or wrong.",
    sections: [
      ["Where Grok can fit", `<p>For a freelancer or marketer following a fast-moving conversation, social context can matter. Grok is worth trying when the current product gives access to relevant X or web information and you want to explore what people are saying, find leads, or brainstorm a social response. I treat it as a way to orient myself—not as a definitive account of an event.</p>`],
      ["Social signals are not evidence", `<p>Posts can be mistaken, sarcastic, coordinated, or missing context. A popular claim is not necessarily representative or accurate. I look for the underlying announcement, document, dataset, interview, or primary report, confirm the date, and distinguish firsthand evidence from commentary. For a consequential claim, I find an independent source.</p>`],
      ["Models, access, and who may prefer it", `<p>xAI's <a href="https://docs.x.ai/developers/models" target="_blank" rel="noopener noreferrer">developer model page ↗</a> currently identifies Grok 4.7 as its most capable model. Developer/API availability does not guarantee the same model or tools in every consumer plan or country. Verify in the live app and at <a href="https://grok.com/" target="_blank" rel="noopener noreferrer">Grok ↗</a>.</p><p>Try Grok if X conversation is part of your workflow. For academic sources, technical documentation, or a recent fact that needs evidence, compare with Perplexity, Gemini, and direct primary-source research.</p>`]
    ],
    summary: "Grok is most interesting to me when social context or current conversation is part of the job. I do not equate “live” with “reliable”; I verify claims elsewhere and check what model and tools my account includes.",
    related: ["perplexity-review.html", "ai-marketing-tools.html", "best-ai-for-research.html"]
  },
  {
    file: "chatgpt-vs-claude.html",
    title: "ChatGPT vs Claude: Which Should You Try First?",
    description: "ChatGPT vs Claude for students and freelancers: compare coding, complex writing, study help, flexibility, and practical trade-offs.",
    lede: "I compare these two general assistants by the job I need done—not by a permanent claim that one model is best. Both can help with study, writing, and coding; the useful choice depends on your material and workflow.",
    sections: [
      ["My short answer", `<p>I try ChatGPT first when I want one flexible assistant for many quick tasks. I try Claude first when I need to work carefully through substantial text, a detailed brief, or a multi-step coding discussion. That is a starting point, not a benchmark verdict: a clear prompt and the current model in your account can change the result.</p>`],
      ["Compare them by task", `<table class="compare-table"><thead><tr><th>Task</th><th>ChatGPT may fit when…</th><th>Claude may fit when…</th></tr></thead><tbody><tr><th>Study</th><td>You want an interactive explanation or practice questions.</td><td>You want to discuss or reorganize substantial reading.</td></tr><tr><th>Coding</th><td>You want a quick explanation, example, or debugging discussion.</td><td>You want to reason through a complex requirement or larger context.</td></tr><tr><th>Writing</th><td>You need flexible brainstorming and drafts.</td><td>You need extended text analysis and revision.</td></tr><tr><th>Research</th><td>You are exploring and will verify sources.</td><td>You are analyzing supplied material; use search for fresh sources.</td></tr></tbody></table>`],
      ["Models, plans, and how I decide", `<p>Both companies update model menus, limits, and subscription terms. I compare models at equivalent access levels and choose from the live account selector. ChatGPT Plus does not mean API usage is included; Claude's consumer options may differ from its API lineup. Check <a href="https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus" target="_blank" rel="noopener noreferrer">ChatGPT Plus help ↗</a>, <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener noreferrer">OpenAI models ↗</a>, and <a href="https://platform.claude.com/docs/en/models/overview" target="_blank" rel="noopener noreferrer">Claude models ↗</a>.</p><p>I run both through the same non-sensitive task, compare accuracy and editing time, and choose the result I can understand and verify. For code, run tests; for schoolwork, follow course rules; for client work, check data terms.</p>`]
    ],
    summary: "ChatGPT is my flexible all-round starting point; Claude is my first comparison for complex text and long-form or coding discussion. Use a task test—there is no universal winner.",
    related: ["chatgpt-review.html", "claude-review.html", "compare.html"]
  },
  {
    file: "claude-vs-github-copilot-coding.html",
    title: "Claude vs GitHub Copilot for Coding",
    description: "Claude vs GitHub Copilot for coding: compare chat-first reasoning with in-editor suggestions, project context, code review, and testing.",
    lede: "Both can assist with code, but fit different workflows. I compare Claude's conversational problem-solving with GitHub Copilot's integration into supported coding environments.",
    sections: [
      ["Which one should I try first?", `<p>If I want help inside my editor while I write, navigate, or revise code, I try GitHub Copilot first. If I want to explain a larger problem, discuss a design choice, or analyze substantial text and code conversationally, I compare Claude. The right choice is about where assistance saves time without weakening review.</p>`],
      ["Workflow comparison", `<table class="compare-table"><thead><tr><th>Criterion</th><th>Claude</th><th>GitHub Copilot</th></tr></thead><tbody><tr><th>Typical interaction</th><td>Chat-first analysis, explanation, and problem-solving.</td><td>Assistance in supported IDE and GitHub workflows.</td></tr><tr><th>Good first test</th><td>Explain a bug and propose a small change using supplied context.</td><td>Write a test or explain a selected function in your editor.</td></tr><tr><th>Review needed</th><td>Check reasoning, edits, dependencies, and behavior.</td><td>Check suggestions, generated changes, tests, and repository policy.</td></tr></tbody></table>`],
      ["How I evaluate coding output", `<p>I do not judge an assistant by how convincing an explanation sounds. I check whether it understood the requirement, preserved unrelated behavior, handled edge cases, and produced useful tests. I run the tests and inspect the diff. For professional repositories, I follow the employer's or client's policy on AI-generated code and private source.</p><p>See <a href="https://platform.claude.com/docs/en/models/overview" target="_blank" rel="noopener noreferrer">Claude documentation ↗</a>, <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot ↗</a>, and <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer">Copilot documentation ↗</a>.</p>`]
    ],
    summary: "Start with Copilot when in-editor convenience is the main goal; start with Claude when you need a longer coding conversation or text analysis. Verify generated code either way.",
    related: ["claude-review.html", "best-ai-coding-assistants.html", "compare.html"]
  },
  {
    file: "perplexity-vs-gemini-research.html",
    title: "Perplexity vs Gemini for Research and Recent Information",
    description: "Perplexity vs Google Gemini for research: compare source discovery, Google workflows, citations, current information, and verification.",
    lede: "Both tools can help explore a question, but I look at how I find and verify sources—not just how polished the summary sounds.",
    sections: [
      ["My starting recommendation", `<p>I try Perplexity first when I want a conversational web-search workflow and visible source leads. I try Gemini when Google-connected workflows, multimodal input, or features in my account fit the assignment. In either case, the answer is a research starting point: I open and read the evidence.</p>`],
      ["Compare the research workflow", `<table class="compare-table"><thead><tr><th>Need</th><th>Perplexity</th><th>Google Gemini</th></tr></thead><tbody><tr><th>Find starting sources</th><td>Useful for question-led search and citations to inspect.</td><td>Can support exploration depending on current search access.</td></tr><tr><th>Google ecosystem</th><td>Not its primary differentiator.</td><td>May suit eligible Google product workflows.</td></tr><tr><th>Check a claim</th><td>Open the cited page and confirm the sentence.</td><td>Follow source links and verify primary evidence.</td></tr></tbody></table>`],
      ["My source-checking routine", `<ol><li>Separate factual questions, interpretation, and opinion.</li><li>Open the original source instead of citing a generated summary.</li><li>Check author, date, evidence, and whether it supports the exact claim.</li><li>For an important point, find another authoritative source.</li></ol><p>Features, models, and plans change. Check <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity ↗</a> and <a href="https://ai.google.dev/gemini-api/docs/models" target="_blank" rel="noopener noreferrer">Google's Gemini model catalog ↗</a>.</p>`]
    ],
    summary: "Perplexity is my first try for source-led web discovery; Gemini is my first comparison when Google or multimodal workflows matter. Neither replaces reading primary sources or checking dates and context.",
    related: ["perplexity-review.html", "gemini-review.html", "best-ai-for-research.html"]
  },
  {
    file: "best-ai-tools-for-students.html",
    title: "Best AI Tools for Students: A Practical, Responsible Guide",
    description: "A student-focused guide to ChatGPT, Claude, Gemini, Perplexity, and other AI tools for learning, research, revision, and presentations.",
    lede: "The most useful student AI tool is the one that helps you understand and improve your own work. I am a student myself, and I use assistants for explanations and practice—not as a shortcut around learning or course rules.",
    sections: [
      ["How I use AI as a student", `<p>I get value when an assistant helps me learn actively: explain a concept at two levels, generate practice questions, critique my reasoning, or turn notes into a revision plan. I then answer in my own words and compare with lecture material, assigned reading, and instructor guidance.</p>`],
      ["Tools to consider by task", `<ul><li><b>ChatGPT:</b> a flexible starting point for explanations, practice questions, and study plans. Check the current model and limits.</li><li><b>Claude:</b> try it for substantial reading or complex text; confirm file support and read the source yourself.</li><li><b>Google Gemini:</b> consider it when current Google integrations or multimodal workflows fit your account.</li><li><b>Perplexity:</b> find initial sources and research leads; open every citation.</li><li><b>Notion, Canva, or Gamma:</b> organize notes or make a presentation draft from reviewed material.</li></ul>`],
      ["Protect learning and academic integrity", `<p>Before using AI for graded work, check your school's policy. Some instructors allow brainstorming but prohibit generated prose or code; others require disclosure. Never ask an assistant to invent references. Do not upload personal data, unpublished research, or classmates' work without permission. Compare two tools on a topic you understand and check every factual point against your course text.</p>`]
    ],
    summary: "For students, I would start with a general assistant for tutoring-style explanations and a source-led tool for research leads. Use AI to practise and understand; keep submitted work honest and compliant with your institution's rules.",
    related: ["chatgpt-review.html", "best-ai-for-research.html", "perplexity-vs-gemini-research.html"]
  },
  {
    file: "best-ai-tools-for-freelancers.html",
    title: "Best AI Tools for Freelancers: A Workflow-First Guide",
    description: "A freelancer's guide to AI tools for client research, writing, coding, design, marketing, and admin—with privacy and cost checks.",
    lede: "As a freelancer, I care less about a flashy feature than whether a tool saves time on a real deliverable without adding editing or client risk. Start with your service and workflow.",
    sections: [
      ["Start with your paid work", `<p>List a recurring task: research a brief, draft a proposal, create a design concept, write code, prepare a client update, or follow up on a meeting. Calculate the full cost: subscription, usage limits, review time, rework, and risk of exposing client data. A free tier is useful for testing, but not automatically right for commercial delivery.</p>`],
      ["My short list by workflow", `<ul><li><b>Briefs and drafting:</b> compare ChatGPT and Claude on a fictional or anonymized brief; check accuracy, voice, and editing time.</li><li><b>Research:</b> try Perplexity or Gemini for source leads, then check original pages before delivering claims.</li><li><b>Coding:</b> compare a chat assistant with GitHub Copilot or Cursor on a safe task. Review diffs and run tests.</li><li><b>Visual content:</b> consider Canva or a design-focused tool; review licensing and commercial rights.</li><li><b>Operations:</b> automate only after defining permissions, failure handling, and approval steps.</li></ul>`],
      ["Keep client trust and measure results", `<p>Check contracts and client AI policies before processing data. Do not paste credentials, payment data, or confidential material into a service without approval. Confirm output rights and licensing for commercial use. Track task time, editing, and errors for a week; keep a tool only if it improves quality or capacity. Verify current prices with the provider.</p>`]
    ],
    summary: "Freelancers benefit from a small toolkit matched to the work they sell: a general assistant, a reliable research habit, and a task-specific coding or design tool. Protect client data and count review time as part of the cost.",
    related: ["chatgpt-review.html", "best-ai-coding-assistants.html", "ai-marketing-tools.html"]
  },
  {
    file: "best-ai-for-research.html",
    title: "Best AI for Research and Recent Information",
    description: "Compare AI search and research tools for recent information, source discovery, PDF analysis, citations, and reliable verification.",
    lede: "For recent facts, the best workflow is not simply “ask an AI.” I separate finding sources, analyzing supplied material, and checking claims—and choose tools for each step.",
    sections: [
      ["Research is more than a generated answer", `<p>I use AI to reduce friction at the start: break down a question, discover useful terms, or organize material I already found. For a current claim, the core work remains finding evidence, checking dates, and judging the source. A fluent summary is not a bibliography.</p>`],
      ["Tool roles I compare", `<ul><li><b>Perplexity:</b> search-first exploration and citations to inspect.</li><li><b>Google Gemini:</b> consider current search, multimodal context, or eligible Google workflows.</li><li><b>Claude or ChatGPT:</b> discuss and synthesize supplied material; verify outside facts and citations.</li><li><b>Grok:</b> explore online conversation where enabled; social posts are leads, not evidence.</li></ul>`],
      ["A source-check checklist", `<ol><li>Open the original source, not just the assistant's summary.</li><li>Check author, date, method, context, and whether it supports the claim.</li><li>Seek another authoritative source for important points.</li><li>Record what you read and distinguish evidence from interpretation.</li><li>Do not submit invented references or confidential research material.</li></ol><p>For a dense PDF, ask a supported assistant to identify relevant pages, then inspect them yourself. It may miss a chart, footnote, qualification, or table. Verify current tools at <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity ↗</a>, <a href="https://ai.google.dev/gemini-api/docs/models" target="_blank" rel="noopener noreferrer">Gemini ↗</a>, and <a href="https://platform.claude.com/docs/en/models/overview" target="_blank" rel="noopener noreferrer">Claude ↗</a>.</p>`]
    ],
    summary: "Start with a search-oriented tool for source discovery, use an assistant to analyze material, and verify important statements at their original source. Traceability matters more than answer polish.",
    related: ["perplexity-review.html", "gemini-review.html", "perplexity-vs-gemini-research.html"]
  },
  {
    file: "best-ai-coding-assistants.html",
    title: "Best AI Coding Assistants: IDE Tools and General Models",
    description: "A workflow-first guide to ChatGPT, Claude, GitHub Copilot, and Cursor for coding, debugging, codebase work, and safe verification.",
    lede: "I choose coding assistants by where I need help: inside an editor, across a project, or in a longer conversation about a bug. Generated code is a proposal; review and tests decide whether it works.",
    sections: [
      ["Choose the workflow first", `<p>For a small coding question, a general assistant may be enough. For in-editor suggestions, an IDE-integrated tool may reduce context switching. For edits involving several files, an AI-oriented editor may help with project context—but it also makes reviewing changes more important.</p>`],
      ["Tools I would compare", `<ul><li><b>GitHub Copilot:</b> try it when supported IDE integrations and suggestions near your code are the priority.</li><li><b>Cursor:</b> try an AI-focused editor workflow for codebase-aware questions and edits.</li><li><b>Claude:</b> compare for complex explanations, code review discussion, and multi-step reasoning.</li><li><b>ChatGPT:</b> compare for coding explanations and learning alongside non-code tasks.</li></ul>`],
      ["How I test code assistants", `<ol><li>Use a small issue with known expected behavior and no secret client code.</li><li>Ask for a minimal change plus a test; check project conventions.</li><li>Read the entire diff for unrelated edits, unsafe patterns, missed cases, and dependencies.</li><li>Run tests, lint, and type checks; add regression tests where appropriate.</li><li>Check employer, client, license, and data policies before using AI output.</li></ol><p>Review current information at <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot ↗</a>, <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer">Copilot docs ↗</a>, <a href="https://cursor.com/" target="_blank" rel="noopener noreferrer">Cursor ↗</a>, and <a href="https://platform.claude.com/docs/en/models/overview" target="_blank" rel="noopener noreferrer">Claude docs ↗</a>.</p><p>AI tools can hallucinate APIs, misunderstand a repository, miss environment-specific behavior, or suggest insecure code. A human remains responsible for architecture, tests, and deployment.</p>`]
    ],
    summary: "Choose Copilot for an IDE-first workflow, Cursor for an AI-centered project editor, and a chat assistant for explanations and deeper discussion. Test on your stack, inspect the diff, and run checks.",
    related: ["claude-review.html", "claude-vs-github-copilot-coding.html", "best-ai-tools-for-freelancers.html"]
  },
  {
    file: "ai-marketing-tools.html",
    title: "AI Marketing Tools for Freelancers and Small Teams",
    description: "A practical AI marketing toolkit for research, copy, design, and social content, with guidance on accuracy, brand voice, and rights.",
    lede: "Marketing takes more than producing more posts. I use AI to brainstorm, research, and speed up first drafts, but keep strategy, fact-checking, and customer trust human-led.",
    sections: [
      ["Match the tool to the marketing job", `<ul><li><b>Research:</b> use Perplexity or Gemini for source leads; verify dates and original evidence.</li><li><b>Campaign copy:</b> compare ChatGPT, Claude, or a marketing-focused product such as Jasper against your brief and brand voice.</li><li><b>Social graphics:</b> consider Canva or a creative platform that fits your design process; check licenses and commercial terms.</li><li><b>Repetitive tasks:</b> evaluate automation after mapping approvals, permissions, and failure recovery.</li></ul>`],
      ["A practical campaign workflow", `<ol><li>Write the audience, customer problem, offer, proof, and action in a human-approved brief.</li><li>Ask AI for angles and formats, not invented customer insights or unsupported claims.</li><li>Check facts, links, regulated claims, and brand voice; remove generic copy.</li><li>Review image and music rights, accessibility, and disclosure requirements.</li><li>Measure qualified outcomes and feedback, not raw content volume.</li></ol>`],
      ["Protect trust and originality", `<p>Do not upload private customer lists or confidential campaign data without permission. Disclose sponsored content where required. Avoid fake testimonials, impersonation, or mass-publishing low-value pages. Search visibility is earned through helpful, accurate content—not simply a high page count. Confirm current pricing, commercial use, asset licenses, and cancellation terms with providers.</p>`]
    ],
    summary: "Build a small stack for research, drafting, and visual creation. Use AI for options and speed, but keep strategy, source checks, customer data, and final brand approval under human control.",
    related: ["best-ai-tools-for-freelancers.html", "grok-review.html", "best-ai-for-research.html"]
  },
  {
    file: "about.html",
    title: "About AIToolPath | AI Recommendations from a Freelancer and Student",
    description: "Meet the freelancer and student behind AIToolPath and learn why this site compares AI tools by real tasks, trade-offs, and workflow fit.",
    lede: "AIToolPath is where I share what I have learned from years of using and comparing AI tools for study, freelance work, and everyday problem-solving.",
    sections: [
      ["Why I built AIToolPath", `<p>I am a freelancer and a student. I have spent a long time trying AI tools for different kinds of work, comparing how they fit into actual tasks, and learning that the most popular product is not automatically the right one. I built AIToolPath to share recommendations in my own voice: what I reach for, what I would compare next, and what I still verify myself.</p><p>My goal is to help English-speaking readers—especially students, independent professionals, and small teams in the US, UK, Canada, Australia, and elsewhere—make informed choices without pretending that one tool can do everything.</p>`],
      ["What you will find here", `<ul><li>First-person tool notes based on the author's stated workflow.</li><li>Task-led comparisons for coding, education, research, writing, and marketing.</li><li>Clear trade-offs, source links, and reminders to check model access and pricing.</li><li>Reserved ad locations and, only if added later, disclosed commercial links.</li></ul>`],
      ["What this site is not", `<p>AIToolPath is not an AI model, benchmark lab, provider support channel, or promise of income, rankings, or academic results. My qualitative experience is personal and may not match your account, country, task, or preferences. Product names, terms, prices, and capabilities change.</p><p>No public contact address was supplied for this version, so this page does not invent one. If a live site adds a contact method, it should be reviewed and kept current.</p>`]
    ],
    summary: "Explain what a tool may help with, say where it may fall short, link to primary information, and keep paid relationships separate from editorial judgment.",
    related: ["editorial-policy.html", "affiliate-disclosure.html", "compare.html"]
  },
  {
    file: "editorial-policy.html",
    title: "Editorial Policy and Review Method | AIToolPath",
    description: "How AIToolPath writes personal AI tool reviews, compares products, checks official sources, corrects errors, and handles commercial influence.",
    lede: "Readers should be able to tell personal judgment from verified product facts. This policy explains our approach to reviews, comparisons, sourcing, and corrections.",
    sections: [
      ["Experience and editorial voice", `<p>AIToolPath is written from the perspective of its owner, who describes himself as a freelancer and student with years of experience using and comparing AI tools. Recommendations are qualitative descriptions of workflow fit, not controlled benchmark claims. We do not invent test scores, survey results, credentials, or guaranteed outcomes.</p>`],
      ["Comparisons and sources", `<p>We compare tools for a named task and explain what each may suit and what to consider. A workflow recommendation is not a claim that a product wins every benchmark. Model names, pricing, limits, eligibility, integrations, and terms change; we link to official information and advise readers to check it before purchasing. Primary sources are preferred for product claims and original evidence for research claims.</p>`],
      ["Corrections, AI, and commerce", `<p>When a material error is identified, the page should be corrected promptly and its review date updated if recommendations were rechecked. A visible contact method should be provided before launch. AI-assisted writing and code require human review. Students should follow institutional rules; freelancers should honor contracts, client AI policies, and confidentiality.</p><p>Ad slots are placeholders, not active ads. If ads or affiliate links are added, disclose them clearly near the content. Sponsorship must be labeled and must not be presented as an independent recommendation. See the <a href="affiliate-disclosure.html">commercial disclosure ↗</a>.</p>`]
    ],
    summary: "Personal experience can explain workflow fit; it is not a substitute for evidence. We aim to be candid about what is firsthand, what changes, and what readers should verify.",
    related: ["about.html", "affiliate-disclosure.html", "privacy.html"]
  },
  {
    file: "affiliate-disclosure.html",
    title: "Affiliate and Advertising Disclosure | AIToolPath",
    description: "AIToolPath advertising and affiliate policy: current ad spaces are placeholders, and future commission links will be clearly disclosed.",
    lede: "AIToolPath may earn money in the future through ads or qualifying links. This page explains what is and is not active in this static site.",
    sections: [
      ["Current status", `<p>Spaces labeled “Advertisement” are reserved only. No ad network account, publisher ID, or live advertising code is connected. Tool comparisons link directly to official provider pages; those links are not affiliate links in this version. No subscription or referral tracking is active.</p>`],
      ["If affiliate links are added", `<p>A qualifying link may earn the site a commission if you purchase or subscribe, subject to provider terms. Any relationship should be labeled clearly near the link before you click, not hidden only in a footer. The owner should join the program and use approved links and disclosures before activating tracking.</p><p>Affiliate status will not decide which product the author recommends. A paid link is not evidence that a product is best, and the site must not imply a provider relationship unless it exists.</p>`],
      ["Advertisements and reader choice", `<p>Display ads may appear in marked spaces after a suitable network approves the site and the owner installs its code. Sponsored content must be identified. No ad approval or revenue is promised. Before subscribing, compare current prices, renewal terms, regional availability, and cancellation rules directly with the provider.</p>`]
    ],
    summary: "At present, these are placeholders and direct links. If monetization becomes active, it should be disclosed prominently and kept separate from task-based guidance.",
    related: ["editorial-policy.html", "about.html", "privacy.html"]
  },
  {
    file: "privacy.html",
    title: "Privacy Notice | AIToolPath",
    description: "Privacy notice for AIToolPath: browser-side user inputs, external resources, analytics, advertising, and future changes.",
    lede: "This notice describes the current static site and should be updated before analytics, advertising, or data collection is introduced.",
    sections: [
      ["Information entered into current tools", `<p>The directory search, role filters, and rule-based advisor run in your browser. The advisor matches text to local tool descriptions; this version does not send it to an AI service or site backend. Do not enter passwords, personal records, confidential client data, or sensitive information into a public webpage.</p>`],
      ["External resources", `<p>The homepage loads web fonts from Google Fonts and profile and hero photos from Unsplash. Your browser may contact those providers to request resources; their privacy terms apply. Following a provider link takes you to that provider's site and privacy policy.</p>`],
      ["Analytics, cookies, ads, and changes", `<p>This version has no site analytics, newsletter form, user accounts, or active ad-network code. Advertisement areas are placeholders. If analytics, affiliate tracking, cookies, or advertising are added, this notice should explain providers, purposes, consent choices where required, and how readers can manage them. The owner should add a real contact method before launch; no contact email was supplied for this version.</p>`]
    ],
    summary: "The current recommendation form runs locally in your browser and does not send your task to an AI service. External fonts, images, and provider links have their own privacy practices.",
    related: ["about.html", "editorial-policy.html", "affiliate-disclosure.html"]
  }
];

const allPages = [
  ["compare.html", "Compare AI tools"],
  ...pages.map(({ file, title }) => [file, title])
];
const popular = [
  ["compare.html", "Compare AI tools"],
  ["best-ai-tools-for-students.html", "AI tools for students"],
  ["best-ai-tools-for-freelancers.html", "AI tools for freelancers"],
  ["best-ai-for-research.html", "AI for research"],
  ["best-ai-coding-assistants.html", "AI coding assistants"],
  ["ai-marketing-tools.html", "AI marketing tools"]
];

for (const page of pages) {
  const url = base + page.file;
  const relatedLinks = page.related.map(file => {
    const related = allPages.find(([candidate]) => candidate === file);
    return `<a href="${file}">${related ? related[1] : "Explore this guide"}</a>`;
  }).join("");
  const sections = page.sections.map(([heading, body]) => `<h2>${heading}</h2>${body}`).join("");
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title} | AIToolPath</title>
  <meta name="description" content="${page.description}">
  <meta name="theme-color" content="#f5f7f4">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${page.title} | AIToolPath">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${url}">
  <meta name="twitter:card" content="summary">
  <link rel="canonical" href="${url}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="content.css">
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: page.title, description: page.description, mainEntityOfPage: url, author: { "@type": "Organization", name: "AIToolPath" } })}</script>
</head>
<body>
  <header class="site-header"><div class="wrap site-nav"><a class="brand" href="index.html">AIToolPath</a><nav class="nav-links" aria-label="Primary navigation"><a href="index.html#tools">AI tools</a><a href="compare.html">Compare</a><a href="index.html#guides">Guides</a><a href="about.html">About</a><a href="editorial-policy.html">Editorial policy</a></nav></div></header>
  <main>
    <section class="page-hero wrap"><p class="breadcrumbs"><a href="index.html">Home</a> / ${page.title}</p><p class="eyebrow">Independent guide</p><h1>${page.title}</h1><p class="lede">${page.lede}</p><p class="page-meta">First-person editorial guidance · Models, plan access, and features may change; verify with official sources.</p></section>
    <aside class="ad-slot wrap" aria-label="Advertisement placement"><b>Advertisement</b><span>Reserved ad placement · no ad network is connected</span></aside>
    <section class="wrap content-layout">
      <article class="article">${sections}<div class="summary-box"><h2>My short summary</h2><p>${page.summary}</p><p>Want to compare by your own task? <a href="compare.html">Use the AI tool comparison page</a>.</p></div><p class="disclaimer">AIToolPath recommendations are informational and reflect the author's stated workflow. They are not guarantees, professional advice, or controlled benchmark results.</p></article>
      <aside class="sidebar"><div class="sidebar-card"><h2>Related reading</h2>${relatedLinks}</div><div class="sidebar-card"><h2>Explore by task</h2>${popular.map(([file, title]) => `<a href="${file}">${title}</a>`).join("")}</div><div class="sidebar-card"><h2>Editorial independence</h2><p class="disclaimer">Ad spaces are reserved only. Any future commercial links will be disclosed and will not determine recommendations.</p><a href="affiliate-disclosure.html">Read the disclosure</a></div></aside>
    </section>
  </main>
  <aside class="ad-slot wrap" aria-label="Advertisement placement"><b>Advertisement</b><span>Reserved ad placement · no ad network is connected</span></aside>
  <footer class="site-footer"><div class="wrap footer-row"><div><a href="index.html">Home</a><a href="compare.html">Compare tools</a><a href="editorial-policy.html">Editorial policy</a><a href="affiliate-disclosure.html">Affiliate disclosure</a><a href="privacy.html">Privacy</a></div><p>Choose by task. Verify with the provider.</p></div></footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(__dirname, page.file), html, "utf8");
}
console.log(`Generated ${pages.length} static editorial pages.`);
