$lines = Get-Content 'D:\Akshat\Ecell\Temp\Ecell_Web\frontend\src\index.css'
$trimmed = $lines[0..816]
[System.IO.File]::WriteAllLines('D:\Akshat\Ecell\Temp\Ecell_Web\frontend\src\index.css', $trimmed)
