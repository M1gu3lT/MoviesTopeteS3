FROM mcr.microsoft.com/dotnet/sdk:9.0 AS builder
WORKDIR /app
COPY MT.Api/MT.Api.csproj ./MT.Api/
RUN dotnet restore ./MT.Api/MT.Api.csproj
COPY MT.Api/. ./MT.Api/
RUN dotnet publish ./MT.Api/MT.Api.csproj -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=builder /app/out ./
EXPOSE 80
ENTRYPOINT ["dotnet", "MT.Api.dll"]