# Instructions pour l'installation et le développement

## Configuration de votre environnement

La première étape comprend l'installation de python et de l'environnement virtuel.<br>Elle dépend de votre système d'exploitation.
Ci-dessous, vous trouverez les instructions pour Ubuntu (ou Mint) et MacOS.

<details>
 <summary>Ubuntu (or Mint)</summary>
 
 ```shell
 sudo apt-get install python3-dev python3-setuptools python3-pip
 sudo pip3 install virtualenv
 ```
 
</details>
<br>
<details>
 <summary>MacOS</summary>
 
 ```shell
 brew install python3
 pip3 install virtualenv 
 ```
 
</details>
<br>

## Get the code
```shell
git clone https://github.com/oxydevvv/Projet_GL.git
cd Projet_GL/backendDjango

```

## Initial setup
Maintenant que vous avez le code, nous devons installer les dépendances Python requises.

On va utiliser un virtualenv pour cette tâche. Cela nous permet d'installer des versions spécifiques des paquets pour l'application et d'éviter de tout casser sur notre système. Si vous ne savez pas ce qu'est un virtualenv, vous pouvez en apprendre plus [ici](https://virtualenv.pypa.io/en/latest/).


```shell
python3 -m venv ve
source ve/bin/activate
pip install -r requirements.txt
```

La dernière étape est de créer une base de données vide avec la structure correcte préalablement créée.
```shell
./manage.py migrate
```

## Lancer le serveur
Maintenant que vous êtes prêt, vous pouvez démarrer le serveur web Django:

```shell
./manage.py runserver
```

Vous pouvez maintenant voir le résultat sur [localhost:8000](http://localhost:8000)


## Au prochain démarrage

La prochaine fois que vous voulez travailler sur ce code, vous n'avez pas à répéter la liste complète de commandes que nous venons de taper. Vous n'avez qu'à activer le virtualenv (vous devez l'activer une fois pour chaque nouveau shell que vous ouvrez)

```shell
source ve/bin/activate
```

And then start the server
```shell
./manage.py runserver
```

## Create a admin user

You might need to create a user with admin rights on your local instance. Just run this command:

```shell
./manage.py createsuperuser
```

## Adding new requirements

To add a requirement, add it with no version constraint (or as little as needed)
to `requirements.in` (or `requirements-dev.in` or `requirements-prod.in` if it is needed only in prod or dev). Then run `pip-compile` (or `pip-compile requirements-dev.in` or `pip-compile requirements-prod.in`).

Never edit a `requirements-*.txt` file by hand !

In addition, we use [Dependabot](https://dependabot.com/) who will automatically submit Pull Requests to upgrade the python packages when a new version is available. This will only change the `requirement-*.txt`.