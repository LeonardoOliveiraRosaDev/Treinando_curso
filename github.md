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