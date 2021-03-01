import { createRef, RefObject, useEffect, useState } from "react";

export type RefHandle = {
	startAnimation: (direction: "up" | "down") => void;
};

const useRefArray = (length: number) => {
	const [refs, setRefs] = useState([]);

	useEffect(() => {
		setRefs((refs) =>
			Array(length)
				.fill(0)
				.map((_, i) => refs[i] || createRef<RefHandle>())
		);
	}, [length]);

	return refs as RefObject<RefHandle>[];
};

export default useRefArray;
