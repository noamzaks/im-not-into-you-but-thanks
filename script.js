if (!window.IM_NOT_INTO_YOU_IS_RUNNING) {
	window.IM_NOT_INTO_YOU_IS_RUNNING = true

	var CHAT_NAME_CLASS = "_3vPI2"
	var RESPONSES = ["Totally", "Sooooo true", "Holy shit", "Yeah"]

	var names = Array.from(document.getElementsByClassName(CHAT_NAME_CLASS)).map(element => {
		while (!element.title) {
			element = element.childNodes[0]
		}

		return element.title
	})

	/** Check chat every 10 seconds */
	window.setInterval(() => {
		const messageList = document.querySelector("[aria-label='Message list. Press right arrow key on a message to open message context menu.']")
		const lastMessage = messageList.childNodes[messageList.childNodes.length - 1]
		if (Array.from(lastMessage.classList).includes("message-in")) {
			/** Respond 5 seconds after seeing message */
			window.setTimeout(() => {
				const textField = Array.from(document.querySelectorAll("div")).filter(d => d.innerHTML === "Type a message")[0].parentElement.childNodes[1]
				textField.innerHTML = RESPONSES[Math.round(Math.random() * RESPONSES.length)]
				textField.dispatchEvent(new Event("input", { bubbles: true }))
				document.querySelector("[data-icon='send']").click()
			}, 5 * 1000)
		}
	}, 10 * 1000)

}
