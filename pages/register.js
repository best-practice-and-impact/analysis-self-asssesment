import { surveyJson } from 'surveys/register_survey';
import  dynamic from 'next/dynamic';
import Head from 'next/head';

const RegisterSurveyComponent = dynamic(
    () => import("../components/RegisterSurveyComponent"),
    {
        ssr: false,
    }
);


export default function Register() {
    return (
        <>
            <Head>
                <title>Register a new analysis</title>
            </Head>
            <RegisterSurveyComponent surveyConfig={surveyJson}/>
        </>
    )
}