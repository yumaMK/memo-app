import { useState } from 'react';
import styled from "styled-components";

export const App = () => {
	const defaultMemos = [
		{id: 1,memo: 'a',},
		{id: 2,memo: 'b',},
		{id: 3,memo: 'c',}
	]
	const [memos, setMemos] = useState(defaultMemos);
	const [memo, setMemo] = useState('');

	const onChangeAddMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const add = e.target.value;
		setMemo(add);
	}

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		const addMemo = {id: Math.random(), memo: memo};
		setMemos((prevMemos) => [...prevMemos, addMemo]);
		setMemo('');
	}

	const deleteMemo = (index: number) => {
		const deletedMemos = memos.filter((v) => v.id !== index);
		setMemos(deletedMemos);
	}

	return (
		<div>
			<h1>簡単メモアプリ</h1>
			<form>
				<input value={memo} onChange={(e) => onChangeAddMemo(e)} />
				<button onClick={(e) => onSubmit(e)}>追加</button>
			</form>
			<Scontainer>
				<p>メモ一覧</p>
				<ul>
					{memos.map(memo => (
						<li key={memo.id}>
							{memo.memo}
							<button onClick={(e)=>deleteMemo(memo.id)}>削除</button>
						</li>
					))}
				</ul>
			</Scontainer>
		</div>
	)
}

const Scontainer = styled.div`
	border: solid 1px #aaa;
	margin: 10px;
	padding: 10px;
`