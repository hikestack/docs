"use client"

import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import { HighlightedCode, Pre, highlight } from "codehike/code"
import { Selectable, Selection, SelectionProvider } from "codehike/utils/selection"
import { useEffect, useState } from "react"
import { z } from "zod"
import { focus } from "../annotations/focus"
import { tokenTransitions } from "../annotations/token-transitions"
import Content from "./content.md"

const Schema = Block.extend({
    steps: z.array(Block.extend({ code: CodeBlock })),
});

function Code({ codeblock }: { codeblock: HighlightedCode }) {
    const [code, setCode] = useState<HighlightedCode>();

    useEffect(() => {
        (async () => {
            const highlighted = await highlight(codeblock, "one-dark-pro");
            setCode(highlighted);
        })();
    }, [codeblock?.code]);

    return (
        <div className="relative">
            {code && <Pre
                code={code}
                className="font-code border-zinc-500/50 rounded py-2 px-4 my-4 overflow-x-auto"
                style={code.style}
                handlers={[tokenTransitions, focus]}
            />}
        </div>
    )
}

export default function Spotlight() {
    const { steps } = parseRoot(Content, Schema);
    return (
        <SelectionProvider className="flex flex-col w-[850px] min-h-[850px]">
            <nav className="flex justify-center gap-4" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                {steps.map((step, i) => (
                    <Selectable
                        key={i.toString()}
                        index={i}
                        selectOn={["click"]}
                        className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 md:py-2 md:px-3 rounded dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 active cursor-pointer"
                    >
                        <span className="hs-tab-active:text-blue-600 block font-semibold text-sm text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">{step.children}</span>
                    </Selectable>
                ))}
            </nav>
            {/* @ts-ignore */}
            <Selection
                from={steps.map((step, i) => (
                    // @ts-ignore
                    <Code key={i.toString()} codeblock={step.code} />
                ))}
            />
        </SelectionProvider>
    );
};