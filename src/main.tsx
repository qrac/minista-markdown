import type { ComponentType } from "react"
import type { Options as RemarkGfmOptions } from "remark-gfm"
import type { Options as RehypeHighlight } from "rehype-highlight"

import { createElement, Fragment } from "react"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import rehypeReact from "rehype-react"

type RehypeReactComponents = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:
    | keyof JSX.IntrinsicElements
    | ComponentType<JSX.IntrinsicElements[TagName]>
}>

type MarkdownComponentProps = {
  content?: string
  children?: string
  components?: RehypeReactComponents
  gfmOptions?: RemarkGfmOptions
  highlightOptions?: RehypeHighlight
}

export const Markdown = (props: MarkdownComponentProps) => {
  const md = props.content || props.children || ""
  const components = props.components || {}
  const gfmOptions = props.gfmOptions || {}
  const highlightOptions = props.highlightOptions || {}
  return (
    <>
      {
        unified()
          .use(remarkParse)
          .use(remarkGfm, gfmOptions)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeHighlight, highlightOptions)
          .use(rehypeRaw)
          .use(rehypeReact, {
            createElement: createElement,
            Fragment: Fragment,
            components: components,
          })
          .processSync(md).result
      }
    </>
  )
}
