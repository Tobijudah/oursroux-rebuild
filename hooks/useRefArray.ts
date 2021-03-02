import { createRef, RefObject, useEffect, useState } from "react";

export type RefHandle = {
	startAnimation: (direction: "up" | "down") => void;
};

const useRefArray = (length: number, type: "normal" | "handle") => {
	const [refs, setRefs] = useState([]);

	type === "handle"
		? (refs as RefObject<RefHandle>[])
		: (refs as RefObject<HTMLDivElement>[]);

	useEffect(() => {
		setRefs((refs) =>
			Array(length)
				.fill(0)
				.map((_, i) =>
					type === "handle"
						? refs[i] || createRef<RefHandle>()
						: refs[i] || createRef<HTMLDivElement>()
				)
		);
	}, [length]);
	return refs;
};

export default useRefArray;
