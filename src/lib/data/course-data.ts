// Course Data Structure for Microsoft Intune Training Platform (MD-102)

export interface TrainerNote {
    talkingPoints: string[];
    realExamples: string[];
    questionsToAsk: string[];
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    duration: string;
    content: {
        explanation: string[];
        keyPoints: string[];
        architecture?: {
            title: string;
            steps: {
                step: number;
                title: string;
                description: string;
                icon?: string;
            }[];
        };
        whyItMatters: string;
        commonMistakes: string[];
        interviewTips: string[];
        examTips: string[];
    };
    trainerNotes: TrainerNote;
    completed?: boolean;
}

export interface Module {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    lessons: Lesson[];
    duration: string;
}

export interface CourseData {
    title: string;
    subtitle: string;
    trainer: {
        name: string;
        title: string;
        email: string;
        linkedin?: string;
    };
    duration: string;
    prerequisites: string[];
    whatYouWillLearn: string[];
    targetAudience: string[];
    modules: Module[];
}

export const courseData: CourseData = {
    title: "Microsoft Intune",
    subtitle: "Endpoint Administration & Modern Device Management",
    trainer: {
        name: "Maheshwar",
        title: "Infrastructure & Cloud Administrator (HCLTech)",
        email: "maheshwarkumar5629@gmail.com",
        linkedin: "https://linkedin.com/in/trainer",
    },
    duration: "12-16 hours",
    prerequisites: [
        "Basic understanding of Microsoft 365 and Azure AD",
        "Familiarity with Windows 10/11 administration",
        "Understanding of networking fundamentals (DNS, DHCP, TCP/IP)",
        "Basic experience with Group Policy and Active Directory",
    ],
    whatYouWillLearn: [
        "Deploy and manage devices using Microsoft Intune and modern management techniques",
        "Configure Windows Autopilot for zero-touch device provisioning",
        "Create and manage device configuration profiles and compliance policies",
        "Deploy and manage applications including Win32 apps and Microsoft Store apps",
        "Implement endpoint security baselines, antivirus, and disk encryption",
        "Configure Windows Update rings, feature updates, and Autopatch",
        "Integrate compliance policies with Conditional Access for Zero Trust",
        "Monitor and troubleshoot devices using Endpoint Analytics and Intune reports",
    ],
    targetAudience: [
        "IT Administrators managing Windows endpoints",
        "Endpoint Management Engineers",
        "Microsoft 365 Administrators",
        "Desktop Support moving to modern management",
        "Professionals preparing for MD-102 certification",
    ],
    modules: [
        {
            id: "module-1",
            title: "Introduction to Endpoint Management",
            slug: "introduction",
            description: "Understanding modern device management, Intune architecture, and the shift from traditional to cloud-based management",
            icon: "Map",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-1-1", title: "The Shift to Modern Management", slug: "modern-management", duration: "20 mins",
                    content: {
                        explanation: ["Traditional device management relied on on-premises tools like Active Directory Group Policy, SCCM (System Center Configuration Manager), and imaging solutions. Devices had to be on the corporate network to receive policies, and provisioning required manual imaging and domain joining.", "Modern management shifts to cloud-based solutions where devices are managed from anywhere via the internet. Microsoft Intune, as part of Microsoft Endpoint Manager, enables organizations to manage devices without requiring VPN or on-premises infrastructure. Devices can be Azure AD joined or enrolled directly from the cloud.", "The co-management model allows organizations to transition gradually by using both SCCM and Intune simultaneously, migrating workloads one at a time from SCCM to Intune."],
                        keyPoints: ["Traditional management: GPO, SCCM, on-premises imaging, domain join", "Modern management: cloud-based, internet-managed, no VPN required", "Microsoft Intune is the cloud-based endpoint management solution", "Co-management enables gradual transition from SCCM to Intune", "Azure AD Join replaces traditional domain join for cloud-managed devices", "Modern management supports BYOD and remote work scenarios natively"],
                        architecture: { title: "Traditional vs Modern Management", steps: [{ step: 1, title: "Traditional", description: "On-prem AD, GPO, SCCM, imaging", icon: "Server" }, { step: 2, title: "Co-Management", description: "SCCM + Intune side by side", icon: "GitBranch" }, { step: 3, title: "Modern", description: "Cloud-only: Intune, Autopilot, AAD", icon: "Cloud" }, { step: 4, title: "Zero Touch", description: "Autopilot + Intune = no imaging", icon: "Zap" }] },
                        whyItMatters: "With 70% of the workforce now working remotely or in hybrid models, traditional on-premises management tools cannot effectively manage devices outside the corporate network. Modern management with Intune enables consistent policy enforcement regardless of device location.",
                        commonMistakes: ["Trying to replicate every Group Policy setting in Intune instead of rethinking the approach", "Not planning the co-management transition and trying to move everything at once", "Ignoring BYOD scenarios when planning modern management strategy", "Assuming modern management means abandoning all on-premises infrastructure immediately"],
                        interviewTips: ["Explain the difference between traditional and modern device management", "Discuss co-management and workload migration strategy", "Describe real scenarios where modern management solved remote work challenges"],
                        examTips: ["Understand the differences between Azure AD Join, Hybrid Azure AD Join, and Azure AD Registered", "Know co-management workloads and how they transition from SCCM to Intune", "Be familiar with the benefits of modern management over traditional approaches"],
                    },
                    trainerNotes: { talkingPoints: ["Start with pain points of traditional management for remote workers", "Show the Intune admin center portal", "Explain co-management workload slider"], realExamples: ["Enterprise reduced device provisioning time from 4 hours to 30 minutes using Autopilot instead of imaging", "Organization enabled 10,000 remote workers in 2 weeks using Intune cloud enrollment"], questionsToAsk: ["How does your organization currently manage devices?", "What percentage of your workforce is remote or hybrid?", "Are you using SCCM, Intune, or both today?"] },
                },
                {
                    id: "lesson-1-2", title: "Microsoft Intune Architecture", slug: "intune-architecture", duration: "25 mins",
                    content: {
                        explanation: ["Microsoft Intune is a cloud-based unified endpoint management (UEM) service that is part of Microsoft Endpoint Manager. It manages mobile devices (iOS, Android), desktop devices (Windows, macOS), and applications across the organization. Intune integrates with Azure Active Directory for identity, Microsoft Defender for Endpoint for security, and Microsoft 365 apps for productivity.", "The Intune architecture consists of several key components: the Intune service (cloud), the Intune admin center (portal), managed devices (enrolled endpoints), and connectors (for on-premises integration). Communication between devices and Intune happens over HTTPS using the MDM (Mobile Device Management) and MAM (Mobile Application Management) protocols.", "Intune supports multiple enrollment types: MDM enrollment for full device management, MAM-only enrollment for app-level management without device enrollment (ideal for BYOD), and Windows Autopilot for zero-touch provisioning of new devices."],
                        keyPoints: ["Intune is a cloud-based UEM service in Microsoft Endpoint Manager", "Manages Windows, macOS, iOS, Android, and Linux devices", "MDM enrollment: full device management and control", "MAM-only enrollment: app-level protection without device enrollment", "Integrates with Azure AD, Defender for Endpoint, and M365 apps", "Communication via HTTPS - no VPN or on-prem infrastructure needed"],
                        architecture: { title: "Intune Architecture Overview", steps: [{ step: 1, title: "Admin Portal", description: "Intune admin center for configuration", icon: "Monitor" }, { step: 2, title: "Intune Service", description: "Cloud service processes policies", icon: "Cloud" }, { step: 3, title: "Azure AD", description: "Identity and device registration", icon: "Users" }, { step: 4, title: "Managed Devices", description: "Endpoints receive policies via HTTPS", icon: "Smartphone" }, { step: 5, title: "Defender", description: "Security integration and compliance", icon: "Shield" }] },
                        whyItMatters: "Understanding Intune architecture is essential for proper planning and troubleshooting. Knowing how devices communicate with the service, how policies are delivered, and how identity integration works prevents misconfiguration and ensures reliable device management.",
                        commonMistakes: ["Confusing MDM and MAM enrollment types and their capabilities", "Not understanding that Intune requires Azure AD - it doesn't work with on-premises AD alone", "Overlooking network requirements for device-to-service communication", "Not planning for the different management capabilities across platforms (Windows vs iOS vs Android)"],
                        interviewTips: ["Describe the Intune architecture and how devices communicate with the service", "Explain the difference between MDM and MAM enrollment", "Discuss platform-specific management capabilities and limitations"],
                        examTips: ["Know the Intune architecture components and their roles", "Understand MDM vs MAM enrollment and when to use each", "Be familiar with platform support and feature differences across OS types"],
                    },
                    trainerNotes: { talkingPoints: ["Draw the architecture diagram showing cloud components", "Demo the Intune admin center navigation", "Explain MDM vs MAM with BYOD scenario"], realExamples: ["Healthcare organization uses MAM-only for doctor BYOD phones while MDM-enrolling corporate tablets", "Retail chain manages 5,000 Windows devices and 2,000 Android devices from single Intune tenant"], questionsToAsk: ["How many devices does your organization manage?", "Do you support BYOD or only corporate devices?", "Which platforms do you need to manage?"] },
                },
                {
                    id: "lesson-1-3", title: "Windows Autopilot Overview", slug: "autopilot-overview", duration: "20 mins",
                    content: {
                        explanation: ["Windows Autopilot is a collection of technologies that simplify Windows device provisioning. Instead of creating and maintaining custom images, Autopilot uses the OEM-installed Windows image and transforms it into a business-ready state during the Out-of-Box Experience (OOBE).", "The Autopilot process works by registering device hardware IDs with the Autopilot service. When a user powers on a new or reset device and connects to the internet, the device checks in with Autopilot, receives its deployment profile, and automatically configures itself - joining Azure AD, enrolling in Intune, installing apps, and applying policies.", "Autopilot deployment profiles define the OOBE experience: user-driven (user signs in during setup), self-deploying (no user interaction needed - for kiosks/shared devices), and pre-provisioned (IT completes device prep, user completes remaining steps)."],
                        keyPoints: ["Autopilot eliminates custom imaging - uses OEM Windows installation", "Devices registered via hardware hash (CSV upload or OEM registration)", "User-driven: user completes OOBE with Azure AD sign-in", "Self-deploying: zero user interaction for kiosks and shared devices", "Pre-provisioned: IT prepares device, user completes later (white glove)", "Works with new devices and device reset/repurpose scenarios"],
                        architecture: { title: "Autopilot Provisioning Flow", steps: [{ step: 1, title: "Register", description: "Hardware hash uploaded to Autopilot", icon: "Upload" }, { step: 2, title: "Profile", description: "Deployment profile assigned to device", icon: "Settings" }, { step: 3, title: "OOBE", description: "User powers on, connects to internet", icon: "Play" }, { step: 4, title: "Configure", description: "Azure AD join, Intune enroll, apps install", icon: "Download" }] },
                        whyItMatters: "Autopilot reduces device provisioning from hours to minutes, eliminates the need for imaging infrastructure, and enables direct-to-user shipping. Organizations save an average of 2-3 hours per device and can provision devices anywhere in the world.",
                        commonMistakes: ["Not registering hardware hashes before shipping devices to users", "Using self-deploying mode when user-driven is more appropriate", "Not testing Autopilot profiles with different network conditions", "Forgetting to assign an Enrollment Status Page (ESP) for app installation tracking"],
                        interviewTips: ["Explain the Autopilot deployment modes and when to use each", "Discuss how Autopilot eliminates the need for traditional imaging", "Describe the hardware hash registration process"],
                        examTips: ["Know all three Autopilot deployment modes and their requirements", "Understand hardware hash registration methods", "Be familiar with the Enrollment Status Page (ESP) configuration"],
                    },
                    trainerNotes: { talkingPoints: ["Demo Autopilot device registration and profile assignment", "Show a user-driven deployment walkthrough", "Compare imaging time vs Autopilot time"], realExamples: ["Global company ships laptops directly from Dell to employees worldwide - Autopilot configures everything on first boot", "School district provisions 15,000 student devices using self-deploying Autopilot during summer break"], questionsToAsk: ["How do you currently provision new devices?", "Do you ship devices directly to remote employees?", "Have you used Autopilot before?"] },
                },
                {
                    id: "lesson-1-4", title: "MD-102 Exam Overview & Study Strategy", slug: "exam-overview", duration: "15 mins",
                    content: {
                        explanation: ["The MD-102: Endpoint Administrator certification validates your ability to deploy, configure, secure, manage, and monitor devices and client applications in a Microsoft 365 environment. It replaces the older MD-100 and MD-101 exams.", "The exam covers four domains: Deploy Windows client (25-30%), Manage identity and compliance (15-20%), Manage, maintain, and protect devices (30-35%), and Manage applications (10-15%). The passing score is 700 out of 1000.", "This training is structured to cover all four exam domains comprehensively. Each lesson includes MD-102-specific exam tips to help you focus on testable scenarios."],
                        keyPoints: ["MD-102 validates endpoint administration and modern management skills", "Four domains: Deploy Windows, Identity/Compliance, Device Management, Applications", "Device management has the highest weight at 30-35%", "Passing score: 700/1000", "Replaces older MD-100 and MD-101 certifications", "Hands-on experience with Intune admin center is essential"],
                        whyItMatters: "The MD-102 certification demonstrates to employers that you can effectively manage modern endpoints. With organizations rapidly adopting cloud-based device management, certified endpoint administrators are in high demand across all industries.",
                        commonMistakes: ["Studying only theory without hands-on lab practice in Intune", "Focusing equally on all domains instead of prioritizing device management (30-35%)", "Neglecting Windows Autopilot and Autopatch topics which are heavily tested", "Not practicing with Microsoft Learn sandbox environments"],
                        interviewTips: ["Mention your MD-102 certification as proof of modern management skills", "Discuss specific Intune scenarios you practiced during exam preparation", "Highlight experience with Autopilot and modern provisioning"],
                        examTips: ["Prioritize device management topics - they carry the highest weight", "Practice Autopilot deployment scenarios extensively", "Use Microsoft Learn free sandbox labs for hands-on practice", "Focus on Intune admin center navigation and policy configuration workflows"],
                    },
                    trainerNotes: { talkingPoints: ["Share the official exam skills outline from Microsoft Learn", "Recommend Microsoft Learn paths aligned to each exam domain", "Emphasize hands-on practice over memorization"], realExamples: ["IT admins with MD-102 certification report career advancement within 6 months", "Team that trained for MD-102 together improved their endpoint management practices significantly"], questionsToAsk: ["Are you targeting the MD-102 certification?", "How much hands-on experience do you have with Intune?", "Do you currently manage Windows devices in a cloud environment?"] },
                },
            ],
        },
        {
            id: "module-2", title: "Device Enrollment", slug: "device-enrollment",
            description: "Enrollment methods, Windows Autopilot deployment, BYOD management, and enrollment restrictions",
            icon: "Smartphone", duration: "2 hours",
            lessons: [
                {
                    id: "lesson-2-1", title: "Enrollment Methods & Options", slug: "enrollment-methods", duration: "25 mins",
                    content: {
                        explanation: ["Microsoft Intune supports multiple device enrollment methods to accommodate different scenarios. For Windows devices: Azure AD Join during OOBE, bulk enrollment using provisioning packages, Autopilot enrollment, co-management enrollment with SCCM, and Group Policy-triggered enrollment for hybrid Azure AD joined devices.", "For mobile devices: iOS enrollment uses Apple Business Manager (ABM) with Automated Device Enrollment (ADE) for corporate devices, or Company Portal app for BYOD. Android supports Android Enterprise enrollment modes: Fully Managed, Dedicated (kiosk), Corporate-Owned Work Profile, and Personally-Owned Work Profile.", "Enrollment restrictions allow administrators to control which devices can enroll. Platform restrictions limit enrollment by OS type and version. Device limit restrictions control how many devices each user can enroll. Device type restrictions can block personal devices."],
                        keyPoints: ["Windows: Azure AD Join, Autopilot, bulk enrollment, co-management, GPO", "iOS: Apple Business Manager/ADE for corporate, Company Portal for BYOD", "Android Enterprise: Fully Managed, Dedicated, Corp Work Profile, Personal Work Profile", "Enrollment restrictions control platform, version, and device limits", "Device categories and tags help organize enrolled devices", "Each enrollment method has different management capabilities"],
                        architecture: { title: "Enrollment Decision Flow", steps: [{ step: 1, title: "Ownership", description: "Corporate-owned or BYOD?", icon: "Users" }, { step: 2, title: "Platform", description: "Windows, iOS, Android, macOS?", icon: "Smartphone" }, { step: 3, title: "Scenario", description: "New device, existing, shared, kiosk?", icon: "Settings" }, { step: 4, title: "Method", description: "Select appropriate enrollment type", icon: "CheckCircle" }] },
                        whyItMatters: "Choosing the correct enrollment method determines the level of management control, user experience, and ongoing administration overhead. The wrong choice leads to user frustration, security gaps, or excessive management complexity.",
                        commonMistakes: ["Using the same enrollment method for all scenarios (corporate and BYOD)", "Not setting up enrollment restrictions before rolling out to users", "Forgetting to configure Apple Business Manager for iOS corporate devices", "Not considering the Android Enterprise enrollment mode differences"],
                        interviewTips: ["Explain enrollment methods for each platform and when to use each", "Discuss how you handle BYOD vs corporate enrollment differently", "Describe enrollment restriction strategies you have implemented"],
                        examTips: ["Know all enrollment methods per platform and their prerequisites", "Understand enrollment restriction types and their effects", "Know Android Enterprise enrollment modes and their use cases"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through enrollment method selection for common scenarios", "Demo enrollment restrictions configuration", "Show Company Portal enrollment experience"], realExamples: ["Hospital uses Dedicated mode for shared clinical tablets while Work Profile for staff BYOD phones", "Enterprise set device limit to 5 per user to prevent excessive enrollments"], questionsToAsk: ["What types of devices does your organization need to enroll?", "Do you support BYOD or only corporate devices?"] },
                },
                {
                    id: "lesson-2-2", title: "Windows Autopilot Deployment", slug: "autopilot-deployment", duration: "30 mins",
                    content: {
                        explanation: ["Windows Autopilot deployment begins with hardware hash registration. Hardware hashes can be collected from existing devices using a PowerShell script (Get-WindowsAutopilotInfo), uploaded via CSV to the Intune admin center, or registered automatically by OEM partners (Dell, HP, Lenovo) at purchase time.", "Deployment profiles control the OOBE experience. User-driven deployment requires the user to sign in with their Azure AD credentials during OOBE. Self-deploying mode requires no user interaction and is ideal for shared devices and kiosks. Pre-provisioned deployment (formerly White Glove) allows IT to complete network-intensive setup before the user receives the device.", "The Enrollment Status Page (ESP) tracks the progress of device setup, showing users which apps and policies are being installed. ESP can block device use until critical apps are installed, ensuring the device is fully configured before the user starts working."],
                        keyPoints: ["Hardware hash collection: PowerShell script, CSV upload, or OEM registration", "User-driven: user signs in during OOBE, most common deployment mode", "Self-deploying: no user interaction, requires TPM 2.0, for kiosks/shared devices", "Pre-provisioned: IT prepares device first, user completes setup later", "Enrollment Status Page (ESP) tracks and controls setup progress", "Autopilot reset: wipe and re-enroll device without re-registering hash"],
                        architecture: { title: "Autopilot User-Driven Flow", steps: [{ step: 1, title: "Power On", description: "User turns on new/reset device", icon: "Play" }, { step: 2, title: "Connect WiFi", description: "Device connects to internet", icon: "Wifi" }, { step: 3, title: "Sign In", description: "User enters Azure AD credentials", icon: "LogIn" }, { step: 4, title: "ESP", description: "Apps and policies install with progress", icon: "Download" }, { step: 5, title: "Desktop", description: "Device ready for use", icon: "Monitor" }] },
                        whyItMatters: "Autopilot transforms device provisioning from a labor-intensive IT task to a user-self-service experience. Organizations deploying Autopilot report 80% reduction in provisioning costs and enable direct-to-user device shipping worldwide.",
                        commonMistakes: ["Not testing Autopilot profiles before large-scale deployment", "Forgetting to configure ESP, causing users to access unconfigured devices", "Using self-deploying mode without TPM 2.0 hardware support", "Not creating dynamic device groups for Autopilot profile assignment"],
                        interviewTips: ["Walk through the complete Autopilot deployment process", "Discuss ESP configuration and why it matters", "Explain how you handle Autopilot at scale with OEM registration"],
                        examTips: ["Know the requirements for each Autopilot deployment mode", "Understand ESP configuration options (block vs non-blocking)", "Know how to troubleshoot Autopilot enrollment failures", "Understand Autopilot reset vs fresh start vs wipe"],
                    },
                    trainerNotes: { talkingPoints: ["Demo complete Autopilot user-driven deployment", "Show ESP configuration and customization", "Demonstrate hardware hash collection and upload"], realExamples: ["Company ships 500 laptops monthly directly from Dell with Autopilot - zero IT touch", "University pre-provisions faculty laptops using White Glove before semester start"], questionsToAsk: ["Have you deployed Autopilot in your environment?", "How do you currently handle new device setup?"] },
                },
                {
                    id: "lesson-2-3", title: "BYOD & Mobile Enrollment", slug: "byod-enrollment", duration: "20 mins",
                    content: {
                        explanation: ["BYOD (Bring Your Own Device) enrollment requires a different approach than corporate device enrollment. For BYOD, organizations should use MAM-only (Mobile Application Management without enrollment) or work profile enrollment to protect corporate data without controlling the entire personal device.", "On iOS BYOD devices, users install the Company Portal app and enroll their device, which creates a management profile. On Android, the Personally-Owned Work Profile creates a separate container for work apps and data. MAM-only policies can protect apps like Outlook without enrolling the device at all.", "App protection policies (MAM policies) are the key to BYOD security. They control data leakage between work and personal apps, require PIN/biometric access to work apps, and can selectively wipe corporate data without affecting personal data."],
                        keyPoints: ["BYOD uses MAM-only or work profile enrollment - not full MDM", "iOS BYOD: Company Portal enrollment or MAM-only for app protection", "Android BYOD: Personally-Owned Work Profile separates work/personal", "MAM policies protect corporate data without device enrollment", "App protection policies prevent data leakage between work and personal", "Selective wipe removes only corporate data from personal devices"],
                        whyItMatters: "73% of organizations support BYOD. Without proper BYOD enrollment and protection, organizations face either security risks (no protection) or user resistance (overly invasive MDM on personal devices). MAM-only strikes the right balance.",
                        commonMistakes: ["Requiring full MDM enrollment for BYOD devices, causing user pushback", "Not implementing MAM policies for BYOD apps like Outlook and Teams", "Forgetting to configure selective wipe for departing BYOD users", "Not testing the BYOD enrollment experience from the user perspective"],
                        interviewTips: ["Explain your BYOD strategy and how you balance security with privacy", "Discuss MAM-only vs MDM enrollment for personal devices", "Describe data protection policies for BYOD scenarios"],
                        examTips: ["Know the difference between MAM-only and MDM enrollment", "Understand app protection policy settings and capabilities", "Know how selective wipe works vs full wipe on BYOD devices"],
                    },
                    trainerNotes: { talkingPoints: ["Demo BYOD enrollment on iOS and Android", "Show MAM policy creation for Outlook data protection", "Demonstrate selective wipe of corporate data"], realExamples: ["Law firm uses MAM-only for attorney personal phones - protects client data without controlling the device", "Consulting firm reduced BYOD help desk tickets by 60% by simplifying enrollment to MAM-only"], questionsToAsk: ["Does your organization support BYOD?", "What apps do BYOD users need access to?"] },
                },
                {
                    id: "lesson-2-4", title: "Device Compliance Policies", slug: "compliance-policies", duration: "25 mins",
                    content: {
                        explanation: ["Device compliance policies define the security requirements that devices must meet to be considered compliant. Common compliance settings include: minimum OS version, password requirements, encryption enabled, device not jailbroken/rooted, threat level from Defender for Endpoint, and firewall status.", "Compliance policies work with Conditional Access to enforce Zero Trust security. When a device doesn't meet compliance requirements, it's marked as non-compliant. Conditional Access policies can then block non-compliant devices from accessing corporate resources like Exchange Online, SharePoint, and Teams.", "Compliance policy actions for non-compliance include: marking as non-compliant (immediate or after grace period), sending email notification to user, remotely locking the device, and retiring the device. Grace periods give users time to remediate before losing access."],
                        keyPoints: ["Compliance policies define minimum security requirements for devices", "Settings: OS version, encryption, password, jailbreak detection, threat level", "Non-compliant devices can be blocked via Conditional Access", "Actions for non-compliance: notify, mark, lock, retire", "Grace periods allow time for remediation before blocking access", "Separate compliance policies needed for each platform"],
                        architecture: { title: "Compliance + Conditional Access Flow", steps: [{ step: 1, title: "Policy", description: "Define compliance requirements", icon: "ClipboardCheck" }, { step: 2, title: "Evaluate", description: "Devices checked against policy", icon: "Search" }, { step: 3, title: "Status", description: "Compliant or Non-compliant", icon: "CheckCircle" }, { step: 4, title: "Access", description: "CA grants or blocks resource access", icon: "Lock" }] },
                        whyItMatters: "Compliance policies are the foundation of Zero Trust security for endpoints. Without compliance enforcement, devices with outdated OS, no encryption, or active threats can access sensitive corporate data, creating significant security risks.",
                        commonMistakes: ["Creating compliance policies without corresponding Conditional Access policies", "Setting compliance requirements too strict, causing mass non-compliance", "Not configuring grace periods, immediately blocking users", "Forgetting to create platform-specific compliance policies"],
                        interviewTips: ["Explain the relationship between compliance policies and Conditional Access", "Discuss how you balance security requirements with user productivity", "Describe your approach to rolling out compliance policies gradually"],
                        examTips: ["Know compliance policy settings per platform", "Understand actions for non-compliance and grace periods", "Know how compliance integrates with Conditional Access", "Understand the compliance evaluation cycle and device states"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating a Windows compliance policy", "Show the compliance + Conditional Access integration", "Walk through non-compliance remediation workflow"], realExamples: ["Financial company blocks unencrypted devices from accessing email - compliance + CA policy", "Manufacturer uses 72-hour grace period for OS updates before blocking access"], questionsToAsk: ["What security requirements do your devices need to meet?", "Are you using Conditional Access today?"] },
                },
            ],
        },
        {
            id: "module-3", title: "Device Configuration", slug: "device-configuration",
            description: "Configuration profiles, settings catalog, administrative templates, and endpoint security policies",
            icon: "Settings", duration: "2 hours",
            lessons: [
                {
                    id: "lesson-3-1", title: "Configuration Profiles", slug: "configuration-profiles", duration: "25 mins",
                    content: {
                        explanation: ["Configuration profiles in Intune deliver device settings similar to Group Policy but through the cloud. Profile types include device restrictions, Wi-Fi, VPN, email, certificates, and custom profiles. Each profile type targets specific platform capabilities.", "Device restriction profiles control features like camera, Bluetooth, screen capture, app store access, and password requirements. Wi-Fi profiles push wireless network configurations to devices automatically. VPN profiles configure always-on VPN or per-app VPN connections.", "Profiles are assigned to user groups or device groups in Azure AD. Assignment filters can further refine targeting based on device properties like manufacturer, model, or OS version. Conflict resolution follows defined precedence when multiple profiles target the same setting."],
                        keyPoints: ["Configuration profiles replace Group Policy for cloud-managed devices", "Profile types: device restrictions, Wi-Fi, VPN, email, certificates, custom", "Assigned to Azure AD user groups or device groups", "Assignment filters refine targeting by device properties", "Conflict resolution: more restrictive setting wins for security settings", "Platform-specific profiles required for each OS"],
                        architecture: { title: "Profile Delivery Flow", steps: [{ step: 1, title: "Create", description: "Admin creates configuration profile", icon: "Edit" }, { step: 2, title: "Assign", description: "Target to user/device groups", icon: "Users" }, { step: 3, title: "Deliver", description: "Intune pushes to enrolled devices", icon: "Send" }, { step: 4, title: "Apply", description: "Device applies configuration", icon: "Settings" }] },
                        whyItMatters: "Configuration profiles ensure consistent device configuration across the organization without requiring network connectivity to an on-premises domain controller. This is essential for remote and hybrid workers who need the same security and productivity settings regardless of location.",
                        commonMistakes: ["Creating too many profiles instead of consolidating settings", "Not using assignment filters to target specific device models", "Assigning profiles to 'All Users' or 'All Devices' without proper scoping", "Not testing profiles on a pilot group before broad deployment"],
                        interviewTips: ["Explain how configuration profiles compare to Group Policy", "Discuss profile conflict resolution strategies", "Describe your approach to organizing and naming profiles"],
                        examTips: ["Know the available configuration profile types per platform", "Understand assignment and assignment filter concepts", "Know how profile conflicts are resolved", "Be familiar with device restriction profile settings"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating a device restriction profile", "Show assignment filters in action", "Compare GPO vs Intune configuration profile capabilities"], realExamples: ["Enterprise manages 300+ Group Policy settings through 15 Intune configuration profiles", "Retail chain uses assignment filters to apply kiosk profiles only to specific Surface devices"], questionsToAsk: ["How many Group Policy settings does your organization use?", "Are you familiar with Azure AD groups for targeting?"] },
                },
                {
                    id: "lesson-3-2", title: "Settings Catalog", slug: "settings-catalog", duration: "25 mins",
                    content: {
                        explanation: ["The Settings Catalog is the modern way to configure device settings in Intune. It provides a flat list of all available settings that can be searched and filtered, replacing the need to know which profile type contains a specific setting. The catalog contains thousands of settings for Windows, macOS, and iOS.", "Unlike traditional configuration profiles that group settings by category, the Settings Catalog allows you to pick individual settings from across all categories into a single profile. This provides maximum flexibility and reduces the number of profiles needed.", "The Settings Catalog also surfaces settings that aren't available in traditional profile templates, including newer CSP (Configuration Service Provider) settings and ADMX-backed policies. It supports importing custom ADMX templates for third-party application settings."],
                        keyPoints: ["Settings Catalog: flat searchable list of all device settings", "Combines settings from multiple categories into one profile", "Contains more settings than traditional profile templates", "Supports ADMX-backed policies (Group Policy equivalent)", "Available for Windows, macOS, and iOS platforms", "Recommended approach for new configuration profiles"],
                        whyItMatters: "The Settings Catalog simplifies configuration management by providing a single interface for all settings. Administrators no longer need to know which profile type contains a specific setting, reducing configuration time and errors.",
                        commonMistakes: ["Still using traditional profile templates when Settings Catalog has the setting", "Not searching the catalog thoroughly before creating custom OMA-URI profiles", "Creating separate profiles per setting instead of combining in one catalog profile", "Not understanding that Settings Catalog profiles can coexist with traditional profiles"],
                        interviewTips: ["Explain the advantages of Settings Catalog over traditional profiles", "Discuss how you migrate existing profiles to Settings Catalog", "Describe your experience with ADMX-backed policies in Intune"],
                        examTips: ["Know the benefits of Settings Catalog vs traditional profile types", "Understand ADMX template ingestion for third-party apps", "Be familiar with searching and filtering settings in the catalog"],
                    },
                    trainerNotes: { talkingPoints: ["Demo Settings Catalog search and profile creation", "Show how to find ADMX-backed Group Policy equivalents", "Compare traditional profiles vs Settings Catalog side by side"], realExamples: ["Admin consolidated 12 traditional profiles into 3 Settings Catalog profiles", "Organization imported Chrome ADMX templates to manage browser settings via Intune"], questionsToAsk: ["Have you used the Settings Catalog before?", "Are there Group Policy settings you're trying to replicate in Intune?"] },
                },
                {
                    id: "lesson-3-3", title: "Administrative Templates (ADMX)", slug: "admin-templates", duration: "25 mins",
                    content: {
                        explanation: ["Administrative Templates in Intune provide Group Policy-like configuration through ADMX-backed policies. Built-in templates cover Microsoft Edge, Microsoft Office, OneDrive, and Windows components. These deliver the same settings as Group Policy ADMX templates but through the Intune cloud service.", "Custom ADMX templates can be imported for third-party applications like Google Chrome, Adobe products, and line-of-business applications. The import process involves uploading the ADMX and ADML files, after which the settings appear in the Settings Catalog for configuration.", "ADMX-backed policies are delivered through the Policy CSP on Windows devices. They support both machine-scope and user-scope settings. When migrating from Group Policy, administrators should map existing GPO settings to their ADMX equivalents in Intune."],
                        keyPoints: ["Built-in ADMX templates: Edge, Office, OneDrive, Windows components", "Custom ADMX import for third-party app configuration", "Delivered via Policy CSP on Windows devices", "Support machine-scope and user-scope settings", "Available in both Administrative Templates profiles and Settings Catalog", "Group Policy Analytics helps identify which GPOs can migrate to Intune"],
                        whyItMatters: "Administrative Templates bridge the gap between traditional Group Policy and modern Intune management. They allow organizations to maintain the same level of application configuration control while moving to cloud-based management.",
                        commonMistakes: ["Not using Group Policy Analytics to plan GPO migration to Intune", "Trying to replicate every GPO setting instead of evaluating necessity", "Forgetting that ADMX settings require supported Windows versions", "Not testing ADMX policy deployment before broad rollout"],
                        interviewTips: ["Explain how ADMX templates work in Intune vs traditional Group Policy", "Discuss your Group Policy to Intune migration experience", "Describe how you handle third-party application settings in Intune"],
                        examTips: ["Know how to import custom ADMX templates", "Understand the relationship between ADMX policies and the Policy CSP", "Be familiar with Group Policy Analytics and migration planning"],
                    },
                    trainerNotes: { talkingPoints: ["Demo Administrative Templates for Edge browser configuration", "Show custom ADMX import process", "Walk through Group Policy Analytics report"], realExamples: ["Organization migrated 85% of their GPO settings to Intune using Admin Templates", "Company imported Chrome ADMX to enforce browser security settings via Intune"], questionsToAsk: ["How many Group Policies does your organization have?", "Which applications need ADMX-based configuration?"] },
                },
                {
                    id: "lesson-3-4", title: "Custom OMA-URI & PowerShell Scripts", slug: "custom-settings", duration: "20 mins",
                    content: {
                        explanation: ["Custom OMA-URI (Open Mobile Alliance Uniform Resource Identifier) profiles allow configuration of Windows CSP settings not available in standard Intune profiles or the Settings Catalog. Each OMA-URI setting requires the CSP path, data type, and value.", "PowerShell scripts in Intune extend configuration capabilities beyond what CSPs offer. Scripts can configure registry settings, install software, modify system settings, and perform complex configurations. Scripts run in the SYSTEM context by default but can be configured to run in the user context.", "Remediation scripts (Proactive remediations) consist of a detection script and a remediation script pair. The detection script checks for a condition, and if found, the remediation script fixes it. This enables ongoing compliance for settings that may drift over time."],
                        keyPoints: ["Custom OMA-URI for CSP settings not in standard profiles", "OMA-URI requires: CSP path, data type (String, Integer, Boolean), value", "PowerShell scripts run in SYSTEM or user context", "Scripts execute once by default or can be set to run repeatedly", "Proactive remediations: detection + remediation script pairs", "Platform scripts for macOS (shell) and Linux (bash) also supported"],
                        whyItMatters: "Custom OMA-URI and PowerShell scripts fill gaps where standard profiles don't cover specific requirements. Proactive remediations ensure ongoing compliance by automatically detecting and fixing configuration drift.",
                        commonMistakes: ["Using custom OMA-URI when the setting exists in Settings Catalog", "Not testing PowerShell scripts in SYSTEM context before deployment", "Setting scripts to run only once when the setting can be changed by users", "Not using remediation scripts for settings that drift over time"],
                        interviewTips: ["Explain when custom OMA-URI is needed vs standard profiles", "Discuss PowerShell script deployment challenges and solutions", "Describe your experience with proactive remediations"],
                        examTips: ["Know when to use custom OMA-URI vs Settings Catalog", "Understand PowerShell script execution context (SYSTEM vs user)", "Be familiar with proactive remediation script requirements"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating a custom OMA-URI profile", "Show PowerShell script deployment and monitoring", "Walk through proactive remediation creation"], realExamples: ["Custom OMA-URI used to configure BitLocker silent encryption settings", "Proactive remediation script detects and fixes incorrect proxy settings on 5,000 devices daily"], questionsToAsk: ["Do you have configurations that standard profiles don't support?", "Are you comfortable with PowerShell scripting?"] },
                },
            ],
        },
        {
            id: "module-4", title: "Application Management", slug: "application-management",
            description: "App deployment, Win32 apps, Microsoft Store integration, and Mobile Application Management",
            icon: "Laptop", duration: "2 hours",
            lessons: [
                {
                    id: "lesson-4-1", title: "App Deployment Methods", slug: "app-deployment", duration: "25 mins",
                    content: {
                        explanation: ["Microsoft Intune supports multiple application types for deployment: Microsoft 365 Apps (Office suite), Microsoft Store apps (new Microsoft Store integration), Win32 apps (.intunewin packages), Line-of-Business apps (MSI, APPX), web links, and built-in apps.", "App assignments define how apps are delivered: Required (automatically installed), Available (user chooses to install from Company Portal), and Uninstall (removes the app). Assignments target Azure AD user or device groups with optional filters.", "The Company Portal app serves as the self-service app catalog where users can browse and install available apps. It also shows device compliance status and provides IT support contact information."],
                        keyPoints: ["App types: M365 Apps, Store apps, Win32, LOB (MSI/APPX), web links", "Assignment types: Required (auto-install), Available (self-service), Uninstall", "Company Portal: self-service app catalog for users", "Assignment targets: Azure AD user/device groups with filters", "App supersedence: replace older app versions automatically", "App dependencies: install prerequisite apps before the main app"],
                        architecture: { title: "App Deployment Flow", steps: [{ step: 1, title: "Package", description: "Prepare app package (Win32, MSI, etc.)", icon: "Package" }, { step: 2, title: "Upload", description: "Upload to Intune and configure", icon: "Upload" }, { step: 3, title: "Assign", description: "Target groups with install type", icon: "Users" }, { step: 4, title: "Deploy", description: "Intune delivers to devices", icon: "Download" }, { step: 5, title: "Monitor", description: "Track installation status", icon: "BarChart3" }] },
                        whyItMatters: "Application deployment is one of the most critical IT functions. Users need their apps working on day one. Intune app deployment ensures consistent, automated app delivery without manual IT intervention, supporting both on-campus and remote workers.",
                        commonMistakes: ["Using LOB app type for complex installers instead of Win32 (which supports dependencies)", "Setting all apps as Required when Available would reduce bandwidth", "Not configuring app supersedence for version updates", "Forgetting to test app installation on different Windows versions"],
                        interviewTips: ["Explain the different app types and when to use each", "Discuss app deployment strategies for large-scale rollouts", "Describe how you handle app versioning and updates"],
                        examTips: ["Know all app types and their capabilities", "Understand Required vs Available vs Uninstall assignments", "Know Win32 app packaging and detection rules", "Understand app supersedence and dependency concepts"],
                    },
                    trainerNotes: { talkingPoints: ["Demo deploying a Microsoft 365 Apps suite", "Show Company Portal user experience", "Walk through app assignment and monitoring"], realExamples: ["Company deploys 25 apps as Required and 50 as Available in Company Portal", "University uses app groups to deploy different app sets to faculty vs students"], questionsToAsk: ["How many apps does your organization need to deploy?", "Do you use a self-service app catalog today?"] },
                },
                {
                    id: "lesson-4-2", title: "Win32 App Management", slug: "win32-apps", duration: "30 mins",
                    content: {
                        explanation: ["Win32 app management in Intune handles traditional Windows desktop applications (EXE, MSI, and script-based installers). Apps must be packaged into the .intunewin format using the Microsoft Win32 Content Prep Tool before upload.", "Detection rules determine whether an app is already installed. Types include: MSI product code (automatic for MSI), file detection (check for a specific file/folder), and registry detection (check for a registry key/value). Accurate detection rules prevent unnecessary reinstallation.", "Win32 apps support advanced features: requirement rules (OS version, disk space, CPU architecture), dependencies (install prerequisite apps first), supersedence (replace older versions), and return codes (define success/failure codes for the installer)."],
                        keyPoints: ["Win32 Content Prep Tool converts EXE/MSI to .intunewin format", "Install and uninstall commands: silent installation command lines", "Detection rules: MSI code, file/folder existence, registry key/value", "Requirement rules: OS version, architecture, disk space", "Dependencies: auto-install prerequisites before main app", "Supersedence: auto-upgrade from older app versions"],
                        whyItMatters: "Most enterprise applications are traditional Win32 apps. Without Win32 app support in Intune, organizations cannot fully transition to modern management and must maintain separate app deployment infrastructure.",
                        commonMistakes: ["Using incorrect detection rules causing apps to reinstall repeatedly", "Not specifying uninstall commands, making app removal impossible", "Forgetting to set requirement rules for CPU architecture (x86 vs x64)", "Not testing silent install commands before deploying to production"],
                        interviewTips: ["Walk through the Win32 app packaging and deployment process", "Discuss detection rule strategies for complex applications", "Explain how you handle app dependencies and supersedence"],
                        examTips: ["Know the Win32 Content Prep Tool and .intunewin format", "Understand all detection rule types and when to use each", "Know how dependencies and supersedence work together", "Be familiar with return code configuration"],
                    },
                    trainerNotes: { talkingPoints: ["Demo packaging an app with Win32 Content Prep Tool", "Show detection rule configuration for different scenarios", "Walk through dependency and supersedence configuration"], realExamples: ["IT team packages 100+ Win32 apps for Intune deployment, reducing deployment vendor dependency", "Complex app with 3 dependencies deployed successfully using dependency chains"], questionsToAsk: ["What percentage of your apps are traditional Win32 applications?", "Have you used the Win32 Content Prep Tool?"] },
                },
                {
                    id: "lesson-4-3", title: "App Protection Policies (MAM)", slug: "app-protection", duration: "25 mins",
                    content: {
                        explanation: ["App Protection Policies (also known as MAM policies) protect corporate data at the application level. They work with both enrolled (MDM) and unenrolled (MAM-only) devices. Policies can be applied to Microsoft apps (Outlook, Teams, OneDrive) and apps that integrate with the Intune App SDK.", "Key protection settings include: preventing data transfer to unmanaged apps (copy/paste restrictions), requiring PIN or biometric access, encrypting app data, blocking screenshots, preventing save-to-personal storage, and requiring minimum app/OS versions.", "Conditional launch settings control app access based on conditions: max PIN retry attempts, offline grace period, jailbreak/root detection, minimum OS version, and maximum allowed threat level from Defender for Endpoint."],
                        keyPoints: ["MAM policies protect corporate data at the app level", "Work on both enrolled (MDM) and unenrolled (MAM-only) devices", "Data protection: prevent copy/paste, save-to-personal, screenshots", "Access requirements: PIN, biometric, minimum OS/app version", "Conditional launch: block access based on security conditions", "Selective wipe removes only corporate data from apps"],
                        whyItMatters: "App protection policies are the cornerstone of BYOD security. They ensure corporate data is protected even on unmanaged personal devices, enabling organizations to support BYOD without compromising data security.",
                        commonMistakes: ["Not applying MAM policies to all corporate apps (only protecting Outlook)", "Setting overly restrictive policies that block legitimate workflows", "Not configuring conditional launch for jailbreak/root detection", "Forgetting to test the user experience after applying MAM policies"],
                        interviewTips: ["Explain app protection policy capabilities and use cases", "Discuss your BYOD data protection strategy using MAM", "Describe how you test and validate MAM policies"],
                        examTips: ["Know all app protection policy settings and their effects", "Understand the difference between MAM with and without enrollment", "Know conditional launch settings and their actions", "Understand selective wipe vs full wipe behavior"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating an app protection policy for Outlook", "Show the end-user experience with MAM policies", "Demonstrate selective wipe of corporate data"], realExamples: ["Law firm protects client emails on attorney BYOD phones using MAM-only policies", "Company prevents copy/paste from Teams to personal apps on contractor devices"], questionsToAsk: ["What corporate apps do your users access on personal devices?", "Do you have data leakage prevention requirements?"] },
                },
                {
                    id: "lesson-4-4", title: "Microsoft Store & App Configuration", slug: "store-apps", duration: "20 mins",
                    content: {
                        explanation: ["The new Microsoft Store integration in Intune provides a streamlined way to deploy Store apps. Administrators can search the Microsoft Store directly from the Intune admin center, select apps, and deploy them as Required or Available without packaging.", "App configuration policies deliver configuration settings to managed apps. For iOS devices, app configuration policies use managed app configuration (key-value pairs). For Android Enterprise, managed configurations are defined by the app developer. For Windows, app configuration can be delivered through custom OMA-URI.", "Managed Google Play integration enables Android Enterprise app management. Administrators approve apps in Managed Google Play, which then appear in Intune for assignment. Web apps can be deployed as managed Google Play web links."],
                        keyPoints: ["New Microsoft Store integration: search and deploy directly from Intune", "Store apps don't require packaging - deploy as-is", "App configuration policies: push settings to managed apps", "iOS: Managed app configuration with key-value pairs", "Android: Managed Google Play for app approval and deployment", "Configuration policies reduce manual app setup for users"],
                        whyItMatters: "The new Microsoft Store integration dramatically simplifies app deployment for common applications. App configuration policies ensure users don't need to manually configure apps, improving the day-one experience and reducing help desk calls.",
                        commonMistakes: ["Not using the new Microsoft Store integration and still packaging Store apps manually", "Forgetting to configure app settings that users would otherwise set manually", "Not approving required apps in Managed Google Play before assignment", "Ignoring app configuration capabilities for apps like Outlook and Edge"],
                        interviewTips: ["Discuss your experience with the new Microsoft Store integration", "Explain app configuration policy use cases", "Describe cross-platform app management strategies"],
                        examTips: ["Know the new Microsoft Store integration capabilities", "Understand app configuration policy types per platform", "Be familiar with Managed Google Play integration for Android Enterprise"],
                    },
                    trainerNotes: { talkingPoints: ["Demo deploying an app from the new Microsoft Store", "Show app configuration for Outlook on iOS", "Walk through Managed Google Play app approval"], realExamples: ["Company deploys 30 Microsoft Store apps without any packaging effort", "App configuration policy pre-configures Outlook with Exchange server settings"], questionsToAsk: ["Do you deploy Microsoft Store apps today?", "Are you managing Android devices with Managed Google Play?"] },
                },
            ],
        },
        {
            id: "module-5", title: "Endpoint Security", slug: "endpoint-security",
            description: "Security baselines, antivirus policies, disk encryption, and firewall rules",
            icon: "Shield", duration: "2 hours",
            lessons: [
                {
                    id: "lesson-5-1", title: "Security Baselines", slug: "security-baselines", duration: "25 mins",
                    content: {
                        explanation: ["Security baselines in Intune are pre-configured groups of Windows settings recommended by Microsoft security teams. They provide a known-good security posture based on feedback from Microsoft security engineering teams, product groups, partners, and customers.", "Available baselines include: Windows Security Baseline, Microsoft Defender for Endpoint Baseline, Microsoft Edge Baseline, Microsoft 365 Apps Baseline, and Windows 365 Cloud PC Baseline. Each baseline contains dozens of settings configured to recommended secure values.", "Baselines can be applied as-is or customized. When updating to a new baseline version, Intune provides a comparison showing changes between versions. Organizations should test baselines in a pilot group before broad deployment."],
                        keyPoints: ["Security baselines: Microsoft-recommended security configurations", "Available baselines: Windows, Defender, Edge, M365 Apps, Windows 365", "Pre-configured settings based on Microsoft security best practices", "Can be customized per organizational requirements", "Version management with comparison between baseline versions", "Should be tested in pilot groups before production deployment"],
                        architecture: { title: "Security Baseline Deployment", steps: [{ step: 1, title: "Select", description: "Choose appropriate baseline", icon: "Shield" }, { step: 2, title: "Review", description: "Examine and customize settings", icon: "Search" }, { step: 3, title: "Pilot", description: "Deploy to test group first", icon: "Users" }, { step: 4, title: "Deploy", description: "Roll out to production groups", icon: "Send" }] },
                        whyItMatters: "Security baselines accelerate security hardening by providing expert-recommended configurations. Without baselines, organizations must research and configure hundreds of security settings individually, risking misconfiguration.",
                        commonMistakes: ["Deploying baselines without testing, causing application compatibility issues", "Not reviewing baseline settings and applying blindly", "Conflicting baselines with existing configuration profiles", "Not tracking baseline version updates and staying on old versions"],
                        interviewTips: ["Explain security baselines and their role in endpoint security", "Discuss how you handle baseline conflicts with existing policies", "Describe your baseline testing and deployment strategy"],
                        examTips: ["Know available security baseline types", "Understand how baselines interact with configuration profiles", "Know the baseline version update process"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating and assigning a Windows security baseline", "Show baseline version comparison", "Discuss common baseline conflicts"], realExamples: ["Company implemented Windows security baseline and reduced security incidents by 40%", "Organization customized baseline to allow USB storage for specific departments"], questionsToAsk: ["Have you deployed security baselines?", "What security hardening do you currently apply?"] },
                },
                {
                    id: "lesson-5-2", title: "Antivirus & Threat Protection", slug: "antivirus-policies", duration: "25 mins",
                    content: {
                        explanation: ["Endpoint security antivirus policies in Intune manage Microsoft Defender Antivirus settings. Policies control real-time protection, cloud-delivered protection, scan schedules, exclusions, and tamper protection.", "Microsoft Defender for Endpoint integration adds advanced threat protection: endpoint detection and response (EDR), attack surface reduction (ASR) rules, network protection, and web content filtering. Defender for Endpoint threat levels feed into compliance policies.", "Antivirus exclusions should be carefully managed. Exclusions reduce security coverage and should only be added for known-good applications that cause false positives. Exclusion policies can be targeted to specific device groups."],
                        keyPoints: ["Antivirus policies: real-time protection, cloud protection, scan schedules", "Tamper protection prevents unauthorized changes to Defender settings", "Defender for Endpoint: EDR, ASR rules, network protection", "Threat level integration with compliance policies", "Antivirus exclusions should be minimal and well-documented", "Attack Surface Reduction rules block common attack techniques"],
                        whyItMatters: "Endpoint antivirus is the first line of defense against malware. Proper configuration through Intune ensures consistent protection across all endpoints, with cloud-delivered protection providing real-time threat intelligence.",
                        commonMistakes: ["Adding excessive antivirus exclusions that create security gaps", "Not enabling tamper protection, allowing malware to disable Defender", "Forgetting to configure cloud-delivered protection for latest threat intelligence", "Not integrating Defender for Endpoint threat levels with compliance policies"],
                        interviewTips: ["Explain your endpoint antivirus management strategy", "Discuss ASR rules and their impact on security posture", "Describe Defender for Endpoint integration with Intune"],
                        examTips: ["Know antivirus policy settings and their effects", "Understand ASR rules and their configuration", "Know how Defender for Endpoint threat levels work with compliance"],
                    },
                    trainerNotes: { talkingPoints: ["Demo antivirus policy creation and assignment", "Show ASR rule configuration", "Walk through Defender for Endpoint integration"], realExamples: ["Enterprise enabled ASR rules and blocked 95% of Office macro-based attacks", "Company integrated Defender threat levels with CA to auto-block compromised devices"], questionsToAsk: ["What antivirus solution do you use?", "Are you using Defender for Endpoint?"] },
                },
                {
                    id: "lesson-5-3", title: "Disk Encryption (BitLocker)", slug: "disk-encryption", duration: "25 mins",
                    content: {
                        explanation: ["BitLocker disk encryption in Intune can be configured silently without user interaction. Silent encryption requires TPM 2.0 and Azure AD joined or hybrid Azure AD joined devices. Intune manages recovery key escrow to Azure AD automatically.", "Endpoint security disk encryption policies configure BitLocker settings: encryption method (XTS-AES 256-bit recommended), OS drive encryption, fixed data drive encryption, removable drive encryption, and recovery key rotation.", "BitLocker recovery keys are stored in Azure AD and accessible from the Intune admin center. Key rotation can be configured to automatically generate new recovery keys after use, maintaining security after recovery events."],
                        keyPoints: ["Silent BitLocker encryption: no user interaction required", "Requires TPM 2.0 for silent encryption", "Recovery keys automatically escrowed to Azure AD", "Configure encryption method, drive types, and startup authentication", "Recovery key rotation after use for continued security", "Monitor encryption status from Intune admin center"],
                        whyItMatters: "Disk encryption is essential for protecting data on lost or stolen devices. Silent BitLocker deployment through Intune ensures all devices are encrypted without relying on user action, meeting compliance requirements for data protection.",
                        commonMistakes: ["Not verifying TPM 2.0 support before deploying silent encryption", "Forgetting to configure recovery key escrow to Azure AD", "Not monitoring encryption status for deployment failures", "Using weak encryption methods instead of XTS-AES 256-bit"],
                        interviewTips: ["Explain silent BitLocker deployment through Intune", "Discuss recovery key management and rotation", "Describe how you handle BitLocker on existing unencrypted devices"],
                        examTips: ["Know silent encryption requirements (TPM 2.0, Azure AD join)", "Understand recovery key escrow and rotation", "Know BitLocker encryption methods and their differences"],
                    },
                    trainerNotes: { talkingPoints: ["Demo BitLocker policy configuration for silent encryption", "Show recovery key lookup in Azure AD/Intune", "Walk through encryption monitoring reports"], realExamples: ["Company silently encrypted 10,000 devices with zero user impact using Intune BitLocker policy", "Organization implemented recovery key rotation after audit finding"], questionsToAsk: ["Are your devices currently encrypted?", "How do you manage BitLocker recovery keys today?"] },
                },
                {
                    id: "lesson-5-4", title: "Firewall & Network Protection", slug: "firewall-policies", duration: "20 mins",
                    content: {
                        explanation: ["Endpoint security firewall policies in Intune manage Windows Defender Firewall settings. Policies configure firewall profiles (Domain, Private, Public), inbound/outbound rules, and firewall notifications.", "Firewall rules can be created to allow or block specific applications, ports, protocols, and IP addresses. Rules can be imported from existing Group Policy firewall configurations using the migration tool.", "Network protection extends firewall capabilities by blocking connections to dangerous domains and IP addresses. It works with Microsoft Defender SmartScreen to protect against phishing sites and malicious downloads."],
                        keyPoints: ["Firewall policies manage Windows Defender Firewall profiles", "Configure Domain, Private, and Public network profiles", "Create inbound/outbound firewall rules for apps and ports", "Import existing GPO firewall rules using migration tool", "Network protection blocks malicious domains and IPs", "SmartScreen integration for web protection"],
                        whyItMatters: "Firewall management through Intune ensures consistent network security regardless of device location. Unlike GPO-based firewall management, Intune policies apply whether the device is on-premises, at home, or on public WiFi.",
                        commonMistakes: ["Not configuring Public profile settings for remote workers", "Creating overly permissive firewall rules that reduce security", "Forgetting to enable network protection alongside firewall policies", "Not testing firewall rules for application compatibility"],
                        interviewTips: ["Explain firewall management through Intune vs Group Policy", "Discuss network protection configuration", "Describe how you handle firewall rules for remote workers"],
                        examTips: ["Know firewall profile types and their default behaviors", "Understand firewall rule creation and conflict resolution", "Know network protection capabilities and configuration"],
                    },
                    trainerNotes: { talkingPoints: ["Demo firewall policy creation", "Show firewall rule migration from GPO", "Walk through network protection configuration"], realExamples: ["Company migrated 50 GPO firewall rules to Intune using migration tool", "Enterprise enabled network protection and blocked 10,000 malicious connection attempts monthly"], questionsToAsk: ["How do you manage firewall settings today?", "Do you have custom firewall rules for specific applications?"] },
                },
            ],
        },
        {
            id: "module-6", title: "Windows Update Management", slug: "windows-update",
            description: "Update rings, feature updates, driver management, and Windows Autopatch",
            icon: "RefreshCw", duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-6-1", title: "Windows Update Rings", slug: "update-rings", duration: "25 mins",
                    content: {
                        explanation: ["Windows Update for Business in Intune uses update rings to manage quality updates (monthly security patches) and feature updates. Update rings control deferral periods, deadline settings, and user experience during updates.", "Key update ring settings include: quality update deferral (0-30 days), feature update deferral (0-365 days), automatic update behavior (auto download and install, notify only), active hours, and deadline-based updates that force installation after a deadline.", "A phased deployment strategy uses multiple update rings: pilot ring (0-day deferral for IT testing), early adopters (7-day deferral), broad deployment (14-day deferral), and critical systems (21-30 day deferral). This staged approach reduces risk while maintaining security."],
                        keyPoints: ["Update rings control quality and feature update delivery", "Quality update deferral: 0-30 days delay from release", "Feature update deferral: 0-365 days delay from release", "Deadline-based updates force installation after specified date", "Active hours protect user productivity during work time", "Phased deployment: pilot → early adopters → broad → critical"],
                        architecture: { title: "Phased Update Deployment", steps: [{ step: 1, title: "Pilot", description: "IT team: 0-day deferral", icon: "Zap" }, { step: 2, title: "Early", description: "Early adopters: 7 days", icon: "Users" }, { step: 3, title: "Broad", description: "General: 14 days", icon: "Globe" }, { step: 4, title: "Critical", description: "Critical systems: 21-30 days", icon: "Shield" }] },
                        whyItMatters: "Unpatched systems are the primary attack vector for ransomware and malware. Windows Update rings ensure timely patching while staged deployment reduces the risk of update-related issues affecting the entire organization.",
                        commonMistakes: ["Using a single update ring with no deferral strategy", "Setting deferral periods too long, leaving devices vulnerable", "Not configuring deadlines, allowing indefinite update postponement", "Forgetting to set active hours, causing updates during work"],
                        interviewTips: ["Explain your Windows Update ring deployment strategy", "Discuss how you balance update speed with stability", "Describe how you handle update failures at scale"],
                        examTips: ["Know update ring settings and deferral periods", "Understand deadline-based update enforcement", "Know the difference between quality and feature update deferrals"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating update ring policies", "Show phased deployment group strategy", "Walk through deadline and active hours configuration"], realExamples: ["Enterprise uses 4-ring deployment strategy and catches 98% of issues before broad rollout", "Company reduced security vulnerabilities by 60% by enforcing 7-day maximum deferral"], questionsToAsk: ["What is your current patching strategy?", "How long does it take to patch all devices?"] },
                },
                {
                    id: "lesson-6-2", title: "Feature Updates & Driver Management", slug: "feature-updates", duration: "25 mins",
                    content: {
                        explanation: ["Feature update policies in Intune control which Windows version devices run. Unlike update rings that defer updates, feature update policies specify the exact target version (e.g., Windows 11 23H2). Devices won't upgrade beyond the specified version until the policy is updated.", "Driver and firmware updates can now be managed through Windows Update for Business in Intune. Driver update policies allow administrators to approve, pause, or decline driver updates for specific hardware. This prevents problematic driver updates from deploying automatically.", "Windows Update reports in Intune provide visibility into update compliance: which devices are up-to-date, pending updates, failed updates, and update ring compliance. Reports help identify devices that need attention."],
                        keyPoints: ["Feature update policies lock devices to a specific Windows version", "Prevents unplanned feature update upgrades", "Driver update policies control firmware and driver delivery", "Approve, pause, or decline specific driver updates", "Windows Update reports track compliance across the fleet", "Safeguard holds automatically delay known-issue updates"],
                        whyItMatters: "Feature update management prevents surprise Windows upgrades that can break applications. Driver management prevents problematic driver updates from causing blue screens and hardware issues across the organization.",
                        commonMistakes: ["Not using feature update policies and allowing uncontrolled upgrades", "Ignoring driver update management until a bad driver causes widespread issues", "Not monitoring update compliance reports regularly", "Forgetting to update feature update policies when targeting new Windows versions"],
                        interviewTips: ["Explain feature update management strategy", "Discuss driver update control and its importance", "Describe how you monitor update compliance"],
                        examTips: ["Know feature update policy vs update ring differences", "Understand driver update management capabilities", "Be familiar with Windows Update compliance reports"],
                    },
                    trainerNotes: { talkingPoints: ["Demo feature update policy targeting Windows 11 23H2", "Show driver update management interface", "Walk through Windows Update reports"], realExamples: ["Company locked 5,000 devices to Windows 11 22H2 until app compatibility was verified for 23H2", "Enterprise paused a problematic Intel WiFi driver update before it reached production devices"], questionsToAsk: ["Which Windows version are your devices running?", "Have you experienced problematic driver updates?"] },
                },
                {
                    id: "lesson-6-3", title: "Windows Autopatch", slug: "autopatch", duration: "20 mins",
                    content: {
                        explanation: ["Windows Autopatch is a cloud service that automates Windows Update management. It automatically creates deployment rings, manages update scheduling, monitors deployment health, and pauses problematic updates — reducing manual IT overhead.", "Autopatch manages quality updates, feature updates, Microsoft 365 Apps updates, and Microsoft Edge updates. Devices are automatically distributed across deployment rings: Test (1%), First (9%), Fast (21%), and Broad (69%).", "Autopatch includes built-in reliability signals. If an update causes issues in early rings (increased crashes, errors), Autopatch automatically pauses the deployment before it reaches the broader population."],
                        keyPoints: ["Autopatch automates Windows Update management end-to-end", "Manages: quality updates, feature updates, M365 Apps, Edge", "Auto-creates deployment rings: Test(1%), First(9%), Fast(21%), Broad(69%)", "Built-in reliability monitoring and automatic pause on issues", "Reduces manual IT overhead for update management", "Requires Windows 10/11 Enterprise E3 or E5 license"],
                        whyItMatters: "Windows Autopatch reduces the operational burden of update management. Organizations spend an average of 20 hours per month managing updates manually. Autopatch automates this with intelligent deployment and monitoring.",
                        commonMistakes: ["Not understanding Autopatch licensing requirements (E3/E5 Enterprise)", "Expecting Autopatch to handle all update scenarios (it has specific scope)", "Not monitoring Autopatch deployment health dashboards", "Conflicting manual update rings with Autopatch-managed rings"],
                        interviewTips: ["Explain Windows Autopatch and its automation capabilities", "Discuss when to use Autopatch vs manual update rings", "Describe the Autopatch deployment ring structure"],
                        examTips: ["Know Autopatch licensing requirements", "Understand Autopatch deployment ring distribution", "Know what Autopatch manages vs what requires manual configuration"],
                    },
                    trainerNotes: { talkingPoints: ["Show Autopatch enrollment and configuration", "Demo deployment health monitoring dashboard", "Compare manual update management vs Autopatch"], realExamples: ["Enterprise saved 30 hours per month by switching from manual update rings to Autopatch", "Autopatch automatically paused a problematic quality update, preventing impact on 95% of devices"], questionsToAsk: ["Do you have E3 or E5 licenses?", "How much time does your team spend managing updates?"] },
                },
            ],
        },
        {
            id: "module-7", title: "Compliance & Conditional Access", slug: "compliance-conditional-access",
            description: "Advanced compliance policies, Conditional Access integration, and Zero Trust enforcement",
            icon: "CheckCircle", duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-7-1", title: "Advanced Compliance Policies", slug: "advanced-compliance", duration: "25 mins",
                    content: {
                        explanation: ["Advanced compliance policies go beyond basic device health checks. Custom compliance policies use PowerShell scripts and JSON schemas to evaluate custom conditions. This allows checking for settings not covered by built-in compliance: specific registry values, installed applications, running services, or file system conditions.", "Compliance policy settings for Windows include: BitLocker encryption, Secure Boot, Code Integrity, firewall, antivirus, antispyware, Defender real-time protection, Defender version, and password requirements. Platform-specific settings ensure appropriate security for each OS.", "Location-based compliance uses named locations in Azure AD to enforce geography-based access. Devices can be marked non-compliant when outside approved locations, adding a location-based layer to Zero Trust security."],
                        keyPoints: ["Custom compliance: PowerShell detection + JSON compliance rules", "Evaluate conditions not covered by built-in compliance settings", "Windows: BitLocker, Secure Boot, Code Integrity, Defender settings", "Location-based compliance using Azure AD named locations", "Compliance scripts enable organiztion-specific requirements", "Custom compliance works alongside built-in compliance policies"],
                        whyItMatters: "Standard compliance policies don't cover every organizational requirement. Custom compliance policies enable organizations to enforce specific security requirements unique to their industry regulations or internal security policies.",
                        commonMistakes: ["Creating custom compliance for settings that built-in policies already cover", "Not testing compliance scripts thoroughly before deployment", "Overly complex compliance requirements that cause widespread non-compliance", "Not communicating compliance requirements to users before enforcement"],
                        interviewTips: ["Explain custom compliance policy capabilities", "Discuss industry-specific compliance requirements you've implemented", "Describe your compliance rollout strategy"],
                        examTips: ["Know custom compliance policy components (script + JSON)", "Understand built-in compliance settings per platform", "Know location-based compliance configuration"],
                    },
                    trainerNotes: { talkingPoints: ["Demo custom compliance script creation", "Show compliance policy settings comparison across platforms", "Walk through location-based compliance"], realExamples: ["Healthcare org uses custom compliance to verify specific medical software versions", "Financial company uses location-based compliance to restrict access to approved countries"], questionsToAsk: ["Do you have compliance requirements not covered by built-in policies?", "Are there geography-based access restrictions?"] },
                },
                {
                    id: "lesson-7-2", title: "Conditional Access Integration", slug: "conditional-access", duration: "30 mins",
                    content: {
                        explanation: ["Conditional Access (CA) policies in Azure AD work with Intune device compliance to enforce Zero Trust access control. CA policies evaluate conditions (user, device, location, risk) and grant or block access to cloud applications based on those conditions.", "Key CA policy configurations with Intune: Require device compliance (block non-compliant devices), Require approved client app, Require app protection policy (MAM), and Require device to be marked as compliant. These controls ensure only trusted devices access corporate resources.", "Common CA scenarios include: block email access from non-compliant devices, require MFA from non-trusted locations, block legacy authentication, require compliant devices for SharePoint access, and restrict access to managed applications only."],
                        keyPoints: ["CA policies: evaluate user, device, location, and risk conditions", "Require device compliance: only compliant devices access resources", "Require approved client app: restrict to managed applications", "Require app protection policy: ensure MAM policies are applied", "Block legacy authentication protocols that don't support modern auth", "Named locations for geographic-based access control"],
                        whyItMatters: "Conditional Access is the enforcement engine of Zero Trust. Without CA policies, compliance policies are informational only — users can still access corporate resources from non-compliant devices. CA makes compliance actionable.",
                        commonMistakes: ["Creating CA policies without testing in report-only mode first", "Not excluding emergency access (break-glass) accounts from CA", "Blocking too broadly without proper exclusions for supported scenarios", "Not considering the impact of CA on device enrollment flow"],
                        interviewTips: ["Explain the relationship between Intune compliance and Conditional Access", "Discuss your Zero Trust approach using CA policies", "Describe how you test and roll out CA policies safely"],
                        examTips: ["Know CA policy components: assignments, conditions, grant controls", "Understand device compliance requirement in CA", "Know the difference between require compliant device vs require app protection", "Understand report-only mode for CA policy testing"],
                    },
                    trainerNotes: { talkingPoints: ["Demo creating a CA policy requiring device compliance", "Show report-only mode for safe testing", "Walk through common CA scenarios for endpoint management"], realExamples: ["Company blocked all non-compliant devices from Exchange Online, reducing unauthorized email access to zero", "Organization uses CA to require MFA for all access from non-trusted locations"], questionsToAsk: ["Are you using Conditional Access today?", "What resources require device compliance?"] },
                },
                {
                    id: "lesson-7-3", title: "Remediation & Compliance Actions", slug: "remediation-actions", duration: "20 mins",
                    content: {
                        explanation: ["Compliance policy actions for non-compliance define the automated response when devices fall out of compliance. Actions are executed on a schedule: immediate, after 1 day, after 3 days, etc. The escalation model provides increasingly restrictive actions over time.", "Email notifications inform users about non-compliance with instructions for remediation. Custom notification templates can include device details, non-compliant settings, and step-by-step remediation instructions. Multiple notifications can be sent at different intervals.", "Remote actions for non-compliance include remote lock, wipe, and retire. These are typically reserved for severe non-compliance or extended periods without remediation. Remote wipe should be used cautiously and typically only for corporate-owned devices."],
                        keyPoints: ["Actions schedule: immediate → notify → mark non-compliant → lock → retire", "Email notifications with custom templates and remediation instructions", "Escalating actions over time give users chance to remediate", "Remote lock for immediate security when needed", "Retire/wipe for severe non-compliance or lost devices", "Different action schedules for different compliance policies"],
                        whyItMatters: "Automated remediation actions reduce the manual effort of chasing non-compliant devices. The escalation model balances security with user productivity by giving users time to fix issues before losing access.",
                        commonMistakes: ["Not configuring any actions, leaving compliance informational only", "Setting immediate wipe without grace period", "Not customizing notification emails with remediation steps", "Using the same action schedule for all compliance policies"],
                        interviewTips: ["Explain your non-compliance remediation workflow", "Discuss how you balance security enforcement with user experience", "Describe automated actions you've configured"],
                        examTips: ["Know the available non-compliance actions and their effects", "Understand action scheduling and escalation", "Know the difference between retire and wipe actions"],
                    },
                    trainerNotes: { talkingPoints: ["Demo configuring non-compliance actions with escalation", "Show email notification template customization", "Walk through end-user remediation experience"], realExamples: ["Company reduced non-compliant devices from 30% to 5% using automated email reminders and escalated actions", "Enterprise configured 72-hour grace period before blocking email access for unencrypted devices"], questionsToAsk: ["What happens today when a device is non-compliant?", "How quickly should non-compliant devices lose access?"] },
                },
            ],
        },
        {
            id: "module-8", title: "Monitoring, Troubleshooting & Analytics", slug: "monitoring-troubleshooting",
            description: "Endpoint Analytics, Intune reports, device diagnostics, and troubleshooting techniques",
            icon: "BarChart3", duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-8-1", title: "Endpoint Analytics", slug: "endpoint-analytics", duration: "25 mins",
                    content: {
                        explanation: ["Endpoint Analytics provides insights into device performance and user experience. It measures boot performance (startup times), application reliability (crash data), and proactive remediations effectiveness. Scores help identify devices that need attention.", "Startup Performance: tracks device boot times broken down into BIOS time, Windows update time, sign-in time, and Group Policy processing time. Devices are scored relative to a baseline, helping identify devices with slow startup that impact productivity.", "Application Reliability: monitors app crash frequency and hang data. Reports show which applications are most problematic and which devices are affected. This data helps prioritize app updates and compatibility testing."],
                        keyPoints: ["Endpoint Analytics: device performance and user experience insights", "Startup Performance: boot time breakdown and scoring", "Application Reliability: crash frequency and problematic apps", "Proactive Remediations: automated detection and fix tracking", "Device scores benchmarked against organizational baselines", "Work from Anywhere score: readiness assessment for modern management"],
                        whyItMatters: "Endpoint Analytics transforms reactive IT support into proactive device management. By identifying performance issues before users report them, IT teams can fix problems at scale and improve overall user satisfaction.",
                        commonMistakes: ["Not enabling Endpoint Analytics data collection", "Ignoring low-scoring devices until users complain", "Not using proactive remediations to fix identified issues automatically", "Focusing only on device scores without investigating root causes"],
                        interviewTips: ["Explain Endpoint Analytics capabilities and benefits", "Discuss how you use analytics data to improve device performance", "Describe proactive remediations you've created based on analytics data"],
                        examTips: ["Know Endpoint Analytics components and what each measures", "Understand startup performance metrics and scoring", "Be familiar with the Work from Anywhere score"],
                    },
                    trainerNotes: { talkingPoints: ["Demo Endpoint Analytics dashboard and scores", "Show startup performance breakdown for a device", "Walk through application reliability reports"], realExamples: ["Company identified 500 devices with slow boot caused by outdated BIOS and created proactive remediation", "Analytics data showed a specific app causing 80% of crashes, leading to priority app update"], questionsToAsk: ["Do you monitor device performance proactively?", "What is the average boot time for your devices?"] },
                },
                {
                    id: "lesson-8-2", title: "Intune Reports & Diagnostics", slug: "reports-diagnostics", duration: "25 mins",
                    content: {
                        explanation: ["Intune provides comprehensive reporting across devices, compliance, configuration, and applications. Built-in reports include: device compliance, configuration profile status, app installation status, update compliance, and feature update status.", "Device diagnostics allow remote collection of diagnostic logs from managed devices. Diagnostics include registry data, event logs, file system data, and MDM diagnostic logs. This enables remote troubleshooting without physical access to the device.", "Organizational reports provide executive-level summaries: overall compliance percentage, app deployment success rates, encryption compliance, and update compliance trending over time."],
                        keyPoints: ["Built-in reports: compliance, configuration, apps, updates", "Device diagnostics: remote log collection for troubleshooting", "Organizational reports: executive summaries and trends", "Export reports to CSV for further analysis", "Log Analytics integration for advanced reporting and alerting", "Diagnostic logs include MDM, registry, events, and file system data"],
                        whyItMatters: "Comprehensive reporting and diagnostics are essential for maintaining endpoint health at scale. Without proper visibility, issues go undetected until they become widespread problems affecting user productivity.",
                        commonMistakes: ["Not regularly reviewing compliance and update reports", "Forgetting that device diagnostics are available for remote troubleshooting", "Not setting up Log Analytics for long-term trend analysis", "Ignoring app installation failure reports"],
                        interviewTips: ["Explain the Intune reporting capabilities you use most", "Discuss how you use device diagnostics for remote troubleshooting", "Describe how you present endpoint health metrics to management"],
                        examTips: ["Know available built-in Intune reports", "Understand device diagnostics collection process", "Be familiar with Log Analytics integration for advanced reporting"],
                    },
                    trainerNotes: { talkingPoints: ["Demo Intune built-in reports navigation", "Show remote device diagnostics collection", "Walk through Log Analytics integration setup"], realExamples: ["IT team uses weekly compliance reports to maintain 95% compliance rate", "Remote diagnostics solved a VPN connection issue without dispatching tech to employee home"], questionsToAsk: ["What reports do you review regularly?", "How do you handle remote device troubleshooting?"] },
                },
                {
                    id: "lesson-8-3", title: "Troubleshooting Techniques", slug: "troubleshooting", duration: "25 mins",
                    content: {
                        explanation: ["Common Intune troubleshooting areas include: enrollment failures, profile deployment issues, app installation failures, compliance evaluation problems, and update delivery failures. Each area has specific logs and diagnostic approaches.", "The Intune Troubleshooting + Support blade shows per-user device status, assigned policies, compliance status, and managed apps. This is the starting point for investigating user-reported issues. The Troubleshooting blade also shows policy conflicts and assignment errors.", "Client-side troubleshooting involves reviewing MDM diagnostic logs, Event Viewer (DeviceManagement-Enterprise-Diagnostics-Provider), and IME (Intune Management Extension) logs for Win32 app and script issues. Understanding log locations and common error codes accelerates resolution."],
                        keyPoints: ["Troubleshooting blade: per-user view of devices, policies, and compliance", "Enrollment troubleshooting: check prerequisites, network, and Azure AD", "Profile conflicts: detect and resolve conflicting settings", "App installation: IME logs for Win32 app and script failures", "MDM diagnostic logs: device-side policy application details", "Common error codes and their resolution steps"],
                        architecture: { title: "Troubleshooting Workflow", steps: [{ step: 1, title: "Identify", description: "User reports issue or monitoring alert", icon: "AlertCircle" }, { step: 2, title: "Investigate", description: "Check Troubleshooting blade for status", icon: "Search" }, { step: 3, title: "Diagnose", description: "Collect device diagnostics/logs", icon: "FolderSearch" }, { step: 4, title: "Resolve", description: "Fix and verify the resolution", icon: "CheckCircle" }] },
                        whyItMatters: "Efficient troubleshooting reduces downtime and support costs. Understanding the diagnostic tools and common failure patterns enables helpdesk teams to resolve issues quickly without escalation, improving user satisfaction and IT efficiency.",
                        commonMistakes: ["Not checking the Troubleshooting blade before investigating client-side", "Ignoring policy conflicts as a root cause of unexpected behavior", "Not collecting device diagnostics before attempting fixes", "Reinstalling the device instead of diagnosing the actual issue"],
                        interviewTips: ["Walk through your Intune troubleshooting methodology", "Discuss common issues you've resolved and how", "Describe the tools and logs you use for diagnosis"],
                        examTips: ["Know the Troubleshooting + Support blade capabilities", "Understand MDM diagnostic log locations on Windows devices", "Know common enrollment and policy error codes", "Be familiar with IME log location for Win32 app troubleshooting"],
                    },
                    trainerNotes: { talkingPoints: ["Demo the Troubleshooting + Support blade walkthrough", "Show common MDM diagnostic log analysis", "Walk through real-world troubleshooting scenarios"], realExamples: ["Support team reduced average ticket resolution from 4 hours to 45 minutes by using Troubleshooting blade first", "IME log analysis revealed a network proxy blocking Win32 app downloads for remote workers"], questionsToAsk: ["What are the most common Intune issues you encounter?", "What tools do you use for endpoint troubleshooting?"] },
                },
            ],
        },
    ],
};
