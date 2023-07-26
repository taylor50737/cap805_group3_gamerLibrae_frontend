import styled from '@emotion/styled';

const green = 'rgba(0, 255, 159, 1)';
const yellow = 'rgba(255, 245, 0, 1)';
const red = 'rgba(231, 77, 77, 1)';

const toZeroOpacity = (color) => color.substring(0, color.length - 2) + '0)';

const Cell1 = styled.div`
  background: linear-gradient(
    to bottom right,
    ${(props) => toZeroOpacity(props.color)} 50%,
    ${(props) => props.color}
  );
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Cell2 = styled.div`
  background: linear-gradient(
    to bottom left,
    ${(props) => toZeroOpacity(props.color)} 50%,
    ${(props) => props.color}
  );
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Cell3 = styled.div`
  background: linear-gradient(
    to top right,
    ${(props) => toZeroOpacity(props.color)} 50%,
    ${(props) => props.color}
  );
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Cell4 = styled.div`
  background: linear-gradient(
    to top left,
    ${(props) => toZeroOpacity(props.color)} 50%,
    ${(props) => props.color}
  );
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const Score = ({ score, size }) => {
  const ScoreContainer = styled.div`
    width: ${size}px;
    height: ${size}px;
    display: Grid;
    gap: 0px;
    position: relative;
  `;

  const ScoreText = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Chakra Petch';
    font-size: ${size / 2.5}px;
    font-weight: 800;
    color: white;
    text-shadow: 1px 1px 0 #000;
  `;

  let scoreColor = '';
  if (score > 70) {
    scoreColor = green;
  } else if (score > 40) {
    scoreColor = yellow;
  } else {
    scoreColor = red;
  }
  return (
    <ScoreContainer>
      <ScoreText>{score}</ScoreText>
      <Cell1 color={scoreColor} />
      <Cell2 color={scoreColor} />
      <Cell3 color={scoreColor} />
      <Cell4 color={scoreColor} />
    </ScoreContainer>
  );
};

export default Score;
