const cases = [
  {
    id: "tax-refund",
    title: "The Tax Refund",
    brief: "A student reports an email saying they are owed money from HMRC. Is it real or a trap?",
    attackType: "Phishing / Social engineering",
    keyTerms: ["phishing", "hmrc", "email", "link", "refund"],
    remember: [
      "Check sender domains carefully. Real organisations use official domains, not lookalikes.",
      "Urgent money offers are a classic phishing trick.",
      "Never enter personal or bank details from an email link."
    ],
    hints: {
      evidence: {
        easy: "Look for clues about who really sent the email and why it feels rushed.",
        standard: "Check the sender address and tone of the message."
      },
      attack: {
        easy: "This attack uses a fake message to trick someone into handing over data.",
        standard: "Think about messages that use pressure and fake branding."
      },
      prevention: {
        easy: "Focus on training people to spot scams and blocking suspicious links.",
        standard: "What stops people from trusting a fake email?"
      },
      report: {
        easy: "Use the words phishing, HMRC, and refund in your report.",
        standard: "Name the attack clearly and quote evidence from the email."
      }
    },
    evidence: [
      {
        id: "sender-domain",
        title: "Sender: tax-refund@hmrc-secure-check[dot]com",
        detail: "The domain is not hmrc.gov.uk. It is a lookalike with extra words.",
        important: true
      },
      {
        id: "urgent-deadline",
        title: "Email says: 'Respond within 24 hours'",
        detail: "Urgency is used to rush the reader into acting without thinking.",
        important: false
      },
      {
        id: "generic-greeting",
        title: "Greeting: 'Dear Customer'",
        detail: "Legitimate HMRC emails usually use your name or National Insurance details.",
        important: false
      },
      {
        id: "claim-link",
        title: "Link text: 'Complete Tax Claim Form'",
        detail: "Links can hide real destinations. The wording pushes you to click.",
        important: true
      },
      {
        id: "bank-details",
        title: "Email asks for bank details",
        detail: "HMRC would never ask for sensitive data by email.",
        important: false
      },
      {
        id: "money-lure",
        title: "Promises a refund of £350",
        detail: "Big money promises are classic bait to get clicks.",
        important: false
      },
      {
        id: "spelling",
        title: "Several spelling mistakes",
        detail: "Errors can indicate a scam or copy-paste template.",
        important: false
      },
      {
        id: "attachment",
        title: "Attachment: HMRC_Refund_Form.zip",
        detail: "Unexpected attachments can contain malware.",
        important: false
      },
      {
        id: "friend-warning",
        title: "Friend received same email",
        detail: "Scam campaigns often target many people at once.",
        important: false
      },
      {
        id: "new-laptop",
        title: "Student recently bought a new laptop",
        detail: "This detail is unrelated to the email itself.",
        important: false,
        redHerring: true
      }
    ],
    preventionOptions: [
      "Teach users to report suspicious emails and check sender domains",
      "Enable strong passwords and 2FA for important accounts",
      "Install anti-malware and keep it updated",
      "Add firewall rules to block unknown outbound traffic",
      "Turn on automatic software updates and patching",
      "Use download allow-lists and block unknown attachments"
    ],
    bestPrevention: [
      "Teach users to report suspicious emails and check sender domains",
      "Enable strong passwords and 2FA for important accounts"
    ],
    modelAnswer: {
      attack: "This is phishing (social engineering). A fake HMRC email uses urgency and a refund promise to trick the user into clicking a link and sharing bank details.",
      prevention: "Best choices are user training/reporting and strong authentication like 2FA so even if credentials are stolen, accounts are harder to access.",
      evidenceExplanation: "The sender domain and the fake claim link are the strongest proof because they show a spoofed HMRC message and a trap link."
    }
  },
  {
    id: "free-game",
    title: "The Free Game Download",
    brief: "A student installs a 'free' game and their laptop suddenly behaves oddly.",
    attackType: "Malware (Trojan/Spyware/Adware)",
    keyTerms: ["malware", "trojan", "adware", "permissions", "pop-ups"],
    remember: [
      "Only download software from trusted stores or official sites.",
      "Pop-up ads and toolbars can be signs of adware or spyware.",
      "Keep security tools active and never disable protection for installs."
    ],
    hints: {
      evidence: {
        easy: "Look for signs of unwanted software and strange permissions.",
        standard: "Which clues show the game isn't behaving safely?"
      },
      attack: {
        easy: "This is malicious software hiding inside a download.",
        standard: "Think about software that pretends to be something else."
      },
      prevention: {
        easy: "Use anti-malware and limit what can be installed.",
        standard: "What would stop unsafe downloads from running?"
      },
      report: {
        easy: "Use the words malware, trojan, and pop-ups in your report.",
        standard: "Explain how the download led to the problem."
      }
    },
    evidence: [
      {
        id: "unofficial-site",
        title: "Downloaded from a 'cracked games' site",
        detail: "Untrusted sites often bundle malware with free downloads.",
        important: true
      },
      {
        id: "admin-permission",
        title: "Installer asked for full admin permissions",
        detail: "Trojan installers often request high permissions to access system data.",
        important: true
      },
      {
        id: "pop-ups",
        title: "New pop-up ads appear constantly",
        detail: "Adware floods the screen with ads to make money from clicks.",
        important: false
      },
      {
        id: "overheating",
        title: "Laptop overheats and fan is always loud",
        detail: "Hidden malware can use the CPU in the background.",
        important: false
      },
      {
        id: "data-spike",
        title: "Mobile hotspot data usage spikes",
        detail: "Malware may be sending data out (exfiltration).",
        important: false
      },
      {
        id: "toolbar",
        title: "New browser toolbar installed",
        detail: "Toolbars are common with adware bundles.",
        important: false
      },
      {
        id: "antivirus-off",
        title: "Readme says 'Disable antivirus before install'",
        detail: "Legitimate software never asks you to turn off protection.",
        important: false
      },
      {
        id: "permission-camera",
        title: "Game asks for camera access",
        detail: "A basic game should not need webcam permissions.",
        important: false
      },
      {
        id: "unrelated-update",
        title: "Operating system update last week",
        detail: "This is unrelated to the suspicious game download.",
        important: false,
        redHerring: true
      },
      {
        id: "friend-tip",
        title: "Friend said it was 'totally safe'",
        detail: "Friends can be mistaken or unaware of hidden malware.",
        important: false
      }
    ],
    preventionOptions: [
      "Teach users to report suspicious emails and check sender domains",
      "Enable strong passwords and 2FA for important accounts",
      "Install anti-malware and keep it updated",
      "Add firewall rules to block unknown outbound traffic",
      "Turn on automatic software updates and patching",
      "Use download allow-lists and block unknown attachments"
    ],
    bestPrevention: [
      "Install anti-malware and keep it updated",
      "Use download allow-lists and block unknown attachments"
    ],
    modelAnswer: {
      attack: "This is malware (trojan/adware). The download pretends to be a game but installs unwanted software, pop-ups, and possibly spyware.",
      prevention: "Best choices are anti-malware protection and download restrictions so only trusted apps can be installed.",
      evidenceExplanation: "The unofficial download source and the request for admin permissions are the clearest warning signs of a trojan."
    }
  },
  {
    id: "silent-army",
    title: "The Silent Army",
    brief: "A school network is sending huge amounts of traffic, but users feel nothing is wrong.",
    attackType: "Botnet/DDoS",
    keyTerms: ["botnet", "ddos", "traffic", "infected", "devices"],
    remember: [
      "Botnets use many infected devices controlled by attackers.",
      "Unusual outbound traffic can be a sign of a hidden infection.",
      "Firewalls and updates help prevent devices being taken over."
    ],
    hints: {
      evidence: {
        easy: "Look for clues that many devices are acting together without users knowing.",
        standard: "Which evidence shows lots of hidden traffic?"
      },
      attack: {
        easy: "This attack involves many devices controlled remotely.",
        standard: "Think about attacks that flood other systems with traffic."
      },
      prevention: {
        easy: "Focus on network protection and keeping devices patched.",
        standard: "What stops devices being recruited silently?"
      },
      report: {
        easy: "Use the words botnet and DDoS in your report.",
        standard: "Explain why users didn't notice the infection."
      }
    },
    evidence: [
      {
        id: "traffic-spike",
        title: "Firewall logs show huge outbound traffic at night",
        detail: "Large spikes can mean devices are being used to send attack traffic.",
        important: true
      },
      {
        id: "many-devices",
        title: "Multiple laptops and tablets show similar network patterns",
        detail: "Botnets rely on many infected devices working together.",
        important: true
      },
      {
        id: "users-unaware",
        title: "Students say their devices 'feel normal'",
        detail: "Botnet malware can run quietly in the background.",
        important: false
      },
      {
        id: "isp-warning",
        title: "ISP warns of suspicious traffic leaving the school",
        detail: "External alerts can reveal hidden infections.",
        important: false
      },
      {
        id: "router-log",
        title: "Router logs show repeated requests to many IPs",
        detail: "DDoS attacks hit lots of targets quickly.",
        important: false
      },
      {
        id: "iot-devices",
        title: "Smart cameras were never updated",
        detail: "Outdated IoT devices are common botnet targets.",
        important: false
      },
      {
        id: "default-passwords",
        title: "Several devices still use default passwords",
        detail: "Weak authentication makes takeover easier.",
        important: false
      },
      {
        id: "command-control",
        title: "Traffic to a suspicious command-and-control server",
        detail: "Botnets are controlled by a remote server.",
        important: false
      },
      {
        id: "system-update",
        title: "A new printer was installed yesterday",
        detail: "This does not explain the network traffic spike.",
        important: false,
        redHerring: true
      },
      {
        id: "antivirus-alert",
        title: "Antivirus flagged a 'bot' process",
        detail: "Security tools sometimes detect botnet malware.",
        important: false
      }
    ],
    preventionOptions: [
      "Teach users to report suspicious emails and check sender domains",
      "Enable strong passwords and 2FA for important accounts",
      "Install anti-malware and keep it updated",
      "Add firewall rules to block unknown outbound traffic",
      "Turn on automatic software updates and patching",
      "Use download allow-lists and block unknown attachments"
    ],
    bestPrevention: [
      "Add firewall rules to block unknown outbound traffic",
      "Turn on automatic software updates and patching"
    ],
    modelAnswer: {
      attack: "This is a botnet/DDoS case. Many devices are infected and are secretly sending traffic to attack other systems.",
      prevention: "Best choices are strong firewall rules and automatic updates so devices are patched against takeover.",
      evidenceExplanation: "The traffic spikes and the many devices acting together prove a botnet running in the background."
    }
  }
];

const state = {
  difficulty: "standard",
  teacherMode: false,
  currentCase: null,
  phaseIndex: 0,
  pinnedEvidence: new Set(),
  selectedEvidenceId: null,
  selectedAttack: null,
  selectedPrevention: new Set(),
  reportText: ""
};

const phaseNames = [
  "Phase 1: Evidence Room",
  "Phase 2: Identify the Attack",
  "Phase 3: Prevention Planning",
  "Phase 4: Case Report"
];

const screens = {
  home: document.getElementById("homeScreen"),
  select: document.getElementById("caseSelect"),
  case: document.getElementById("caseScreen"),
  end: document.getElementById("endScreen")
};

const scoreLabel = document.getElementById("scoreLabel");
const rankLabel = document.getElementById("rankLabel");
const caseList = document.getElementById("caseList");
const caseTitle = document.getElementById("caseTitle");
const caseBrief = document.getElementById("caseBrief");
const phaseLabel = document.getElementById("phaseLabel");
const phaseContent = document.getElementById("phaseContent");
const hintBtn = document.getElementById("hintBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

const finalScore = document.getElementById("finalScore");
const finalRank = document.getElementById("finalRank");
const rememberList = document.getElementById("rememberList");

function showScreen(screen) {
  Object.values(screens).forEach((panel) => panel.classList.remove("active"));
  screen.classList.add("active");
}

function openModal(title, message) {
  modalTitle.textContent = title;
  modalBody.textContent = message;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

function resetState() {
  state.phaseIndex = 0;
  state.pinnedEvidence = new Set();
  state.selectedEvidenceId = null;
  state.selectedAttack = null;
  state.selectedPrevention = new Set();
  state.reportText = "";
}

function computeScore() {
  let score = 100;
  if (state.selectedAttack && state.selectedAttack !== state.currentCase.attackType) {
    score -= 20;
  }

  if (state.selectedPrevention.size > 0) {
    state.selectedPrevention.forEach((choice) => {
      if (!state.currentCase.bestPrevention.includes(choice)) {
        score -= 10;
      }
    });
  }

  const important = state.currentCase.evidence.filter((item) => item.important).map((item) => item.id);
  const hasBonus = important.every((id) => state.pinnedEvidence.has(id));
  if (hasBonus) {
    score += 5;
  }

  return Math.max(score, 0);
}

function getRank(score) {
  if (score >= 90) return "Chief Analyst";
  if (score >= 70) return "Security Investigator";
  if (score >= 50) return "Junior Analyst";
  return "Trainee (case not fully secured)";
}

function updateScore() {
  const score = computeScore();
  scoreLabel.textContent = `Score: ${score}`;
  rankLabel.textContent = `Rank: ${getRank(score)}`;
}

function renderCaseList() {
  caseList.innerHTML = "";
  cases.forEach((caseItem) => {
    const card = document.createElement("div");
    card.className = "case-card";
    card.innerHTML = `
      <h3>${caseItem.title}</h3>
      <p>${caseItem.brief}</p>
      <button class="primary" data-case="${caseItem.id}">Open Case</button>
    `;
    caseList.appendChild(card);
  });

  caseList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const caseId = button.dataset.case;
      startCase(caseId);
    });
  });
}

function startCase(caseId) {
  state.currentCase = cases.find((caseItem) => caseItem.id === caseId);
  resetState();
  caseTitle.textContent = state.currentCase.title;
  caseBrief.textContent = state.currentCase.brief;
  updateScore();
  renderPhase();
  showScreen(screens.case);
}

function renderPhase() {
  phaseLabel.textContent = phaseNames[state.phaseIndex];
  if (state.phaseIndex === 0) {
    renderEvidencePhase();
  } else if (state.phaseIndex === 1) {
    renderAttackPhase();
  } else if (state.phaseIndex === 2) {
    renderPreventionPhase();
  } else if (state.phaseIndex === 3) {
    renderReportPhase();
  }
}

function renderEvidencePhase() {
  const evidenceItems = state.currentCase.evidence
    .map(
      (item) => `
        <div class="evidence-item ${state.selectedEvidenceId === item.id ? "selected" : ""}" data-id="${item.id}">
          <strong>${item.title}</strong>
          ${item.redHerring ? "<span class=\"badge\">Red herring</span>" : ""}
        </div>
      `
    )
    .join("");

  const selectedItem = state.currentCase.evidence.find((item) => item.id === state.selectedEvidenceId);

  phaseContent.innerHTML = `
    <div class="grid-two">
      <div>
        <h3>Evidence Wall</h3>
        <div class="evidence-list">${evidenceItems}</div>
      </div>
      <div class="detail-panel">
        <h3>Case File</h3>
        <p>${selectedItem ? selectedItem.detail : "Select evidence to read the details."}</p>
        ${selectedItem ? `<button class="ghost" id="pinBtn">${state.pinnedEvidence.has(selectedItem.id) ? "Unpin" : "Pin to Evidence Board"}</button>` : ""}
        <h4>Evidence Board</h4>
        <div class="pinned-board">
          ${[...state.pinnedEvidence]
            .map((id) => {
              const ev = state.currentCase.evidence.find((item) => item.id === id);
              return `<div class="pinned-card">${ev ? ev.title : id}</div>`;
            })
            .join("")}
        </div>
        <p class="feedback">Pinned: ${state.pinnedEvidence.size} / 4 required</p>
      </div>
    </div>
  `;

  phaseContent.querySelectorAll(".evidence-item").forEach((item) => {
    item.addEventListener("click", () => {
      state.selectedEvidenceId = item.dataset.id;
      renderEvidencePhase();
    });
  });

  const pinBtn = document.getElementById("pinBtn");
  if (pinBtn && selectedItem) {
    pinBtn.addEventListener("click", () => {
      if (state.pinnedEvidence.has(selectedItem.id)) {
        state.pinnedEvidence.delete(selectedItem.id);
      } else {
        state.pinnedEvidence.add(selectedItem.id);
      }
      updateScore();
      renderEvidencePhase();
    });
  }
}

function renderAttackPhase() {
  const options = [
    "Phishing / Social engineering",
    "Malware (Trojan/Spyware/Adware)",
    "Botnet/DDoS",
    "Weak authentication",
    "Outdated software exploit"
  ];

  phaseContent.innerHTML = `
    <div>
      <h3>Which attack fits the evidence?</h3>
      <div class="checkbox-grid">
        ${options
          .map(
            (option) => `
            <label>
              <input type="radio" name="attack" value="${option}" ${state.selectedAttack === option ? "checked" : ""}/>
              ${option}
            </label>
          `
          )
          .join("")}
      </div>
      <div id="attackFeedback" class="feedback"></div>
      ${state.teacherMode ? `<div class="model-answer"><strong>Teacher Note:</strong> ${state.currentCase.modelAnswer.attack}<br/><em>${state.currentCase.modelAnswer.evidenceExplanation}</em></div>` : ""}
    </div>
  `;

  phaseContent.querySelectorAll("input[name='attack']").forEach((input) => {
    input.addEventListener("change", () => {
      state.selectedAttack = input.value;
      const feedback = document.getElementById("attackFeedback");
      if (state.selectedAttack === state.currentCase.attackType) {
        feedback.textContent = "Correct. Your pinned evidence supports this attack.";
        feedback.className = "feedback good";
      } else {
        feedback.textContent = "Not quite. Check your pinned evidence for stronger clues.";
        feedback.className = "feedback bad";
      }
      updateScore();
    });
  });
}

function renderPreventionPhase() {
  const selections = state.selectedPrevention;
  phaseContent.innerHTML = `
    <div>
      <h3>Select the BEST two prevention strategies.</h3>
      <div class="checkbox-grid">
        ${state.currentCase.preventionOptions
          .map(
            (option) => `
            <label>
              <input type="checkbox" value="${option}" ${selections.has(option) ? "checked" : ""}/>
              ${option}
            </label>
          `
          )
          .join("")}
      </div>
      <p class="feedback">Selected: ${selections.size} / 2</p>
      ${state.teacherMode ? `<div class="model-answer"><strong>Teacher Note:</strong> ${state.currentCase.modelAnswer.prevention}</div>` : ""}
    </div>
  `;

  phaseContent.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked && selections.size >= 2) {
        checkbox.checked = false;
        openModal("Selection limit", "Choose only TWO prevention strategies for the best score.");
        return;
      }
      if (checkbox.checked) {
        selections.add(checkbox.value);
      } else {
        selections.delete(checkbox.value);
      }
      updateScore();
      renderPreventionPhase();
    });
  });
}

function renderReportPhase() {
  phaseContent.innerHTML = `
    <div>
      <h3>Write your Case Report</h3>
      <p>Include:</p>
      <ol>
        <li>What was the attack?</li>
        <li>Which 3 evidence items prove it?</li>
        <li>What mistake allowed it?</li>
        <li>Two actions to prevent it in future</li>
      </ol>
      <textarea id="reportInput" class="report-box" placeholder="Write your report here...">${state.reportText}</textarea>
      <p id="reportFeedback" class="feedback"></p>
      <button id="downloadBtn" class="ghost">Download report (.txt)</button>
      ${state.teacherMode ? `<div class="model-answer"><strong>Teacher Note:</strong> A strong report clearly names the attack, uses specific evidence, and gives two targeted prevention steps.</div>` : ""}
    </div>
  `;

  const reportInput = document.getElementById("reportInput");
  const reportFeedback = document.getElementById("reportFeedback");

  reportInput.addEventListener("input", () => {
    state.reportText = reportInput.value;
    reportFeedback.textContent = "";
  });

  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", () => {
    const reportText = generateReport();
    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${state.currentCase.id}-report.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

function validateReport() {
  const text = state.reportText.trim();
  if (text.length < 120) {
    return "Your report is too short. Aim for at least 120 characters.";
  }
  const lower = text.toLowerCase();
  const matches = state.currentCase.keyTerms.filter((term) => lower.includes(term));
  if (matches.length < 2) {
    return `Include at least 2 key terms: ${state.currentCase.keyTerms.join(", ")}.`;
  }
  return null;
}

function generateReport() {
  const pinnedItems = [...state.pinnedEvidence]
    .map((id) => {
      const ev = state.currentCase.evidence.find((item) => item.id === id);
      return ev ? `- ${ev.title}` : `- ${id}`;
    })
    .join("\n");

  return `Cyber Case Files Report\nCase: ${state.currentCase.title}\n\nPinned Evidence:\n${pinnedItems}\n\nStudent Report:\n${state.reportText}\n`;
}

function finalizeCase() {
  const score = computeScore();
  finalScore.textContent = `Score: ${score}`;
  finalRank.textContent = `Rank: ${getRank(score)}`;
  rememberList.innerHTML = state.currentCase.remember.map((item) => `<li>${item}</li>`).join("");
  showScreen(screens.end);
}

hintBtn.addEventListener("click", () => {
  const hintType = ["evidence", "attack", "prevention", "report"][state.phaseIndex];
  const hint = state.currentCase.hints[hintType][state.difficulty];
  openModal("Hint", hint);
});

backBtn.addEventListener("click", () => {
  if (state.phaseIndex === 0) {
    showScreen(screens.select);
    return;
  }
  state.phaseIndex -= 1;
  renderPhase();
});

nextBtn.addEventListener("click", () => {
  if (state.phaseIndex === 0) {
    if (state.pinnedEvidence.size < 4) {
      openModal("More evidence needed", "Pin at least 4 pieces of evidence before moving on.");
      return;
    }
  }

  if (state.phaseIndex === 1) {
    if (!state.selectedAttack) {
      openModal("Choose an attack", "Select the attack type that matches the evidence.");
      return;
    }
  }

  if (state.phaseIndex === 2) {
    if (state.selectedPrevention.size !== 2) {
      openModal("Choose two", "Select exactly TWO prevention strategies.");
      return;
    }
  }

  if (state.phaseIndex === 3) {
    const reportError = validateReport();
    if (reportError) {
      openModal("Report needs work", reportError);
      return;
    }
    finalizeCase();
    return;
  }

  state.phaseIndex += 1;
  renderPhase();
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const startBtn = document.getElementById("startBtn");
const difficultySelect = document.getElementById("difficulty");
const teacherModeToggle = document.getElementById("teacherMode");
const returnBtn = document.getElementById("returnBtn");

startBtn.addEventListener("click", () => {
  showScreen(screens.select);
});

difficultySelect.addEventListener("change", () => {
  state.difficulty = difficultySelect.value;
});

teacherModeToggle.addEventListener("change", () => {
  state.teacherMode = teacherModeToggle.checked;
  if (screens.case.classList.contains("active")) {
    renderPhase();
  }
});

returnBtn.addEventListener("click", () => {
  showScreen(screens.select);
});

renderCaseList();
showScreen(screens.home);
updateScore();
