---
title: 마우스 커서 좌표 구하기
date: '2024-01-08'
tags: ['mouse', 'cursor', 'position', '마우스 커서 좌표']
draft: false
summary: To get position of mouse cursor.
---

마우스 커서 좌표 구하기(powershell, Chrome)

## powershell

code 💡

```code
Add-Type -AssemblyName System.Windows.Forms

while ($true) {
    $mousePosition = [System.Windows.Forms.Cursor]::Position

    $xCoord = $mousePosition.X
    $yCoord = $mousePosition.Y

    Clear-Host
    Write-Host "mouse cursor position x: $xCoord"
    Write-Host "mouse cursor position y: $yCoord"

    Start-Sleep -Milliseconds 100
}
```

## Chrome(개발자 모드)

code 💡

```code
var x, y; document.onmousemove=(e)=>{x=e.pageX;y=e.pageY;}

console.log(x, y);
```
