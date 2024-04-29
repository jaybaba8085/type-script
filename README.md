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

# Debugging TypeScript Code

Below is a list of commands and techniques commonly used for debugging TypeScript code:

1. **console.log()**
   - Description: Output messages to the console for debugging purposes.
   - Example:
     ```typescript
     console.log('Debug message');
     ```

2. **debugger**
   - Description: Pauses code execution at the line where the `debugger` statement is placed. Useful for setting breakpoints.
   - Example:
     ```typescript
     function exampleFunction() {
       let x = 10;
       debugger;
       console.log(x);
     }
     ```

3. **console.debug()**
   - Description: Logs a message to the console with the log level set to "debug".
   - Example:
     ```typescript
     console.debug('Debug message');
     ```

4. **console.error()**
   - Description: Logs an error message to the console.
   - Example:
     ```typescript
     console.error('An error occurred');
     ```

5. **console.warn()**
   - Description: Logs a warning message to the console.
   - Example:
     ```typescript
     console.warn('Warning: Something unexpected happened');
     ```

6. **Debugger in IDE**
   - Description: Many Integrated Development Environments (IDEs) provide built-in debuggers that allow you to set breakpoints, inspect variables, and step through code execution.
   - Examples: Visual Studio Code, WebStorm, IntelliJ IDEA, etc.

7. **TypeScript Source Maps**
   - Description: TypeScript compiler generates source maps (`*.map` files) that map compiled JavaScript code back to TypeScript code, allowing you to debug TypeScript directly in the browser or debugger.
   - Example:
     ```sh
     tsc --sourceMap filename.ts
     ```

8. **ts-node-dev with Inspector**
   - Description: Run TypeScript files with `ts-node-dev` and enable the inspector for debugging.
   - Example:
     ```sh
     ts-node-dev --inspect filename.ts
     ```

These commands and techniques can help you debug TypeScript code effectively, whether you're logging messages to the console, setting breakpoints, or using a debugger in your IDE.