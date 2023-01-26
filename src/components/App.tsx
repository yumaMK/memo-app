import { useState , FC} from 'react';
import styled from "styled-components";

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

	const deleteMemo = (index: number) => {
		const newMemos = [...memos];
		newMemos.splice(index, 1);
		setMemos(newMemos);
	}

	return (
		<div>
			<h1>簡単メモアプリ</h1>
			<input value={memo} onChange={onChangeAddMemo} />
			<SButton onClick={onSubmit}>追加</SButton>
			<SContainer>
				<p>メモ一覧</p>
				<ul>
					{memos.map((memo, index) => (
						<li key={memo}>
							<SMemoWrapper>
								<p>{memo}</p>
								<SButton onClick={()=>deleteMemo(index)}>削除</SButton>
							</SMemoWrapper>
						</li>
					))}
				</ul>
			</SContainer>
		</div>
	);
};

const SContainer = styled.div`
	border: solid 1px #aaa;
	margin: 10px;
	padding: 10px;
`

const SButton = styled.button`
	margin-left: 16px;
`

const SMemoWrapper = styled.div`
	display: flex;
	align-items: center;
`