import Head from 'next/head';
import  dynamic from 'next/dynamic';

const AssessSurveyComponent = dynamic(
    () => import("../components/AssessSurveyComponent"),
    {
        ssr: false,
    }
);



export default function Assess() {
    return (
        <>
            <Head>
                <title>Carry out an assessment</title>
            </Head>
            <AssessSurveyComponent />
        </>
    )
}