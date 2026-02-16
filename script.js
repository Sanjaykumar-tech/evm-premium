class VillageEVM {
    constructor() {
        console.log("🚀 Initializing VillageEVM...");
        
        this.villageName = "குணமங்கலம்";
        this.boothNumber = "TN-15-157-158";
        this.surveyorName = "குணமங்கலம் TVK";
        
        this.currentUser = null;
        this.otpTimer = null;
        this.otpExpiry = null;
        this.generatedOtp = null;
        
        // Parties array
        this.parties = [
            { id: 1, name: "திராவிட முன்னேற்றக் கழகம்", short: "DMK", symbol: '<img src="images/dmk.png" alt="DMK" class="party-symbol-img">', alliance: "SECULAR", color: "#e31b23", votes: 0 },
            { id: 2, name: "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம்", short: "AIADMK", symbol: '<img src="images/aiadmk.png" alt="AIADMK" class="party-symbol-img">', alliance: "NDA", color: "#00843D", votes: 0 },
            { id: 3, name: "தமிழக வெற்றி கழகம்", short: "TVK", symbol: '<img src="images/tvk.jpeg" alt="TVK" class="party-symbol-img">', alliance: "Others", color: "#e31b23", votes: 0 },
            { id: 4, name: "பாரதிய ஜனதா கட்சி", short: "BJP", symbol: '<img src="images/bjp.png" alt="BJP" class="party-symbol-img">', alliance: "NDA", color: "#FF9933", votes: 0 },
            { id: 5, name: "இந்திய தேசிய காங்கிரஸ்", short: "INC", symbol: '<img src="images/inc.png" alt="INC" class="party-symbol-img">', alliance: "SECULAR", color: "#00BFFF", votes: 0 },
            { id: 6, name: "நாம் தமிழர் கட்சி", short: "NTK", symbol: '<img src="images/ntk.png" alt="NTK" class="party-symbol-img">', alliance: "Others", color: "#FFD700", votes: 0 },
            { id: 7, name: "பாட்டாளி மக்கள் கட்சி", short: "PMK", symbol: '<img src="images/pmk.png" alt="PMK" class="party-symbol-img">', alliance: "NDA", color: "#FFA500", votes: 0 },
            { id: 8, name: "விடுதலை சிறுத்தைகள் கட்சி", short: "VCK", symbol: '<img src="images/vck.jpeg" alt="VCK" class="party-symbol-img">', alliance: "SECULAR", color: "#800080", votes: 0 },
            { id: 9, name: "தேசிய முற்போக்கு திராவிட கழகம்", short: "DMDK", symbol: '<img src="images/dmdk.jpeg" alt="DMDK" class="party-symbol-img">', alliance: "Others", color: "#FFD700", votes: 0 },
            { id: 10, name: "மறுமலர்ச்சி திராவிட முன்னேற்றக் கழகம்", short: "MDMK", symbol: '<img src="images/mdmk.png" alt="MDMK" class="party-symbol-img">', alliance: "SECULAR", color: "#FF0000", votes: 0 },
            { id: 11, name: "மக்கள் நீதி மய்யம்", short: "MNM", symbol: '<img src="images/mnm.png" alt="MNM" class="party-symbol-img">', alliance: "SECULAR", color: "#FF69B4", votes: 0 },
            { id: 12, name: "இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)", short: "CPI(M)", symbol: '<img src="images/cpim.png" alt="CPI(M)" class="party-symbol-img">', alliance: "Left", color: "#FF0000", votes: 0 },
            { id: 13, name: "இந்திய கம்யூனிஸ்ட் கட்சி", short: "CPI", symbol: '<img src="images/cpi.png" alt="CPI" class="party-symbol-img">', alliance: "Left", color: "#FF0000", votes: 0 },
            { id: 14, name: "இந்திய யூனியன் முஸ்லிம் லீக்", short: "IUML", symbol: '<img src="images/iuml.png" alt="IUML" class="party-symbol-img">', alliance: "SECULAR", color: "#008000", votes: 0 },
            { id: 15, name: "அம்மா மக்கள் முன்னேற்ற கழகம்", short: "AMMK", symbol: '<img src="images/ammk.png" alt="AMMK" class="party-symbol-img">', alliance: "NDA", color: "#00843D", votes: 0 },
            { id: 16, name: "தமிழ் மாநில காங்கிரஸ்", short: "TMC(M)", symbol: '<img src="images/tmc.png" alt="TMC" class="party-symbol-img">', alliance: "SECULAR", color: "#00BFFF", votes: 0 },
            { id: 17, name: "புதிய தமிழகம் கட்சி", short: "PT", symbol: '<img src="images/pt.png" alt="PT" class="party-symbol-img">', alliance: "NDA", color: "#FFA500", votes: 0 },
            { id: 19, name: "ஆம் ஆத்மி கட்சி", short: "AAP", symbol: '<img src="images/aap.png" alt="AAP" class="party-symbol-img">', alliance: "Others", color: "#0000FF", votes: 0 },
            { id: 20, name: "பகுஜன் சமாஜ் கட்சி", short: "BSP", symbol: '<img src="images/bsp.png" alt="BSP" class="party-symbol-img">', alliance: "Others", color: "#0000FF", votes: 0 },
            { id: 21, name: "நோட்டா", short: "NOTA", symbol: '<img src="images/nota.png" alt="NOTA" class="party-symbol-img">', alliance: "Others", color: "#000000", votes: 0 }
        ];
        
        this.voters = ["Raman", "Selvi", "Murugan", "Anjali", "Kumar", "Lakshmi", "Perumal", "Meena", "Sundar", "Vanitha"];
        this.totalVotes = 0;
        this.selectedParty = null;
        this.lastVoteTime = 0;
        this.voteDelay = 2000;
        this.remainingTime = 0;
        this.timerInterval = null;
        
        // Initialize
        this.checkSession();
        this.loadVotes();
        this.initLoginSystem();
        
        console.log("✅ VillageEVM initialized with", this.parties.length, "parties");
    }

    // ========== LOGOUT METHOD ==========
    logout() {
        console.log("🚪 Logging out...");
        localStorage.removeItem('evm_session');
        this.currentUser = null;
        
        if (this.otpTimer) clearInterval(this.otpTimer);
        this.generatedOtp = null;
        this.otpExpiry = null;
        
        document.getElementById('emailInput').value = '';
        document.getElementById('otpInput').value = '';
        document.getElementById('otpGroup').classList.add('hidden');
        document.getElementById('sendOtpBtn').classList.remove('hidden');
        document.getElementById('loginWithOtpBtn').classList.add('hidden');
        document.getElementById('otpTimer').textContent = 'OTP காலாவதியாக 5:00';
        
        document.getElementById('mainApp').classList.add('hidden');
        document.getElementById('loginScreen').classList.remove('hidden');
        
        this.showToast('👋 வெளியேறியது! மீண்டும் வருக', 'info');
    }

    // ========== LOGIN SYSTEM ==========
    initLoginSystem() {
        const sendOtpBtn = document.getElementById('sendOtpBtn');
        const loginWithOtpBtn = document.getElementById('loginWithOtpBtn');
        const emailInput = document.getElementById('emailInput');
        const otpGroup = document.getElementById('otpGroup');
        const otpInput = document.getElementById('otpInput');

        sendOtpBtn.addEventListener('click', async () => {
            const email = emailInput.value.trim();
            console.log("1️⃣ Email entered:", email);

            if (!email || !email.includes('@')) {
                this.showToast('❌ சரியான மின்னஞ்சலை உள்ளிடவும்', 'warning');
                return;
            }

            sendOtpBtn.innerHTML = '⏳ அனுப்புகிறது...';
            sendOtpBtn.disabled = true;

            this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            this.otpExpiry = Date.now() + 5 * 60 * 1000;
            console.log("2️⃣ Generated OTP:", this.generatedOtp);

            try {
                const serviceId = "service_mk8juw2";
                const templateId = "template_8tdjqzh";

                const templateParams = {
                    to_email: email,
                    email: email,
                    to: email,
                    recipient: email,
                    to_name: email.split('@')[0],
                    name: email.split('@')[0],
                    otp_code: this.generatedOtp,
                    otp: this.generatedOtp,
                    code: this.generatedOtp,
                    from_name: 'Village EVM 2026',
                    from: 'Village EVM 2026'
                };
                
                console.log("3️⃣ Sending with Params:", templateParams);

                const response = await emailjs.send(
                    serviceId,
                    templateId,
                    templateParams
                );

                console.log("4️⃣ EmailJS Response:", response);

                if (response && response.status === 200) {
                    otpGroup.classList.remove('hidden');
                    sendOtpBtn.classList.add('hidden');
                    loginWithOtpBtn.classList.remove('hidden');
                    this.startOtpTimer();
                    this.showToast('✅ OTP உங்கள் மின்னஞ்சலுக்கு அனுப்பப்பட்டது!', 'success');
                } else {
                    throw new Error(`Failed with status: ${response?.status}`);
                }

            } catch (error) {
                console.error('❌ EmailJS Error:', error);
                
                // FALLBACK MODE
                console.log("⚠️ FALLBACK MODE: Use this OTP ->", this.generatedOtp);
                this.showToast(`📨 OTP: ${this.generatedOtp} (Check Console F12)`, 'info');
                
                otpGroup.classList.remove('hidden');
                sendOtpBtn.classList.add('hidden');
                loginWithOtpBtn.classList.remove('hidden');
                this.startOtpTimer();

            } finally {
                sendOtpBtn.innerHTML = '📨 OTP அனுப்பு';
                sendOtpBtn.disabled = false;
            }
        });

        loginWithOtpBtn.addEventListener('click', () => {
            const enteredOtp = otpInput.value.trim();

            if (!enteredOtp) {
                this.showToast('❌ OTP உள்ளிடவும்', 'warning');
                return;
            }

            if (Date.now() > this.otpExpiry) {
                this.showToast('⏰ OTP காலாவதியாகிவிட்டது', 'error');
                this.resetLogin();
                return;
            }

            if (enteredOtp === this.generatedOtp) {
                const email = emailInput.value.trim();
                this.currentUser = { email: email, loginTime: Date.now() };

                localStorage.setItem('evm_session', JSON.stringify({
                    email: email,
                    expiry: Date.now() + 24 * 60 * 60 * 1000
                }));

                document.getElementById('loginScreen').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                document.getElementById('userEmailDisplay').classList.remove('hidden');
                document.getElementById('userEmailDisplay').classList.add('flex-visible');
                document.getElementById('userEmail').textContent = email;

                this.showToast('✅ வரவேற்கிறோம்!', 'success');
                this.init();
            } else {
                this.showToast('❌ தவறான OTP', 'error');
            }
        });
    }

    startOtpTimer() {
        const timerElement = document.getElementById('otpTimer');
        if (this.otpTimer) clearInterval(this.otpTimer);
        
        this.otpTimer = setInterval(() => {
            const remaining = Math.max(0, this.otpExpiry - Date.now());
            if (remaining <= 0) {
                clearInterval(this.otpTimer);
                timerElement.textContent = '⏰ OTP காலாவதியானது';
                this.resetLogin();
                return;
            }
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            timerElement.textContent = `OTP காலாவதியாக ${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    resetLogin() {
        document.getElementById('otpGroup').classList.add('hidden');
        document.getElementById('sendOtpBtn').classList.remove('hidden');
        document.getElementById('loginWithOtpBtn').classList.add('hidden');
        document.getElementById('otpInput').value = '';
        if (this.otpTimer) clearInterval(this.otpTimer);
    }

    checkSession() {
        const session = localStorage.getItem('evm_session');
        if (session) {
            const data = JSON.parse(session);
            if (data.expiry > Date.now()) {
                this.currentUser = { email: data.email };
                document.getElementById('loginScreen').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                document.getElementById('userEmailDisplay').classList.remove('hidden');
                document.getElementById('userEmailDisplay').classList.add('flex-visible');
                document.getElementById('userEmail').textContent = data.email;
                this.init();
            } else {
                localStorage.removeItem('evm_session');
            }
        }
    }

    // ========== MAIN APP FUNCTIONS ==========
    init() {
        console.log("📱 Initializing main app...");
        
        document.getElementById('villageName').textContent = this.villageName;
        document.getElementById('boothNumber').innerHTML = `வாக்குச்சாவடி: ${this.boothNumber}`;
        document.getElementById('surveyorName').innerHTML = `கணக்கெடுப்பாளர்: ${this.surveyorName}`;
        
        this.renderParties();
        this.renderResults();
        this.startTimer();
        this.attachEvents();
    }

    loadVotes() {
        const saved = localStorage.getItem(`villageVotes_${this.villageName}`);
        if (saved) {
            const votes = JSON.parse(saved);
            this.parties = this.parties.map(party => ({
                ...party,
                votes: votes[party.id] || 0
            }));
            this.totalVotes = this.parties.reduce((sum, p) => sum + p.votes, 0);
        }
    }

    saveVotes() {
        const votes = {};
        this.parties.forEach(p => votes[p.id] = p.votes);
        localStorage.setItem(`villageVotes_${this.villageName}`, JSON.stringify(votes));
    }

    renderParties() {
        const grid = document.getElementById('partyGrid');
        if (!grid) {
            console.error("❌ partyGrid element not found!");
            return;
        }
        
        const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const allianceFilter = document.getElementById('allianceFilter')?.value || 'all';
        
        let filteredParties = this.parties;
        
        if (searchTerm) {
            filteredParties = filteredParties.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.short.toLowerCase().includes(searchTerm)
            );
        }
        
        if (allianceFilter !== 'all') {
            filteredParties = filteredParties.filter(p => p.alliance === allianceFilter);
        }
        
        if (filteredParties.length === 0) {
            grid.innerHTML = '<p class="text-center">😕 கட்சிகள் இல்லை</p>';
            return;
        }
        
        grid.innerHTML = filteredParties.map(party => `
            <button class="party-btn" onclick="villageEVM.selectParty(${party.id})"
                    ${this.remainingTime > 0 ? 'disabled' : ''}>
                <div class="party-symbol">${party.symbol}</div>
                <div class="party-short">${party.short}</div>
                <div class="party-name-tamil">${party.name.substring(0, 20)}...</div>
                <span class="party-alliance">${party.alliance}</span>
                <div class="party-votes">${party.votes} வாக்குகள்</div>
            </button>
        `).join('');
        
        document.getElementById('totalVotes').textContent = this.totalVotes;
        document.getElementById('votersCount').textContent = this.voters.length;
        document.getElementById('totalVotesFooter').textContent = this.totalVotes;
    }

    renderResults() {
        const tbody = document.getElementById('resultsBody');
        if (!tbody) return;
        
        const sortedParties = [...this.parties].sort((a, b) => b.votes - a.votes);
        
        tbody.innerHTML = sortedParties.map((party, index) => {
            const percentage = this.totalVotes > 0 ? ((party.votes / this.totalVotes) * 100).toFixed(1) : 0;
            
            return `
                <tr>
                    <td><strong>${index + 1}</strong></td>
                    <td>${party.symbol}</td>
                    <td><strong>${party.short}</strong></td>
                    <td>${party.name.substring(0, 20)}...</td>
                    <td><strong>${party.votes}</strong></td>
                    <td>
                        <strong>${percentage}%</strong>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%;"></div>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    selectParty(partyId) {
        if (this.remainingTime > 0) {
            this.showToast(`⏳ ${this.remainingTime} வினாடிகள் காத்திருக்கவும்`, 'warning');
            return;
        }
        
        this.selectedParty = this.parties.find(p => p.id === partyId);
        if (!this.selectedParty) return;
        
        document.getElementById('modalPartySymbol').innerHTML = this.selectedParty.symbol;
        document.getElementById('modalPartyName').innerHTML = this.selectedParty.short;
        document.getElementById('modalPartyTamil').innerHTML = this.selectedParty.name;
        document.getElementById('confirmModal').style.display = 'flex';
    }

    confirmVote() {
        if (this.selectedParty) {
            const now = Date.now();
            if (now - this.lastVoteTime < this.voteDelay) {
                this.remainingTime = Math.ceil((this.voteDelay - (now - this.lastVoteTime)) / 1000);
                this.showToast(`⏳ ${this.remainingTime} வினாடிகள் காத்திருக்கவும்`, 'warning');
                document.getElementById('confirmModal').style.display = 'none';
                return;
            }
            
            this.selectedParty.votes += 1;
            this.totalVotes++;
            this.lastVoteTime = now;
            
            this.saveVotes();
            this.renderParties();
            this.renderResults();
            
            this.showToast(`✅ ${this.selectedParty.short} - வாக்கு பதிவானது!`, 'success');
            
            document.getElementById('confirmModal').style.display = 'none';
            this.selectedParty = null;
            this.remainingTime = 2;
        }
    }

    cancelVote() {
        document.getElementById('confirmModal').style.display = 'none';
        this.selectedParty = null;
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            if (this.lastVoteTime > 0) {
                const elapsed = Date.now() - this.lastVoteTime;
                this.remainingTime = Math.max(0, 2 - Math.floor(elapsed / 1000));
                
                const timerDisplay = document.getElementById('timerDisplay');
                const timerValue = document.getElementById('timerValue');
                
                if (timerDisplay && timerValue) {
                    if (this.remainingTime > 0) {
                        timerDisplay.classList.remove('hidden');
                        timerDisplay.classList.add('flex-visible');
                        timerValue.textContent = this.remainingTime;
                    } else {
                        timerDisplay.classList.add('hidden');
                    }
                }
                
                this.renderParties();
            }
        }, 100);
    }

    resetVotes() {
        if (confirm('⚠️ நிச்சயமாக அனைத்து வாக்குகளையும் மீட்டமைக்க விரும்புகிறீர்களா?')) {
            this.parties.forEach(party => party.votes = 0);
            this.totalVotes = 0;
            this.lastVoteTime = 0;
            this.remainingTime = 0;
            this.saveVotes();
            this.renderParties();
            this.renderResults();
            this.showToast('🔄 அனைத்து வாக்குகளும் மீட்டமைக்கப்பட்டன', 'success');
            document.getElementById('timerDisplay').classList.add('hidden');
        }
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    }

    attachEvents() {
        const searchInput = document.getElementById('searchInput');
        const allianceFilter = document.getElementById('allianceFilter');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => this.renderParties());
        }
        
        if (allianceFilter) {
            allianceFilter.addEventListener('change', () => this.renderParties());
        }
        
        window.addEventListener('click', (e) => {
            if (e.target === document.getElementById('confirmModal')) {
                this.cancelVote();
            }
        });
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.cancelVote();
            }
        });
    }
}

// Create global instance
console.log("🚀 Creating villageEVM instance...");
const villageEVM = new VillageEVM();