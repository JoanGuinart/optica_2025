# Script para alternar modo construcción

# Para activar modo construcción:
# $env:NEXT_PUBLIC_UNDER_CONSTRUCTION="true"; npm run dev

# Para desactivar modo construcción:
# $env:NEXT_PUBLIC_UNDER_CONSTRUCTION="false"; npm run dev

# Para producción normal:
# npm run build && npm start

Write-Host "=== Control de Modo Construcción ==="
Write-Host ""
Write-Host "Para ACTIVAR modo construcción:"
Write-Host '  $env:NEXT_PUBLIC_UNDER_CONSTRUCTION="true"; npm run dev'
Write-Host ""
Write-Host "Para DESACTIVAR modo construcción:"
Write-Host '  $env:NEXT_PUBLIC_UNDER_CONSTRUCTION="false"; npm run dev'
Write-Host ""
Write-Host "Estado actual:"
Write-Host "  NODE_ENV: $env:NODE_ENV"
Write-Host "  UNDER_CONSTRUCTION: $env:NEXT_PUBLIC_UNDER_CONSTRUCTION"