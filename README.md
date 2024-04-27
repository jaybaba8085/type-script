# Running TypeScript with tsc Commands

Here are some examples of how to compile and manage TypeScript files using the TypeScript Compiler (tsc).

```sh
# Compile TypeScript file
tsc filename.ts

# Compile TypeScript file with no emit on error
tsc --noEmitOnError filename.ts

# Watch for changes and compile TypeScript files
tsc --watch filename.ts

# Compile TypeScript file with custom compiler options
tsc --target ES6 --module CommonJS filename.ts

# Generate declaration files (.d.ts)
tsc --declaration filename.ts
```


# Running TypeScript Files

```sh
# Execute TypeScript file directly using ts-node
ts-node filename.ts

# Run compiled JavaScript file using Node.js
node filename.js
```
Note: `ts-node` is a command line tool that allows you to run TypeScript files (`*.ts`) directly from the command line

# Managing Dependencies

```sh
# Install TypeScript globally
npm install -g typescript

# Install ts-node globally
npm install -g ts-node
# Install Deno (no need for package manager)
```

# Bundling with Webpack

```sh
# Install webpack and webpack-cli
npm install -g webpack webpack-cli
```

