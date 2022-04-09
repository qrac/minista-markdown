import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server.js"

import { Markdown } from "../src/main"

describe("Markdown", () => {
  it("Test: Markdown", () => {
    const md = "# test"

    const H1Red = (props: any) => {
      //console.log(props)
      return <h1 style={{ color: "red" }} {...props} />
    }
    const components = {
      h1: H1Red,
    }

    //const RenderdMarkdownJsx = <Markdown content={md} components={components} />
    const result = renderToStaticMarkup(
      <Markdown content={md} components={components} />
    )

    //console.log(RenderdMarkdownJsx)
    //console.log(result)
    expect(result).toEqual('<h1 style="color:red">test</h1>')
  })
})
