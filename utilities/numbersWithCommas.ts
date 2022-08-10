// function to format numbers with commas
export function numberWithCommas(x: number | undefined) {
	return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
