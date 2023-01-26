import { useCallback, useState } from "react";

export const useMemoList = () => {
	const [memos, setMemos] = useState<string[]>([]);

	const addTodo = useCallback((memo: string) => {
		const newMemos = [...memos];
		newMemos.push(memo);
		setMemos(newMemos);
	}, [memos]);

	const deleteTodo = useCallback((index: number) => {
		const newMemos = [...memos];
		newMemos.splice(index, 1);
		setMemos(newMemos);
	}, [memos]);

	return { memos, addTodo, deleteTodo };
}