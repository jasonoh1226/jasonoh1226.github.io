---
title: Start Asp.Net Core with Visual Studio Code
author: Jason Oh
date: 2020-07-31 13:37:00
featuredImgUrl: https://images.unsplash.com/photo-1560237731-890b122a9b6c
featuredImgAlt: Mountains with a starry sky
featuredImage: 20200729_01_github-gatsby.png
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

&nbsp;

Install .net Core 3.1 SDK from this website

download from [https://dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet-core/3.1)


### Creating a new project ###

&nbsp;

```shell
dotnet new -l
```

This creates the Asp.Net Core WebApplication(MVC)
```shell
dotnet new mvc
```

### Installing extensions ###
Open a new project in Visual Studio Code
Install several extensions that you might need for the project
&nbsp;C# / C# Extensions / C# FixFormat / C# XML Document
&nbsp;.NET Core Extension / .NET Core Tools
&nbsp;NuGet Package Manager


### Testing the first app ###

```shell
dotnet build
```
```shell
dotnet run
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
```shell
Microsoft.EntityFrameworkCore.Design
```

&nbsp;


### Adding the Package Manager Console ###

&nbsp;dotnet tool install --global dotnet-ef
[https://stackoverflow.com/questions/57066856/dotnet-ef-not-found-in-net-core-3](https://stackoverflow.com/questions/57066856/dotnet-ef-not-found-in-net-core-3)
[https://stackoverflow.com/questions/41536603/visual-studio-code-entity-framework-core-add-migration-not-recognized](https://stackoverflow.com/questions/41536603/visual-studio-code-entity-framework-core-add-migration-not-recognized)

&nbsp;dotnet ef migrations add first
&nbsp;dotnet ef database update


### Issue ###
.Net Core MVC Page not Refreshing After Changes

[https://stackoverflow.com/questions/53639969/net-core-mvc-page-not-refreshing-after-changes/57637903#57637903](https://stackoverflow.com/questions/53639969/net-core-mvc-page-not-refreshing-after-changes/57637903#57637903)


&nbsp;Add Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation NuGet package to the project
&nbsp;Add the following in Startup.cs
&nbsp;&nbsp;&nbsp;services.AddControlloersWithViews().AddRazorRuntimeCompilation();

