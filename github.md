…or create a new repository on the command line
echo "# treinando_curso" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LeonardoOliveiraRosaDev/treinando_curso.git
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/LeonardoOliveiraRosaDev/treinando_curso.git
git branch -M main
git push -u origin main


…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

Configurando git
git config user.email "leonardooliveirarosadev@hotmail.com"
git config user.name "Leonardo"

prepara os arquivos dentro da pasta para serem comitados
git add . 

Mudar Branch do Perfil
git branch -M "main"

Comitar
Primeiro Commit
git commit -m "Começando Site"
Enviou tudo 

linkar pasta local a pasta online do github
git remote add origin https://github.com/LeonardoOliveiraRosaDev/treinando_curso.git

push server para enviar os arquivos para pasto online do github
git puch -u origin main
depois se nao precisar usar assim ai vai normal
git push

para pegar 
git pull


