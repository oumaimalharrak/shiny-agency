import { Link, useParams } from "react-router-dom";

const Survey = () => {
  const { questionNumber } = useParams();
  const parsNumber = parseInt(questionNumber);
  const nextQtNumber = parsNumber +1;
  const prevQtNumber = parsNumber ===1 ? 1 : parsNumber -1
  return (
    <>
      <h1>Questionnaire</h1>
      <h1>Questionnaire {questionNumber}</h1>
      <Link to={`/survey/${prevQtNumber}`}>Precedent</Link>
      <Link to={`/survey/${nextQtNumber}`}>Suivant</Link>
      
    </>
  );
};

export default Survey;
