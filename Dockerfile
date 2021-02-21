#===============================================================================
# Build Arguments
#===============================================================================
ARG containerRepository=acrdevcos.azurecr.io
ARG PROJECT_NAME=C3WebExt.FullService.CarrierOnboarding

#===============================================================================
# Build Image
#===============================================================================
FROM ${containerRepository}/centiro-base-c3webext-build:latest AS build

ARG PROJECT_NAME
WORKDIR "/src/${PROJECT_NAME}/ClientApp"
COPY ["${PROJECT_NAME}/ClientApp/package.json", "."]
RUN npm install
WORKDIR /src
COPY . .
WORKDIR "/src/${PROJECT_NAME}"
RUN dotnet publish -v normal -c Release -o /src/publish

#===============================================================================
# Runtime Image
#===============================================================================
FROM ${containerRepository}/centiro-base-c3webext-runtime:latest AS final

ARG PROJECT_NAME
ENV PROJECT_DLL="${PROJECT_NAME}.dll"
WORKDIR /opt/app

COPY --from=build /src/publish .

USER ${USERNAME}
ENTRYPOINT dotnet $PROJECT_DLL
