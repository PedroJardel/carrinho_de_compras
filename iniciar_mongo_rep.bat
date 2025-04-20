@echo off
:: Definindo a porta do MongoDB
set PORT=27017

:: Encontrar o PID do processo que está usando a porta
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%PORT%') do set PID=%%a

:: Se o PID for encontrado, matar o processo
if defined PID (
    echo O processo com PID %PID% esta usando a porta %PORT%, matando o processo...
    taskkill /PID %PID% /F
) else (
    echo Nenhum processo encontrado na porta %PORT%.
)

:: Rodar o MongoDB com Replica Set
echo Iniciando o MongoDB com Replica Set...
mongod --dbpath "E:\PEDRO\CODERHOUSE\BACK-END\carrinho_de_compras\database" --replSet rs0