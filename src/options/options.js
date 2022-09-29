export default  {
    reply_markup: JSON.stringify( {
        inline_keyboard: [
            [
                {
                    text: "Beginner",
                    callback_data: "Beginner"
                }

            ],
            [
                {
                    text: "Elementary",
                    callback_data: "Elementary"
                }

            ],
            [
                {
                    text: "Pre-Intermediate",
                    callback_data: "Pre_Intermediate"
                }

            ],
            [
                {
                    text: "Intermadiate",
                    callback_data: "Intermadiate"
                }

            ],
            [
                {
                    text: "Upper-Intermediate",
                    callback_data: "Upper_Intermediate"
                }

            ],
            [
                {
                    text: "Advanced",
                    callback_data: "Advanced"
                }

            ],
            [
                {
                    text: "IELTS",
                    callback_data: "IELTS"
                }

            ],
        ]
    })
}

