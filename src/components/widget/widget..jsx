function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export async function widget() {
  const res = await loadScript('https://static.saleassist.ai/widgets/widget.js')
  res.EmbeddableWidget.mount({source_key: "c9d7bf77-02ad-4ff9-95dc-65e73c0d56dc", parentElementId: "saleassistEmbed", form_factor: "embed"});
  return(
    <div id="saleassistEmbed"></div>
  )
}