import PatternLayout from './PatternLayout'

const uml =
  '<svg width="460" height="280" viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prototype UML">' +
  '<defs><style>.uml-text{font-family:Consolas,monospace;font-size:12px;fill:#08060d}.uml-heading{font-family:Consolas,monospace;font-size:11px;fill:#6b6375}.uml-line{stroke:#08060d;stroke-width:1.2}</style></defs>' +
  '<!-- Prototype interface -->' +
  '<rect x="10" y="10" width="155" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="28" class="uml-heading" text-anchor="middle">«interface»</text>' +
  '<text x="87" y="46" class="uml-text" text-anchor="middle">Prototype</text>' +
  '<text x="87" y="62" class="uml-text" text-anchor="middle">clone(): Prototype</text>' +
  '<!-- ConcretePrototype 1 -->' +
  '<rect x="10" y="84" width="155" height="52" rx="6" fill="rgba(239,68,68,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="102" class="uml-text" text-anchor="middle">ConcretePrototypeA</text>' +
  '<text x="87" y="118" class="uml-text" text-anchor="middle">clone(): Prototype</text>' +
  '<!-- ConcretePrototype 2 -->' +
  '<rect x="10" y="154" width="155" height="52" rx="6" fill="rgba(239,68,68,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="87" y="172" class="uml-text" text-anchor="middle">ConcretePrototypeB</text>' +
  '<text x="87" y="188" class="uml-text" text-anchor="middle">clone(): Prototype</text>' +
  '<line x1="87" y1="68" x2="87" y2="84" class="uml-line"/>' +
  '<line x1="87" y1="136" x2="87" y2="154" class="uml-line"/>' +
  '<!-- Client -->' +
  '<rect x="290" y="60" width="155" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="367" y="80" class="uml-heading" text-anchor="middle">Client</text>' +
  '<text x="367" y="98" class="uml-text" text-anchor="middle">copy = original.clone()</text>' +
  '<!-- Register / PrototypeRegistry -->' +
  '<rect x="290" y="136" width="155" height="58" rx="6" fill="rgba(170,59,255,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="367" y="154" class="uml-heading" text-anchor="middle">PrototypeRegistry</text>' +
  '<text x="367" y="172" class="uml-text" text-anchor="middle">registry[name] = proto</text>' +
  '<text x="367" y="188" class="uml-text" text-anchor="middle">clone(name): Prototype</text>' +
  '<!-- Arrows -->' +
  '<path d="M165 113 C 225 113, 265 113, 290 89" fill="none" class="uml-line"/>' +
  '<path d="M165 183 C 240 183, 270 163, 290 164" fill="none" class="uml-line"/>' +
  '<path d="M367 118 C 367 128, 367 133, 367 136" fill="none" class="uml-line"/>' +
  '<text x="230" y="106" class="uml-heading" style="font-size:9px" text-anchor="middle">copy()</text>' +
  '<text x="230" y="176" class="uml-heading" style="font-size:9px" text-anchor="middle">copy()</text>' +
  '<text x="375" y="128" class="uml-heading" style="font-size:9px" text-anchor="middle">registers</text>' +
  '</svg>'

const codeSnippet1 = `// Deep clone a complex configuration object without re-fetching data
interface GameCharacter {
  name: string
  level: number
  inventory: Item[]
  skills: Skill[]
  clone(): GameCharacter
}

class GameCharacterImpl implements GameCharacter {
  constructor(
    public name: string,
    public level: number,
    public inventory: Item[],
    public skills: Skill[],
  ) {}

  clone(): GameCharacterImpl {
    // Deep-clone every nested object so mutations don't leak
    return new GameCharacterImpl(
      this.name,
      this.level,
      this.inventory.map(item => ({ ...item })),
      this.skills.map(skill => ({ ...skill })),
    )
  }
}`

const codeSnippet2 = `// Prototype Registry — name-based clone factory
class PrototypeRegistry {
  private prototypes = new Map<string, GameCharacter>()

  register(name: string, prototype: GameCharacter) {
    this.prototypes.set(name, prototype)
  }

  clone(name: string): GameCharacter {
    const prototype = this.prototypes.get(name)
    if (!prototype) throw new Error('Unknown prototype: ' + name)
    return prototype.clone()
  }
}

// Usage
const registry = new PrototypeRegistry()
const warriorTemplate = new GameCharacterImpl('Warrior', 1, [{ id: 1, name: 'Sword' }], [{ name: 'Slash' }])
registry.register('warrior', warriorTemplate)

// Each caller gets a fresh, isolated clone
const player1 = registry.clone('warrior')     // independent instance
const player2 = registry.clone('warrior')     // another independent instance`

export default function PrototypePage() {
  return (
    <PatternLayout
      title="Prototype"
      tagline="Create new objects by copying (cloning) an existing object — the prototype — rather than instantiating new ones from scratch."
      problemTitle="The Problem"
      problem="Some objects are expensive to instantiate — reading from disk, querying a remote API, running a heavy computation — yet only small parts differ between instances. Creating the full object anew for each tiny variation wastes time and resources. Rather than rebuilding from scratch, the Prototype pattern keeps a pre-initialised template object and produces new copies through its \u0060clone()\u0060 method. Callers receive a fully-formed duplicate instantly and then customise only the fields that differ, keeping object creation cost predictable and minimal. For deeply nested state a shallow copy is not enough — a deep clone is required."
      umlSvg={<div dangerouslySetInnerHTML={{ __html: uml }} />}
      code={[
        {
          label: 'prototype.ts — TypeScript',
          source: codeSnippet1,
        },
        {
          label: 'Prototype Registry',
          source: codeSnippet2,
        },
      ]}
      useCases={[
        {
          title: 'Game Character Instances',
          description:
            'Pre-load enemy archetypes and clone them per wave — avoids expensive stat recalculation for every spawned unit.',
        },
        {
          title: 'Document Templates in Office Suites',
          description:
            'Save a branded letterhead as a prototype step; each new letter is a clone of that template with copy replaced.',
        },
        {
          title: 'Undo / Redo in Graphics Editors',
          description:
            'Memento-like snapshots captured as clones of the canvas state make O(n) undo/redo in linear time.',
        },
        {
          title: 'Pre-seeded Cache Warming',
          description:
            'Clone a warmed-in-memory dataset object per test runner rather than fetching and deserialising the same seed data redundantly.',
        },
        {
          title: 'Spreadsheet / BI Report Instances',
          description:
            'Clone a heavily configured pivot-report as a Per-permissions blueprint so different users get their own copy to layer filters on.',
        },
      ]}
    />
  )
}
