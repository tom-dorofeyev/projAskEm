var surveys =
    [
        {
            _id: "5c09",
            name: "Social Networks Survey",
            description: "A General Survey to better understand the user distribution between different social networks - and why people use them",
            tags: [
                "Social",
                "Facebook",
                "Media"
            ],
            isActive: true,
            createdBy: "u101",
            createdAt: "Thu Jul 11 2019 09:11:40 GMT+0300 (Israel Daylight Time)",
            endDate: "Thu Jul 13 2019 09:11:40 GMT+0300 (Israel Daylight Time)",
            userLiked: [
                {
                    _id: "u101",
                    name: "bobo",
                    img: ""
                }, {

                    _id: "u102",
                    name: "kabobo",
                    img: ""
                },
                {
                    _id: "u103",
                    name: "shlomo",
                    img: ""
                }
            ],
            quests:
                [
                    {
                        title: "What is your most used Social Network?",
                        type: "singleSelect",
                        opts: [
                            "Facebook",
                            "Twitter",
                            "LinkedIn"
                        ]
                    },
                    {
                        title: "What is your most used Bus Company?",
                        type: "MultSelect",
                        opts: [
                            "Egged",
                            "Dan",
                            "Kavim"
                        ]
                    }
                ]
        },
        {
            _id: "3b02",
            name: "Best Coffe Survey",
            description: "A General Survey to find the best coffe place in tel aviv",
            tags: [
                "Food",
                "City",
                "Social"
            ],
            isActive: true,
            createdBy: "u102",
            createdAt: "Thu Jul 11 2019 09:11:40 GMT+0300 (Israel Daylight Time)",
            endDate: "Thu Jul 13 2019 09:11:40 GMT+0300 (Israel Daylight Time)",
            userLiked: [
                {
                    _id: "u101",
                    name: "bobo",
                    img: ""
                }, {

                    _id: "u102",
                    name: "kabobo",
                    img: ""
                },
                {
                    _id: "u103",
                    name: "shlomo",
                    img: ""
                }
            ],
            quests:
                [
                    {
                        title: "What is your favorite coffee place ",
                        type: "singleSelect",
                        opts: [
                            "Aroma",
                            "Cofix",
                            "Landver"
                        ]
                    },
                    {
                        title: "With or without suger?",
                        type: "MultSelect",
                        opts: [
                            "With!",
                            "Without!",
                            "Socarzit please!"
                        ]
                    }
                ]
        }
    ]

export default {
    surveys
}