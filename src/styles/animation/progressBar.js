import { keyframes } from "styled-components"

const progressBar = keyframes`
	0% {
		left: 0;
		width: 0;
	}
	60% {
		left: 0;
		width: 100%;
	}
	61% {
		left: 0;
		width: 100%;
	}
	100% {
		left: 100%;
		width: 0;
	}`

export default progressBar
