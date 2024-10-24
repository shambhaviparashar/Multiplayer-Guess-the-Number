# Use Microsoft's official .NET SDK image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

# Build the app using the SDK
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["GameServer/GameServer.csproj", "GameServer/"]
RUN dotnet restore "GameServer/GameServer.csproj"
COPY . .
WORKDIR "/src/GameServer"
RUN dotnet build "GameServer.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GameServer.csproj" -c Release -o /app/publish

# Final stage, run the app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GameServer.dll"]
