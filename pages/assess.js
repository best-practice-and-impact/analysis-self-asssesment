import 'survey-core/defaultV2.min.css';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import { surveyJson } from 'surveys/assess_survey';
import { useRouter } from 'next/navigation';
import Head from 'next/head';



export default function Assess() {
    const router = useRouter();
    const survey = new Model(surveyJson);
    survey.onComplete.add((sender, options) => {
        router.push("/");
        ;
    });
    return (
        <>
        <Head>
        <title>Carry out an assessment</title>
      </Head>
      <Survey model={survey} />
      </>
    )
}