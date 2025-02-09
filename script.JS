
const alumniData = [
    { id: 1, name: "AIT HAMMADI ABDELLATIF", year: 2022, role: "Machine Learning Consultant", company: "Upwork", linkedin: "https://www.linkedin.com/in/i-make-ai/" },
    { id: 2, name: "ARDIF MOHAMED", year: 2022, role: "AI Engineer", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/mohamed-ardif-90406b1a1/" },
    { id: 3, name: "ASSIS AYOUB", year: 2022, role: "ML Engineer", company: "Network Optix", linkedin: "https://www.linkedin.com/in/ayoub-assis/" },
    { id: 4, name: "BARKOUKI OUSSAMA", year: 2022, role: "CTO", company: "InfinitiStar", linkedin: "https://www.linkedin.com/in/oussama1598/" },
    { id: 5, name: "EL ANSARI BADER", year: 2022, role: "Data Scientist", company: "Sofrecom", linkedin: "https://www.linkedin.com/in/bader-el-ansari-50942a191/" },
    { id: 6, name: "EL BIARI ABDELHAK", year: 2022, role: "Data Scientist", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/abdelhak-elbiari-a46b80195/" },
    { id: 7, name: "EL QARAOUI AMINE", year: 2022, role: "CTO", company: "ARCH NETWORK", linkedin: "https://www.linkedin.com/in/amine-elqaraoui/" },
    { id: 8, name: "ER-RACHIDY NAJWA", year: 2022, role: "Data Scientist", company: "DATALOEN", linkedin: "https://www.linkedin.com/in/najwa-er-rachidy/" },
    { id: 9, name: "ESSAHEL RIM", year: 2022, role: "Data Analyst", company: "ORANGE MAROC", linkedin: "https://www.linkedin.com/in/rim-essahel/" },
    { id: 10, name: "EZZAAM CHAIMAA", year: 2022, role: "AI Engineer", company: "COMDATA", linkedin: "https://www.linkedin.com/in/chaimaa-ezzaam-62b087198/" },
    { id: 11, name: "MAAZOUZI SABAH", year: 2022, role: "Project Manager", company: "WAFABAIL", linkedin: "https://www.linkedin.com/in/sabah-maazouzi-134a46198/" },
    { id: 12, name: "MOUDNI AHMAD", year: 2022, role: "AI Engineer", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/ahmad-moudni/" },
    { id: 13, name: "OHSSINE EL-HOUSSAINE", year: 2022, role: "ML Developer", company: "A.V.E", linkedin: "https://www.linkedin.com/in/el-houssaine-ohssine/" },
    { id: 14, name: "OU-EL-FAQUIR IMRANE", year: 2022, role: "Data Scientist", company: "ATTIJARI WAFABANK", linkedin: "https://www.linkedin.com/in/imrane-ou-el-faquir-a0853b184/" },
    { id: 15, name: "OUTLAOUAIT EL HASSAN", year: 2022, role: "AI Researcher", company: "SYMPHONY 3D", linkedin: "https://www.linkedin.com/in/hassan-outlaouait/" },
    { id: 16, name: "TALIH AIDA", year: 2022, role: "UNKOWN", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/aida-talih-a2b03a153/" },
    { id: 17, name: "YACHOUTI YOUNESS", year: 2022, role: "UNKOWN", company: "UNKOWN", linkedin: "#" },
    { id: 18, name: "ZNIBER ALAA", year: 2022, role: "Researcher", company: "CONVOLVE Europe", linkedin: "https://www.linkedin.com/in/alaa-zniber/" },
    { id: 19, name: "ZOURANE REDA", year: 2022, role: "Product Manager", company: "Banque Centrale Populaire", linkedin: "https://www.linkedin.com/in/reda-zourane-931513196/" },
    { id: 20, name: "ALAMI OUSSAMA", year: 2023, role: "AI Consultant", company: "Diez Agency", linkedin: "https://www.linkedin.com/in/alami-oussama" },
    { id: 21, name: "ARBIB NADA", year: 2023, role: "Data Scientist", company: "DELOITTE", linkedin: "https://www.linkedin.com/in/nada-arbib-1002741b8/" },
    { id: 22, name: "BOUHAJ DOHA", year: 2023, role: "AI Engineer", company: "CAPGEMINI ENGINEERING", linkedin: "https://www.linkedin.com/in/doha-bouhaj-a03a001b7/" },
    { id: 23, name: "BOUIBAUAN MOHAMED", year: 2023, role: "Data Engineer", company: "AXA", linkedin: "https://www.linkedin.com/in/bouimed/" },
    { id: 24, name: "CHABLAOUI HANANE", year: 2023, role: "UNKOWN", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/hanane-chablaoui/" },
    { id: 25, name: "CHEGRAOUI ZAKARIA", year: 2023, role: "AI Engineer", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/chegraoui-zakaria" },
    { id: 26, name: "CHENNA MOHAMED", year: 2023, role: "UNKOWN", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/chenna-mohamed" },
    { id: 27, name: "DAHANI ADEL", year: 2023, role: "Founder", company: "AY AUTOMATE", linkedin: "https://www.linkedin.com/in/dahani9091/" },
    { id: 28, name: "ECHCHAMSI MOHAMED", year: 2023, role: "AI Engineer", company: "Ecocarrier Inc", linkedin: "https://www.linkedin.com/in/mohamed-echchamsi/" },
    { id: 29, name: "EZZIDANI AYOUB", year: 2023, role: "AI Engineer", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/ayoub-ezzidani-239b7b200/" },
    { id: 30, name: "GRINI ANASS", year: 2023, role: "PhD Student", company: "AI MOVEMENT", linkedin: "https://www.linkedin.com/in/anass-grini-a5a310178/" },
    { id: 31, name: "IBNE-ETTALEB YOUNES", year: 2023, role: "Data Scientist", company: "IBM", linkedin: "https://www.linkedin.com/in/younes-ibne/" },
    { id: 32, name: "KADMI HANANE", year: 2023, role: "Data Analyst", company: "ATM-VIEW", linkedin: "https://www.linkedin.com/in/hanane-kadmi-2a9145201/" },
    { id: 33, name: "KARIB JIHANE", year: 2023, role: "Data Scientist", company: "UNIVERSITY OF OTTAWA", linkedin: "https://www.linkedin.com/in/jihane-karib/" },
    { id: 34, name: "LAFAZ AYMAN", year: 2023, role: "Data Engineer", company: "SII GROUP MOROCCO", linkedin: "https://www.linkedin.com/in/ayman-lafaz/" },
    { id: 35, name: "LAHOURI KAMAL", year: 2023, role: "UNKOWN", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/lahouri-kamal" },
    { id: 36, name: "LAZGHAN YASSINE", year: 2023, role: "AI Engineer", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/yassine-lazghan-742bba193/" },
    { id: 37, name: "MAATAOUI MOHAMED", year: 2023, role: "UNKOWN", company: "UNKOWN", linkedin: "https://www.linkedin.com/in/mohamed-maataoui-494148212/" },
    { id: 38, name: "MAJDI KARIM", year: 2023, role: "ML Researcher", company: "Eurobios Mews Labs", linkedin: "https://www.linkedin.com/in/majdi-karim-3a4960197/" },
    { id: 39, name: "REBII JAMAL", year: 2023, role: "Search Engineer", company: "HENCEFORTH", linkedin: "https://www.linkedin.com/in/jamal-rebii-8b5a0b206/" }
];
        // Enhanced Alumni Management System
class AlumniManager {
    constructor(data) {
        this.alumniData = data;
        this.filteredData = [...data];
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.initUI();
        this.addEventListeners();
    }

    // Initialize the UI elements
    initUI() {
        this.searchBar = document.querySelector('.search-bar');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.alumniGrid = document.querySelector('.alumni-grid');
        this.statsContainer = document.querySelector('.stats-container') || this.createStatsContainer();
        this.renderAlumniCards();
        this.renderStats();
    }

    // Add event listeners for user interaction
    addEventListeners() {
        // Search input listener with debounce
        this.searchBar.addEventListener('input', this.debounce((e) => {
            this.searchQuery = e.target.value;
            this.filterAndRender();
        }, 300));

        // Filter button listener
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.currentFilter = button.dataset.year;
                this.filterAndRender();
            });
        });

        // Scroll animation
        window.addEventListener('scroll', () => this.animateVisibleCards());
    }

    // Debounce function to optimize input handling
    debounce(func, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Filter alumni data and re-render
    filterAndRender() {
        this.filteredData = this.alumniData.filter(alumni => {
            const matchesYear = this.currentFilter === 'all' || alumni.year === parseInt(this.currentFilter);
            const searchQuery = this.searchQuery.toLowerCase();
            const matchesSearch = !this.searchQuery || 
                alumni.name.toLowerCase().includes(searchQuery) ||
                alumni.role.toLowerCase().includes(searchQuery) ||
                alumni.company.toLowerCase().includes(searchQuery);
            return matchesYear && matchesSearch;
        });

        this.renderAlumniCards();
        this.renderStats();
    }

    // Render the alumni statistics
    renderStats() {
        const stats = this.calculateStats();
        this.statsContainer.innerHTML = `
            <div class="stat-card">
                <span class="stat-number">${stats.totalAlumni}</span>
                <span class="stat-label">Total Alumni</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">${stats.companies}</span>
                <span class="stat-label">Different Companies</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">${stats.roles}</span>
                <span class="stat-label">Unique Roles</span>
            </div>
        `;
    }

    // Calculate statistics from the filtered data
    calculateStats() {
        const uniqueCompanies = new Set(
            this.filteredData.map(alumni => alumni.company).filter(company => company && company !== "UNKOWN")
        );
        const uniqueRoles = new Set(
            this.filteredData.map(alumni => alumni.role).filter(role => role && role !== "UNKOWN")
        );
        return {
            totalAlumni: this.filteredData.length,
            companies: uniqueCompanies.size,
            roles: uniqueRoles.size
        };
    }

    // Create a container for statistics if not present
    createStatsContainer() {
        const container = document.createElement('div');
        container.className = 'stats-container';
        const searchContainer = document.querySelector('.search-container');
        searchContainer.parentNode.insertBefore(container, searchContainer);
        return container;
    }

    // Render the alumni cards on the page
    renderAlumniCards() {
        this.alumniGrid.innerHTML = '';

        if (this.filteredData.length === 0) {
            this.renderNoResults();
            return;
        }

        this.filteredData.forEach((alumni, index) => {
            const card = this.createAlumniCard(alumni, index);
            this.alumniGrid.appendChild(card);
        });
    }

    // Create an individual alumni card
    createAlumniCard(alumni, index) {
        const card = document.createElement('div');
        card.className = 'alumni-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="alumni-image">
                <img src="/api/placeholder/140/140" alt="${alumni.name}">
            </div>
            <div class="alumni-info">
                <h3 class="alumni-name">${alumni.name}</h3>
                <div class="alumni-year">${alumni.year}</div>
                <div class="alumni-role">${alumni.role || 'Role not specified'}</div>
                <div class="alumni-company">${alumni.company || 'Company not specified'}</div>
                <a href="${alumni.linkedin}" 
                   class="linkedin-btn" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                    Connect on LinkedIn
                </a>
            </div>
        `;
        return card;
    }

    // Render a message when no results are found
    renderNoResults() {
        this.alumniGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No alumni found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
    }

    // Animate cards on scroll
    animateVisibleCards() {
        const cards = document.querySelectorAll('.alumni-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                card.classList.add('visible');
            }
        });
    }
}

// Initialize the Alumni Manager
document.addEventListener('DOMContentLoaded', () => {
    const alumniManager = new AlumniManager(alumniData);
});
