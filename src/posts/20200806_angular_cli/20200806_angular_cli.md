---
title: Angular CLI
author: Jason Oh
date: 2020-08-06 13:37:00
featuredImgUrl: https://images.unsplash.com/photo-1560237731-890b122a9b6c
featuredImgAlt: Mountains with a starry sky
featuredImage: 20200806_angular-cli.png
categories: 
- Programming
- Framework
tags:
- asp.net core
- angular cli
---

##### Learn how to set up Asp.net core project with Visual Studio Code

&nbsp;

In this post, we will look at how you can get started with Asp.Net Core, build an amaizng site with Visual Studio Code

---
&nbsp;

### Setting Up Environment ###

```shell
npm install -g @angular/cli
```

&nbsp;

### Creating a new project ###

```shell
ng new my-angular-app
```

```shell
cd my-angular-app
```

```shell
ng serve
```

&nbsp;


### Setting Up VS CODE for Angular Development ###
Open a project in Visual Studio Code

Install several extensions that you might need for the project

&nbsp; - Angular Snippets

&nbsp; - Angular Files

&nbsp; - Angular Language Service

&nbsp; - Angular2 - Switcher


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

