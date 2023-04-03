const topics = [
    {
        name: "Modular code",
        criteria: [
            {
                "value": "functions",
                "text": "Individual pieces of logic are written as functions. Classes are used if more appropriate."
            },
            {
                "value": "modules",
                "text": "Code is grouped in themed files (modules) and is packaged for easier use."
            },
            {
                "value": "heirarchy",
                "text": "Main analysis scripts import and run high level functions from the package."
            },
            {
                "value": "low coupling",
                "text": "Low level functions and classes carry out one specific task. As such, there is only one reason to change each function."
            }
        ]
    },
    {
        name: "Clean code",
        criteria: [
            {
                "value": "naming",
                "text": "Names used in the code are informative and concise."
            },
            {
                "value": "explicit",
                "text": "Names used in the code are explicit, rather than implicit."
            },
            {
                "value": "simple",
                "text": "Code logic is clear and avoids unnecessary complexity."
            },
            {
                "value": "style",
                "text": "Code follows a standard style, e.g. PEP8 for Python and Google or tidyverse for R."
            }
        ]
    }
]

function createPracticeMatrix(topic) {
    return {
        "name": topic.name,
        "title": topic.name,
        "elements": [
            {
                "type": "matrixdropdown",
                "name": topic.name,
                "title": "Does your analysis apply these good practices?",
                "columns": [
                    {
                        "name": "applied",
                        "cellType": "radiogroup",
                        "showInMultipleColumns": true,
                        "isRequired": true,
                        "choices": [
                            "No",
                            "Partially",
                            "Yes",
                            "Not applicable",
                        ],
                        defaultValue: "No",
                    },
                    {
                        "name": "experience",
                        "title": "Why is this practice not applicable?",
                        "cellType": "comment",
                        "visibleIf": "{row.applied} = 'Not applicable'",
                        "isRequired": true,
                    }],
                "rows": topic.criteria,
                "alternateRows": true,
                "isAllRowRequired": true
            },
        ]
    }
};

export const surveyJson = {
    "title": "Quality assurance assessment",
    "logoPosition": "right",
    "focusFirstQuestionAutomatic": false,
    "checkErrorsMode": "onComplete",
    "showTOC": true,
    "showQuestionNumbers": "off",
    "pages": topics.map(topic => createPracticeMatrix(topic)),
};