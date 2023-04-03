import 'survey-core/defaultV2.min.css';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import { useRouter } from 'next/navigation';
import { surveyJson } from 'surveys/assess_survey';


export default function AssessSurveyComponent() {
    const router = useRouter();
    const survey = new Model(surveyJson);
    survey.onComplete.add((sender, options) => {
        router.push("/");
        ;
    });
    return (
        <>
            <Survey model={survey} />
        </>
    )
}