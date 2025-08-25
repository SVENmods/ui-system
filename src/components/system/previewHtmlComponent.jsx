import { html_beautify } from 'js-beautify'
import ReactDOMServer from 'react-dom/server'
import { useMemo, memo } from 'react'

const PreviewHtmlComponent = memo(
	({ children, htmlCode, setHtmlCode, name }) => {
		const formattedHtml = useMemo(() => {
			if (htmlCode) return htmlCode

			const htmlRender = (code) => {
				return ReactDOMServer.renderToStaticMarkup(code)
			}
			return html_beautify(htmlRender(children), {
				// indent_size: 5,y
				// indent_char: ' ',
				// preserve_newlines: true,
			})
		}, [children, htmlCode])
		return (
			<>
				<div className=''>
					<div className='block opacity-60 text-sm text-base-content italic select-none pointer-none'>
						{name}
					</div>
					<textarea
						className='bg-base-100 p-2 rounded-[.75rem] focus-within:outline-0 w-full text-base-content resize-none'
						rows='7'
						onChange={(e) => setHtmlCode(e.target.value)}
						defaultValue={htmlCode ? htmlCode : formattedHtml}
					></textarea>
				</div>
			</>
		)
	}
)

export default PreviewHtmlComponent
