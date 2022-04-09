# minista markdown

<p>
  <a aria-label="Made by QRANOKO" href="https://qranoko.jp">
    <img src="https://img.shields.io/badge/MADE%20BY%20QRANOKO-212121.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/minista-markdown">
    <img alt="" src="https://img.shields.io/npm/v/minista-markdown.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="License" href="https://github.com/qrac/minista-markdown/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/minista-markdown.svg?style=for-the-badge&labelColor=212121">
  </a>
</p>

## About

[minista](https://github.com/qrac/minista) 内の Markdown を簡単に HTML へ変換する React コンポーネント。

### Include

- remark-gfm
- rehype-highlight
- rehype-react

## How To Use

### [npm](https://www.npmjs.com/package/minista-markdown)

```bash
$ npm install --save-dev minista-markdown
```

```tsx
import { Markdown } from "minista-markdown"

const markdownText = `# test`

const H1Red = (props: any) => {
  return <h1 style={{ color: "red" }} {...props} />
}

const components = {
  h1: H1Red,
}

export const PageMarkdown = () => {
  return <Markdown content={markdownText} components={components} />
}

export default PageMarkdown

// => <h1 style="color:red">test</h1>
```

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
