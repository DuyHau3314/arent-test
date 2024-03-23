import React from 'react';
import { useDiaries } from 'src/hooks/useDiaries';
import Row from 'src/layout/components/Row';
import Button from 'src/shared/button/Button';
import styled from 'styled-components';

// Data structure example
const diaryEntries = [
  {
    date: '2021.05.21',
    time: '23:25',
    title: 'MY DIARY',
    description: '私の日記の記録が一部表示されます。データストラクチャデータストラク...'
    // ... other properties ...
  }
  // ... more diary entries ...
];

// Styled components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
`;

const DiaryCard = styled.div`
  background: #fff; // White background for the card
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray500};
`;

const DiaryDate = styled.div`
  font-size: 0.85rem; // Smaller text for the date and time
  color: #616161; // Dark grey color
  margin-bottom: 0.5rem;
`;

const DiaryTitle = styled.h2`
  font-size: 1rem;
  color: #000; // Black color for title
  margin: 0 0 0.5rem 0;
`;

const DiaryDescription = styled.p`
  font-size: 0.9rem;
  color: #757575; // Medium grey for description
`;

// React component
const DiaryList = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useDiaries();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  return (
    <>
      <GridContainer>
        {data?.diaries.map((entry, index) => (
          <DiaryCard key={index}>
            <DiaryDate>{`${entry.date} ${entry.time}`}</DiaryDate>
            <DiaryTitle>{entry.title}</DiaryTitle>
            <DiaryDescription>{entry.description}</DiaryDescription>
          </DiaryCard>
        ))}
      </GridContainer>
      <Row centerX marginTop="1rem">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          label={isFetchingNextPage ? 'さらに読み込み中...' : hasNextPage ? 'コラムをもっと見る' : 'これ以上ロードするものはありません'}
        ></Button>
      </Row>
    </>
  );
};

export default DiaryList;
