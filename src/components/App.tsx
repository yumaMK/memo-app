import { useState , FC, useCallback} from 'react';
import styled from "styled-components";
import { MemoList } from './MemoList';

export const App: FC = () => {
	const [memos, setMemos] = useState<string[]>([]);
	const [memo, setMemo] = useState<string>("");

	const onChangeAddMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMemo(e.target.value);
	}

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const newMemos = [...memos];
		newMemos.push(memo);
		setMemos(newMemos);
		setMemo('');
	}

	const onClickDelete = useCallback((index: number) => {
		const newMemos = [...memos];
		newMemos.splice(index, 1);
		setMemos(newMemos);
	}, [memos]);

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
