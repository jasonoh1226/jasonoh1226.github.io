---
title: Start Asp.Net Core with Visual Studio Code
author: Jason Oh
date: 2020-07-31 13:37:00
featuredImgUrl: https://images.unsplash.com/photo-1560237731-890b122a9b6c
featuredImgAlt: Mountains with a starry sky
featuredImage: 20200731_01_vs2vscode.png
categories: 
- Programming
- Framework
tags:
- asp.net core
- visual studio code
---

##### Learn how to set up Asp.net core project with Visual Studio Code

&nbsp;

In this post, we will look at how you can get started with Asp.Net Core, build an amaizng site with Visual Studio Code

---
&nbsp;

### Setting Up Environment ###

Install .net Core 3.1 SDK from [https://dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet-core/3.1)

Install Visual Studio Cdoe from [https://code.visualstudio.com](https://code.visualstudio.com/download)


&nbsp;

### Creating a new project ###

```shell
dotnet new -l
```

To create an Asp.Net Core WebApplication(MVC)
```shell
dotnet new mvc -n yourProjectName
```

To create an Asp.Net Core Web API
```shell
dotnet new webapi -n yourProjectName
```

&nbsp;


### Setting Up VS CODE for C# Development ###
Open a project in Visual Studio Code

Install several extensions that you might need for the project

&nbsp; - C# / C# Extensions / C# FixFormat / C# XML Document

&nbsp; - .NET Core Extension / .NET Core Tools

&nbsp; - NuGet Package Manager

&nbsp;


### Testing the first app ###

```shell
dotnet build
```
```shell
dotnet run
```

&nbsp;


### Add Nuget Package Manager ###

This is to use DbContext

Open a command line in VS CODE

=> Command + Shift + p

=> Nuget Package Manager: Add Package

```shell
Microsoft.EntityFrameworkCore
```

```shell
Microsoft.EntityFrameworkCore.Sqlite
```

```shell
Microsoft.EntityFrameworkCore.Design
```

&nbsp;

### Install DotNet Entity Framework Tools ###

```shell
dotnet tool install --global dotnet-ef
```

To see commands
```shell
dotnet ef -h
```

[https://stackoverflow.com/questions/57066856/dotnet-ef-not-found-in-net-core-3](https://stackoverflow.com/questions/57066856/dotnet-ef-not-found-in-net-core-3)

[https://stackoverflow.com/questions/41536603/visual-studio-code-entity-framework-core-add-migration-not-recognized](https://stackoverflow.com/questions/41536603/visual-studio-code-entity-framework-core-add-migration-not-recognized)

```shell
dotnet ef migrations add first
```

```shell
dotnet ef database update
```

&nbsp;

### Running MySql for the Asp.Net Core ###

Install a package

[https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql)

```shell
npm i Pomelo.EntityFrameworkCore.MySql
```
```shell
npm i Microsoft.EntityFrameworkCore.Tools.DotNet
```


&nbsp;


### Adding the Package Manager Console ###







### Issue ###
.Net Core MVC Page not Refreshing After Changes

[https://stackoverflow.com/questions/53639969/net-core-mvc-page-not-refreshing-after-changes/57637903#57637903](https://stackoverflow.com/questions/53639969/net-core-mvc-page-not-refreshing-after-changes/57637903#57637903)


&nbsp;Add Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation NuGet package to the project
&nbsp;Add the following in Startup.cs
&nbsp;&nbsp;&nbsp;services.AddControlloersWithViews().AddRazorRuntimeCompilation();

