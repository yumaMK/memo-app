

import styled from 'styled-components';

type props = {
	memos: {}[];
	deleteMemo: () => void;
}

export const Form = (props: props) => {
	const { memos, deleteMemo } = props;
	console.log(props);

	return (
		<SContainer>
			{/* <p>メモ一覧</p>
			<ul>
				{memos.map(memo => (
					<li key={memo.id}>
						{memo.memo}
						<button onClick={(e)=>deleteMemo(memo.id)}>削除</button>
					</li>
				))}
			</ul> */}
		</SContainer>
	)
}

const SContainer = styled.div`
	border: solid 1px #aaa;
	margin: 10px;
	padding: 10px;
`