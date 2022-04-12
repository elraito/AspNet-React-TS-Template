# ASP NET Core 6 Template with React.JS using Typescript

This is essentially a cobbled together version of .net 6 template with React.JS as frontend. It is highly opinionated.

### Changes to the original dotnet new react template:

Bootstrap is removed giving option for other CSS Frameworks
React updated to version 18
Removed bunch of boilerplate. On the backend you need to clean up the standard WeatherForecast Controller and on the frontend you only need to clean App.tsx. The final bits left in are just to test if the template runs.

### Installation

- Clone the repository:
- Install template using dotnet new templating engine:

```
dotnet new --install ./
```

- If you wish uninstall the template, list the uninstallable templates and use the command from terminal output:

```
dotnet new --uninstall
```

### Usage

To make a new project:

```
dotnet new react-ts
```

The template defaults to Yarn as package manager. If you wish to use NPM instead use the -E flag

```
dotnet new react-ts -E
```
