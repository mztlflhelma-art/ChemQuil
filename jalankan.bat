@echo off
echo ========================================================
echo   Menjalankan Server Pembelajaran Kimia ChemQuil...
echo ========================================================
echo.
echo Membuka browser di http://localhost:5173/ ...
start http://localhost:5173/
echo.
echo Menjalankan Vite Dev Server...
call npm.cmd run dev
pause
