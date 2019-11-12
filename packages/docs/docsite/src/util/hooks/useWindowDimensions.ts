/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { useState, useEffect } from 'react'

function getWindowDimensions(): { width: number; height: number } {
	if (typeof window !== 'undefined') {
		const { innerWidth: width, innerHeight: height } = window
		return {
			width,
			height,
		}
	} else {
		return { width: 1024, height: 768 }
	}
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
