const PORTFOLIO_DATA = {
    hero: {
        command: 'grep -rNi "absolute solution" ./infrastructure',
        matchLine: '> Match found at ./core/engineers/amrit_koirala.yaml',
        name: 'Amrit Koirala',
        title: 'DevOps & AIOps Engineer',
        subtitle: 'Architecting scalable, observable, and automated infrastructure using Docker, Kubernetes, Terraform, AWS, and Pulumi. Focused on Site Reliability Engineering (SRE) and predictive alerting.'
    },
    about: [
        `I am an <strong>AIOps & DevOps Engineer</strong> with a strong foundation in Cybersecurity, SIEM, and System Administration. I specialize in architecting resilient, automated, and highly observable SaaS infrastructure.`,
        `My philosophy is "Grep-first". I don't just patch technical hurdles; I grep my way through complex data pipelines and distributed systems to find the absolute root cause. By leveraging deep observability tools like <strong>Prometheus and Grafana</strong>, I build the visibility needed to prevent issues proactively.`,
        `Currently, I manage operation monitoring pipelines and drive Infrastructure as Code (IaC) utilizing <em>Terraform, Pulumi, GitLab CI, Python, and Docker</em>. I am deeply passionate about reducing operational toil through intelligent automation and deploying scalable AI/ML compute workloads.`
    ],
    skills: [
        {
            category: 'Containerization & Orchestration',
            icon: 'fas fa-box-open',
            items: [
                { name: 'Docker', match: true },
                { name: 'Kubernetes (CKA prep)', match: true },
                { name: 'Container Security', match: false },
                { name: 'Helm Deployments', match: false }
            ]
        },
        {
            category: 'Infrastructure as Code',
            icon: 'fas fa-network-wired',
            items: [
                { name: 'Terraform', match: true },
                { name: 'Pulumi', match: true },
                { name: 'AWS Cloud Resources', match: true },
                { name: 'Ansible & Automation', match: false }
            ]
        },
        {
            category: 'CI/CD Pipeline & SRE',
            icon: 'fas fa-robot',
            items: [
                { name: 'GitLab CI', match: true },
                { name: 'Jenkins', match: true },
                { name: 'GitHub Actions', match: true },
                { name: 'Site Reliability Engineering', match: false }
            ]
        },
        {
            category: 'AIOps & Observability',
            icon: 'fas fa-chart-line',
            items: [
                { name: 'Prometheus & Grafana', match: true },
                { name: 'Predictive Alerting', match: true },
                { name: 'Anomaly Detection', match: false },
                { name: 'ELK Stack / SIEM Log Analysis', match: false }
            ]
        },
        {
            category: 'Core Systems & Network',
            icon: 'fas fa-terminal',
            items: [
                { name: 'Linux / Unix Admin', match: true },
                { name: 'CCNA (Cisco Networking)', match: true },
                { name: 'Python & Go Scripting', match: true },
                { name: 'Bash / Shell', match: false }
            ]
        }
    ],
    experience: [
        {
            title: 'Solutions Engineer (Promoted & Rebranded)',
            company: 'GuardSix (formerly Logpoint)',
            date: '2022-04-01 -> Present',
            description: `
                <div style="margin-bottom: 10px; border-left: 2px solid var(--accent); padding-left: 10px;">
                    <span style="color: var(--accent-cyan); font-weight: bold;">[2025 -> Present] SaaS & Operations Monitoring Team (GuardSix)</span><br>
                    Transitioned to a dedicated SRE/Operations role. Architecting and maintaining operation monitoring pipelines for SaaS customer systems. Leveraging <strong>Prometheus & Grafana</strong> for deep observability. Driving IaC and automation using <strong>Pulumi, Terraform, GitLab CI, Docker, and Python</strong> to scale infrastructure and spin up AI/ML compute resources.
                </div>
                <div style="margin-bottom: 10px; border-left: 2px solid var(--text-secondary); padding-left: 10px;">
                    <span style="color: var(--accent-cyan); font-weight: bold;">[2024-07 -> 2025] Solutions Engineer (Cybersecurity Focus)</span><br>
                    Architected and troubleshooted complex data pipelines across <strong>SIEM, SOAR, and UEBA</strong> ecosystems. Managed cloud-based AWS resources and automated root cause analysis to reduce operational toil.
                </div>
                <div style="border-left: 2px solid var(--text-secondary); padding-left: 10px;">
                    <span style="color: var(--accent-cyan); font-weight: bold;">[2022-04 -> 2024-07] Associate Solutions Engineer (Logpoint)</span><br>
                    Developed core skills in cybersecurity, log analysis, and infrastructure management, applying a strong "grep-first" debugging mindset to resolve critical system incidents.
                </div>
            `
        },
        {
            title: 'Network & System Administrator',
            company: 'FOCUSONE Payment Solutions (MOCO)',
            date: '2020-11-01 -> 2022-04-01',
            description: 'Built a strong foundation in System Administration and Networking. Managed critical network infrastructure, switching, routing, and Linux server environments for MOCO digital wallet operations.'
        },
        {
            title: 'Co-Founder & Researcher',
            company: 'Networking Nepal',
            date: '2018-11-01 -> 2020-08-01',
            description: 'Organized boot-camps across Nepal, executed IT awareness programs, and promoted Free and Open Source Learning.'
        }
    ],
    certifications: [
        {
            title: 'CCNA - Implementing and Administering Cisco Solutions',
            issuer: 'Cisco / Credly',
            icon: 'fas fa-shield-alt',
            link: 'https://www.credly.com/badges/ef3fb6fc-6926-40d5-b9e3-2efd789771c2/linked_in_profile'
        },
        {
            title: 'Enterprise System Management and Security',
            issuer: 'University of Colorado System (Coursera)',
            icon: 'fas fa-server',
            link: 'https://www.coursera.org/account/accomplishments/verify/AM5N4HPF3NQ6'
        },
        {
            title: 'Become a Linux System Administrator',
            issuer: 'LinkedIn Learning',
            icon: 'fab fa-linux',
            link: 'https://www.linkedin.com/learning/certificates/5ca8e265aa7fd6544432eb7e7f12fcce80330f359e737b8c97d22e0658222b8d'
        }
    ],
    recommendations: [
        {
            name: 'Aadish Shrestha',
            title: 'Founder and CTO at FOCUSONE Payment Solutions',
            link: 'https://www.linkedin.com/in/aadish-shrestha/',
            text: '"Amrit joined us as a trainee network and systems administrator. As with most young trainee I found him eager to accomplish assigned tasks without the patience to spend additional effort to comprehend the fundamentals. Over time I observed him putting in effort to gain in-depth knowledge and sharing his knowledge with his team. He is full of zeal whenever he has opportunity to present his learnings to the team. Clearly a team player actively participating in team discussions and not shy to express his ideas."'
        },
        {
            name: 'Sunita Maharjan',
            title: 'Sr. HR Officer',
            link: 'https://www.linkedin.com/in/sunita-maharjan-986a21143/',
            text: '"Amrit struck me as a motivated employee with a keen interest in networking and system security. He enjoys being in the company of people who have a clear career path and is always willing to help those who wish to learn new skills. The recommendation for employment with us is enticing. I believe he will be an excellent addition to any organization where he is hired."'
        },
        {
            name: 'Sandip Aryal',
            title: 'Certified SOC Analyst | SIEM Engineer',
            link: 'https://www.linkedin.com/in/networkingsandiparyal/',
            text: '"I rarely come across real talents who stand out like Amrit. I had the pleasure of working with Amrit for one years at the Networking Nepal, collaborating on several project teams. Amrit\'s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Amrit made sure everyone left with a smile. Amrit would be an asset to any company. As a team member , Amrit earns my highest recommendation."'
        }
    ],
    contact: {
        email: 'grepamrit@gmail.com',
        linkedin: 'https://www.linkedin.com/in/grepamrit/'
    }
};
