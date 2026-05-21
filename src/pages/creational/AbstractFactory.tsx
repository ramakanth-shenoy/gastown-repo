import PatternLayout from './PatternLayout'

const uml =
  '<svg width="620" height="360" viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract Factory UML">' +
  '<defs><style>.uml-text{font-family:Consolas,monospace;font-size:11.5px;fill:#08060d}.uml-heading{font-family:Consolas,monospace;font-size:10.5px;fill:#6b6375}.uml-line{stroke:#08060d;stroke-width:1.2}.uml-fill-factory{fill:rgba(16,185,129,0.08)}.uml-fill-product{fill:rgba(245,158,11,0.06)}</style></defs>' +
  '<!-- Abstract Factory -->' +
  '<rect x="10" y="10" width="155" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="28" class="uml-heading" text-anchor="middle">«interface»</text>' +
  '<text x="87" y="46" class="uml-text" text-anchor="middle">GUIFactory</text>' +
  '<text x="87" y="62" class="uml-text" text-anchor="middle">createButton(): Button</text>' +
  '<text x="87" y="74" class="uml-text" text-anchor="middle">createCheckbox(): Checkbox</text>' +
  '<!-- Client -->' +
  '<rect x="10" y="90" width="155" height="50" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="110" class="uml-heading" text-anchor="middle">Client</text>' +
  '<text x="87" y="128" class="uml-text" text-anchor="middle">- buttons: Button[]</text>' +
  '<line x1="87" y1="68" x2="87" y2="90" class="uml-line"/>' +
  '<!-- Concrete Factory 1 -->' +
  '<rect x="10" y="160" width="155" height="52" rx="6" fill="rgba(16,185,129,0.1)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="178" class="uml-heading" text-anchor="middle">concrete</text>' +
  '<text x="87" y="196" class="uml-text" text-anchor="middle">WindowsFactory</text>' +
  '<!-- Concrete Factory 2 -->' +
  '<rect x="10" y="220" width="155" height="52" rx="6" fill="rgba(16,185,129,0.1)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="238" class="uml-heading" text-anchor="middle">concrete</text>' +
  '<text x="87" y="256" class="uml-text" text-anchor="middle">MacOSFactory</text>' +
  '<line x1="87" y1="140" x2="87" y2="160" class="uml-line"/>' +
  '<line x1="87" y1="212" x2="87" y2="220" class="uml-line"/>' +
  '<!-- Button interface and products -->' +
  '<rect x="230" y="10" width="145" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="302" y="28" class="uml-heading" text-anchor="middle">«interface»</text>' +
  '<text x="302" y="46" class="uml-text" text-anchor="middle">Button</text>' +
  '<text x="302" y="62" class="uml-text" text-anchor="middle">paint(): void</text>' +
  '<rect x="230" y="76" width="145" height="52" rx="6" fill="rgba(245,158,11,0.1)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="302" y="94" class="uml-text" text-anchor="middle">WindowsButton</text>' +
  '<text x="302" y="110" class="uml-text" text-anchor="middle">paint(): void</text>' +
  '<line x1="302" y1="68" x2="302" y2="76" class="uml-line"/>' +
  '<rect x="230" y="136" width="145" height="52" rx="6" fill="rgba(245,158,11,0.1)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="302" y="154" class="uml-text" text-anchor="middle">MacOSButton</text>' +
  '<text x="302" y="170" class="uml-text" text-anchor="middle">paint(): void</text>' +
  '<line x1="302" y1="128" x2="302" y2="136" class="uml-line"/>' +
  '<!-- Checkbox interface and products -->' +
  '<rect x="415" y="10" width="195" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="512" y="28" class="uml-heading" text-anchor="middle">«interface»</text>' +
  '<text x="512" y="46" class="uml-text" text-anchor="middle">Checkbox</text>' +
  '<text x="512" y="62" class="uml-text" text-anchor="middle">paint(): void</text>' +
  '<rect x="415" y="76" width="195" height="52" rx="6" fill="rgba(245,158,11,0.1)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="512" y="94" class="uml-text" text-anchor="middle">WindowsCheckbox</text>' +
  '<text x="512" y="110" class="uml-text" text-anchor="middle">paint(): void</text>' +
  '<line x1="512" y1="68" x2="512" y2="76" class="uml-line"/>' +
  '<rect x="415" y="136" width="195" height="52" rx="6" fill="rgba(245,158,11,0.1)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="512" y="154" class="uml-text" text-anchor="middle">MacOSCheckbox</text>' +
  '<text x="512" y="170" class="uml-text" text-anchor="middle">paint(): void</text>' +
  '<line x1="512" y1="128" x2="512" y2="136" class="uml-line"/>' +
  '<!-- Dependencies: Button products controlled by factories -->' +
  '<path d="M165 96 C 195 96, 210 96, 230 96" fill="none" class="uml-line"/>' +
  '<path d="M165 205 C 210 205, 215 205, 230 205" fill="none" class="uml-line"/>' +
  '<path d="M375 96 C 385 96, 395 96, 415 96" fill="none" class="uml-line"/>' +
  '<text x="282" y="220" class="uml-heading" style="font-size:9px" text-anchor="middle">WindowsFactory ──BUTTON→ WindowsButton</text>' +
  '<text x="512" y="220" class="uml-heading" style="font-size:9px" text-anchor="middle">WindowsFactory ──CHECKBOX→ WindowsCheckbox</text>' +
  '</svg>'

const codeSnippet1 = `// Product interfaces
interface Button { paint(): void }
interface Checkbox { paint(): void }

// Concrete products
class WindowsButton implements Button {
  paint() { console.log("Render Windows button") }
}
class MacOSButton implements Button {
  paint() { console.log("Render macOS button") }
}
class WindowsCheckbox implements Checkbox {
  paint() { console.log("Render Windows checkbox") }
}
class MacOSCheckbox implements Checkbox {
  paint() { console.log("Render macOS checkbox") }
}

// Abstract Factory
interface GUIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

class WindowsFactory implements GUIFactory {
  createButton() { return new WindowsButton() }
  createCheckbox() { return new WindowsCheckbox() }
}
class MacOSFactory implements GUIFactory {
  createButton() { return new MacOSButton() }
  createCheckbox() { return new MacOSCheckbox() }
}

// Client
class Application {
  constructor(private factory: GUIFactory) {}

  render() {
    const button = this.factory.createButton()
    const checkbox = this.factory.createCheckbox()
    button.paint()
    checkbox.paint()
  }
}`

const codeSnippet2 = `// Switch platform by changing the factory — no Client code changes needed
const windowsApp = new Application(new WindowsFactory())
windowsApp.render()
// Render Windows button
// Render Windows checkbox

const macApp = new Application(new MacOSFactory())
macApp.render()
// Render macOS button
// Render macOS checkbox`

export default function AbstractFactoryPage() {
  return (
    <PatternLayout
      title="Abstract Factory"
      tagline="Provide an interface for creating families of related or dependent objects without specifying their concrete classes."
      problemTitle="The Problem"
      problem="A GUI toolkit must render consistent-looking widgets on Windows, macOS, and Linux. Widgets from different operating systems should not be mixed — pairing a Windows button with a macOS checkbox results in a jarring, inconsistent UI. Hard-coding each individual widget type separately (`new WindowsButton()`, `new WindowsCheckbox()`, etc.) tightly couples the application to OS-specific classes and makes it costly to add or swap a platform. The Abstract Factory groups each platform's related products into a single factory (e.g. `WindowsFactory`) and forces clients to obtain all widgets through that factory, guaranteeing consistency by construction."
      umlSvg={<div dangerouslySetInnerHTML={{ __html: uml }} />}
      code={[
        {
          label: 'abstract-factory.ts — TypeScript',
          source: codeSnippet1,
        },
        {
          label: 'Usage',
          source: codeSnippet2,
        },
      ]}
      useCases={[
        {
          title: 'Cross-Platform GUI Toolkits',
          description:
            'Exports themed widgets for Windows, macOS, and Linux without ever mixing styles in the same rendering pass.',
        },
        {
          title: 'Multi-Tenant SaaS Platforms',
          description:
            'Each tenant (organisation) gets a consistent set of UI components, api clients, and data sources via its own family factory.',
        },
        {
          title: 'Database Access Layers',
          description:
            'Return PostgreSQL, MySQL, or SQLite connections + query builders from the same abstract factory so they always pair correctly.',
        },
        {
          title: 'Game Engine Rendering Pipelines',
          description:
            'Offload consistent sets of shaders, textures, and geometry — OpenGL vs Vulkan — by plugging in the right rendering-family factory.',
        },
        {
          title: 'Microservice SDK Generation',
          description:
            'Auto-generate a family of clients (REST, gRPC, GraphQL) from a single schema, keeping the generated code internally consistent.',
        },
      ]}
    />
  )
}
