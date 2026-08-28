# Comandos de Git

# 1. git init
Descripción: Inicializa un repositorio Git nuevo en la carpeta actual.
Ejemplo de uso: **git init** — crea un repositorio Git vacío en la carpeta del proyecto para empezar a llevar el control de versiones.

# 2. git clone <url>
Descripción: Descarga una copia completa de un repositorio remoto.
Ejemplo de uso: **git clone https://github.com/usuario/proyecto.git** — descarga el proyecto completo desde GitHub a tu computadora.

# 3. git status
Descripción: Muestra el estado actual de los archivos (modificados, nuevos, en staging).
Ejemplo de uso: **git status** — muestra qué archivos han sido modificados o agregados desde el último commit.

# 4. git add <archivo>
Descripción: Agrega un archivo al área de staging para prepararlo antes del commit.
Ejemplo de uso: **git add Perfil.md** — prepara el archivo Perfil.md para que sea incluido en el próximo commit.

# 5. git commit -m "mensaje"
Descripción: Guarda los cambios del staging como un nuevo punto en el historial del proyecto.
Ejemplo de uso: **git commit -m "Agrega Perfil.md"** — guarda un nuevo commit con el mensaje indicando qué cambio se hizo.

# 6. git push
Descripción: Sube los commits locales al repositorio remoto.
Ejemplo de uso: **git push origin main** — sube los commits guardados localmente a la rama main del repositorio remoto.

# 7. git pull
Descripción: Descarga y combina los cambios del repositorio remoto con tu copia local.
Ejemplo de uso: **git pull origin main** — actualiza tu copia local con los últimos cambios subidos por otros al repositorio remoto.

# 8. git branch <nombre>
Descripción: Crea una nueva rama dentro del repositorio.
Ejemplo de uso: **git branch nueva-funcion** — crea una rama llamada "nueva-funcion" para trabajar sin afectar la rama principal.

# 9. git checkout <rama>
Descripción: Cambia de la rama actual a otra rama ya existente.
Ejemplo de uso: **git checkout desarrollo** — mueve tu espacio de trabajo a la rama llamada "desarrollo".

# 10. git checkout -b <rama>
Descripción: Crea una nueva rama y cambia a ella en un solo paso.
Ejemplo de uso: **git checkout -b login-feature** — crea la rama "login-feature" y te posiciona en ella inmediatamente.

# 11. git merge <rama>
Descripción: Combina los cambios de una rama con la rama en la que te encuentras actualmente.
Ejemplo de uso: **git merge login-feature** — integra los cambios de la rama "login-feature" a la rama actual (por ejemplo, main).

# 12. git log
Descripción: Muestra el historial de commits del repositorio, con autor, fecha y mensaje.
Ejemplo de uso: **git log** — revisa la lista completa de commits realizados en el proyecto hasta el momento.

# 13. git diff
Descripción: Muestra las diferencias línea por línea entre los archivos modificados y su última versión guardada.
Ejemplo de uso: **git diff Perfil.md** — muestra exactamente qué líneas cambiaron en el archivo Perfil.md antes de hacer commit.

# 14. git reset <archivo>
Descripción: Quita un archivo del área de staging sin eliminar los cambios hechos en él.
Ejemplo de uso: **git reset Comandos_Git.md** — deshace un `git add` hecho por error sobre ese archivo, sin perder el contenido.

# 15. git rm <archivo>
Descripción: Elimina un archivo tanto del repositorio como del sistema de archivos.
Ejemplo de uso: **git rm notas_temporales.txt** — borra el archivo del proyecto y registra su eliminación en el próximo commit.

# 16. git remote -v
Descripción: Muestra las URLs de los repositorios remotos conectados al proyecto local.
Ejemplo de uso: **git remote -v** — verifica a qué repositorio de GitHub está conectado tu proyecto local antes de hacer push.

# 17. git stash
Descripción: Guarda temporalmente los cambios no confirmados sin necesidad de hacer un commit.
Ejemplo de uso: **git stash** — guarda tu trabajo en progreso para cambiar de rama rápidamente sin perderlo.

# 18. git stash pop
Descripción: Recupera los últimos cambios guardados con `git stash` y los aplica de nuevo al área de trabajo.
Ejemplo de uso: **git stash pop** — restaura el trabajo que habías guardado temporalmente para seguir editándolo.

# 19. git fetch
Descripción: Descarga los cambios del repositorio remoto sin combinarlos automáticamente con tu rama local.
Ejemplo de uso: **git fetch origin** — revisa qué cambios nuevos existen en el remoto antes de decidir si los fusionas.

# 20. git config --global user.name "nombre"
Descripción: Configura el nombre de usuario que se asociará a tus commits en ese equipo.
Ejemplo de uso: **git config --global user.name "Edgar Gael"** — establece tu nombre para que aparezca como autor en cada commit que realices.
