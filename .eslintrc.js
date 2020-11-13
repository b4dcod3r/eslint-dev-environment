module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "extends": ["prettier", "airbnb-base"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "indent": [
            "error", 
            2
        ],
        "semi": [
            "error", 
            "always"
        ],
        "quotes": [
            "error", 
            "single"
            
        ]
    }
};
