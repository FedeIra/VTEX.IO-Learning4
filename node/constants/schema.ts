export const schemaBody = {
    name: "usersExample",
    properties: {
        email: {
            type: "string",
            title: "user email",
            description: "email from user"
        },
        name: {
            type: "string",
            title: "user name",
            description: "name of user"
        }
    },
    "v-indexed": [
        "email"
    ],
    "v-default-fields": [
        "email",
        "name"
    ],
    "v-cache": false,
    "v-security": {
        allowGetAll: true,
        publicRead: [
          "id",
          "email",
          "name"
        ],
        publicWrite: [
            "email"
        ],
        publicFilter: [
            "name"
        ]
    },
    "v-inmediate-indexing": true,
}
