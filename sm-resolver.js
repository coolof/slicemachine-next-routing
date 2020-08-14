import { Slices as EssentialSlices } from 'essential-slices'

const __allSlices = {  ...EssentialSlices, }

const NotFound = ({ sliceName }) => {
	console.log(`[sm - resolver] component "${sliceName}" not found.`)
	return process.env.NODE_ENV !== 'production' ? <p>component "{sliceName}" not found.</p> : <div />
}

export default ({ sliceName, i }) => {
	return __allSlices[sliceName] ? __allSlices[sliceName] : () => <NotFound sliceName={sliceName} />
}

  