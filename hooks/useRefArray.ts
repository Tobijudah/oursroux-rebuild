import { TitleRefHandles } from "../components/Title";
import { createRef, useEffect, useState } from "react";

const useRefArray = (length: number) => {
	const [refs, setRefs] = useState([]);

	useEffect(() => {
		setRefs((refs) =>
			Array(length)
				.fill(0)
				.map((_, i) => refs[i] || createRef<TitleRefHandles>())
		);
	}, [length]);

	return refs;
};

export default useRefArray;
