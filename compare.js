const tools = [
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com/", fit: { coding: "Explaining code, debugging ideas, and working through implementation questions in a chat-based workflow.", education: "Interactive explanations, practice questions, outlines, and study planning.", research: "Exploring a question and synthesizing material; verify current claims and every source.", writing: "Flexible drafting, brainstorming, editing, and changing tone for different audiences.", marketing: "Campaign ideas, content outlines, copy variations, and first drafts." }, tradeoff: "Can sound confident while being wrong. Check facts, citations, code, and sensitive-data handling. Model access and limits differ by current plan.", links: { current: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus", models: "https://developers.openai.com/api/docs/models" } },
  { id: "claude", name: "Claude", url: "https://claude.ai/", fit: { coding: "Reasoning through a problem, reviewing changes, explaining code, and handling substantial project context.", education: "Working through readings and explaining complex ideas in a conversational format.", research: "Reading and synthesizing supplied documents; verify external, current facts with primary sources.", writing: "Long-form drafting, revision, and close analysis of substantial text.", marketing: "Developing structured copy and editing a campaign draft for clarity and consistency." }, tradeoff: "Large context does not remove the need to check source accuracy. Limits, file support, and model choice depend on current access.", links: { current: "https://www.anthropic.com/pricing", models: "https://platform.claude.com/docs/en/models/overview" } },
  { id: "gemini", name: "Google Gemini", url: "https://gemini.google.com/", fit: { coding: "Explaining code and supporting a workflow that benefits from Google's broader AI ecosystem.", education: "Explaining topics, organizing learning, and working with eligible Google tools.", research: "Research questions where web exploration and Google integrations are useful; inspect original sources.", writing: "Drafting and revising within Google-oriented workflows, subject to current product access.", marketing: "Researching campaign context and drafting content that can move into a Google workflow." }, tradeoff: "Features, integrations, and model access vary by product, account, country, and plan. A generated summary is not the original source.", links: { current: "https://gemini.google/subscriptions/", models: "https://ai.google.dev/gemini-api/docs/models" } },
  { id: "perplexity", name: "Perplexity", url: "https://www.perplexity.ai/", fit: { coding: "Looking up technical documentation and starting source-led investigations before implementing or testing code.", education: "Finding reading leads and cited explanations to inspect, rather than submitting generated answers as coursework.", research: "Searching the web with visible citations as a starting point for current-information research.", writing: "Gathering initial sources and context before writing in your own voice.", marketing: "Exploring market questions and locating source leads for human fact-checking." }, tradeoff: "Citations need to be opened and checked: a link may not support the exact claim. Search coverage and features can vary.", links: { current: "https://www.perplexity.ai/pro", models: "https://www.perplexity.ai/" } },
  { id: "deepseek", name: "DeepSeek", url: "https://www.deepseek.com/", fit: { coding: "Trying coding and reasoning tasks in its chat experience or available developer/API workflows.", education: "Getting explanations and practice ideas, then checking answers against course materials.", research: "Reasoning over material you provide; for breaking news, use a live-search product and verify primary sources.", writing: "Generating and revising drafts when its current access and writing style fit the job.", marketing: "Brainstorming and drafting low-risk variations for later human editing." }, tradeoff: "Free chat availability is not a promise of unlimited access, and API use may be billed separately. Review provider data terms and local requirements before uploading sensitive work.", links: { current: "https://www.deepseek.com/", models: "https://api-docs.deepseek.com/quick_start/pricing/" } },
  { id: "grok", name: "Grok", url: "https://grok.com/", fit: { coding: "Exploring coding questions through a conversational assistant; test it against your actual editor workflow.", education: "Brainstorming and explanations, with independent checks against trusted learning material.", research: "Exploring current online or social discussion where enabled, then corroborating with authoritative sources.", writing: "Drafting and iterating on conversational or social-style copy.", marketing: "Following social conversation and brainstorming post ideas, subject to account features and careful fact checks." }, tradeoff: "Social or live access does not make a claim authoritative. Availability, model access, and features depend on current X/xAI plans and settings.", links: { current: "https://help.x.com/en/using-x/about-grok", models: "https://docs.x.ai/developers/models" } },
  { id: "github-copilot", name: "GitHub Copilot", url: "https://github.com/features/copilot", fit: { coding: "In-editor suggestions and coding assistance inside supported developer tools; review and test every change.", education: "Learning how code suggestions work in an editor while still understanding and writing the submitted work.", research: "Assisting code exploration inside a supported development environment, not replacing source research.", writing: "Useful for technical text close to code, such as comments and documentation.", marketing: "Not a marketing suite; strongest fit is developer workflows." }, tradeoff: "Requires fit with supported IDEs, current subscription rules, and repository policies. Generated code needs review, tests, and security checks.", links: { current: "https://github.com/features/copilot", models: "https://docs.github.com/en/copilot" } },
  { id: "cursor", name: "Cursor", url: "https://cursor.com/", fit: { coding: "An AI-focused editor workflow for asking questions about a project and iterating on codebase-aware changes.", education: "Practising in an editor with AI assistance, provided students follow course rules and can explain each change.", research: "Inspecting a software project rather than doing general web research.", writing: "Technical documentation and writing in the context of an active codebase.", marketing: "Not a marketing suite; primarily relevant to building and maintaining software." }, tradeoff: "Changing editors and sharing project context have workflow and privacy implications. Review settings, generated diffs, tests, and terms.", links: { current: "https://cursor.com/pricing", models: "https://cursor.com/docs" } },
  { id: "canva", name: "Canva", url: "https://www.canva.com/", fit: { coding: "Not primarily a coding tool; useful for presenting a software concept visually.", education: "Turning reviewed notes into visual study aids or presentations.", research: "Presenting findings after claims and citations have been checked elsewhere.", writing: "Pairing text with a visual layout for a handout or presentation.", marketing: "Producing social graphics and campaign assets within a design workflow." }, tradeoff: "Check current plan limits, brand controls, licensing, and commercial-use terms before publishing designs.", links: { current: "https://www.canva.com/pricing/", models: "https://www.canva.com/" } },
  { id: "jasper", name: "Jasper", url: "https://www.jasper.ai/", fit: { coding: "Not designed primarily for software development.", education: "Could help plan content, but is not a substitute for learning or source work.", research: "Use a source-led research tool first; verify any factual marketing claim.", writing: "Structured marketing copy workflows where team processes and brand guidance matter.", marketing: "Marketing-focused content workflows; compare current capabilities and plans with your team's needs." }, tradeoff: "A specialized paid product may not suit an individual budget. Check current pricing and test outputs against your brand and factual standards.", links: { current: "https://www.jasper.ai/pricing", models: "https://www.jasper.ai/" } }
];

const taskLabels = {
  coding: "Coding and software development",
  education: "Education and studying",
  research: "Research and recent information",
  writing: "Writing and analysis",
  marketing: "Marketing and social content"
};
const form = document.querySelector("#compareForm");
const toolA = document.querySelector("#toolA");
const toolB = document.querySelector("#toolB");
const task = document.querySelector("#task");
const result = document.querySelector("#compareResult");
const message = document.querySelector("#compareMessage");

function fillOptions(select) {
  select.innerHTML = tools.map(tool => `<option value="${tool.id}">${tool.name}</option>`).join("");
}

function renderComparison(event) {
  if (event) event.preventDefault();
  const first = tools.find(tool => tool.id === toolA.value);
  const second = tools.find(tool => tool.id === toolB.value);
  if (!first || !second) {
    message.textContent = "Choose two tools to compare.";
    result.replaceChildren();
    return;
  }
  if (first.id === second.id) {
    message.textContent = "Choose two different tools.";
    result.replaceChildren();
    return;
  }
  message.textContent = "";
  const chosenTask = task.value;
  const rows = [
    ["Task fit", tool => tool.fit[chosenTask]],
    ["Best suited workflow", tool => tool.fit[chosenTask]],
    ["Main trade-off", tool => tool.tradeoff],
    ["Check current plan/model", tool => `<a href="${tool.links.current}" target="_blank" rel="noopener noreferrer">Official plan and product page ↗</a> · <a href="${tool.links.models}" target="_blank" rel="noopener noreferrer">Models or documentation ↗</a>`]
  ];
  const chooseFirst = chosenTask === "coding"
    ? "Try GitHub Copilot or Cursor first if editor integration is your priority; try a general assistant when you need to reason through a wider problem."
    : chosenTask === "research"
      ? "Try Perplexity for a source-led web search or Gemini when its current web and Google integrations suit your workflow. Open primary sources either way."
      : chosenTask === "education"
        ? "Try the assistant that explains concepts clearly in your subject, then use your course materials to check its answer. Never submit generated work against your school's rules."
        : chosenTask === "marketing"
          ? "Try a general assistant for campaign thinking, then use a specialist design or marketing workflow if it saves real editing time."
          : "Try the tool whose writing and analysis workflow fits your material, and compare its draft with your own brief and voice.";
  result.innerHTML = `<h2>${first.name} vs ${second.name} for ${taskLabels[chosenTask]}</h2><table class="compare-table"><thead><tr><th scope="col">What to compare</th><th scope="col">${first.name}</th><th scope="col">${second.name}</th></tr></thead><tbody>${rows.map(([label, value]) => `<tr><th scope="row">${label}</th><td>${value(first)}</td><td>${value(second)}</td></tr>`).join("")}</tbody></table><div class="compare-verdict"><b>My practical starting point</b><p>${chooseFirst}</p><p>This is task-based guidance, not a claim that one provider always wins. Test both with the same non-sensitive task and verify current availability in your country.</p></div>`;
}

fillOptions(toolA);
fillOptions(toolB);
toolB.value = "claude";
task.addEventListener("change", renderComparison);
toolA.addEventListener("change", renderComparison);
toolB.addEventListener("change", renderComparison);
form.addEventListener("submit", renderComparison);
renderComparison();
