const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat, ExternalHyperlink, TabStopType, TabStopPosition } = require('docx');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22, color: "333333" }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "0A7E8C", font: "Georgia" },
        paragraph: { spacing: { before: 360, after: 120 } }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "1A1D21", font: "Georgia" },
        paragraph: { spacing: { before: 240, after: 60 } }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, color: "1A1D21", font: "Arial" },
        paragraph: { spacing: { before: 160, after: 40 } }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    children: [
      // Name
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Derek Robati", font: "Georgia", size: 48, bold: true, color: "1A1D21" })]
      }),

      // Contact line
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new ExternalHyperlink({ link: "mailto:recruit@robati.com", children: [new TextRun({ text: "recruit@robati.com", style: "Hyperlink", size: 20 })] }),
          new TextRun({ text: "  |  ", size: 20, color: "999999" }),
          new ExternalHyperlink({ link: "https://github.com/drobati", children: [new TextRun({ text: "github.com/drobati", style: "Hyperlink", size: 20 })] }),
          new TextRun({ text: "  |  ", size: 20, color: "999999" }),
          new ExternalHyperlink({ link: "https://www.linkedin.com/in/drobati/", children: [new TextRun({ text: "linkedin.com/in/drobati", style: "Hyperlink", size: 20 })] }),
          new TextRun({ text: "  |  ", size: 20, color: "999999" }),
          new ExternalHyperlink({ link: "https://blog.robati.com/", children: [new TextRun({ text: "blog.robati.com", style: "Hyperlink", size: 20 })] }),
          new TextRun({ text: "  |  ", size: 20, color: "999999" }),
          new ExternalHyperlink({ link: "https://orbitabuilt.com", children: [new TextRun({ text: "orbitabuilt.com", style: "Hyperlink", size: 20 })] }),
        ]
      }),

      // Divider
      new Paragraph({ spacing: { after: 200 }, border: { bottom: { style: "single", size: 6, color: "0A7E8C" } }, children: [] }),

      // Summary
      new Paragraph({
        spacing: { after: 280 },
        children: [new TextRun({
          text: "Software engineer with 20 years of industry experience and 7+ years building distributed payment processing systems. Deep experience across merchant onboarding, risk and compliance, transaction processing, and processor integrations. Day-to-day across React, Node.js, Kubernetes, Kafka, Redis, MySQL, and Elasticsearch in a 60+ microservice environment.",
          size: 21, color: "44494F"
        })]
      }),

      // Skills
      new Paragraph({
        spacing: { after: 280 },
        children: [new TextRun({
          text: "React  \u00B7  Node.js  \u00B7  TypeScript  \u00B7  Go  \u00B7  Python  \u00B7  Kubernetes  \u00B7  Docker  \u00B7  Kafka  \u00B7  Redis  \u00B7  MySQL  \u00B7  Elasticsearch  \u00B7  AWS  \u00B7  REST APIs  \u00B7  CI/CD  \u00B7  Git",
          size: 18, color: "7A8088", font: "Consolas"
        })]
      }),

      // --- EXPERIENCE ---
      new Paragraph({
        heading: "Heading1",
        children: [new TextRun("Experience")]
      }),

      // Priority Payment Systems
      new Paragraph({
        heading: "Heading2",
        children: [new TextRun("Priority Payment Systems")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Alpharetta, Georgia  \u00B7  February 2019 \u2014 Present", size: 18, color: "7A8088", font: "Consolas" })]
      }),

      // Team Lead
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Team Lead")]
      }),
      roleDuration(),

      ...bullets([
        "Managing 6 engineers across two teams with 3 direct reports, conducting regular one-on-ones and mentoring developers on technical growth and career development.",
        "Running daily \u201Cticket talk\u201D sessions where engineers surface blocking issues and get hands-on help to move past them, keeping sprint velocity high.",
        "Leading cross-functional PCI DSS compliance initiatives, coordinating security assessments, remediation, and audit preparation across engineering.",
        "Driving SOX compliance by implementing internal controls over financial reporting systems, ensuring data integrity and auditability across payment workflows.",
        "Architected and shipped an ACH reject handling system, reducing manual intervention and improving reconciliation accuracy for failed transactions.",
        "Championing AI adoption across the engineering organization, introducing tooling and workflows that accelerate development velocity.",
        "Built MCP servers that give AI assistants context into the platform\u2019s orchestration layer and automate test merchant onboarding, reducing setup friction for developers.",
        "Evaluating and integrating observability and session analytics platforms to improve production visibility and user experience insights.",
        "Serving as the escalation point for Level 1 production incidents after years of on-call rotations, triaging and resolving critical issues across the platform.",
      ]),

      // Senior Software Engineer
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Senior Software Engineer")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "6 years 7 months", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Core contributor to a merchant management platform handling onboarding, risk assessment, underwriting, KYC, and transaction reporting across major payment processor integrations.",
        "Built and maintained integrations with external payment processors and internal products including banking and payroll services \u2014 delivered a payroll integration in 2 weeks vs. the typical 8-week timeline.",
        "Developed merchant-facing application UI and agent-facing tools for onboarding, case management, and ongoing merchant lifecycle operations.",
        "Worked across a 60+ microservice architecture on Kubernetes, leveraging Kafka for event streaming, Redis for caching, MySQL for persistence, and Elasticsearch for search and reporting.",
        "Built administration features including role-based access control, multitenancy, domain/permission management, and configurable branding and email templates.",
        "Shipped KYC and auto-underwriting features integrating third-party APIs, compressing merchant onboarding from 3 weeks to under a day.",
        "Conducted feasibility analysis on sunsetting 2 legacy applications, mapping dependencies and outlining migration paths for stakeholders.",
        "Led architecture improvements including migrating legacy routing to React Router, replacing Redux with React Query, and maintaining 100% unit test coverage across contributions.",
        "Created a CLI tool that simplified the team\u2019s branching strategy, adopted by developers to streamline day-to-day git workflows.",
        "Built a debugging UI for navigating complex audit logs, giving engineers fast visibility into transaction and system event history.",
        "Rotated on-call in two-week shifts for multiple years, diagnosing and resolving production issues across the stack at any hour.",
        "Built internal developer tooling that automated repetitive tasks, reducing manual effort and common errors.",
      ]),

      // Dispersive Networks
      new Paragraph({
        heading: "Heading2",
        children: [new TextRun("Dispersive Networks, Inc.")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Alpharetta, Georgia  \u00B7  July 2016 \u2014 January 2019", size: 18, color: "7A8088", font: "Consolas" })]
      }),

      // Director
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Director of Apps and Services")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "10 months", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Introduced React and Go as the team\u2019s core stack, establishing the architecture the team shipped and maintained.",
        "Built a React and Redux dashboard for real-time health monitoring of network elements.",
        "Owned the existing API and web interface, shipping features and resolving production issues.",
        "Created onboarding documentation and internal wiki resources adopted across engineering and operations.",
        "Managed a team of five across four OS platforms, a web application, and multiple microservices.",
      ]),

      // Senior Software Engineer at Dispersive
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Senior Software Engineer")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "1 year 11 months", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Prototyped an engineering dashboard that validated the target tech stack and informed the team\u2019s architecture direction.",
        "Shipped features and fixes for the web admin panel and REST API.",
        "Contributed to UI/UX design reviews and architecture decisions shaping the product roadmap.",
        "Wrote comprehensive unit tests for the REST interface, establishing the team\u2019s testing standards.",
        "Overhauled API documentation with versioning, request/response examples, and consistent formatting.",
        "Stood up GitLab CE from scratch, defined the git workflow, and implemented continuous delivery across the team.",
        "Built a prototype Kafka event pipeline with Go microservices, deployable across multiple Docker containers.",
        "Administered the Jenkins CI server and maintained build nodes for each supported OS.",
      ]),

      // ADVA
      new Paragraph({
        heading: "Heading2",
        children: [new TextRun("ADVA Optical Networking North America, Inc.")]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Norcross, Georgia  \u00B7  May 2006 \u2014 July 2016", size: 18, color: "7A8088", font: "Consolas" })]
      }),

      // Software Production Engineer
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Software Production Engineer")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "1 year", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Collaborated remotely with an international engineering team across multiple time zones.",
        "Built Python API wrappers for Collabnet, Artifactory, Jenkins, and Git, simplifying cross-tool automation.",
        "Created a changelog generator that linked commits to user stories, giving stakeholders clear release visibility.",
        "Built an internal release notes system that auto-generated reports of build metadata and code changes.",
        "Provisioned simulation build infrastructure used by the team to validate builds before production.",
        "Developed an Artifactory CLI tool for querying, filtering, and fetching build artifacts.",
      ]),

      // Systems Integration Testing Engineer
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Systems Integration Testing Engineer")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "4 years", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Standardized test environments using Vagrant, ensuring consistent Unix setups across the team.",
        "Proposed and implemented the team\u2019s first continuous integration workflow.",
        "Built test automation suites and a reusable Python testing framework adopted across multiple products.",
        "Developed Test Set libraries that mapped requirements to executable test coverage.",
        "Derived test plans from product requirements across multiple product lines.",
        "Delivered live product demos to existing and prospective clients.",
      ]),

      // Operations & Production Test Engineer
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Operations & Production Test Engineer")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "4 years", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Built TestStand suites that validated manufacturing limits on newly produced modules.",
        "Created an internal Django web app that gave other departments visibility into Test Engineering projects.",
      ]),

      // Internship
      new Paragraph({
        heading: "Heading3",
        children: [new TextRun("Internship")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "1 year", size: 18, color: "0A7E8C", font: "Consolas" })]
      }),

      ...bullets([
        "Gained hands-on experience with fiber optic telecommunications technology and industry protocols.",
        "Performed precision calibration of test and measurement equipment.",
        "Extended an internal wxPython desktop application with new features for the engineering team.",
      ]),

      // --- EDUCATION ---
      new Paragraph({
        heading: "Heading1",
        children: [new TextRun("Education")]
      }),

      new Paragraph({
        heading: "Heading2",
        spacing: { after: 40 },
        children: [new TextRun("Bachelor of Science in Computer Science")]
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: "Southern Polytechnic State University", size: 22, bold: false, color: "44494F" })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Marietta, Georgia  \u00B7  August 2009 \u2014 December 2011", size: 18, color: "7A8088", font: "Consolas" })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Courses explored outside core degree classes include Digital Image Processing, OpenGL, and Distributed Computing.", size: 21, color: "44494F" })]
      }),
    ]
  }]
});

function roleDuration() {
  const start = new Date('2025-09-01');
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) { years--; months += 12; }
  const totalMonths = years * 12 + months;
  let duration;
  if (years >= 1) {
    duration = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
  } else {
    duration = `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
  }
  return new Paragraph({
    spacing: { after: 80 },
    children: [new TextRun({ text: duration, size: 18, color: "0A7E8C", font: "Consolas" })]
  });
}

function bullets(items) {
  return items.map(text =>
    new Paragraph({
      numbering: { reference: "bullet-list", level: 0 },
      spacing: { after: 60 },
      children: [new TextRun({ text, size: 21, color: "44494F" })]
    })
  );
}

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(__dirname + '/derek-robati-resume.docx', buffer);
  console.log('Resume saved to derek-robati-resume.docx');
});
