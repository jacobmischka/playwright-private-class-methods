export default class Example {
	#message: string;

	constructor(message: string) {
		this.#message = message;
	}

	get #helloMessage() {
		return `Hello, ${this.#message}!`;
	}

	hello() {
		return this.#helloMessage;
	}
}
