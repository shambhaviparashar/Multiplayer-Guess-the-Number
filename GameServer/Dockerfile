# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish -c Release -o /app/out

# Use a lightweight ASP.NET runtime image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

# Set the environment to Development to enable Swagger in Docker
ENV ASPNETCORE_ENVIRONMENT=Development

# Set the URLs the application should listen to
ENV ASPNETCORE_URLS=http://*:80

# Expose the application port (default port for ASP.NET Core apps)
EXPOSE 80 

# Set the entry point for the application
ENTRYPOINT ["dotnet", "GameServer.dll"]