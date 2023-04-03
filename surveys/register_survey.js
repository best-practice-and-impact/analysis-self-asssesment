export const surveyJson = {
    "title": "Register an analysis",
    "logoPosition": "right",
    "focusFirstQuestionAutomatic": false,
    "checkErrorsMode": "onComplete",
    "showTOC": true,
    "showQuestionNumbers": "off",
    "pages": [{
        "name": "Analysis details",
        "title": "Analysis details",
        "elements": [
            {
                "type": "dropdown",
                "name": "department",
                "title": "Department:",
                "isRequired": true,
                "choices": ["Office for National Statistics"],
                defaultValue: "Office for National Statistics",
                readOnly: true,
            },
            {
                "type": "dropdown",
                "name": "area",
                "title": "Business area:",
                "isRequired": true,
                "choices": ["Analytical Standards and Pipelines"]
            },
            {
                "type": "text",
                "name": "analysis",
                "title": "Analysis name:",
                "isRequired": true,
            },
        ],
    },

    {
        "name": "Analysis efficiency",
        "title": "Analysis efficiency before automation and good practice",
        description: "The amount of time and effort involed in running the analysis before automation or good practice is adopted.",
        elements: [
            {
                name: "annualRuns",
                title: "How many times per year is the analsis run?",
                isRequired: true,
                type: "text",
                inputType: "number",
                min: 1,
                max: 100
            },
            {
                type: "matrixdynamic",
                name: "timeList",
                title: "How much time does is take to run the analysis once?",
                rowCount: 1,
                minRowCount: 1,
                addRowText: "Add new item",
                columns: [
                    {
                        name: "rate",
                        title: "Grade",
                        isRequired: true,
                        cellType: "dropdown",
                        choices: [
                            { text: "EO", value: 1 },
                            { text: "HEO", value: 1 },
                            { text: "SEO", value: 1 },
                            { text: "G7", value: 1 },
                            { text: "G6", value: 1 }
                        ]
                    },
                    {
                        name: "FTE",
                        title: "Full time equivalent (FTE)",
                        isRequired: true,
                        cellType: "text",
                        inputType: "number",
                        min: 0,
                        max: 100
                    },
                    {
                        name: "multiplier",
                        title: "Period",
                        isRequired: true,
                        cellType: "dropdown",
                        choices: [
                            { text: "hour", value: 1 },
                            { text: "day", value: 7.4 },
                            { text: "week", value: 37 },
                            { text: "month", value: ((51 / 12) * 37) },
                            { text: "year", value: (252 * 7.4) }
                        ],
                    },
                    {
                        name: "total",
                        title: "Total",
                        cellType: "expression",
                        expression: "{row.FTE} * {row.rate} * {row.multiplier}",
                        displayStyle: "currency",
                        currency: "GBP",
                        totalType: "sum",
                        totalDisplayStyle: "currency",
                        totalFormat: "Total per run: {0}",
                        totalCurrency: "GBP"
                    }
                ]
            },
            {
                name: "annualTotal",
                type: "expression",
                title: "Appoximate total per year:",
                expression: "{timeList-total.total} * {annualRuns}",
                displayStyle: "currency",
                currency: "GBP",
              }
        ]
    }
    ]
};