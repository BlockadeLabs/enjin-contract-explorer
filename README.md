# Enjin Contract Explorer - Test

This repository is a quick n' dirty script to ping the Enjin contract for information using calls.

## Setup

Copy `.env.sample` to `.env`:

```
cp -a .env.sample .env
```

And add your Infura key.

## Run

Modify the `index.js` contents to call the methods you want with the input you want. This only works for view / pure methods.

`node index.js`

The results will print out in the cli.
