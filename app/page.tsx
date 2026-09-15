'use client'

import { useMemo, useState } from 'react'

const process = [
  ['PROBLEM', 'Every engineering journey starts with a constraint.'],
  ['ANALYZE', 'Break complexity into something understandable.'],
  ['DESIGN', 'Turn reasoning into a system.'],
  ['BUILD', 'Ideas become something real.'],
  ['TEST', 'Reality becomes the benchmark.'],
  ['FAIL', 'Failure reveals what the design missed.'],
  ['LEARN', 'Every iteration improves the system.'],
  ['ITERATE', 'Engineering never truly stops.'],
]

const disciplines = [
  ['01', 'SOFTWARE', 'Turning logic into systems.', '∞ / 0'],
  ['02', 'MECHANICAL', 'Turning force into motion.', 'F = ma'],
  ['03', 'ELECTRICAL', 'Turning energy into possibility.', 'V = IR'],
  ['04', 'CIVIL', 'Turning blueprints into infrastructure.', 'σ = F/A'],
  ['05', 'AI & ROBOTICS', 'Turning intelligence into action.', '01 10'],
  ['06', 'AEROSPACE', 'Turning curiosity into flight.', 'L = ½ρv²S'],
]

const future = [
  ['01', 'AI', 'Machines that reason.'],
  ['02', 'ROBOTICS', 'Machines that move.'],
  ['03', 'QUANTUM', 'Machines that compute differently.'],
  ['04', 'SPACE', 'Machines that leave Earth.'],
  ['05', 'SUSTAINABILITY', 'Systems that outlast us.'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function SectionHeader({ eyebrow, title, id }: { eyebrow: string; title: React.ReactNode; id?: string }) {
  return <div id={id} className="section-header"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
}

function Toolbox() {
  const [voltage, setVoltage] = useState('12')
  const [current, setCurrent] = useState('2')
  const [resistance, setResistance] = useState('')
  const [unit, setUnit] = useState('m-km')
  const [unitValue, setUnitValue] = useState('1000')
  const [binary, setBinary] = useState('42')
  const ohms = useMemo(() => resistance ? `${(Number(voltage) / Number(current)).toFixed(2)} Ω` : `${(Number(voltage) * Number(current)).toFixed(2)} W`, [voltage, current, resistance])
  const converted = useMemo(() => { const n = Number(unitValue); if (unit === 'm-km') return `${(n / 1000).toFixed(3)} km`; if (unit === 'g-kg') return `${(n / 1000).toFixed(3)} kg`; if (unit === 'c-f') return `${((n * 9) / 5 + 32).toFixed(2)} °F`; return `${(n * 1000).toFixed(2)} m`; }, [unit, unitValue])
  const binaryOutput = useMemo(() => { const n = Number(binary); return Number.isNaN(n) ? '—' : binary.match(/^[01]+$/) && binary.length > 1 ? parseInt(binary, 2).toString() : Math.max(0, Math.floor(n)).toString(2) }, [binary])
  return <div className="tool-grid">
    <div className="tool-card"><div className="tool-title"><span>01</span><h3>OHM&apos;S LAW</h3></div><div className="formula">V = I × R</div><div className="fields"><label>VOLTAGE<input value={voltage} onChange={e => setVoltage(e.target.value)} inputMode="decimal" /></label><label>CURRENT<input value={current} onChange={e => setCurrent(e.target.value)} inputMode="decimal" /></label><label>RESISTANCE<input placeholder="auto" value={resistance} onChange={e => setResistance(e.target.value)} inputMode="decimal" /></label></div><div className="result">RESULT <strong>{ohms}</strong></div></div>
    <div className="tool-card"><div className="tool-title"><span>02</span><h3>UNIT CONVERTER</h3></div><div className="fields"><label>VALUE<input value={unitValue} onChange={e => setUnitValue(e.target.value)} inputMode="decimal" /></label><label>CONVERSION<select value={unit} onChange={e => setUnit(e.target.value)}><option value="m-km">METERS → KILOMETERS</option><option value="g-kg">GRAMS → KILOGRAMS</option><option value="c-f">CELSIUS → FAHRENHEIT</option><option value="km-m">KILOMETERS → METERS</option></select></label></div><div className="result">OUTPUT <strong>{converted}</strong></div></div>
    <div className="tool-card"><div className="tool-title"><span>03</span><h3>BINARY CONVERTER</h3></div><div className="binary-mark">01010</div><label>DECIMAL / BINARY<input value={binary} onChange={e => setBinary(e.target.value)} /></label><div className="result">OUTPUT <strong>{binaryOutput}</strong></div></div>
  </div>
}

function AskEngineer() {
  const [prompt, setPrompt] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return <div className="ask-wrap"><div className="ask-input"><textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="What are you trying to build?" rows={3} /><button onClick={() => setSubmitted(true)}>ANALYZE <Arrow /></button></div><div className="examples">{['Design a low-cost water monitoring system.', 'How could I reduce energy consumption?', 'Prototype a smart irrigation system.'].map(item => <button key={item} onClick={() => setPrompt(item)}>{item} <Arrow /></button>)}</div>{submitted && <div className="answer"><div className="answer-head"><span>ENGINEERING RESPONSE / 001</span><span>STATUS: READY</span></div><p>Start with the smallest useful version. Define the outcome, then make the constraints visible.</p><div className="answer-steps">{['DEFINE', 'CONSTRAINTS', 'DESIGN', 'BUILD', 'TEST'].map((step, i) => <div key={step}><span>0{i + 1}</span><strong>{step}</strong><small>{['Name the real problem.', 'Time, cost, energy, safety.', 'Choose the simplest system.', 'Make it observable.', 'Measure. Learn. Repeat.'][i]}</small></div>)}</div></div>}</div>
}

export default function Page() {
  const [active, setActive] = useState(0)
  const [menu, setMenu] = useState(false)
  return <main>
    <nav className={`nav ${menu ? 'open' : ''}`}><a className="brand" href="#top">ENGINEERED<span>.</span></a><div className="nav-links">{[['mind','THE MIND'],['everywhere','ENGINEERING'],['legacy','VISVESVARAYA'],['toolbox','TOOLBOX']].map(([href, label]) => <a key={href} href={`#${href}`} onClick={() => setMenu(false)}>{label}</a>)}</div><a className="nav-cta" href="#ask">ENTER EXPERIENCE <Arrow /></a><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? 'CLOSE' : 'MENU'}</button></nav>
    <section className="hero" id="top"><div className="grid-bg" /><div className="hero-meta"><span>ENGINEER&apos;S DAY / 15.09.2026</span><span>SYSTEM 01 / INDIA</span></div><div className="hero-copy"><p className="kicker">HUMAN × MACHINE / BUILD / TEST / ITERATE</p><h1>ENGINEERING<br />IS HOW<br /><em>THE IMPOSSIBLE</em><br />BECOMES REAL<span>.</span></h1><p className="hero-sub">We don&apos;t just solve problems.<br />We engineer possibilities.</p></div><a className="hero-scroll" href="#mind">EXPLORE THE MIND <span>↓</span></a><div className="coordinates">[ 28°36&apos;N / 77°13&apos;E ]<br />EST. 1861 — 2026</div></section>
    <section className="section mind" id="mind"><SectionHeader eyebrow="01 / HOW ENGINEERS THINK" title={<>THE ENGINEER&apos;S<br /><i>MIND</i></>} /><div className="process-layout"><div className="process-list">{process.map(([name], i) => <button className={active === i ? 'active' : ''} key={name} onClick={() => setActive(i)}><span>0{i + 1}</span><strong>{name}</strong><span className="process-arrow">↗</span></button>)}</div><div className="process-detail"><span className="detail-number">0{active + 1}</span><div className="detail-line" /><h3>{process[active][0]}</h3><p>{process[active][1]}</p><div className="loop-label">THE LOOP CONTINUES ↻</div></div></div></section>
    <section className="section everywhere" id="everywhere"><SectionHeader eyebrow="02 / THE DISCIPLINES" title={<>ENGINEERING<br /><i>IS EVERYWHERE.</i></>} /><div className="discipline-grid">{disciplines.map(([num, name, desc, stat]) => <article className="discipline" key={name}><span className="discipline-num">{num}</span><div className="discipline-icon" aria-hidden="true">+</div><h3>{name}</h3><p>{desc}</p><strong>{stat}</strong></article>)}</div></section>
    <section className="legacy section" id="legacy"><div className="legacy-art"><div className="portrait-type">M.<br />VISVES<br />VARAYA</div><span>1861 — 1962</span><div className="crosshair">⊕</div></div><div className="legacy-copy"><span className="eyebrow">03 / THE LEGACY</span><h2>BEFORE THE CODE,<br /><i>THERE WAS<br />THE ENGINEER.</i></h2><p>Sir M. Visvesvaraya&apos;s legacy represents a simple idea: engineering is ultimately about solving problems that matter.</p><div className="timeline">{[['1861','Born in Muddenahalli.'],['1912','Became Diwan of Mysore.'],['1955','Awarded the Bharat Ratna.']].map(([year, text]) => <div key={year}><strong>{year}</strong><span>{text}</span></div>)}</div><div className="legacy-tags"><span>ENGINEER.</span><span>BUILDER.</span><span>VISIONARY.</span></div></div></section>
    <section className="section toolbox" id="toolbox"><SectionHeader eyebrow="04 / USEFUL BY DESIGN" title={<>THE ENGINEER&apos;S<br /><i>TOOLBOX.</i></>} /><Toolbox /></section>
    <section className="section ask" id="ask"><SectionHeader eyebrow="05 / A THOUGHT PARTNER" title={<>ASK THE<br /><i>ENGINEER.</i></>} /><p className="ask-sub">Describe a problem. Think like an engineer.</p><AskEngineer /></section>
    <section className="section future" id="future"><SectionHeader eyebrow="06 / THE NEXT FRONTIER" title={<>WHAT ARE WE<br /><i>BUILDING NEXT?</i></>} /><div className="future-row">{future.map(([num, name, desc]) => <article key={name}><span>{num}</span><h3>{name}</h3><p>{desc}</p><Arrow /></article>)}</div></section>
    <section className="loop"><div className="loop-top"><span>07 / THE ENGINEER&apos;S LOOP</span><span>NO SHORTCUTS / NO ENDPOINT</span></div><h2>IDEA.<br />BUILD.<br /><i>FAIL.</i><br />LEARN.<br />REPEAT.</h2><div className="loop-statement"><span>FAILURE<br /><i>IS A FEATURE.</i></span><p>The best engineers don&apos;t avoid failure. They design systems that learn from it.</p></div></section>
    <footer><span className="eyebrow">ENGINEER&apos;S DAY / 15 SEPTEMBER</span><h2>BUILD<br /><i>WHAT&apos;S NEXT.</i></h2><a href="#top" className="footer-cta">START BUILDING <Arrow /></a><div className="footer-bottom"><strong>ENGINEERED<span>.</span></strong><span>A digital celebration of engineers.</span><span>ENGINEER&apos;S DAY • INDIA • 2026</span></div></footer>
  </main>
}
