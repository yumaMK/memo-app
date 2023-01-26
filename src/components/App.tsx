import { useState , FC, useCallback} from 'react';
import styled from "styled-components";
import { MemoList } from './MemoList';
import { useMemoList } from '../hooks/useMemoList';

export const App: FC = () => {
	const { memos, addTodo, deleteTodo} = useMemoList();
	const [memo, setMemo] = useState<string>("");

	const onChangeAddMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMemo(e.target.value);
	}

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		addTodo(memo);
		setMemo('');
	}

	const onClickDelete = useCallback((index: number) => {
		deleteTodo(index);
	}, [deleteTodo]);

	return (
		<div>
			<h1>簡単メモアプリ</h1>
			<input value={memo} onChange={onChangeAddMemo} />
			<SButton onClick={onSubmit}>追加</SButton>
			<MemoList memos={memos} onClickDelete={onClickDelete} />
		</div>
	);
};


const SButton = styled.button`
	margin-left: 16px;
`
