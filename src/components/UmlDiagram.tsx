interface UmlDiagramProps {
  children: string
}

export default function UmlDiagram({ children }: UmlDiagramProps) {
  return (
    <div className="uml-diagram">
      <pre className="uml-code">
        <code>{children}</code>
      </pre>
    </div>
  )
}
