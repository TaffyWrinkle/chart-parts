// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
declare var require: any
import { parseScene } from '@gog/scenegraph'
const data = require('../resources/airport_connections.json')

export const scenegraph = parseScene(data)
export const title = 'Airport Connections'
export const dimensions = {
	height: 700,
	width: 550,
	origin: [70, 19] as [number, number],
}
