# Challenge-de-code---OkVoiture-v1.1---Test-technique-
OkVoiture with Spring-Boot, React, REST API, MySQL, Docker

1-	créer une BD sous le nom "OkVoiture" pour stocker les informations sur les voitures et les locations et importer le fichier "OkVoiture.sql" Dans votre système de gestion de bases de données 
2-	Pour la partie Front-End :
Importer le dossier "front-end ReactJS" dans visual studio code ou votre IDE
Ouvrir un terminal dans le chemin de projet (press Ctrl+j in VsCode)
 Exécuter la commande : "npm install"
Après l'installation des dépendances vous pouvez exécuter le projet avec "npm start"	
Le projet va démarrer dans le port 3000
3-	Pour la partie Back-End :
Importer le projet dans Intelij ou SpringTool
Exécuter le projet, il va être démarré dans le port 8080
4-	Pour la partie de déploiement:
Tout d'abord, créez un fichier jar de votre application Spring Boot à l'aide de la commande 
‘ ./mvn clean package’
Executer application avec mvn
Ouvrir le terminal dans le chemin de projet 
Exécuter les  commandes : 
docker build -f Ok-voiture-docker.jar .
docker run -p 9090:8080 Ok-voiture-docker.jar
Pour créer et démarrer les conteneurs du projet, exécutez la commande suivante : 
docker-compose up

Enjoy with our Application :)
