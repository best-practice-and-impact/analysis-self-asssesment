import { surveyJson } from 'surveys/register_survey';
import { Serializer, FunctionFactory } from "survey-core";
import "survey-core/defaultV2.min.css";
import { useRouter } from 'next/navigation';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import Head from 'next/head';

Serializer.addProperty("itemvalue", "rate:number");

var getGradeRate = function(params) {
    //this.row property available in cells of dropdown and dynamic matrices questions
    var question = !!this.row
        ? this.row.getQuestionByColumnName(params[0])
        : null;
    //if we can't find a question inside the cell (by row and column name) then return
    if (!question) return 0;
    //get the selected item/choice
    var selItem = question.selectedItem;
    //return 0 if a user did not select the item yet.
    return !!selItem ? selItem.rate : 0;
};
//Register the custom function
FunctionFactory.Instance.register("getGradeRate", getGradeRate);

export default function Register() {
    const router = useRouter();
    const survey = new Model(surveyJson);
    survey.onComplete.add((sender, options) => {
    router.push("/");
    ;
    });

    return (
        <>
        <Head>
        <title>Register an analysis</title>
      </Head>
      <Survey model={survey} />
      </>
    )
}