import Example from './example';

export default function globalSetup() {
	const example = new Example('world');

	console.log(example.hello());
}
