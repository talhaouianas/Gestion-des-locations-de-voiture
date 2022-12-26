# Challenge-de-code---OkVoiture-v1.1---Test-technique-
OkVoiture with Spring-Boot, React, REST API, MySQL, Docker

1-	créer une BD sous le nom "OkVoiture" pour stocker les informations sur les voitures et les locations et importer le fichier "OkVoiture.sql" Dans votre système de gestion de bases de données </br></br>
2-	Pour la partie Front-End :</br>
Importer le dossier "front-end ReactJS" dans visual studio code ou votre IDE</br>
Ouvrir un terminal dans le chemin de projet (press Ctrl+j in VsCode)</br>
 Exécuter la commande : "npm install"</br>
Après l'installation des dépendances vous pouvez exécuter le projet avec "npm start"	</br>
Le projet va démarrer dans le port 3000</br></br>
3-	Pour la partie Back-End :</br>
Importer le projet dans Intelij ou SpringTool</br>
Exécuter le projet, il va être démarré dans le port 8080</br></br>
4-	Pour la partie de déploiement:</br>
Tout d'abord, créez un fichier jar de votre application Spring Boot à l'aide de la commande </br>
‘ ./mvn clean package’
Executer application avec mvn</br>
Ouvrir le terminal dans le chemin de projet </br>
Exécuter les  commandes : </br>
docker build -f Ok-voiture-docker.jar . </br>
docker run -p 9090:8080 Ok-voiture-docker.jar </br>
Pour créer et démarrer les conteneurs du projet, exécutez la commande suivante : </br>
docker-compose up</br> 

Enjoy with our Application :)
