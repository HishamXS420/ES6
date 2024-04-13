// task - 1 : 
let data = {
    Sophia : {
            id: 33,
            study: [
                {
                    primary:
                        [
                            {school_name: "ABC Primary School"},
                            {locatin: "Pirers bagh"}

                        ]
                },
                {
                    secondary:
                    [
                        {school_name: "ABC Secondary school"},
                        {location: "St Lorence"}
                    ]

                }

            ]

    }
}

console.log(data.Sophia.study[1].secondary[1].location);