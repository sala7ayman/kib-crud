db.createUser(
    {
        user: "KibUser",
        pwd: "KibPwd",
        roles: [{
            role:"readWrite",
            db:"kib-crud"
    }
        ]
    }
)