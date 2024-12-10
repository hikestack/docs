import { HighlightedCode, Pre } from "codehike/code"
import { CopyButton } from "./CopyButton"
import { className } from "./annotations/classname"
import { focus } from "./annotations/focus"
import { lineNumbers } from "./annotations/line-numbers"

export function Code({ codeblock }: { codeblock: HighlightedCode }) {
    return (
        <div className="relative">
            <CopyButton text={codeblock.code} />
            <Pre
                code={codeblock}
                className="font-code border border-zinc-500/50 rounded py-2 px-4 my-4 overflow-x-auto"
                style={codeblock.style}
                handlers={[lineNumbers, className, focus]}
            />
        </div>
    )
}