# okoo
Okoo is a simple node based consistent filename checker



## Installation
```
npm install okoo
```


## Usage
Add okoo.config.json to your project root

then Add koo to your testing npm script like so:
```
"scripts": {
  ...
  "test" "okoo"
  ...
}
```

You may set the config path manually by using using `okoo --config ./someDir/okoo.config.json`
and you can set baseDir of the scan by using `okoo --baseDir ./src`

### Config file structure
```

languages
  filetype (like "js", "css" or "tsx")
    Some glob patterns // eg  "*.component.ts", "**/*.pipe.ts"
config (optional)
  baseDir (optional): string
ignore (optionalm not yet supported): string[]

```



### Example config:
```
okoo.config.json
{
    "languages": {
        "ts": [
            "*.component.ts",
            "*.module.ts",
            "*.pipe.ts",
            "index.ts"
        ],
        "js": [
            "/**/*.component.js",
            "/**/*.module.js",
            "/**/*.pipe.js",
            "index.js"
        ],
        "css": [
            "*.component.css"
        ]
    },
    "config": {
        "baseDir": "src/"
    }
}
```
