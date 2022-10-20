# Configura una CLOUD - FUNCTION
- Autentificarse usando gcloud
  - Usando el comando `gcould auth login`
  - Te mandara a iniciar sesión con google

- Una vez accesado lista los projectos
  - `gcloud project list`
  - Este te dará la lista de los proyectos que tengas en la cuenta

- Para entrar a un proyecto dentro de la gcloud debes ejecutar el siguinete comando: `gcloud config set project [ID_PROJECT]` donde el id debe ser la primera columna del comando pasado.

- Para desplegar la funcion puedes ejecutar el siguiente comando `gcloud functions deploy TestingDevelop  --project=templatetestingdevelop --region=us-central1 --runtime=nodejs16 --source=. --entry-point=notification --trigger-http`
  - `project`: Es el ProjectID que aparece en la lista de proyectos
  - El nombre despues de la palabra deploy es el nombre que tendra la cloud function en GCP
  - `source`: Es el path relativo de donde se encuentra el codigo de la función.
  - `entry-point`: es el nombre del modulo que exportas en el archivo. (`exports.notification`)

-  Para correr la app localmente debes correr el siguiente comando `npx @google-cloud/functions-framework --target=notification` donde el tarjet es el modulo que se exporta.