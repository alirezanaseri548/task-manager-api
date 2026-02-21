Write-Host ' TASK MANAGER API HEALTH CHECK' -ForegroundColor Cyan

$baseUrl = 'http://localhost:5000'

function Fail($msg) {
  Write-Host ' ' $msg -ForegroundColor Red
  exit 1
}

try {
  Invoke-RestMethod $baseUrl | Out-Null
  Write-Host ' API root OK'
} catch { Fail 'API not responding' }

$body = @{ email='health@test.com'; password='123456' } | ConvertTo-Json

try {
  Invoke-RestMethod $baseUrl/api/auth/register 
    -Method POST 
    -Body $body 
    -ContentType 'application/json' | Out-Null
} catch {}

try {
  $login = Invoke-RestMethod $baseUrl/api/auth/login 
    -Method POST 
    -Body $body 
    -ContentType 'application/json'
  Write-Host ' Auth OK'
} catch { Fail 'Auth failed' }

Write-Host ' HEALTH CHECK PASSED' -ForegroundColor Green
